import React from 'react';
import { ArrowUp, Heart, Share2 } from 'lucide-react';
import ShareButton from '../common/ShareButton';

export default function FooterSection({ weddingData }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-20 py-16 px-4 bg-[#0A0807] border-t border-gold/30 text-center flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col items-center">
        {/* Monogram */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gold-dark via-gold to-gold-light p-[1.5px] shadow-gold-glow mb-4">
          <div className="w-full h-full rounded-full bg-[#1A1410] flex items-center justify-center">
            <span className="font-display-luxury text-base font-bold text-gold-light tracking-widest">
              P&R
            </span>
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-display-luxury font-bold text-cream gold-foil-text uppercase tracking-wider mb-2">
          {weddingData.bride.name} & {weddingData.groom.name}
        </h3>

        <p className="text-xs sm:text-sm font-serif-luxury text-champagne/85 italic max-w-md mb-4">
          "{weddingData.closing.message}"
        </p>

        <p className="text-xs font-sans tracking-[0.25em] text-gold-light uppercase mb-6">
          {weddingData.datesSpan} · {weddingData.venue.name}, Kharagpur
        </p>

        {/* Share Utility */}
        <div className="mb-8">
          <ShareButton
            brideName={weddingData.bride.name}
            groomName={weddingData.groom.name}
            date="26 November 2026"
            venue={`${weddingData.venue.name}, Kharagpur`}
          />
        </div>

        <div className="w-24 h-[1px] bg-gold/25 mb-6" />

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-gold-light text-xs font-serif-luxury tracking-widest uppercase border border-gold/30 transition-all hover:scale-105 mb-6"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Back to Top</span>
        </button>

        <p className="text-[10px] text-muted-light font-sans tracking-widest uppercase">
          {weddingData.hashtag} · Crafted with Love for Priyanka & Reon
        </p>
      </div>
    </footer>
  );
}
