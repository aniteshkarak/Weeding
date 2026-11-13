import React, { useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import BookEngine from '../components/book/BookEngine';
import BookControls from '../components/book/BookControls';
import BackgroundDecoration from '../components/common/BackgroundDecoration';
import ShareButton from '../components/common/ShareButton';
import { weddingData } from '../data/weddingData';
import { useBookNavigation } from '../hooks/useBookNavigation';
import { Home } from 'lucide-react';

export default function Invitation() {
  const navigate = useNavigate();
  const flipBookRef = useRef(null);

  // Dedicated Page-flip rustle sound effect (only on desktop where browser allows multi-stream mixing without pausing background music)
  const playPageTurnSound = useCallback(() => {
    // Check if mobile or touch device: Mobile OS (iOS/Android) forcibly pauses YouTube when an HTML5 Audio element plays
    const isMobileOrTouch = 
      typeof window !== 'undefined' && 
      (window.innerWidth < 768 || 'ontouchstart' in window || (navigator.maxTouchPoints && navigator.maxTouchPoints > 0));

    if (isMobileOrTouch) {
      // NEVER play HTML5 audio on mobile, so it NEVER interrupts background wedding music!
      return;
    }

    try {
      const audio = new Audio('/music/page-flip.mp3');
      audio.volume = 0.25;
      audio.play().catch(() => {});
    } catch (e) {}
  }, []);

  const {
    currentPage,
    setCurrentPage,
    nextPage,
    prevPage,
    goToPage,
    goToCover,
    onFlip,
    onChangeState,
  } = useBookNavigation({
    totalPages: 16,
    flipBookRef,
    onPageTurnSound: playPageTurnSound,
  });

  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-between items-center py-2 sm:py-4 px-1 sm:px-4 bg-[#191512]">
      {/* Background Ambience */}
      <BackgroundDecoration />

      {/* Top Header Bar */}
      <header className="relative z-30 w-full max-w-5xl flex items-center justify-between px-2 sm:px-4">
        {/* Back to Home / Closed Book */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-cream text-[11px] sm:text-xs font-serif-luxury tracking-wider border border-gold/30 transition-all group"
          title="Return to Closed Book Cover"
        >
          <Home className="w-3.5 h-3.5 text-gold group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline">Cover Screen</span>
        </button>

        {/* Center Title */}
        <div className="text-center">
          <span className="text-xs sm:text-sm font-display-luxury tracking-[0.18em] uppercase text-gold-light font-bold">
            {weddingData.bride.name} & {weddingData.groom.name}
          </span>
          <span className="text-[9px] sm:text-[10px] text-muted block font-sans tracking-widest hidden sm:block">
            Digital 3D Wedding Book · 25–27 Nov 2026
          </span>
        </div>

        {/* Top Right Utilities */}
        <div className="flex items-center gap-2">
          <ShareButton
            brideName={weddingData.bride.name}
            groomName={weddingData.groom.name}
            date="26 November 2026"
            venue={`${weddingData.venue.name}, Kharagpur`}
          />
        </div>
      </header>

      {/* Main 3D Book Container */}
      <main className="relative z-20 my-auto flex flex-col items-center justify-center w-full max-w-6xl">
        <BookEngine
          weddingData={weddingData}
          flipBookRef={flipBookRef}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          onFlip={onFlip}
          onChangeState={onChangeState}
          onPlayPageTurnSound={playPageTurnSound}
        />

        {/* Mobile Swipe / Arrow Hint */}
        <div className="mobile-touch-hint items-center gap-2 mt-1 sm:mt-2 text-[10px] text-muted-light font-sans tracking-wider">
          <span>‹ Swipe left/right or tap corners to turn page ›</span>
        </div>
      </main>

      {/* Bottom Floating Navigation Controls */}
      <footer className="relative z-30 flex items-center justify-center w-full mt-1 sm:mt-3">
        <BookControls
          currentPage={currentPage}
          totalPages={16}
          onNext={nextPage}
          onPrev={prevPage}
          onGoToPage={goToPage}
          onGoToCover={goToCover}
        />
      </footer>
    </div>
  );
}
