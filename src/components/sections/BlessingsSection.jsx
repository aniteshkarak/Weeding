import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';
import TiltCard from '../3d/TiltCard';

export default function BlessingsSection({ weddingData }) {
  return (
    <section id="story" className="relative py-20 sm:py-28 px-4 w-full flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-2 text-gold-light mb-2">
            <span className="w-8 h-[1px] bg-gold/50" />
            <span className="text-xs font-sans tracking-[0.3em] uppercase">Blessings & Heritage</span>
            <span className="w-8 h-[1px] bg-gold/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display-luxury font-bold text-cream tracking-wide">
            With Immense Joy & Gratitude
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mt-3" />
        </motion.div>

        {/* 3D Elevated Royal Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="w-full"
        >
          <TiltCard maxTilt={6} depth={20} className="w-full">
            <div className="relative rounded-3xl p-6 sm:p-10 md:p-14 glass-gold shadow-2xl border border-gold/40 text-center overflow-hidden">
              {/* Ornate corner gold brackets */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold/60" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold/60" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold/60" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold/60" />

              <Quote className="w-10 h-10 text-gold/30 mx-auto mb-4" />

              <h3 className="text-xl sm:text-2xl md:text-3xl font-display-luxury font-semibold text-gold-light mb-4">
                {weddingData.welcome.heading}
              </h3>

              <p className="text-base sm:text-lg md:text-xl font-serif-luxury text-cream/90 italic leading-relaxed max-w-2xl mx-auto mb-8">
                "{weddingData.welcome.message}"
              </p>

              {/* Decorative Divider */}
              <div className="flex items-center justify-center gap-3 my-6">
                <span className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                <span className="text-gold text-sm">❦</span>
                <span className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 max-w-2xl mx-auto text-left">
                {/* Bride's family introduction */}
                <div className="p-4 rounded-xl bg-black/30 border border-gold/20">
                  <span className="text-[10px] font-sans tracking-[0.2em] text-gold-light uppercase block mb-1">
                    Bride's Family
                  </span>
                  <p className="font-serif-luxury text-base text-cream font-medium">
                    {weddingData.bride.family}
                  </p>
                  <p className="text-xs text-muted-light font-sans mt-1">
                    {weddingData.bride.address}
                  </p>
                </div>

                {/* Groom's family introduction */}
                <div className="p-4 rounded-xl bg-black/30 border border-gold/20">
                  <span className="text-[10px] font-sans tracking-[0.2em] text-gold-light uppercase block mb-1">
                    Groom's Family
                  </span>
                  <p className="font-serif-luxury text-base text-cream font-medium">
                    {weddingData.groom.family}
                  </p>
                  <p className="text-xs text-muted-light font-sans mt-1">
                    {weddingData.groom.address}
                  </p>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}