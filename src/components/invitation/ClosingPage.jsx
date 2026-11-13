import React, { useState } from 'react';
import { Heart, MessageCircle, Copy, Check, RotateCcw } from 'lucide-react';
import { copyToClipboard, generateWhatsAppLink } from '../../utils/shareUtils';

export default function ClosingPage({ onGoToCover, brideName = "Priyanka", groomName = "Reon" }) {
  const [copied, setCopied] = useState(false);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://wedding.example.com';

  const handleCopy = async () => {
    const success = await copyToClipboard(currentUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsApp = () => {
    const link = generateWhatsAppLink({
      brideName,
      groomName,
      date: "25–27 November 2026",
      venue: "Ashoka Lodge, Kharagpur",
      url: currentUrl
    });
    window.open(link, '_blank');
  };

  return (
    <div className="h-full flex flex-col justify-between items-center text-center py-2 sm:py-3 overflow-hidden">
      {/* Header */}
      <div>
        <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] uppercase text-gold font-medium block">
          WITH HUMBLE HEARTS
        </span>
        <h2 className="text-xl sm:text-2xl font-serif-luxury font-bold text-brown gold-foil-text tracking-wide mt-0.5">
          Thank You
        </h2>
        <div className="w-14 h-[1px] bg-gold/40 mx-auto mt-1" />
      </div>

      {/* Main Closing Sentiment */}
      <div className="my-auto max-w-sm px-2 flex flex-col items-center w-full">
        <div className="w-10 h-10 mb-2 text-gold/80 flex items-center justify-center">
          <Heart className="w-7 h-7 fill-gold/15 stroke-gold animate-pulse" />
        </div>

        <p className="text-xs sm:text-sm font-serif-luxury italic text-brown/95 leading-relaxed mb-3 px-1">
          "Thank you for being part of our beautiful celebration."
        </p>

        {/* Couple & Dates */}
        <div className="my-1.5 p-2.5 sm:p-3 bg-white/75 border border-gold/25 rounded-xl w-full">
          <h3 className="text-lg sm:text-xl font-display-luxury font-bold text-brown tracking-wider">
            PRIYANKA & REON
          </h3>
          <p className="text-[11px] font-serif-luxury tracking-widest text-gold-dark mt-0.5 uppercase font-semibold">
            25–27 NOVEMBER 2026
          </p>
        </div>

        {/* Interactive Action Buttons: WhatsApp, Copy Link, Return to Cover */}
        <div className="mt-2.5 space-y-1.5 w-full">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-2 rounded-lg bg-emerald-800/85 hover:bg-emerald-700 text-white font-sans text-xs font-medium transition-all shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-300" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-1.5 py-1.5 sm:py-2 px-2 rounded-lg bg-white/85 hover:bg-white border border-gold/40 text-brown font-sans text-xs font-medium transition-all shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-green-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-gold-dark" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>

          <button
            onClick={onGoToCover}
            className="w-full flex items-center justify-center gap-2 py-1.5 sm:py-2 px-3 rounded-lg bg-gold/15 hover:bg-gold/25 border border-gold/40 text-brown font-sans text-xs font-medium transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5 text-gold-dark" />
            <span>Return to Front Cover</span>
          </button>
        </div>
      </div>

      {/* Footer Blessing */}
      <div className="text-center">
        <span className="text-[10px] font-serif-luxury italic text-gold-dark">
          May Love, Joy & Blessings Abound Forever
        </span>
      </div>
    </div>
  );
}
