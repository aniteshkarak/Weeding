import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, MessageCircle } from 'lucide-react';
import TiltCard from '../3d/TiltCard';

export default function PresenceSection({ weddingData }) {
  const handleWhatsAppWish = () => {
    const text = `Dear ${weddingData.bride.name} & ${weddingData.groom.name}, warm blessings on your wedding! We look forward to attending all your celebrations from 25th to 27th November 2026.`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="presence" className="relative py-20 sm:py-28 px-4 w-full flex flex-col items-center justify-center">
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
            <span className="text-xs font-sans tracking-[0.3em] uppercase">Warmest Appeal</span>
            <span className="w-8 h-[1px] bg-gold/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display-luxury font-bold text-cream tracking-wide">
            Your Presence is Our Greatest Blessing
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mt-3" />
        </motion.div>

        {/* 3D Heartfelt Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="w-full"
        >
          <TiltCard maxTilt={6} depth={20} className="w-full">
            <div className="relative rounded-3xl p-7 sm:p-12 md:p-16 bg-gradient-to-b from-[#281F19] via-[#1D1713] to-[#120F0D] border-2 border-gold/50 shadow-2xl text-center overflow-hidden">
              {/* Corner Ornaments */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold/60" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold/60" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold/60" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold/60" />

              {/* Heart Icon */}
              <div className="w-14 h-14 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mx-auto mb-6 shadow-gold-glow">
                <Heart className="w-7 h-7 text-gold-light fill-gold/30 animate-pulse" />
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-display-luxury font-bold text-cream tracking-wide mb-4">
                Please Grace Every Ceremony From Start to End
              </h3>

              <p className="text-base sm:text-lg md:text-xl font-serif-luxury italic text-champagne/95 leading-relaxed max-w-2xl mx-auto mb-6">
                "Our wedding celebration is truly complete only with the presence and blessings of our dear family and friends. We warmly request you to be with us throughout the entire festivities — from the auspicious Haldi and Mehendi rituals to the sacred Wedding Ceremony and joyful Reception."
              </p>

              {/* Function Tags */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 my-6">
                <span className="px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-sans tracking-wide">
                  ✓ Haldi Ceremony
                </span>
                <span className="px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-sans tracking-wide">
                  ✓ Mehendi Ceremony
                </span>
                <span className="px-3.5 py-1 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-sans tracking-wide">
                  ✓ Wedding Ceremony
                </span>
                <span className="px-3.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-sans tracking-wide">
                  ✓ Wedding Reception
                </span>
              </div>

              <div className="w-16 h-[1px] bg-gold/30 mx-auto my-6" />

              <p className="text-sm font-serif-luxury text-gold-light uppercase tracking-[0.2em] mb-6">
                — Biswas & Molla Families —
              </p>

              <button
                onClick={handleWhatsAppWish}
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-600 text-white font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-xl hover:scale-105 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Blessings on WhatsApp</span>
              </button>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}