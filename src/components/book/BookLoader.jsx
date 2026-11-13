import React from 'react';

export default function BookLoader() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center text-muted">
      <div className="w-10 h-10 border-2 border-gold/30 border-t-gold rounded-full animate-spin mb-3" />
      <span className="text-xs uppercase tracking-widest font-serif-luxury text-gold">
        Preparing Page...
      </span>
    </div>
  );
}

