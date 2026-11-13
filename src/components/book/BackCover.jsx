import React from 'react';
import { RotateCcw } from 'lucide-react';

export default function BackCover({ onGoToCover, brideName = "Priyanka", groomName = "Reon", hashtag = "#PriyankaWedsReon" }) {
  return (
    <div className="relative w-full h-full flex flex-col justify-between items-center text-center p-6 sm:p-8 md:p-10 select-none overflow-hidden bg-cover-leather text-cream">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-black/70 pointer-events-none" />

      {/* Book Spine Groove on Right */}
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-10 bg-gradient-to-l from-black/90 via-black/50 to-transparent pointer-events-none z-20 border-l border-gold/30" />
      <div className="absolute right-7 sm:right-9 top-0 bottom-0 w-[1px] bg-gold/40 pointer-events-none z-20" />

      {/* Ornate Gold Border */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 border-2 border-gold/60 rounded pointer-events-none z-10">
        <div className="absolute inset-1.5 border border-gold/30 rounded-sm" />
        <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-gold-light" />
        <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-gold-light" />
        <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-gold-light" />
        <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-gold-light" />
      </div>

      {/* Top Header */}
      <div className="relative z-20 mt-4 sm:mt-6">
        <span className="text-[10px] sm:text-xs font-sans tracking-[0.35em] text-gold-light/80 uppercase">
          FOREVER & ALWAYS
        </span>
        <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-2" />
      </div>

      {/* Central Seal & Monogram */}
      <div className="relative z-20 my-auto flex flex-col items-center">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-gold/60 flex items-center justify-center mb-4 bg-black/45 shadow-inner">
          <span className="text-2xl sm:text-3xl font-display-luxury font-bold text-gold tracking-widest gold-foil-text">
            P & R
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-display-luxury font-bold text-cream tracking-wider gold-foil-text uppercase">
          {brideName} & {groomName}
        </h3>

        <p className="text-xs font-serif-luxury italic text-champagne/80 mt-1">
          Two Lives · One Destined Journey
        </p>

        <span className="mt-4 px-3.5 py-1 rounded-full bg-white/10 text-gold-light text-xs font-serif-luxury tracking-widest border border-gold/30">
          {hashtag}
        </span>
      </div>

      {/* Bottom CTA to Return to Cover */}
      <div className="relative z-20 mb-3 sm:mb-5 flex flex-col items-center">
        <button
          onClick={onGoToCover}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-brown-deep font-sans text-xs font-semibold tracking-wider uppercase shadow-gold-glow hover:scale-105 transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Return to Cover</span>
        </button>
      </div>
    </div>
  );
}
