import React from 'react';
import { Heart } from 'lucide-react';

export default function WelcomePage({ welcome, brideName = "Priyanka", groomName = "Reon" }) {
  return (
    <div className="h-full flex flex-col justify-between items-center text-center py-2 sm:py-4">
      {/* Top Sacred Invocation */}
      <div className="w-full">
        <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] uppercase text-gold font-medium block mb-1">
          A SACRED BEGINNING
        </span>
        <div className="w-16 h-[1px] bg-gold/40 mx-auto" />
      </div>

      {/* Centerpiece Artwork & Message */}
      <div className="my-auto max-w-sm px-2 flex flex-col items-center">
        {/* Ornate Mandala / Floral Icon */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 text-gold/80 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current" strokeWidth="1.2">
            <circle cx="50" cy="50" r="45" strokeDasharray="3,3" opacity="0.6" />
            <circle cx="50" cy="50" r="35" opacity="0.4" />
            <circle cx="50" cy="50" r="18" fill="currentColor" fillOpacity="0.1" />
            <path d="M 50 15 Q 56 35 75 35 Q 56 50 75 65 Q 50 65 50 85 Q 50 65 25 65 Q 44 50 25 35 Q 44 35 50 15 Z" />
            <circle cx="50" cy="50" r="4" fill="currentColor" />
          </svg>
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif-luxury font-bold text-brown gold-foil-text tracking-wide mb-3 sm:mb-4">
          {welcome?.heading || "With the blessings of our families"}
        </h2>

        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-2" />

        <p className="text-xs sm:text-sm text-brown/90 font-serif-luxury italic leading-relaxed my-4 px-2">
          "{welcome?.message || "With immense joy and happiness, we invite you to join us as we celebrate the beginning of our beautiful journey together."}"
        </p>

        <div className="mt-4 p-3 bg-white/50 rounded-xl border border-gold/20 max-w-xs w-full">
          <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-muted block mb-1">
            Celebrating The Union Of
          </span>
          <div className="text-base sm:text-lg font-display-luxury font-bold text-brown tracking-wider">
            {brideName} & {groomName}
          </div>
        </div>
      </div>

      {/* Bottom Flourish */}
      <div className="w-full text-center">
        <span className="text-gold text-xs">❦ ❦ ❦</span>
      </div>
    </div>
  );
}
