import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function WeddingPage({ event, venue }) {
  return (
    <div className="h-full flex flex-col justify-between items-center text-center py-2 sm:py-3 overflow-hidden">
      {/* Header */}
      <div>
        <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] uppercase text-gold font-semibold block">
          THE SACRED CEREMONY
        </span>
        <h2 className="text-xl sm:text-2xl font-display-luxury font-bold text-brown gold-foil-text tracking-wider mt-0.5">
          THE WEDDING
        </h2>
        <div className="w-14 h-[1px] bg-gold/50 mx-auto mt-1" />
      </div>

      {/* Main Content & Wedding Photograph Fitted Completely */}
      <div className="my-auto max-w-sm px-1 flex flex-col items-center w-full">
        {/* Responsive Image Frame Preserving Exact Aspect Ratio */}
        <div className="relative max-h-[32vh] sm:max-h-[36vh] max-w-[90%] rounded-xl overflow-hidden mb-2.5 border-2 border-gold/60 shadow-md bg-white/70 p-1">
          <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center bg-black/10">
            <img
              src={event?.image || "/images/events/wedding.jpg"}
              alt="The Wedding Ceremony"
              className="max-h-[30vh] sm:max-h-[34vh] w-auto max-w-full object-contain rounded-md"
              loading="lazy"
              onError={(e) => {
                e.target.src = "/images/wedding/cover.jpg";
              }}
            />
          </div>
          <span className="absolute top-1.5 left-1.5 text-xs">💍</span>
          <span className="absolute top-1.5 right-1.5 text-xs">💍</span>
        </div>

        {/* Invitation Message */}
        <p className="text-xs sm:text-[13px] font-serif-luxury text-brown/90 leading-relaxed italic px-2 mb-2.5">
          "{event?.description || "With the blessings of our families, we invite you to witness the beginning of our beautiful journey together."}"
        </p>

        {/* Date & Time Highlight */}
        <div className="w-full bg-white/85 border border-gold/30 rounded-xl p-2.5 shadow-xs space-y-1 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-serif-luxury font-bold text-brown">
            <Calendar className="w-3.5 h-3.5 text-gold" />
            <span>26 NOVEMBER 2026</span>
          </div>

          <div className="flex items-center justify-center gap-1 text-xs text-muted-dark font-sans font-semibold tracking-wider uppercase">
            <Clock className="w-3 h-3 text-gold" />
            <span>7:00 PM ONWARDS</span>
          </div>

          <div className="flex items-center justify-center gap-1 text-xs text-brown/90 font-serif-luxury border-t border-gold/15 pt-1">
            <MapPin className="w-3 h-3 text-gold shrink-0" />
            <span>{venue?.name || "Ashoka Lodge"}, Kharagpur</span>
          </div>
        </div>
      </div>

      {/* Footer Accent */}
      <div className="text-center">
        <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gold-dark font-medium">
          Two Souls · One Destined Path
        </span>
      </div>
    </div>
  );
}
