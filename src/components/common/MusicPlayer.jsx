import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, Disc3, ExternalLink, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MusicPlayer({
  youtubeId = "cbXBNkAt4X0"
}) {
  // Ambient romantic sound in background (default 28%)
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.28);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [currentTimeDisplay, setCurrentTimeDisplay] = useState(0);

  // Royal Welcome Entrance Screen - shown on fresh entry to guarantee user gesture for audio
  const [hasEntered, setHasEntered] = useState(false);

  const playerRef = useRef(null);
  const isPlayingRef = useRef(false);
  const timerIntervalRef = useRef(null);
  const pendingPlayRef = useRef(false);

  // STRICT USER INTENT: ONLY becomes true when the user deliberately clicks the OFF/PAUSE button
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

  // Start continuous position saving so page refresh resumes seamlessly
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
    if (!playerRef.current) {
      pendingPlayRef.current = true;
      return;
    }
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

  // User enters celebration by clicking "Enter Celebration" or tapping anywhere on entrance screen
  const handleEnterCelebration = useCallback(() => {
    setHasEntered(true);
    isUserExplicitlyPausedRef.current = false;
    pendingPlayRef.current = true;

    if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
      try {
        if (typeof playerRef.current.unMute === 'function') {
          playerRef.current.unMute();
        }
        if (typeof playerRef.current.setVolume === 'function') {
          playerRef.current.setVolume(Math.round(volume * 100));
        }

        const savedTimeStr = localStorage.getItem('wedding_song_time');
        const savedTime = parseFloat(savedTimeStr || '0');
        if (savedTime > 0 && typeof playerRef.current.seekTo === 'function') {
          playerRef.current.seekTo(savedTime, true);
        }

        playerRef.current.playVideo();
        setIsPlaying(true);
        startPositionSaving();
      } catch (e) {
        console.warn("Direct play error on enter", e);
      }
    }
  }, [volume, startPositionSaving]);

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

      // Set gentle ambient volume and un-mute
      try {
        event.target.unMute();
        event.target.setVolume(isMuted ? 0 : Math.round(volume * 100));
      } catch (e) {}

      // Retrieve saved timestamp across refresh
      const savedTimeStr = localStorage.getItem('wedding_song_time');
      const savedTime = parseFloat(savedTimeStr || '0');
      if (savedTime > 0 && typeof event.target.seekTo === 'function') {
        event.target.seekTo(savedTime, true);
        setCurrentTimeDisplay(savedTime);
      }

      // 1. Direct Autoplay attempt on page entry
      if (!isUserExplicitlyPausedRef.current) {
        try {
          event.target.playVideo();
        } catch (e) {}

        // Check if browser permitted autoplay immediately
        setTimeout(() => {
          try {
            if (event.target.getPlayerState() === 1) {
              setIsPlaying(true);
              setHasEntered(true);
            }
          } catch (e) {}
        }, 350);
      }

      // 2. If user already tapped "Enter" before player was ready, start playing now
      if (pendingPlayRef.current && !isUserExplicitlyPausedRef.current) {
        try {
          event.target.playVideo();
          setIsPlaying(true);
          startPositionSaving();
        } catch (e) {}
      }
    };

    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.PLAYING) {
        setIsPlaying(true);
        setHasEntered(true);
        startPositionSaving();
      } else if (event.data === window.YT.PlayerState.PAUSED) {
        // STRICT USER CONTROL: ONLY when user clicked the OFF button does it stay paused!
        // If the user touched the screen, swiped, or browser shifted, KEEP PLAYING!
        if (!isUserExplicitlyPausedRef.current) {
          setIsPlaying(true);
          setTimeout(() => {
            if (!isUserExplicitlyPausedRef.current && playerRef.current) {
              try {
                if (typeof playerRef.current.playVideo === 'function') {
                  playerRef.current.playVideo();
                }
              } catch (e) {}
            }
          }, 80);
        } else {
          setIsPlaying(false);
          stopPositionSaving();
        }
      } else if (event.data === window.YT.PlayerState.ENDED) {
        // Continuous loop of the song
        localStorage.setItem('wedding_song_time', '0');
        event.target.seekTo(0, true);
        event.target.playVideo();
      }
    };

    const createPlayer = () => {
      if (playerRef.current) return;
      try {
        new window.YT.Player('yt-single-audio-player', {
          height: '180',
          width: '240',
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
            rel: 0
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
      const prevHandler = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof prevHandler === 'function') prevHandler();
        createPlayer();
      };
    }

    // Polling fallback in case API loaded before event listener attached
    const checkYT = setInterval(() => {
      if (window.YT && window.YT.Player && !playerRef.current) {
        clearInterval(checkYT);
        createPlayer();
      }
    }, 250);

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
      clearInterval(checkYT);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pagehide', handleBeforeUnload);
      stopPositionSaving();
    };
  }, [youtubeId, isMuted, volume, startPositionSaving, stopPositionSaving]);

  // Global Interaction Watcher:
  // On mobile or desktop, any touch/scroll/click initiates music if not already playing,
  // but CANNOT pause or turn off music!
  useEffect(() => {
    const handleGlobalInteraction = (e) => {
      if (isUserExplicitlyPausedRef.current) return;
      if (e.target && e.target.closest && e.target.closest('#wedding-music-widget')) return;

      if (playerRef.current && typeof playerRef.current.getPlayerState === 'function') {
        try {
          const state = playerRef.current.getPlayerState();
          // If not currently playing (state !== 1), start playing!
          if (state !== 1) {
            playerRef.current.unMute();
            playerRef.current.setVolume(Math.round(volume * 100));
            playerRef.current.playVideo();
            setIsPlaying(true);
            setHasEntered(true);
          }
        } catch (err) {}
      }
    };

    window.addEventListener('click', handleGlobalInteraction, { passive: true });
    window.addEventListener('touchstart', handleGlobalInteraction, { passive: true });
    window.addEventListener('scroll', handleGlobalInteraction, { passive: true });

    return () => {
      window.removeEventListener('click', handleGlobalInteraction);
      window.removeEventListener('touchstart', handleGlobalInteraction);
      window.removeEventListener('scroll', handleGlobalInteraction);
    };
  }, [volume]);

  // Background Watchdog: Continuously checks if music was interrupted without user clicking off, revives it automatically
  useEffect(() => {
    const watchdog = setInterval(() => {
      if (!isUserExplicitlyPausedRef.current && playerRef.current && typeof playerRef.current.getPlayerState === 'function') {
        try {
          const state = playerRef.current.getPlayerState();
          // State 2 = PAUSED, 5 = CUED
          if (state === 2 || state === 5) {
            playerRef.current.playVideo();
            setIsPlaying(true);
          }
        } catch (e) {}
      }
    }, 1200);

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
    <>
      {/* 1. ROYAL WELCOME ENTRANCE OVERLAY
          Guarantees browser-compliant unmuted audio playback on user entrance */}
      <AnimatePresence>
        {!hasEntered && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#090807]/95 backdrop-blur-2xl p-4 sm:p-6 select-none overflow-hidden cursor-pointer"
            onClick={handleEnterCelebration}
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/15 blur-[120px]" />
              <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-amber-600/10 blur-[100px]" />
            </div>

            {/* Royal Invitation Card */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 1.02 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative max-w-lg w-full bg-gradient-to-b from-[#1E1914] via-[#14110E] to-[#0D0B09] border-2 border-gold/40 rounded-3xl p-7 sm:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.85),0_0_50px_rgba(182,154,101,0.25)] text-center flex flex-col items-center justify-center space-y-6"
              onClick={(e) => {
                e.stopPropagation();
                handleEnterCelebration();
              }}
            >
              {/* Ornate Corner Accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold/70 rounded-tl-lg pointer-events-none" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold/70 rounded-tr-lg pointer-events-none" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold/70 rounded-bl-lg pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold/70 rounded-br-lg pointer-events-none" />

              {/* Auspicious Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold-light text-xs font-serif tracking-[0.25em] uppercase">
                <Sparkles className="w-3.5 h-3.5 text-gold animate-spin-slow" />
                <span>Wedding Celebration</span>
                <Sparkles className="w-3.5 h-3.5 text-gold animate-spin-slow" />
              </div>

              {/* Couple Names */}
              <div className="space-y-2">
                <p className="text-gold-light/70 text-xs sm:text-sm font-serif tracking-widest uppercase">
                  Together with their families
                </p>
                <h1 className="text-4xl sm:text-5xl font-serif-luxury font-bold bg-gradient-to-r from-gold-light via-gold to-gold-bright bg-clip-text text-transparent tracking-wide leading-tight">
                  Priyanka & Reon
                </h1>
                <p className="text-cream/80 text-xs sm:text-sm font-serif tracking-wider italic">
                  Cordially invite you to celebrate the beginning of their journey
                </p>
              </div>

              {/* Date & Venue Pill */}
              <div className="py-2.5 px-5 rounded-2xl bg-white/[0.03] border border-gold/20 flex flex-col items-center gap-1 text-xs text-gold-light/90 font-serif">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
                  <span className="font-semibold tracking-wider">25 – 27 November 2026</span>
                </div>
                <span className="text-[11px] text-cream/70 tracking-wide">
                  Ashoka Lodge, Malancha Road, Kharagpur
                </span>
              </div>

              {/* Big Interactive "Enter Celebration" Button */}
              <div className="pt-2 w-full flex flex-col items-center gap-3">
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-brown-deep font-serif font-bold text-sm sm:text-base tracking-widest uppercase shadow-[0_0_35px_rgba(212,175,55,0.45)] hover:shadow-[0_0_55px_rgba(212,175,55,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <Disc3 className="w-5 h-5 text-brown-deep animate-spin-slow group-hover:rotate-180 transition-transform duration-700" />
                  <span>Enter Celebration</span>
                  <Music className="w-4 h-4 text-brown-deep animate-bounce" />
                </button>

                <p className="text-[11px] text-gold-light/70 font-sans tracking-wide">
                  🎵 Tap anywhere to open invitation & play background music
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. ACTIVE VIEWPORT YOUTUBE TARGET
          Placed in active viewport with subtle opacity to prevent Chromium from throttling hidden background audio */}
      <div 
        id="yt-single-audio-player" 
        className="fixed bottom-0 right-0 w-[240px] h-[180px] opacity-[0.002] pointer-events-none z-[-10]" 
      />

      {/* 3. FLOATING MUSIC CONTROLLER WIDGET */}
      <aside
        id="wedding-music-widget"
        aria-label="Background Wedding Music Controls"
        className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 flex items-center select-none"
        onClick={(e) => e.stopPropagation()}
      >
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
        <div className="relative group">
          <button
            onClick={togglePlay}
            onMouseEnter={() => setIsExpanded(true)}
            className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-book ${
              isPlaying
                ? 'bg-gradient-to-tr from-gold-dark via-gold to-gold-light text-brown border-2 border-white/60 shadow-[0_0_25px_rgba(212,175,55,0.5)] animate-pulse-glow'
                : 'bg-brown-dark text-gold border border-gold/50 hover:border-gold hover:scale-105'
            }`}
            title={isPlaying ? "Turn Off Music" : "Turn On Music"}
          >
            {isPlaying ? (
              <div className="relative flex items-center justify-center">
                <Disc3 className="w-6 h-6 animate-spin-slow" />
                <Pause className="w-3.5 h-3.5 absolute text-brown" />
              </div>
            ) : (
              <div className="relative flex items-center justify-center">
                <Play className="w-5 h-5 text-gold-light ml-0.5 group-hover:scale-110 transition-transform" />
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
    </>
  );
}
