import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import TiltCard from '../3d/TiltCard';

export default function EventsSection({ weddingData }) {
  return (
    <section id="events" className="relative py-20 sm:py-28 px-4 w-full flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-20 flex flex-col items-center"
        >
          <div className="flex items-center gap-2 text-gold-light mb-2">
            <span className="w-8 h-[1px] bg-gold/50" />
            <span className="text-xs font-sans tracking-[0.3em] uppercase">Ceremony Itinerary</span>
            <span className="w-8 h-[1px] bg-gold/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display-luxury font-bold text-cream tracking-wide">
            Wedding Festivities
          </h2>
          <p className="text-xs sm:text-sm font-serif-luxury text-champagne/80 tracking-widest mt-2">
            Three days of auspicious traditions, love, music and celebration
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mt-3" />
        </motion.div>

        {/* 3D Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
          {weddingData.events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="w-full"
            >
              <TiltCard maxTilt={7} depth={20} className="w-full h-full">
                <div className="relative rounded-3xl p-5 sm:p-7 bg-gradient-to-b from-[#221B16] via-[#1A1511] to-[#120F0D] border border-gold/40 shadow-2xl flex flex-col h-full overflow-hidden group">
                  {/* Event Index Watermark */}
                  <div className="absolute top-3 right-5 text-5xl font-display-luxury font-bold text-gold/10 pointer-events-none select-none">
                    0{index + 1}
                  </div>

                  {/* Top Header Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                    <span className="px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold-light text-xs font-sans font-semibold tracking-wider uppercase">
                      Event 0{index + 1}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-cream/90 font-serif-luxury tracking-wide">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Actual Event Photo (Fit cleanly according to aspect ratio with object-contain) */}
                  {event.image && (
                    <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden bg-black/50 border border-gold/30 p-1 mb-5 flex items-center justify-center">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl group-hover:scale-102 transition-transform duration-500"
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
                  <p className="text-sm font-serif-luxury text-cream/85 italic leading-relaxed mb-4">
                    "{event.description}"
                  </p>

                  {/* Venue location pill */}
                  <div className="mt-auto pt-3 border-t border-gold/20 flex items-center justify-between text-xs text-muted-light font-sans">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      {weddingData.venue.name}, Kharagpur
                    </span>
                    <span className="text-[10px] text-gold tracking-widest uppercase">
                      Traditional Attire
                    </span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}