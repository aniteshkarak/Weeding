import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, MessageCircle, Sun, Flower2, Flame, GlassWater, Check, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import TiltCard from '../3d/TiltCard';

export default function PresenceSection({ weddingData }) {
  const handleWhatsAppWish = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 65,
        origin: { y: 0.7 },
        colors: ['#D4BE8D', '#FFF2D1', '#8C713F', '#E5C578', '#FFFFFF']
      });
    } catch (e) {}

    const text = `Dearest ${weddingData.bride.name} & ${weddingData.groom.name},\n\nWe are delighted to receive your wedding invitation! We will wholeheartedly grace all 4 ceremonies from start to end (25th to 27th November 2026 at Ashoka Lodge, Kharagpur).\n\nWith all our love and blessings!\n${weddingData.hashtag}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const ceremonies = [
    {
      id: "haldi",
      title: "Haldi Ceremony",
      timing: "25 Nov · Morning",
      desc: "Auspicious turmeric blessings",
      icon: Sun,
      color: "text-amber-300",
      bg: "bg-amber-500/15",
      border: "border-amber-400/40",
      glow: "shadow-[0_0_15px_rgba(245,158,11,0.25)]"
    },
    {
      id: "mehendi",
      title: "Mehendi Ceremony",
      timing: "25 Nov · Evening",
      desc: "Vibrant henna & musical joy",
      icon: Flower2,
      color: "text-emerald-300",
      bg: "bg-emerald-500/15",
      border: "border-emerald-400/40",
      glow: "shadow-[0_0_15px_rgba(16,185,129,0.25)]"
    },
    {
      id: "wedding",
      title: "Wedding Ceremony",
      timing: "26 Nov · 7:00 PM onwards",
      desc: "Sacred vows & eternal knot",
      icon: Flame,
      color: "text-rose-300",
      bg: "bg-rose-500/15",
      border: "border-rose-400/40",
      glow: "shadow-[0_0_15px_rgba(244,63,94,0.25)]"
    },
    {
      id: "reception",
      title: "Wedding Reception",
      timing: "27 Nov · 7:00 PM onwards",
      desc: "Grand banquet & celebration",
      icon: GlassWater,
      color: "text-purple-300",
      bg: "bg-purple-500/15",
      border: "border-purple-400/40",
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.25)]"
    }
  ];

  return (
    <section id="presence" className="relative py-24 sm:py-32 px-4 w-full flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Ambient Golden Halo Background */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] rounded-full bg-radial from-gold/15 via-gold/5 to-transparent blur-3xl opacity-60" />
      </div>

      <div className="max-w-5xl w-full flex flex-col items-center relative z-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-18 flex flex-col items-center"
        >
          <div className="flex items-center gap-2 text-gold-light mb-2">
            <span className="w-8 h-[1px] bg-gold/50" />
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            <span className="text-xs font-sans tracking-[0.3em] uppercase">Sacred Invitation Appeal</span>
            <Sparkles className="w-3.5 h-3.5 text-gold-light" />
            <span className="w-8 h-[1px] bg-gold/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display-luxury font-bold text-cream tracking-wide">
            Your Presence is Our Greatest Blessing
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mt-3" />
        </motion.div>

        {/* 3D Multi-Layered Royal Decree Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="w-full"
        >
          <TiltCard maxTilt={6} depth={28} className="w-full">
            <div className="relative rounded-[2.5rem] p-7 sm:p-12 md:p-16 bg-gradient-to-b from-[#2A2018] via-[#1B1511] to-[#0E0C0A] border-2 border-gold/60 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.9),0_0_50px_rgba(182,154,101,0.25)] text-center overflow-hidden">
              {/* Outer Ornate Filigree Corner Accents */}
              <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-gold-light/80 pointer-events-none" />
              <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-gold-light/80 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-gold-light/80 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-gold-light/80 pointer-events-none" />

              {/* Sub-Border Line */}
              <div className="absolute inset-3 border border-gold/20 rounded-[2.2rem] pointer-events-none" />

              {/* 3D Floating Royal Seal Medallion */}
              <div className="relative z-10 flex flex-col items-center mb-6">
                <div className="relative group cursor-pointer">
                  {/* Glowing halo */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-gold via-gold-light to-amber-500 blur-md opacity-40 animate-pulse" />
                  
                  {/* 3D Wax Seal Badge */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-gold-dark via-gold to-gold-light p-[2px] shadow-[0_10px_30px_rgba(182,154,101,0.5)]">
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#2E241C] to-[#14100C] border-2 border-gold/60 flex flex-col items-center justify-center">
                      <Heart className="w-8 h-8 sm:w-9 sm:h-9 text-gold-light fill-gold/40 animate-bounce" />
                      <span className="text-[8px] font-mono tracking-widest text-gold-light uppercase -mt-0.5">
                        P & R
                      </span>
                    </div>
                  </div>
                </div>

                <span className="text-[10px] sm:text-xs font-serif-luxury tracking-[0.3em] text-gold-light uppercase mt-3 font-semibold">
                  Auspicious Union Decree
                </span>
              </div>

              {/* Main Headline */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display-luxury font-bold text-cream gold-foil-text tracking-wide mb-4 relative z-10">
                Please Grace Every Ceremony From Beginning to End
              </h3>

              {/* Heartfelt Letter Body */}
              <p className="text-base sm:text-lg md:text-xl font-serif-luxury italic text-champagne/95 leading-relaxed max-w-3xl mx-auto mb-10 relative z-10">
                "Our celebration of marriage is truly complete only with the warmth, love, and sacred blessings of our dearest family and friends. We humbly and wholeheartedly invite you to join us across every single festive gathering — from the golden morning of Haldi and the musical evening of Mehendi to the sacred rituals of our Wedding Ceremony and the jubilant celebration of our Reception."
              </p>

              {/* 4 Interactive 3D Ceremony Capsules */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl mx-auto mb-10 relative z-10">
                {ceremonies.map((c) => {
                  const Icon = c.icon;
                  return (
                    <motion.div
                      key={c.id}
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className={`relative rounded-2xl p-4 ${c.bg} border ${c.border} ${c.glow} flex flex-col items-center text-center transition-all bg-[#17130F]/80 backdrop-blur-sm`}
                    >
                      <div className="w-10 h-10 rounded-full bg-black/40 border border-gold/30 flex items-center justify-center mb-2.5">
                        <Icon className={`w-5 h-5 ${c.color}`} />
                      </div>
                      <h4 className="font-display-luxury text-sm font-bold text-cream tracking-wide">
                        {c.title}
                      </h4>
                      <span className="text-[11px] font-mono text-gold-light/90 font-medium my-1">
                        {c.timing}
                      </span>
                      <p className="text-[10px] font-serif-luxury italic text-muted-light">
                        {c.desc}
                      </p>
                      <span className="mt-2 text-[9px] font-sans uppercase tracking-widest text-gold-light/70 bg-white/5 px-2 py-0.5 rounded-full border border-gold/15 flex items-center gap-1">
                        <Check className="w-2.5 h-2.5 text-gold" />
                        Must Attend
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Decorative Family Seal Divider */}
              <div className="flex items-center justify-center gap-4 my-8 relative z-10">
                <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
                <span className="text-gold text-base">❦</span>
                <span className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              </div>

              {/* Family Lineage Signatures */}
              <div className="mb-8 relative z-10">
                <p className="text-xs sm:text-sm font-serif-luxury tracking-[0.25em] text-gold-light uppercase font-semibold">
                  Warmest Regards & Blessings
                </p>
                <p className="text-base sm:text-lg font-display-luxury text-cream font-bold mt-1">
                  The Biswas & Molla Families
                </p>
                <p className="text-xs text-muted-light font-sans mt-0.5">
                  Kharagpur, Paschim Medinipur, West Bengal
                </p>
              </div>

              {/* High-Impact 3D Action CTA Button */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleWhatsAppWish}
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-brown-deep font-sans text-xs sm:text-sm font-bold tracking-[0.2em] uppercase shadow-[0_10px_30px_rgba(182,154,101,0.5)] hover:shadow-[0_15px_40px_rgba(182,154,101,0.7)] transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-brown-deep group-hover:rotate-12 transition-transform" />
                  <span>Confirm Attendance & Bless the Couple</span>
                  <Sparkles className="w-4 h-4 text-brown-deep animate-pulse" />
                </motion.button>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}