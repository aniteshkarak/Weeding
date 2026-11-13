import React, { useMemo } from 'react';

export default function BackgroundDecoration() {
  // Generate random floating particles
  const particles = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 5.8) % 100}%`,
      animationDelay: `${(i * 0.7) % 6}s`,
      animationDuration: `${12 + (i % 8)}s`,
      size: 3 + (i % 4),
      opacity: 0.15 + (i % 5) * 0.08,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Deep luxury vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#181411]/90 via-[#221B16]/70 to-[#14100D]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-black/60" />

      {/* Floating Gold Sparkle Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gold-light pointer-events-none"
          style={{
            left: p.left,
            top: '-20px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            boxShadow: '0 0 8px rgba(212, 190, 141, 0.8)',
            animation: `petalFall ${p.animationDuration} linear infinite`,
            animationDelay: p.animationDelay,
          }}
        />
      ))}

      {/* Subtle Ornate Floral Corner Watermarks in Background */}
      <svg 
        className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 opacity-10 text-gold transform pointer-events-none" 
        viewBox="0 0 100 100" 
        fill="currentColor"
      >
        <path d="M 0,0 L 80,0 C 50,20 20,50 0,80 Z" />
      </svg>
      <svg 
        className="absolute top-0 right-0 w-48 h-48 md:w-72 md:h-72 opacity-10 text-gold transform scale-x-[-1] pointer-events-none" 
        viewBox="0 0 100 100" 
        fill="currentColor"
      >
        <path d="M 0,0 L 80,0 C 50,20 20,50 0,80 Z" />
      </svg>
      <svg 
        className="absolute bottom-0 left-0 w-48 h-48 md:w-72 md:h-72 opacity-10 text-gold transform scale-y-[-1] pointer-events-none" 
        viewBox="0 0 100 100" 
        fill="currentColor"
      >
        <path d="M 0,0 L 80,0 C 50,20 20,50 0,80 Z" />
      </svg>
      <svg 
        className="absolute bottom-0 right-0 w-48 h-48 md:w-72 md:h-72 opacity-10 text-gold transform scale-[-1] pointer-events-none" 
        viewBox="0 0 100 100" 
        fill="currentColor"
      >
        <path d="M 0,0 L 80,0 C 50,20 20,50 0,80 Z" />
      </svg>
    </div>
  );
}

