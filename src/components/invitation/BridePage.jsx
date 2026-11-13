import React from 'react';
import { MapPin } from 'lucide-react';

export default function BridePage({ bride }) {
  return (
    <div className="h-full flex flex-col justify-between items-center text-center py-2 sm:py-3 overflow-hidden">
      {/* Header */}
      <div>
        <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] uppercase text-gold font-medium block">
          BRIDE'S FAMILY
        </span>
        <h2 className="text-xl sm:text-2xl font-serif-luxury font-bold text-brown gold-foil-text tracking-wide mt-0.5">
          The Bride
        </h2>
        <div className="w-14 h-[1px] bg-gold/40 mx-auto mt-1" />
      </div>

      {/* Editorial Card with Photograph Fitted by Proportion */}
      <div className="my-auto flex flex-col items-center max-w-sm w-full px-2">
        <div className="relative max-h-[32vh] sm:max-h-[36vh] max-w-[75%] rounded-xl p-1 bg-gradient-to-b from-gold via-champagne to-gold-dark shadow-md mb-3">
          <div className="w-full h-full rounded-lg overflow-hidden bg-ivory border border-white flex items-center justify-center">
            <img
              src={bride?.photo || "/images/couple/bride.jpg"}
              alt="Priyanka"
              className="max-h-[30vh] sm:max-h-[34vh] w-auto max-w-full object-contain rounded-md"
              loading="lazy"
              onError={(e) => {
                e.target.src = "/images/couple/bride.svg";
              }}
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gold text-white flex items-center justify-center text-[10px] shadow-sm">
            ✦
          </div>
        </div>

        {/* Bride Name */}
        <h3 className="text-xl sm:text-2xl font-display-luxury font-bold text-brown tracking-wide">
          {bride?.name || "PRIYANKA"}
        </h3>

        {/* Family Introduction */}
        <p className="text-xs sm:text-sm font-serif-luxury text-brown/90 font-medium mt-1">
          {bride?.family || "D/o Smt. Shashi Kala Biswas"}
        </p>

        {/* Address */}
        <div className="mt-2.5 pt-2 border-t border-gold/25 w-full bg-white/60 p-2 rounded-lg border border-gold/15 flex items-center justify-center gap-1.5 text-[11px] text-muted font-sans">
          <MapPin className="w-3 h-3 text-gold shrink-0" />
          <span>{bride?.address || "Kharida, Kharagpur, Paschim Medinipur, West Bengal"}</span>
        </div>
      </div>

      {/* Footer Accent */}
      <div className="text-center">
        <span className="text-[10px] font-serif-luxury italic text-muted">
          Grace, Elegance & Blessings
        </span>
      </div>
    </div>
  );
}
