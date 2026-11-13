import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles, Heart, Sun, Moon, Flame, GlassWater } from 'lucide-react';
import TiltCard from '../3d/TiltCard';

export default function EventsSection({ weddingData }) {
  // Event thematic icons & accents
  const eventIcons = [
    { icon: Sun, color: "text-amber-400", bg: "bg-amber-400/20", border: "border-amber-400/50" },
    { icon: Flame, color: "text-emerald-400", bg: "bg-emerald-400/20", border: "border-emerald-400/50" },
    { icon: Heart, color: "text-rose-400", bg: "bg-rose-400/20", border: "border-rose-400/50" },
    { icon: GlassWater, color: "text-purple-400", bg: "bg-purple-400/20", border: "border-purple-400/50" }
  ];

  return (
    <section id="events" className="relative py-20 sm:py-28 px-3 sm:px-6 w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col items-center relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24 flex flex-col items-center relative z-20"
        >
          <div className="flex items-center gap-2 text-gold-light mb-2">
            <span className="w-8 h-[1px] bg-gold/50" />
            <span className="text-xs font-sans tracking-[0.3em] uppercase">Sacred Milestones</span>
            <span className="w-8 h-[1px] bg-gold/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display-luxury font-bold text-cream tracking-wide">
            Wedding Festivities
          </h2>
          <p className="text-xs sm:text-sm font-serif-luxury text-champagne/80 tracking-widest mt-2 max-w-md">
            Follow the sacred golden tree of celebrations across three memorable days
          </p>
          <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mt-3" />
        </motion.div>

        {/* =========================================================================
            3D TREE LINE TIMELINE CONTAINER
            Mobile: Continuous Golden Tree Trunk on the Left with Branch Connectors
            Desktop: Centered Golden Tree Trunk with Alternating Branches
            ========================================================================= */}
        <div className="relative w-full">
          {/* MOBILE 3D TREE TRUNK LINE (Visible on screens < md) */}
          <div className="md:hidden absolute left-5 sm:left-7 top-6 bottom-8 w-[3.5px] bg-gradient-to-b from-gold via-gold-light to-gold-dark rounded-full pointer-events-none shadow-[0_0_15px_rgba(212,190,141,0.6)] z-10">
            {/* Shimmer light pulse running down the mobile tree trunk */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-transparent w-full h-40 animate-pulse pointer-events-none" />
          </div>

          {/* DESKTOP 3D CENTER TREE TRUNK LINE (Visible on md and up) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-12 w-[3.5px] bg-gradient-to-b from-gold-dark via-gold-light to-gold-dark rounded-full pointer-events-none shadow-[0_0_20px_rgba(212,190,141,0.5)] z-10">
            {/* Center golden root sprout at top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center shadow-gold-glow">
              <span className="w-2.5 h-2.5 rounded-full bg-gold-light animate-ping" />
            </div>
          </div>

          {/* EVENTS LIST WITH 3D TREE BRANCHES */}
          <div className="flex flex-col space-y-12 sm:space-y-16 md:space-y-24 w-full">
            {weddingData.events.map((event, index) => {
              const isEven = index % 2 === 0;
              const { icon: EventIcon, color: iconColor, bg: iconBg, border: iconBorder } = eventIcons[index] || eventIcons[0];

              return (
                <div
                  key={event.id}
                  className="relative w-full flex flex-col md:flex-row items-center"
                >
                  {/* =========================================================
                      MOBILE 3D TREE NODE & HORIZONTAL BRANCH CONNECTOR
                      ========================================================= */}
                  <div className="md:hidden absolute left-5 sm:left-7 top-8 -translate-x-1/2 z-20 flex items-center">
                    {/* Glowing 3D Node Medallion */}
                    <div className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-full ${iconBg} border-2 ${iconBorder} flex items-center justify-center shadow-[0_0_15px_rgba(182,154,101,0.6)] bg-[#1A1410]`}>
                      <EventIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${iconColor}`} />
                      {/* Leaf sprout badge */}
                      <span className="absolute -top-1 -right-1 text-[10px] transform rotate-12">🌿</span>
                    </div>

                    {/* Horizontal Branch connecting Tree Trunk to Card */}
                    <div className="w-6 sm:w-8 h-[2.5px] bg-gradient-to-r from-gold via-gold-light to-gold/40 shadow-[0_0_8px_rgba(212,190,141,0.5)]" />
                  </div>

                  {/* =========================================================
                      DESKTOP 3D CENTER TREE NODE
                      ========================================================= */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                    <div className="relative group cursor-pointer">
                      {/* Glowing 3D Medallion */}
                      <div className={`w-14 h-14 rounded-full ${iconBg} border-2 ${iconBorder} flex flex-col items-center justify-center shadow-[0_0_25px_rgba(182,154,101,0.7)] bg-[#18130F] group-hover:scale-110 transition-transform duration-300`}>
                        <EventIcon className={`w-5 h-5 ${iconColor} mb-0.5`} />
                        <span className="text-[9px] font-mono font-bold text-gold-light">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Golden Sprout Leaf Accent */}
                      <span className={`absolute -top-2 ${isEven ? '-right-2' : '-left-2'} text-sm text-gold-light animate-pulse`}>
                        🌿
                      </span>

                      {/* Connecting Horizontal Branch on Desktop */}
                      <div
                        className={`absolute top-1/2 -translate-y-1/2 h-[2.5px] bg-gradient-to-r from-gold via-gold-light to-gold/30 shadow-gold-glow pointer-events-none ${
                          isEven
                            ? 'right-full w-12 sm:w-16'
                            : 'left-full w-12 sm:w-16'
                        }`}
                      />
                    </div>
                  </div>

                  {/* =========================================================
                      3D EVENT CARD
                      Mobile: Placed with left padding to accommodate tree trunk
                      Desktop: Alternates Left and Right with central alignment
                      ========================================================= */}
                  <div
                    className={`w-full pl-14 sm:pl-20 md:pl-0 md:w-[46%] ${
                      isEven ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="w-full"
                    >
                      <TiltCard maxTilt={8} depth={22} className="w-full">
                        <div className="relative rounded-3xl p-5 sm:p-7 bg-gradient-to-b from-[#251D17] via-[#1B1612] to-[#110E0B] border border-gold/45 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8),0_0_30px_rgba(182,154,101,0.15)] flex flex-col h-full overflow-hidden group">
                          {/* Corner Ornaments */}
                          <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t border-l border-gold/40" />
                          <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t border-r border-gold/40" />
                          <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b border-l border-gold/40" />
                          <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b border-r border-gold/40" />

                          {/* Top Header Badge */}
                          <div className="flex items-center justify-between gap-2 mb-3.5 relative z-10">
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-light text-[10px] sm:text-xs font-sans font-semibold tracking-wider uppercase">
                              <Sparkles className="w-3 h-3 text-gold" />
                              <span>Ceremony 0{index + 1}</span>
                            </div>

                            <div className="flex items-center gap-1.5 text-xs text-cream/90 font-serif-luxury tracking-wide">
                              <Clock className="w-3.5 h-3.5 text-gold" />
                              <span>{event.time}</span>
                            </div>
                          </div>

                          {/* Event Photograph (Fit with object-contain according to size) */}
                          {event.image && (
                            <div className="relative w-full h-48 sm:h-56 md:h-60 rounded-2xl overflow-hidden bg-black/55 border border-gold/35 p-1 mb-4 flex items-center justify-center shadow-lg">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl group-hover:scale-103 transition-transform duration-500"
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                            </div>
                          )}

                          {/* Event Title */}
                          <h3 className="text-2xl sm:text-3xl font-display-luxury font-bold text-cream tracking-wide mb-2 gold-foil-text">
                            {event.title}
                          </h3>

                          {/* Date Badge */}
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-gold-light font-serif-luxury tracking-widest uppercase mb-3">
                            <Calendar className="w-4 h-4 text-gold shrink-0" />
                            <span>
                              {event.date === "2026-11-25" && "Wednesday, 25 November 2026"}
                              {event.date === "2026-11-26" && "Thursday, 26 November 2026"}
                              {event.date === "2026-11-27" && "Friday, 27 November 2026"}
                            </span>
                          </div>

                          {/* Event Description */}
                          <p className="text-xs sm:text-sm font-serif-luxury text-cream/85 italic leading-relaxed mb-4">
                            "{event.description}"
                          </p>

                          {/* Venue Location Pill */}
                          <div className="mt-auto pt-3 border-t border-gold/20 flex items-center justify-between text-[11px] sm:text-xs text-muted-light font-sans">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-gold" />
                              {weddingData.venue.name}, Kharagpur
                            </span>
                            <span className="text-[10px] text-gold tracking-widest uppercase">
                              Festive Celebration
                            </span>
                          </div>
                        </div>
                      </TiltCard>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}