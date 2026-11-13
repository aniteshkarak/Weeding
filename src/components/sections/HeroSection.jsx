import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Heart } from 'lucide-react';
import TiltCard from '../3d/TiltCard';

export default function HeroSection({ weddingData }) {
  const { scrollY } = useScroll();

  // Parallax transformations
  const yBg = useTransform(scrollY, [0, 800], [0, 220]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0.15]);
  const scalePortrait = useTransform(scrollY, [0, 600], [1, 0.92]);
  const rotatePortrait = useTransform(scrollY, [0, 800], [0, -3]);

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden select-none">
      {/* 3D Parallax Background Layer */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden"
      >
        {/* Giant Slow-Spinning Golden Mandala Watermark */}
        <div className="absolute w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full border border-gold/15 animate-spin-slow opacity-25 flex items-center justify-center">
          <div className="w-[80%] h-[80%] rounded-full border border-dashed border-gold/25" />
          <div className="w-[60%] h-[60%] rounded-full border border-gold/20" />
        </div>

        {/* Ambient Radial Golden Glow */}
        <div className="absolute w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] rounded-full bg-radial from-gold/15 via-gold/5 to-transparent blur-3xl" />
      </motion.div>

      {/* Main 3D Hero Content */}
      <motion.div
        style={{ opacity: opacityHero }}
        className="relative z-20 max-w-5xl w-full flex flex-col items-center text-center my-auto"
      >
        {/* Top Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center mb-4 sm:mb-6"
        >
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 shadow-gold-glow mb-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] uppercase text-gold-light font-semibold">
              ROYAL DIGITAL INVITATION
            </span>
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
          </div>
          <p className="text-xs sm:text-sm font-serif-luxury italic text-champagne/85 tracking-widest mt-1">
            Together with our families, we invite you to celebrate
          </p>
        </motion.div>

        {/* 3D Couple Names Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display-luxury font-bold tracking-[0.08em] uppercase gold-foil-text drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
            {weddingData.bride.name}
          </h1>

          <div className="flex items-center justify-center gap-4 my-2 sm:my-3">
            <div className="w-12 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
            <span className="text-2xl sm:text-4xl md:text-5xl font-serif-luxury italic text-gold-light">
              &
            </span>
            <div className="w-12 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display-luxury font-bold tracking-[0.08em] uppercase gold-foil-text drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
            {weddingData.groom.name}
          </h2>
        </motion.div>

        {/* Centerpiece 3D Tilt Portrait Frame */}
        {weddingData.coverImage && (
          <motion.div
            style={{ scale: scalePortrait, rotateZ: rotatePortrait }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg mb-6 sm:mb-8 perspective-1000"
          >
            <TiltCard maxTilt={10} depth={25} className="w-full">
              <div className="relative rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-[#2E241C] via-[#1B1612] to-[#0F0D0B] border-2 border-gold/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(182,154,101,0.2)]">
                {/* Corner Gold Accents */}
                <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-light pointer-events-none" />
                <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-light pointer-events-none" />
                <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-light pointer-events-none" />
                <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-light pointer-events-none" />

                <div className="w-full max-h-[42vh] sm:max-h-[48vh] rounded-xl overflow-hidden bg-black/40 flex items-center justify-center p-1">
                  <img
                    src={weddingData.coverImage}
                    alt={`${weddingData.bride.name} & ${weddingData.groom.name}`}
                    className="max-h-[40vh] sm:max-h-[46vh] w-auto object-contain rounded-lg shadow-2xl"
                  />
                </div>

                <div className="mt-2.5 pt-2 border-t border-gold/25 flex items-center justify-between px-2 text-gold-light">
                  <span className="text-[10px] sm:text-xs font-serif-luxury tracking-widest uppercase">
                    A Beautiful Story Begins
                  </span>
                  <Heart className="w-3.5 h-3.5 text-gold fill-gold/40 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-serif-luxury tracking-widest uppercase">
                    {weddingData.hashtag}
                  </span>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        )}

        {/* Wedding Date & Venue Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="px-6 py-2 rounded-full glass-gold shadow-lg flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
            <p className="text-xs sm:text-sm font-display-luxury font-semibold tracking-[0.25em] uppercase text-cream">
              {weddingData.datesSpan}
            </p>
          </div>
          <p className="text-[11px] sm:text-xs font-serif-luxury tracking-[0.2em] text-muted-light uppercase">
            {weddingData.venue.name} · Kharagpur, West Bengal
          </p>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Down Indicator */}
      <motion.a
        href="#story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="relative z-20 mt-8 sm:mt-12 flex flex-col items-center gap-1.5 text-gold-light/80 hover:text-gold transition-colors"
      >
        <span className="text-[10px] font-sans tracking-[0.3em] uppercase">
          Scroll to Discover
        </span>
        <ChevronDown className="w-4 h-4 text-gold animate-bounce" />
      </motion.a>
    </section>
  );
}
