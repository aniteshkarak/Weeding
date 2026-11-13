import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BookOpen } from 'lucide-react';

export default function BookCover({
  brideName = "Priyanka",
  groomName = "Reon",
  datesSpan = "25 – 27 NOVEMBER 2026",
  coverImage = "/images/wedding/cover.jpg",
  onOpenInvitation,
  isStandalone = false
}) {
  const coverContent = (
    <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-3.5 sm:p-6 md:p-8 select-none overflow-hidden bg-cover-leather">
      {/* Background Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-black/75 pointer-events-none z-10" />

      {/* Realistic Book Spine Groove on Left */}
      <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none z-30 border-r border-gold/30" />
      <div className="absolute left-5 sm:left-9 top-0 bottom-0 w-[1px] bg-gold/40 pointer-events-none z-30" />

      {/* Outer Multi-layered Ornate Gold Foil Borders */}
      <div className="absolute inset-2 sm:inset-4 md:inset-6 border-2 border-gold/70 rounded pointer-events-none z-20">
        <div className="absolute inset-1 border border-gold/35 rounded-sm" />
        <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-gold-light" />
        <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-gold-light" />
        <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-gold-light" />
        <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-gold-light" />
      </div>

      {/* Top Header */}
      <div className="relative z-20 mt-1 sm:mt-3">
        <p className="text-[9px] sm:text-[11px] font-sans tracking-[0.3em] text-gold-light/95 uppercase mb-0.5">
          A BEAUTIFUL STORY BEGINS
        </p>
        <div className="w-14 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-1" />
        <p className="text-[11px] sm:text-xs font-serif-luxury italic text-champagne/85 tracking-wider">
          Together with our families
        </p>
      </div>

      {/* Centerpiece: Actual Cover Photograph Fitted Exactly by Its Aspect Ratio */}
      <div className="relative z-20 my-auto flex flex-col items-center w-full px-2">
        {coverImage && (
          <div className="relative max-h-[30vh] sm:max-h-[36vh] max-w-[70%] sm:max-w-[65%] rounded-xl overflow-hidden border-2 border-gold/60 p-1 bg-black/40 shadow-xl mb-2 sm:mb-3">
            <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-black/20">
              <img
                src={coverImage}
                alt={`${brideName} & ${groomName}`}
                className="max-h-[28vh] sm:max-h-[34vh] w-auto object-contain rounded-md"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            {/* Corner gold pins */}
            <span className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-gold-light shadow-sm" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-gold-light shadow-sm" />
            <span className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-gold-light shadow-sm" />
            <span className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-gold-light shadow-sm" />
          </div>
        )}

        {/* Bride Name */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-display-luxury font-bold text-white tracking-[0.1em] uppercase gold-foil-text gold-emboss">
          {brideName}
        </h1>

        {/* Ampersand */}
        <div className="my-0.5 flex items-center gap-2.5">
          <span className="w-6 h-[1px] bg-gold/50" />
          <span className="text-base sm:text-lg font-serif-luxury italic text-gold-light">&</span>
          <span className="w-6 h-[1px] bg-gold/50" />
        </div>

        {/* Groom Name */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-display-luxury font-bold text-white tracking-[0.1em] uppercase gold-foil-text gold-emboss">
          {groomName}
        </h2>

        {/* Divider Flourish */}
        <div className="my-1.5 flex items-center gap-1.5">
          <span className="text-gold/70 text-[10px]">❦</span>
          <span className="w-10 h-[1px] bg-gold/40" />
          <span className="text-gold/70 text-[10px]">❦</span>
        </div>

        <p className="text-[9px] sm:text-[11px] font-sans tracking-[0.3em] uppercase text-gold-light font-medium">
          WEDDING INVITATION
        </p>
      </div>

      {/* Bottom Dates & CTA */}
      <div className="relative z-20 mb-1 sm:mb-3 flex flex-col items-center w-full">
        <p className="text-[11px] sm:text-xs font-serif-luxury tracking-[0.2em] uppercase text-champagne mb-2 sm:mb-3">
          {datesSpan}
        </p>

        {isStandalone && (
          <motion.button
            onClick={onOpenInvitation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-brown-deep font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase shadow-gold-glow hover:shadow-2xl transition-all duration-300"
          >
            <BookOpen className="w-4 h-4 text-brown-deep group-hover:rotate-12 transition-transform" />
            <span>OPEN INVITATION</span>
            <Sparkles className="w-3.5 h-3.5 text-brown-deep animate-pulse" />
          </motion.button>
        )}
      </div>

      {/* Book Rim */}
      <div className="book-rim" />
    </div>
  );

  if (isStandalone) {
    return (
      <div className="relative flex flex-col items-center justify-center p-2 sm:p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotateY: -10, y: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative w-[300px] sm:w-[360px] md:w-[440px] h-[510px] sm:h-[580px] md:h-[660px] rounded-lg shadow-book-deep border-r-4 border-b-4 border-black/40 overflow-hidden transform-gpu"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1200px',
          }}
        >
          {/* Layered page thickness preview on right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-gradient-to-l from-[#D5C5AC] via-[#FFFDF8] to-transparent z-30 opacity-90 pointer-events-none" />
          <div className="absolute right-1 top-1 bottom-1 w-[1px] bg-[#8C713F]/40 z-30 pointer-events-none" />

          {coverContent}
        </motion.div>

        {/* Ambient shadow beneath */}
        <div className="w-[280px] sm:w-[340px] md:w-[420px] h-6 bg-black/45 rounded-full blur-xl -mt-3 pointer-events-none" />
      </div>
    );
  }

  return coverContent;
}
