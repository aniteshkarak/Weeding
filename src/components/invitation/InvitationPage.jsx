import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function InvitationPage({ wedding, venue }) {
  return (
    <div className="h-full flex flex-col justify-between items-center text-center py-2 sm:py-3 overflow-hidden">
      {/* Top Auspicious Seal */}
      <div>
        <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] uppercase text-gold font-medium block">
          THE WEDDING INVITATION
        </span>
        <div className="w-14 h-[1px] bg-gold/40 mx-auto mt-1" />
      </div>

      {/* Main Royal Invitation Text */}
      <div className="my-auto max-w-sm px-1 flex flex-col items-center">
        <h2 className="text-xs sm:text-sm font-serif-luxury italic text-muted leading-relaxed mb-2">
          Together with our families
        </h2>

        {/* Couple Names */}
        <div className="my-1.5 p-2.5 sm:p-3 bg-gradient-to-r from-transparent via-gold/10 to-transparent w-full">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display-luxury font-bold text-brown gold-foil-text tracking-wider uppercase">
            PRIYANKA
          </h1>
          <div className="my-0.5 text-gold-dark text-lg sm:text-xl font-serif-luxury italic">&</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display-luxury font-bold text-brown gold-foil-text tracking-wider uppercase">
            REON
          </h2>
        </div>

        <p className="text-xs sm:text-[13px] font-serif-luxury text-brown/90 italic max-w-xs my-2.5">
          Cordially invite you to celebrate their wedding.
        </p>

        {/* Date & Time Highlight Box */}
        <div className="mt-1 w-full bg-white/80 border border-gold/30 rounded-xl p-3 shadow-xs space-y-1.5">
          <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-serif-luxury font-bold text-brown">
            <Calendar className="w-4 h-4 text-gold" />
            <span>26 November 2026</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-xs text-muted font-sans">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span>7:00 PM onwards</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-xs text-brown/90 font-serif-luxury border-t border-gold/15 pt-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
            <span className="font-semibold">{venue?.name || "Ashoka Lodge"}, Kharagpur</span>
          </div>
        </div>
      </div>

      {/* Bottom Hashtag */}
      <div className="text-center">
        <span className="text-xs font-serif-luxury tracking-widest text-gold-dark font-medium">
          #PriyankaWedsReon
        </span>
      </div>
    </div>
  );
}
