import React from 'react';
import { Calendar, Sun, Sparkles } from 'lucide-react';

export default function HaldiPage({ event }) {
  return (
    <div className="h-full flex flex-col justify-between items-center text-center py-2 sm:py-3 overflow-hidden">
      {/* Header */}
      <div>
        <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] uppercase text-amber-600 font-semibold block">
          AUSPICIOUS BEGINNINGS
        </span>
        <h2 className="text-xl sm:text-2xl font-display-luxury font-bold text-brown gold-foil-text tracking-wider mt-0.5">
          HALDI
        </h2>
        <div className="w-14 h-[1px] bg-amber-400/50 mx-auto mt-1" />
      </div>

      {/* Main Content & Actual Haldi Photograph Fitted Perfectly */}
      <div className="my-auto max-w-sm px-1 flex flex-col items-center w-full">
        {/* Responsive Image Container that Preserves Exact Aspect Ratio Without Cropping */}
        <div className="relative max-h-[32vh] sm:max-h-[36vh] max-w-[88%] rounded-xl overflow-hidden mb-2.5 border-2 border-amber-300/60 shadow-md bg-amber-50/70 p-1">
          <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-amber-100/40">
            <img
              src={event?.image || "/images/events/haldi.jpg"}
              alt="Haldi Ceremony"
              className="max-h-[30vh] sm:max-h-[34vh] w-auto max-w-full object-contain rounded-md"
              loading="lazy"
              onError={(e) => {
                e.target.src = "/images/wedding/haldi.svg";
              }}
            />
          </div>
          <span className="absolute top-1.5 left-1.5 text-xs">✨</span>
          <span className="absolute top-1.5 right-1.5 text-xs">✨</span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-[13px] font-serif-luxury text-brown/90 leading-relaxed italic px-2 mb-2.5">
          "{event?.description || "An auspicious beginning filled with happiness, blessings, laughter and the warmth of family."}"
        </p>

        {/* Date & Time Highlight (Morning) */}
        <div className="w-full bg-amber-50/90 border border-amber-300/40 rounded-xl p-2.5 shadow-xs space-y-1 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-serif-luxury font-bold text-brown">
            <Calendar className="w-3.5 h-3.5 text-amber-600" />
            <span>25 NOVEMBER 2026</span>
          </div>

          <div className="flex items-center justify-center gap-1 text-xs text-amber-900 font-sans font-semibold tracking-wider uppercase">
            <Sun className="w-3 h-3 text-amber-600" />
            <span>MORNING</span>
          </div>
        </div>
      </div>

      {/* Footer Accent */}
      <div className="text-center">
        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-amber-700 font-medium">
          Blessings & Marigolds
        </span>
      </div>
    </div>
  );
}
