import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ title = "Priyanka Weds Reon", subtitle = "Loading 3D Wedding Book..." }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#191512] text-cream">
      {/* Background ambient glow */}
      <div className="absolute w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      {/* Central Luxury Crest */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Animated Rings */}
        <div className="relative w-28 h-28 flex items-center justify-center mb-8">
          <div className="absolute inset-0 rounded-full border border-gold/30 animate-ping opacity-25" />
          <div className="absolute inset-2 rounded-full border border-gold/50 animate-spin-slow" />
          <div className="absolute inset-4 rounded-full border border-dashed border-gold/40" />
          
          {/* Monogram */}
          <div className="text-3xl font-display-luxury font-bold text-gold tracking-widest gold-foil-text">
            P & R
          </div>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-2xl md:text-3xl font-display-luxury text-cream tracking-[0.2em] uppercase text-center mb-2">
          {title}
        </h1>
        <p className="text-xs md:text-sm text-gold/80 font-sans tracking-[0.3em] uppercase mb-8">
          {subtitle}
        </p>

        {/* Animated Gold Progress Bar */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-gold/50 via-gold-light to-gold rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <span className="mt-4 text-[11px] text-muted-light/70 tracking-widest uppercase">
          A Beautiful Story Begins
        </span>
      </motion.div>
    </div>
  );
}
