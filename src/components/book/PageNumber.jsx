import React from 'react';

export default function PageNumber({ number, isLeft = false, text = null }) {
  if (number === undefined || number === null) return null;

  return (
    <div
      className={`absolute bottom-3 text-[10px] md:text-[11px] font-serif-luxury tracking-widest text-muted/70 flex items-center gap-1.5 pointer-events-none select-none z-20 ${
        isLeft ? 'left-6' : 'right-6 flex-row-reverse'
      }`}
    >
      <span className="w-4 h-[1px] bg-gold/40 inline-block" />
      <span>{text || `PAGE ${String(number).padStart(2, '0')}`}</span>
    </div>
  );
}

