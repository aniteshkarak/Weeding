import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Building2 } from 'lucide-react';
import TiltCard from '../3d/TiltCard';

export default function VenueSection({ weddingData }) {
  const handleOpenMaps = () => {
    window.open(weddingData.venue.mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="venue" className="relative py-20 sm:py-28 px-4 w-full flex flex-col items-center justify-center">
      <div className="max-w-5xl w-full flex flex-col items-center">
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
            <span className="text-xs font-sans tracking-[0.3em] uppercase">Celebration Destination</span>
            <span className="w-8 h-[1px] bg-gold/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display-luxury font-bold text-cream tracking-wide">
            The Wedding Venue
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mt-3" />
        </motion.div>

        {/* 3D Elevated Venue Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="w-full"
        >
          <TiltCard maxTilt={6} depth={22} className="w-full">
            <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#241D17] via-[#1B1612] to-[#110E0B] border border-gold/45 shadow-2xl flex flex-col md:flex-row items-center gap-8 overflow-hidden">
              {/* Left Column: Venue Details */}
              <div className="flex-1 flex flex-col items-start text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold-light text-xs font-serif-luxury tracking-widest uppercase mb-4">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Main Venue</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-display-luxury font-bold text-cream tracking-wide mb-3 gold-foil-text">
                  {weddingData.venue.name}
                </h3>

                <div className="space-y-2 mb-6 text-cream/90 font-serif-luxury text-base sm:text-lg">
                  <p className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                    <span>Near Bazar Kolkata, Malancha Road</span>
                  </p>
                  <p className="pl-6 text-sm sm:text-base text-muted-light font-sans">
                    Kharagpur, Paschim Medinipur, West Bengal – 721301
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-gold/20 mb-6 text-xs text-champagne/80 font-sans max-w-md">
                  💡 <strong className="text-gold-light">Landmark:</strong> Easily accessible on Malancha Road near Bazar Kolkata with ample valet parking.
                </div>

                {/* Google Maps Actions */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={handleOpenMaps}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-brown-deep font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-gold-glow hover:scale-105 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open in Google Maps</span>
                  </button>

                  <button
                    onClick={handleOpenMaps}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-cream border border-gold/40 font-sans text-xs sm:text-sm font-medium tracking-wider uppercase transition-all hover:scale-105"
                  >
                    <Navigation className="w-4 h-4 text-gold-light" />
                    <span>Get Directions</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Embedded Small-Size Interactive Google Map */}
              <div className="w-full md:w-80 lg:w-96 h-64 sm:h-72 rounded-2xl overflow-hidden border-2 border-gold/50 shadow-xl relative bg-black/70 flex flex-col group">
                <iframe
                  title="Ashoka Lodge Venue Location Map"
                  src="https://maps.google.com/maps?q=Ashoka+Lodge,+Malancha+Road,+Kharagpur,+West+Bengal+721301&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-2xl opacity-90 group-hover:opacity-100 transition-opacity"
                />

                {/* Floating Map Pin Badge */}
                <div 
                  onClick={handleOpenMaps}
                  className="absolute bottom-2.5 right-2.5 px-3 py-1 rounded-full bg-black/85 backdrop-blur-md border border-gold/50 text-[10px] text-gold-light cursor-pointer hover:bg-gold/20 transition-colors flex items-center gap-1.5 shadow-lg select-none"
                  title="Open in Google Maps App"
                >
                  <MapPin className="w-3 h-3 text-gold animate-bounce" />
                  <span className="font-sans font-medium">Ashoka Lodge · Map</span>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
