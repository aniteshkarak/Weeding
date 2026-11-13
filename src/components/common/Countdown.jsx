import React from 'react';
import { motion } from 'framer-motion';
import { useCountdown } from '../../hooks/useCountdown';
import { Sparkles, Calendar, Clock } from 'lucide-react';

export default function Countdown({ weddingDate, weddingTime, timezone, className = "" }) {
  const { days, hours, minutes, seconds, isCompleted } = useCountdown(weddingDate, weddingTime, timezone);

  const units = [
    { label: 'DAYS', value: days },
    { label: 'HOURS', value: hours },
    { label: 'MINUTES', value: minutes },
    { label: 'SECONDS', value: seconds },
  ];

  if (isCompleted) {
    return (
      <div className={`text-center p-6 bg-cream/70 rounded-xl border border-gold/40 shadow-paper ${className}`}>
        <Sparkles className="w-8 h-8 text-gold mx-auto mb-2 animate-bounce" />
        <h3 className="font-serif-luxury text-2xl text-brown font-semibold tracking-wider">
          The Wedding Celebration Has Begun!
        </h3>
        <p className="text-sm text-muted mt-1 font-sans">
          Cherishing every sacred moment of love and togetherness.
        </p>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md mx-auto">
        {units.map((unit, idx) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-col items-center justify-center p-2 sm:p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-gold/30 shadow-sm"
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-serif-luxury font-bold text-brown gold-foil-text tabular-nums">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-[9px] sm:text-[10px] tracking-widest text-muted uppercase font-sans font-medium mt-0.5">
              {unit.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

