import React from 'react';
import { MapPin } from 'lucide-react';

export default function GroomPage({ groom }) {
  return (
    <div className="h-full flex flex-col justify-between items-center text-center py-2 sm:py-3 overflow-hidden">
      {/* Header */}
      <div>
        <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] uppercase text-gold font-medium block">
          GROOM'S FAMILY
        </span>
        <h2 className="text-xl sm:text-2xl font-serif-luxury font-bold text-brown gold-foil-text tracking-wide mt-0.5">
          The Groom
        </h2>
        <div className="w-14 h-[1px] bg-gold/40 mx-auto mt-1" />
      </div>

      {/* Editorial Card with Photograph Fitted by Proportion */}
      <div className="my-auto flex flex-col items-center max-w-sm w-full px-2">
        <div className="relative max-h-[32vh] sm:max-h-[36vh] max-w-[75%] rounded-xl p-1 bg-gradient-to-b from-gold via-champagne to-gold-dark shadow-md mb-3">
          <div className="w-full h-full rounded-lg overflow-hidden bg-ivory border border-white flex items-center justify-center">
            <img
              src={groom?.photo || "/images/couple/groom.jpg"}
              alt="Reon"
              className="max-h-[30vh] sm:max-h-[34vh] w-auto max-w-full object-contain rounded-md"
              loading="lazy"
              onError={(e) => {
                e.target.src = "/images/couple/groom.svg";
              }}
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gold text-white flex items-center justify-center text-[10px] shadow-sm">
            ✦
          </div>
        </div>

        {/* Groom Name */}
        <h3 className="text-xl sm:text-2xl font-display-luxury font-bold text-brown tracking-wide">
          {groom?.name || "REON"}
        </h3>

        {/* Family Introduction */}
        <p className="text-xs sm:text-sm font-serif-luxury text-brown/90 font-medium mt-1">
          {groom?.family || "S/o Mr. Abul Kashem Molla & Mrs. Fatema Molla"}
        </p>

        {/* Address */}
        <div className="mt-2.5 pt-2 border-t border-gold/25 w-full bg-white/60 p-2 rounded-lg border border-gold/15 flex items-center justify-center gap-1.5 text-[11px] text-muted font-sans">
          <MapPin className="w-3 h-3 text-gold shrink-0" />
          <span>{groom?.address || "Puratan Bazar, Sanjoal, Kharagpur, Paschim Medinipur, West Bengal"}</span>
        </div>
      </div>

      {/* Footer Accent */}
      <div className="text-center">
        <span className="text-[10px] font-serif-luxury italic text-muted">
          Honor, Loyalty & Blessings
        </span>
      </div>
    </div>
  );
}
