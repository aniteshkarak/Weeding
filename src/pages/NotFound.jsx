import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundDecoration from '../components/common/BackgroundDecoration';
import { BookOpen, Home } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 bg-[#191512] text-cream text-center select-none">
      <BackgroundDecoration />

      <div className="relative z-10 max-w-md p-8 bg-[#241D17]/90 rounded-2xl border border-gold/40 shadow-book flex flex-col items-center">
        <span className="text-5xl font-serif-luxury font-bold text-gold gold-foil-text mb-2">
          404
        </span>
        <h1 className="text-xl font-serif-luxury text-cream tracking-wide mb-3">
          Page Not Found
        </h1>
        <p className="text-xs text-muted font-sans leading-relaxed mb-6">
          The requested page could not be located in our wedding invitation book.
        </p>

        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-brown-deep font-sans text-xs font-semibold uppercase tracking-wider shadow-gold-glow hover:scale-105 transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return to Invitation Cover</span>
        </button>
      </div>
    </div>
  );
}

