import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  Maximize2, 
  Minimize2,
  List
} from 'lucide-react';

export default function BookControls({
  currentPage,
  totalPages = 16,
  onNext,
  onPrev,
  onGoToPage,
  onGoToCover,
  isCover = false,
  isBackCover = false
}) {
  const [showToc, setShowToc] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Chapters matching exact wedding sequence
  const chapters = [
    { title: "Front Cover", page: 0 },
    { title: "Welcome & Blessings", page: 1 },
    { title: "The Bride — Priyanka", page: 2 },
    { title: "The Groom — Reon", page: 3 },
    { title: "The Wedding Invitation", page: 4 },
    { title: "Haldi Ceremony", page: 5 },
    { title: "Mehendi Ceremony", page: 6 },
    { title: "Wedding Ceremony", page: 7 },
    { title: "Wedding Reception", page: 8 },
    { title: "Wedding Countdown", page: 9 },
    { title: "Venue — Ashoka Lodge", page: 10 },
    { title: "Photo Gallery", page: 11 },
    { title: "Heartfelt Presence Request", page: 12 },
    { title: "Thank You & Gratitude", page: 13 },
    { title: "Digital Pass & QR", page: 14 },
    { title: "Back Cover", page: 15 },
  ];

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className="relative z-40 select-none">
      {/* Table of contents popup */}
      {showToc && (
        <div 
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowToc(false)}
        >
          <div 
            className="w-full max-w-sm bg-[#221B16] border border-gold/40 rounded-2xl p-4 sm:p-5 text-cream shadow-2xl max-h-[82vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gold/20 mb-2.5">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-gold font-semibold">
                Invitation Index
              </span>
              <button 
                onClick={() => setShowToc(false)}
                className="text-xs text-muted hover:text-white px-2 py-1 rounded"
              >
                Close ✕
              </button>
            </div>

            <div className="space-y-1">
              {chapters.map((ch) => (
                <button
                  key={ch.page}
                  onClick={() => {
                    onGoToPage(ch.page);
                    setShowToc(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-1.5 sm:py-2 rounded-lg text-left text-xs transition-colors ${
                    currentPage === ch.page
                      ? 'bg-gold/20 text-gold-light font-semibold border-l-2 border-gold'
                      : 'hover:bg-white/5 text-cream/90'
                  }`}
                >
                  <span className="font-serif-luxury text-xs sm:text-sm">{ch.title}</span>
                  <span className="text-[10px] text-muted font-mono">
                    {ch.page === 0 ? "Cover" : ch.page === 15 ? "Back" : `p. ${ch.page}`}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main floating control pill */}
      <div className="flex items-center gap-1 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 bg-[#1E1813]/92 backdrop-blur-md border border-gold/30 rounded-full shadow-book text-cream">
        {/* Return to Cover */}
        <button
          onClick={onGoToCover}
          disabled={currentPage === 0}
          className="p-1 sm:p-1.5 rounded-full hover:bg-gold/20 text-gold/80 hover:text-gold disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          title="Return to Cover"
        >
          <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        {/* Previous Page */}
        <button
          onClick={onPrev}
          disabled={currentPage === 0}
          className="flex items-center gap-0.5 sm:gap-1 px-2 py-1 rounded-full hover:bg-gold/20 text-cream disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-xs font-medium"
          title="Previous Page (Left Arrow)"
        >
          <ChevronLeft className="w-4 h-4 text-gold" />
          <span className="hidden sm:inline text-[11px] font-sans">Prev</span>
        </button>

        {/* Page status indicator */}
        <div className="px-1.5 sm:px-3 text-center min-w-[70px] sm:min-w-[100px]">
          <div className="text-[10px] sm:text-xs font-serif-luxury font-medium tracking-wider text-gold-light">
            {currentPage === 0
              ? 'COVER'
              : currentPage >= totalPages - 1
              ? 'BACK COVER'
              : `PAGE ${currentPage} / ${totalPages - 2}`}
          </div>
        </div>

        {/* Next Page */}
        <button
          onClick={onNext}
          disabled={currentPage >= totalPages - 1}
          className="flex items-center gap-0.5 sm:gap-1 px-2 py-1 rounded-full hover:bg-gold/20 text-cream disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-xs font-medium"
          title="Next Page (Right Arrow)"
        >
          <span className="hidden sm:inline text-[11px] font-sans">Next</span>
          <ChevronRight className="w-4 h-4 text-gold" />
        </button>

        <div className="w-[1px] h-3.5 bg-gold/20 mx-0.5" />

        {/* Table of Contents button */}
        <button
          onClick={() => setShowToc(true)}
          className="p-1 sm:p-1.5 rounded-full hover:bg-gold/20 text-gold/80 hover:text-gold transition-colors"
          title="Table of Contents"
        >
          <List className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        {/* Fullscreen Toggle */}
        <button
          onClick={toggleFullscreen}
          className="hidden sm:block p-1 sm:p-1.5 rounded-full hover:bg-gold/20 text-gold/80 hover:text-gold transition-colors"
          title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        >
          {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
