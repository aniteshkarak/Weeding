import React from 'react';
import QRCodeComponent from '../common/QRCode';

export default function DigitalPassPage({ brideName = "Priyanka", groomName = "Reon", hashtag = "#PriyankaWedsReon", venue }) {
  return (
    <div className="h-full flex flex-col justify-between items-center text-center py-2 sm:py-3 overflow-hidden">
      {/* Header */}
      <div>
        <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] uppercase text-gold font-medium block">
          MOBILE ACCESS
        </span>
        <h2 className="text-xl sm:text-2xl font-serif-luxury font-bold text-brown gold-foil-text tracking-wide mt-0.5">
          Digital Invitation Pass
        </h2>
        <div className="w-14 h-[1px] bg-gold/40 mx-auto mt-1" />
      </div>

      {/* Main QR Card */}
      <div className="my-auto max-w-sm px-2 w-full flex flex-col items-center">
        <p className="text-xs sm:text-sm font-serif-luxury italic text-brown/90 leading-relaxed mb-2.5">
          "Scan this pass with any phone to open the 3D book anytime."
        </p>

        {/* QR Code Container */}
        <div className="p-2 sm:p-2.5 bg-white/95 rounded-2xl border border-gold/40 shadow-sm flex flex-col items-center">
          <QRCodeComponent />
        </div>

        {/* Info Box */}
        <div className="mt-2.5 p-2 bg-cream/70 rounded-lg border border-gold/20 text-center w-full">
          <span className="text-[10px] font-serif-luxury uppercase tracking-widest text-gold-dark font-semibold block">
            {brideName} & {groomName}
          </span>
          <span className="text-[9px] font-sans text-muted block mt-0.5">
            {venue?.name || "Ashoka Lodge"} · 25–27 November 2026
          </span>
        </div>
      </div>

      {/* Footer Accent */}
      <div className="text-center">
        <span className="text-[10px] font-sans uppercase tracking-widest text-gold-dark font-medium">
          {hashtag}
        </span>
      </div>
    </div>
  );
}
