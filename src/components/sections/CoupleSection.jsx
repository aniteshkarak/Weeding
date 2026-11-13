import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Sparkles } from 'lucide-react';
import TiltCard from '../3d/TiltCard';

export default function CoupleSection({ weddingData }) {
  return (
    <section id="couple" className="relative py-20 sm:py-28 px-4 w-full flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
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
            <span className="text-xs font-sans tracking-[0.3em] uppercase">Two Souls, One Destiny</span>
            <span className="w-8 h-[1px] bg-gold/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display-luxury font-bold text-cream tracking-wide">
            The Bride & Groom
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mt-3" />
        </motion.div>

        {/* 3D Dual Couple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl items-stretch">
          {/* THE BRIDE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="w-full h-full"
          >
            <TiltCard maxTilt={8} depth={22} className="w-full h-full">
              <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#241D17] via-[#1B1612] to-[#120F0D] border border-gold/40 shadow-2xl flex flex-col items-center text-center h-full">
                {/* Bride Badge */}
                <div className="px-4 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-light text-xs font-serif-luxury tracking-widest uppercase mb-5">
                  The Bride
                </div>

                {/* Bride Photo with 3D Gold Frame */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-2 bg-gradient-to-tr from-gold-dark via-gold to-gold-light shadow-gold-glow mb-5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black/40 border-2 border-[#120F0D]">
                    <img
                      src={weddingData.bride.photo}
                      alt={weddingData.bride.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Bride Name */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display-luxury font-bold text-cream uppercase tracking-wider mb-2 gold-foil-text">
                  {weddingData.bride.name}
                </h3>

                <p className="text-sm font-serif-luxury italic text-champagne/90 mb-4">
                  {weddingData.bride.family}
                </p>

                <div className="w-12 h-[1px] bg-gold/30 my-2" />

                <div className="mt-auto pt-3 flex items-start justify-center gap-1.5 text-xs text-muted-light font-sans max-w-xs">
                  <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                  <span>{weddingData.bride.address}</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* THE GROOM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="w-full h-full"
          >
            <TiltCard maxTilt={8} depth={22} className="w-full h-full">
              <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#241D17] via-[#1B1612] to-[#120F0D] border border-gold/40 shadow-2xl flex flex-col items-center text-center h-full">
                {/* Groom Badge */}
                <div className="px-4 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-light text-xs font-serif-luxury tracking-widest uppercase mb-5">
                  The Groom
                </div>

                {/* Groom Photo with 3D Gold Frame */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-2 bg-gradient-to-tr from-gold-dark via-gold to-gold-light shadow-gold-glow mb-5">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black/40 border-2 border-[#120F0D]">
                    <img
                      src={weddingData.groom.photo}
                      alt={weddingData.groom.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Groom Name */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display-luxury font-bold text-cream uppercase tracking-wider mb-2 gold-foil-text">
                  {weddingData.groom.name}
                </h3>

                <p className="text-sm font-serif-luxury italic text-champagne/90 mb-4">
                  {weddingData.groom.family}
                </p>

                <div className="w-12 h-[1px] bg-gold/30 my-2" />

                <div className="mt-auto pt-3 flex items-start justify-center gap-1.5 text-xs text-muted-light font-sans max-w-xs">
                  <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                  <span>{weddingData.groom.address}</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}