import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, Disc3, ExternalLink } from 'lucide-react';

export default function MusicPlayer({
  youtubeId = "cbXBNkAt4X0"
}) {
  // Ambient romantic sound in background (default 25%)
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.25);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [currentTimeDisplay, setCurrentTimeDisplay] = useState(0);

  const playerRef = useRef(null);
  const isPlayingRef = useRef(false);
  const timerIntervalRef = useRef(null);

  // STRICT USER INTENT: ONLY becomes true when the user explicitly taps the OFF button
  // Always starts as false for fresh website visits so music plays automatically!
  const isUserExplicitlyPausedRef = useRef(false);

  // Sync isPlayingRef with state
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Helper to format time (e.g. 1:24)
  const formatSeconds = (sec) => {
    const s = Math.floor(sec || 0);
    const m = Math.floor(s / 60);
    const rem = s % 60;
    return `${m}:${rem < 10 ? '0' : ''}${rem}`;
  };

  // Start continuous position saving to localStorage so refresh resumes seamlessly
  const startPositionSaving = useCallback(() => {
    if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    timerIntervalRef.current = setInterval(() => {
      try {
        if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
          const t = playerRef.current.getCurrentTime();
          if (typeof t === 'number' && t > 0) {
            localStorage.setItem('wedding_song_time', t.toFixed(2));
            setCurrentTimeDisplay(t);
          }
        }
      } catch (e) {}
    }, 500);
  }, []);

  const stopPositionSaving = useCallback(() => {
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  }, []);

  // Play and seek to saved position
  const playFromSavedPosition = useCallback(() => {
    if (!playerRef.current) return;
    try {
      isUserExplicitlyPausedRef.current = false;

      const savedTimeStr = localStorage.getItem('wedding_song_time');
      const savedTime = parseFloat(savedTimeStr || '0');

      if (typeof playerRef.current.unMute === 'function') {
        playerRef.current.unMute();
      }

      if (typeof playerRef.current.setVolume === 'function') {
        playerRef.current.setVolume(isMuted ? 0 : Math.round(volume * 100));
      }

      // Resume from saved position on refresh instead of starting from beginning
      if (savedTime > 0 && typeof playerRef.current.seekTo === 'function') {
        playerRef.current.seekTo(savedTime, true);
        setCurrentTimeDisplay(savedTime);
      }

      if (typeof playerRef.current.playVideo === 'function') {
        playerRef.current.playVideo();
        setIsPlaying(true);
        startPositionSaving();
      }
    } catch (err) {
      console.warn("Could not play wedding song", err);
    }
  }, [isMuted, volume, startPositionSaving]);

  // Pause ONLY when user explicitly clicks the OFF button
  const pausePlayback = useCallback(() => {
    isUserExplicitlyPausedRef.current = true;

    if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
      try {
        if (typeof playerRef.current.getCurrentTime === 'function') {
          const t = playerRef.current.getCurrentTime();
          if (t > 0) localStorage.setItem('wedding_song_time', t.toFixed(2));
        }
        playerRef.current.pauseVideo();
      } catch (e) {}
    }
    setIsPlaying(false);
    stopPositionSaving();
  }, [stopPositionSaving]);

  // Load YouTube IFrame API and initialize player for "https://youtu.be/cbXBNkAt4X0"
  useEffect(() => {
    // Clear any old manual pause flag from previous sessions so every open attempts automatic play
    try {
      localStorage.removeItem('wedding_music_user_paused');
    } catch (e) {}
    isUserExplicitlyPausedRef.current = false;

    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    const onPlayerReady = (event) => {
      playerRef.current = event.target;
      setIsReady(true);

      // Set ambient volume
      event.target.setVolume(isMuted ? 0 : Math.round(volume * 100));

      // Retrieve saved timestamp across refresh
      const savedTimeStr = localStorage.getItem('wedding_song_time');
      const savedTime = parseFloat(savedTimeStr || '0');
      if (savedTime > 0 && typeof event.target.seekTo === 'function') {
        event.target.seekTo(savedTime, true);
        setCurrentTimeDisplay(savedTime);
      }

      // 1. Direct Autoplay attempt on page entry
      try {
        event.target.playVideo();
        setIsPlaying(true);
      } catch (e) {}

      // 2. Mobile & Strict Browser Autoplay Policy Fallback:
      // If the browser blocks zero-click unmuted playback on fresh load,
      // the very first interaction (tap, scroll, touch) ANYWHERE on the screen
      // immediately triggers unmuted audio playback, and then unbinds itself!
      const unlockAudioOnFirstInteraction = (e) => {
        // If clicked inside the music widget itself, let widget handler take it
        if (e.target && e.target.closest('#wedding-music-widget')) return;
        if (isUserExplicitlyPausedRef.current) return;

        if (playerRef.current && !isPlayingRef.current) {
          try {
            if (typeof playerRef.current.unMute === 'function') {
              playerRef.current.unMute();
            }
            if (typeof playerRef.current.setVolume === 'function') {
              playerRef.current.setVolume(isMuted ? 0 : Math.round(volume * 100));
            }
            const t = parseFloat(localStorage.getItem('wedding_song_time') || '0');
            if (t > 0 && typeof playerRef.current.seekTo === 'function') {
              playerRef.current.seekTo(t, true);
            }
            if (typeof playerRef.current.playVideo === 'function') {
              playerRef.current.playVideo();
              setIsPlaying(true);
            }
          } catch (err) {}
        }
      };

      window.addEventListener('touchstart', unlockAudioOnFirstInteraction, { passive: true, once: true });
      window.addEventListener('pointerdown', unlockAudioOnFirstInteraction, { passive: true, once: true });
      window.addEventListener('click', unlockAudioOnFirstInteraction, { once: true });
      window.addEventListener('scroll', unlockAudioOnFirstInteraction, { passive: true, once: true });
    };

    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.PLAYING) {
        setIsPlaying(true);
        startPositionSaving();
      } else if (event.data === window.YT.PlayerState.PAUSED) {
        // STRICT USER CONTROL: ONLY when user clicked the OFF button does it stay paused!
        // If the user touched the screen, swiped, or browser shifted, KEEP PLAYING!
        if (!isUserExplicitlyPausedRef.current) {
          // Unintentional interruption / mobile touch / swipe
          // Auto-resume immediately!
          setIsPlaying(true);
          setTimeout(() => {
            if (!isUserExplicitlyPausedRef.current) {
              try {
                if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
                  playerRef.current.playVideo();
                }
              } catch (e) {}
            }
          }, 80);
        } else {
          // Deliberate user pause via OFF button
          setIsPlaying(false);
          stopPositionSaving();
        }
      } else if (event.data === window.YT.PlayerState.ENDED) {
        // Loop song seamlessly back to start
        localStorage.setItem('wedding_song_time', '0');
        event.target.seekTo(0, true);
        event.target.playVideo();
      }
    };

    const createPlayer = () => {
      try {
        new window.YT.Player('yt-single-audio-player', {
          height: '200',
          width: '200',
          videoId: youtubeId,
          playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            enablejsapi: 1,
            fs: 0,
            loop: 1,
            playlist: youtubeId,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            origin: window.location.origin
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
        });
      } catch (e) {
        console.warn("YouTube player init error", e);
      }
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    // Save exact position before page unload or refresh
    const handleBeforeUnload = () => {
      try {
        if (playerRef.current && typeof playerRef.current.getCurrentTime === 'function') {
          const t = playerRef.current.getCurrentTime();
          if (t > 0) localStorage.setItem('wedding_song_time', t.toFixed(2));
        }
      } catch (e) {}
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pagehide', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pagehide', handleBeforeUnload);
      stopPositionSaving();
    };
  }, [youtubeId, isMuted, volume, startPositionSaving, stopPositionSaving]);

  // Background Watchdog: Continuously checks if music was interrupted without user clicking off, revives it automatically
  useEffect(() => {
    const watchdog = setInterval(() => {
      if (!isUserExplicitlyPausedRef.current && playerRef.current && typeof playerRef.current.getPlayerState === 'function') {
        try {
          const state = playerRef.current.getPlayerState();
          // State 2 = PAUSED, 5 = CUED, -1 = UNSTARTED
          if (state === 2 || state === 5) {
            playerRef.current.playVideo();
            setIsPlaying(true);
          }
        } catch (e) {}
      }
    }, 1000);

    return () => clearInterval(watchdog);
  }, []);

  // Resume when returning to tab if not user-paused
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        if (!isUserExplicitlyPausedRef.current && playerRef.current && typeof playerRef.current.playVideo === 'function') {
          try {
            playerRef.current.playVideo();
            setIsPlaying(true);
          } catch (e) {}
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Toggle Play / Pause exclusively via user clicking the floating control button
  const togglePlay = (e) => {
    e.stopPropagation();
    if (isPlaying) {
      pausePlayback();
    } else {
      isUserExplicitlyPausedRef.current = false;
      playFromSavedPosition();
    }
  };

  // Sync volume slider with YouTube player (0 to 100)
  useEffect(() => {
    if (playerRef.current && typeof playerRef.current.setVolume === 'function') {
      try {
        playerRef.current.setVolume(isMuted ? 0 : Math.round(volume * 100));
      } catch (e) {}
    }
  }, [volume, isMuted]);

  // Toggle Mute
  const toggleMute = (e) => {
    e.stopPropagation();
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (playerRef.current) {
      try {
        if (nextMute && typeof playerRef.current.mute === 'function') {
          playerRef.current.mute();
        } else if (typeof playerRef.current.unMute === 'function') {
          playerRef.current.unMute();
        }
      } catch (e) {}
    }
  };

  return (
    <aside
      id="wedding-music-widget"
      aria-label="Background Wedding Music Controls"
      className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 flex items-center select-none"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Active Viewport YouTube IFrame Target (Prevents Chrome from throttling hidden offscreen media) */}
      <div 
        id="yt-single-audio-player" 
        className="fixed bottom-0 right-0 w-[200px] h-[200px] opacity-[0.001] pointer-events-none z-[-1] overflow-hidden" 
      />

      {/* Expanded Control Box */}
      {isExpanded && (
        <div className="mr-2 sm:mr-3 px-3 py-2 bg-brown-dark/95 backdrop-blur-md rounded-2xl border border-gold/40 shadow-xl flex items-center gap-2.5 animate-fade-in">
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-cream font-serif-luxury font-medium tracking-wider whitespace-nowrap">
                Romantic Wedding Theme
              </span>
              <a
                href={`https://youtu.be/${youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-light/70 hover:text-gold"
                title="Watch on YouTube"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <span className="text-[9px] text-gold-light/80 font-sans tracking-wide">
              {currentTimeDisplay > 0 ? `Playing at ${formatSeconds(currentTimeDisplay)} · Soft Sound` : 'Romantic Wedding Melodies'}
            </span>
          </div>

          <div className="flex items-center gap-1.5 ml-1">
            <button
              onClick={toggleMute}
              className="text-gold-light hover:text-white transition-colors p-1"
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                e.stopPropagation();
                setVolume(parseFloat(e.target.value));
                if (isMuted) setIsMuted(false);
              }}
              className="w-14 sm:w-16 h-1 bg-white/20 accent-gold rounded-lg appearance-none cursor-pointer"
              title={`Volume: ${Math.round(volume * 100)}%`}
            />
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <div className="relative group flex items-center">
        {/* Subtle Hint Pill if waiting for first gesture */}
        {!isPlaying && (
          <div 
            onClick={togglePlay}
            className="mr-2 px-3 py-1 rounded-full bg-gold/90 text-brown-deep text-[10px] font-sans font-semibold tracking-wider uppercase shadow-gold-glow animate-pulse cursor-pointer hidden sm:block whitespace-nowrap"
          >
            🎵 Tap for Music
          </div>
        )}

        <button
          onClick={togglePlay}
          onMouseEnter={() => setIsExpanded(true)}
          className={`w-11 h-11 sm:w-13 sm:h-13 rounded-full flex items-center justify-center transition-all duration-300 shadow-book ${
            isPlaying
              ? 'bg-gradient-to-tr from-gold-dark via-gold to-gold-light text-brown border-2 border-white/60 animate-pulse-glow'
              : 'bg-brown-dark text-gold border border-gold/50 hover:border-gold animate-bounce'
          }`}
          title={isPlaying ? "Turn Off Music" : "Turn On Music"}
        >
          {isPlaying ? (
            <div className="relative flex items-center justify-center">
              <Disc3 className="w-5 h-5 sm:w-6 sm:h-6 animate-spin-slow" />
              <Pause className="w-3 h-3 absolute text-brown" />
            </div>
          ) : (
            <div className="relative flex items-center justify-center">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 text-gold-light ml-0.5 group-hover:scale-110 transition-transform" />
            </div>
          )}
        </button>

        {isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3 pointer-events-none">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-light opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
          </span>
        )}
      </div>
    </aside>
  );
}