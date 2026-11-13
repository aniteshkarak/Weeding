import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BookCover from '../components/book/BookCover';
import BackgroundDecoration from '../components/common/BackgroundDecoration';
import ShareButton from '../components/common/ShareButton';
import { weddingData } from '../data/weddingData';

export default function Home() {
  const navigate = useNavigate();
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpening(true);
    // Trigger singleton music playback on user gesture opening the invitation
    window.dispatchEvent(new CustomEvent('wedding-play-music'));
    setTimeout(() => {
      navigate('/invitation');
    }, 650);
  };

  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-between items-center py-3 sm:py-5 px-2 sm:px-4 bg-[#191512]">
      {/* Background Ambience */}
      <BackgroundDecoration />

      {/* Top Floating Utility Bar */}
      <header className="relative z-30 w-full max-w-5xl flex items-center justify-between px-2">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] sm:text-xs font-serif-luxury tracking-[0.25em] text-gold-light uppercase">
            ROYAL WEDDING INVITATION
          </span>
        </div>

        <div className="flex items-center gap-2">
          <ShareButton
            brideName={weddingData.bride.name}
            groomName={weddingData.groom.name}
            date="26 November 2026"
            venue={`${weddingData.venue.name}, Kharagpur`}
          />
        </div>
      </header>

      {/* Center 3D Closed Book Screen */}
      <main className="relative z-20 my-auto flex flex-col items-center justify-center w-full">
        <AnimatePresence>
          <motion.div
            animate={
              isOpening
                ? {
                    rotateY: -75,
                    scale: 1.04,
                    opacity: 0,
                    x: -100,
                    transition: { duration: 0.65, ease: "easeInOut" }
                  }
                : {
                    rotateY: 0,
                    scale: 1,
                    opacity: 1,
                    x: 0
                  }
            }
            className="perspective-1000 transform-gpu"
          >
            <BookCover
              brideName={weddingData.bride.name}
              groomName={weddingData.groom.name}
              datesSpan={weddingData.datesSpan}
              coverImage={weddingData.coverImage}
              onOpenInvitation={handleOpenInvitation}
              isStandalone={true}
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 0.8 }}
          className="text-[10px] sm:text-xs text-muted-light font-sans tracking-widest uppercase mt-3 sm:mt-4 text-center px-2"
        >
          Tap "Open Invitation" to enter the 3D book experience
        </motion.p>
      </main>

      {/* Bottom Footer Note */}
      <footer className="relative z-20 text-center py-1">
        <p className="text-[10px] sm:text-[11px] font-serif-luxury tracking-widest text-muted">
          {weddingData.hashtag} · {weddingData.venue.name}, Kharagpur
        </p>
      </footer>
    </div>
  );
}
