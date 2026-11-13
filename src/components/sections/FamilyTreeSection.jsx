import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Users, MapPin, Sparkles, GitMerge, Flower2, Shield } from 'lucide-react';
import TiltCard from '../3d/TiltCard';

export default function FamilyTreeSection({ weddingData }) {
  const [activeTab, setActiveTab] = useState('union'); // 'union' | 'bride' | 'groom'
  const { brideTree, groomTree, union } = weddingData.familyTree;

  return (
    <section id="family-tree" className="relative py-20 sm:py-28 px-4 w-full flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14 flex flex-col items-center"
        >
          <div className="flex items-center gap-2 text-gold-light mb-2">
            <span className="w-8 h-[1px] bg-gold/50" />
            <span className="text-xs font-sans tracking-[0.3em] uppercase">Generations of Blessings</span>
            <span className="w-8 h-[1px] bg-gold/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display-luxury font-bold text-cream tracking-wide">
            Family Heritage Tree
          </h2>
          <p className="text-xs sm:text-sm font-serif-luxury text-champagne/80 tracking-widest mt-2 max-w-xl">
            {union.quote}
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mt-3" />
        </motion.div>

        {/* View Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 p-1.5 rounded-full bg-white/5 border border-gold/30 backdrop-blur-md mb-12 sm:mb-16">
          <button
            onClick={() => setActiveTab('union')}
            className={`flex items-center gap-1.5 px-4 sm:px-6 py-2 rounded-full text-xs font-serif-luxury tracking-widest uppercase transition-all duration-300 ${
              activeTab === 'union'
                ? 'bg-gradient-to-r from-gold-dark via-gold to-gold-light text-brown-deep font-semibold shadow-gold-glow scale-102'
                : 'text-cream/80 hover:text-gold'
            }`}
          >
            <GitMerge className="w-3.5 h-3.5" />
            <span>The Sacred Union</span>
          </button>

          <button
            onClick={() => setActiveTab('bride')}
            className={`flex items-center gap-1.5 px-4 sm:px-6 py-2 rounded-full text-xs font-serif-luxury tracking-widest uppercase transition-all duration-300 ${
              activeTab === 'bride'
                ? 'bg-gradient-to-r from-gold-dark via-gold to-gold-light text-brown-deep font-semibold shadow-gold-glow scale-102'
                : 'text-cream/80 hover:text-gold'
            }`}
          >
            <span>Biswas Lineage</span>
          </button>

          <button
            onClick={() => setActiveTab('groom')}
            className={`flex items-center gap-1.5 px-4 sm:px-6 py-2 rounded-full text-xs font-serif-luxury tracking-widest uppercase transition-all duration-300 ${
              activeTab === 'groom'
                ? 'bg-gradient-to-r from-gold-dark via-gold to-gold-light text-brown-deep font-semibold shadow-gold-glow scale-102'
                : 'text-cream/80 hover:text-gold'
            }`}
          >
            <span>Molla Lineage</span>
          </button>
        </div>

        {/* Tree Display Area */}
        <AnimatePresence mode="wait">
          {activeTab === 'union' && (
            <motion.div
              key="union-tree"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col items-center"
            >
              {/* LEVEL 1: THE TWO PARENTAL ROOTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 w-full max-w-4xl mb-8">
                {/* Bride's Parents Branch */}
                <TiltCard maxTilt={8} depth={20} className="w-full">
                  <div className="relative rounded-3xl p-6 bg-gradient-to-b from-[#241D17] to-[#120F0D] border-2 border-gold/40 shadow-2xl flex flex-col items-center text-center">
                    <div className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-sans tracking-[0.2em] uppercase mb-4">
                      The Biswas Lineage
                    </div>

                    <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mb-3 text-gold shadow-gold-glow">
                      <Flower2 className="w-8 h-8" />
                    </div>

                    {brideTree.parents.map((parent) => (
                      <div key={parent.id} className="mb-2">
                        <h4 className="font-display-luxury text-xl font-bold text-cream gold-foil-text">
                          {parent.name}
                        </h4>
                        <span className="text-xs font-serif-luxury text-gold-light italic block mt-0.5">
                          {parent.relation}
                        </span>
                        <p className="text-[11px] text-muted-light font-sans mt-2 max-w-xs">
                          {parent.description}
                        </p>
                      </div>
                    ))}

                    <div className="mt-4 pt-3 border-t border-gold/20 flex items-center justify-center gap-1.5 text-[11px] text-muted-light">
                      <MapPin className="w-3 h-3 text-gold" />
                      <span>{brideTree.address}</span>
                    </div>
                  </div>
                </TiltCard>

                {/* Groom's Parents Branch */}
                <TiltCard maxTilt={8} depth={20} className="w-full">
                  <div className="relative rounded-3xl p-6 bg-gradient-to-b from-[#241D17] to-[#120F0D] border-2 border-gold/40 shadow-2xl flex flex-col items-center text-center">
                    <div className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-sans tracking-[0.2em] uppercase mb-4">
                      The Molla Lineage
                    </div>

                    <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mb-3 text-gold shadow-gold-glow">
                      <Shield className="w-8 h-8" />
                    </div>

                    <div className="space-y-3 w-full">
                      {groomTree.parents.map((parent) => (
                        <div key={parent.id} className="pb-2 border-b border-gold/15 last:border-0 last:pb-0">
                          <h4 className="font-display-luxury text-xl font-bold text-cream gold-foil-text">
                            {parent.name}
                          </h4>
                          <span className="text-xs font-serif-luxury text-gold-light italic block mt-0.5">
                            {parent.relation}
                          </span>
                          <p className="text-[11px] text-muted-light font-sans mt-1 max-w-xs mx-auto">
                            {parent.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-gold/20 flex items-center justify-center gap-1.5 text-[11px] text-muted-light">
                      <MapPin className="w-3 h-3 text-gold" />
                      <span>{groomTree.address}</span>
                    </div>
                  </div>
                </TiltCard>
              </div>

              {/* CONNECTING 3D GOLDEN VINES / BRANCHES */}
              <div className="relative w-full max-w-2xl h-16 flex items-center justify-center pointer-events-none select-none my-2">
                <svg className="w-full h-full" viewBox="0 0 600 60" fill="none">
                  <path
                    d="M 120 0 Q 120 40 300 50"
                    stroke="url(#branchGold)"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 480 0 Q 480 40 300 50"
                    stroke="url(#branchGold)"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />
                  <circle cx="300" cy="50" r="5" fill="#D4BE8D" />
                  <defs>
                    <linearGradient id="branchGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8C713F" />
                      <stop offset="50%" stopColor="#D4BE8D" />
                      <stop offset="100%" stopColor="#8C713F" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* LEVEL 2: THE BRIDE & GROOM UNIFICATION CENTERPIECE */}
              <div className="w-full max-w-3xl">
                <TiltCard maxTilt={6} depth={25} className="w-full">
                  <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#2E241C] via-[#1C1612] to-[#100D0B] border-2 border-gold/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(182,154,101,0.25)] flex flex-col items-center text-center">
                    {/* Top Union Ring Icon */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-gold-dark via-gold to-gold-light p-[1.5px] shadow-gold-glow mb-4">
                      <div className="w-full h-full rounded-full bg-[#1A1410] flex items-center justify-center">
                        <Heart className="w-6 h-6 text-gold-light fill-gold/30 animate-pulse" />
                      </div>
                    </div>

                    <span className="text-xs font-serif-luxury tracking-[0.25em] text-gold-light uppercase mb-1">
                      Two Lineages Merging in Holy Matrimony
                    </span>

                    <h3 className="text-3xl sm:text-5xl font-display-luxury font-bold text-cream gold-foil-text tracking-wide mb-6">
                      Priyanka & Reon
                    </h3>

                    {/* Dual Photos Side by Side with Connecting Heart */}
                    <div className="flex items-center justify-center gap-4 sm:gap-8 my-2">
                      {/* Bride Portrait */}
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-gold via-gold-light to-gold-dark shadow-gold-glow mb-2">
                          <img
                            src={brideTree.member.photo}
                            alt={brideTree.member.name}
                            className="w-full h-full object-cover object-top rounded-full"
                          />
                        </div>
                        <span className="font-display-luxury text-sm font-semibold text-cream">
                          {brideTree.member.name}
                        </span>
                        <span className="text-[10px] text-gold-light font-sans uppercase tracking-wider">
                          {brideTree.member.role}
                        </span>
                      </div>

                      {/* Animated Sacred Knot / Ampersand */}
                      <div className="flex flex-col items-center">
                        <span className="text-2xl sm:text-3xl font-serif-luxury italic text-gold animate-bounce">
                          &
                        </span>
                        <span className="text-[10px] text-muted-light font-mono mt-1">
                          26 Nov 2026
                        </span>
                      </div>

                      {/* Groom Portrait */}
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-gold via-gold-light to-gold-dark shadow-gold-glow mb-2">
                          <img
                            src={groomTree.member.photo}
                            alt={groomTree.member.name}
                            className="w-full h-full object-cover object-top rounded-full"
                          />
                        </div>
                        <span className="font-display-luxury text-sm font-semibold text-cream">
                          {groomTree.member.name}
                        </span>
                        <span className="text-[10px] text-gold-light font-sans uppercase tracking-wider">
                          {groomTree.member.role}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gold/25 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-muted-light font-sans gap-2">
                      <span>Venue: <strong>Ashoka Lodge, Kharagpur</strong></span>
                      <span className="text-gold font-mono">{weddingData.hashtag}</span>
                      <span>Timing: <strong>7:00 PM onwards</strong></span>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </motion.div>
          )}

          {activeTab === 'bride' && (
            <motion.div
              key="bride-tree"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl flex flex-col items-center"
            >
              <TiltCard maxTilt={8} depth={22} className="w-full">
                <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#241D17] to-[#120F0D] border-2 border-gold/45 shadow-2xl flex flex-col items-center text-center">
                  <div className="px-4 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-serif-luxury tracking-widest uppercase mb-4">
                    The Biswas Family Heritage
                  </div>

                  <Flower2 className="w-12 h-12 text-gold mb-3" />

                  <h3 className="text-2xl sm:text-3xl font-display-luxury font-bold text-cream gold-foil-text mb-4">
                    Lineage of the Bride
                  </h3>

                  {/* Mother Card */}
                  <div className="w-full p-5 rounded-2xl bg-black/40 border border-gold/30 mb-6 text-center">
                    <span className="text-[10px] font-sans tracking-[0.2em] text-gold-light uppercase block mb-1">
                      Generation I · Mother
                    </span>
                    <h4 className="font-display-luxury text-xl font-bold text-cream">
                      Smt. Shashi Kala Biswas
                    </h4>
                    <p className="text-xs text-muted-light font-sans mt-2 max-w-md mx-auto">
                      "Carrying the ancestral warmth, strength and blessings for her beloved daughter."
                    </p>
                  </div>

                  {/* Branch Down Arrow */}
                  <div className="w-0.5 h-10 bg-gradient-to-b from-gold to-transparent my-1" />

                  {/* Daughter Card */}
                  <div className="w-full p-5 rounded-2xl bg-gold/10 border border-gold/40 text-center">
                    <span className="text-[10px] font-sans tracking-[0.2em] text-gold-light uppercase block mb-1">
                      Generation II · The Bride
                    </span>
                    <div className="w-20 h-20 rounded-full mx-auto p-1 bg-gold shadow-gold-glow my-2 overflow-hidden">
                      <img src={brideTree.member.photo} alt={brideTree.member.name} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <h4 className="font-display-luxury text-2xl font-bold text-cream gold-foil-text">
                      Priyanka
                    </h4>
                    <p className="text-xs text-champagne/90 font-serif-luxury italic mt-1">
                      D/o Smt. Shashi Kala Biswas
                    </p>
                    <p className="text-[11px] text-muted-light font-sans mt-2">
                      Residence: {brideTree.address}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          )}

          {activeTab === 'groom' && (
            <motion.div
              key="groom-tree"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl flex flex-col items-center"
            >
              <TiltCard maxTilt={8} depth={22} className="w-full">
                <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#241D17] to-[#120F0D] border-2 border-gold/45 shadow-2xl flex flex-col items-center text-center">
                  <div className="px-4 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-serif-luxury tracking-widest uppercase mb-4">
                    The Molla Family Heritage
                  </div>

                  <Shield className="w-12 h-12 text-gold mb-3" />

                  <h3 className="text-2xl sm:text-3xl font-display-luxury font-bold text-cream gold-foil-text mb-4">
                    Lineage of the Groom
                  </h3>

                  {/* Parents Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6">
                    <div className="p-4 rounded-2xl bg-black/40 border border-gold/30 text-center">
                      <span className="text-[10px] font-sans tracking-[0.2em] text-gold-light uppercase block mb-1">
                        Father
                      </span>
                      <h4 className="font-display-luxury text-lg font-bold text-cream">
                        Mr. Abul Kashem Molla
                      </h4>
                      <p className="text-[11px] text-muted-light font-sans mt-1">
                        Pillar of strength and guidance
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-black/40 border border-gold/30 text-center">
                      <span className="text-[10px] font-sans tracking-[0.2em] text-gold-light uppercase block mb-1">
                        Mother
                      </span>
                      <h4 className="font-display-luxury text-lg font-bold text-cream">
                        Mrs. Fatema Molla
                      </h4>
                      <p className="text-[11px] text-muted-light font-sans mt-1">
                        Warmth, affection and blessings
                      </p>
                    </div>
                  </div>

                  {/* Branch Down Arrow */}
                  <div className="w-0.5 h-10 bg-gradient-to-b from-gold to-transparent my-1" />

                  {/* Son Card */}
                  <div className="w-full p-5 rounded-2xl bg-gold/10 border border-gold/40 text-center">
                    <span className="text-[10px] font-sans tracking-[0.2em] text-gold-light uppercase block mb-1">
                      Generation II · The Groom
                    </span>
                    <div className="w-20 h-20 rounded-full mx-auto p-1 bg-gold shadow-gold-glow my-2 overflow-hidden">
                      <img src={groomTree.member.photo} alt={groomTree.member.name} className="w-full h-full object-cover rounded-full" />
                    </div>
                    <h4 className="font-display-luxury text-2xl font-bold text-cream gold-foil-text">
                      Reon
                    </h4>
                    <p className="text-xs text-champagne/90 font-serif-luxury italic mt-1">
                      S/o Mr. Abul Kashem Molla & Mrs. Fatema Molla
                    </p>
                    <p className="text-[11px] text-muted-light font-sans mt-2">
                      Residence: {groomTree.address}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
