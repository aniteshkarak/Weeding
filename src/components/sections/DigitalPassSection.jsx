import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Sparkles, ShieldCheck, Download } from 'lucide-react';
import TiltCard from '../3d/TiltCard';
import QRCodeComponent from '../common/QRCode';

export default function DigitalPassSection({ weddingData }) {
  const handlePrintPass = () => {
    window.print();
  };

  return (
    <section id="pass" className="relative py-20 sm:py-28 px-4 w-full flex flex-col items-center justify-center">
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
            <span className="text-xs font-sans tracking-[0.3em] uppercase">Honoured Guest Access</span>
            <span className="w-8 h-[1px] bg-gold/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display-luxury font-bold text-cream tracking-wide">
            Digital Invitation Pass
          </h2>
          <p className="text-xs sm:text-sm font-serif-luxury text-champagne/80 tracking-widest mt-2">
            Show this VIP digital pass upon arrival at Ashoka Lodge, Kharagpur
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mt-3" />
        </motion.div>

        {/* 3D Holographic VIP Pass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="w-full max-w-xl"
        >
          <TiltCard maxTilt={10} depth={28} className="w-full">
            <div className="relative rounded-3xl p-6 sm:p-9 bg-gradient-to-br from-[#2E241C] via-[#1B1612] to-[#100D0B] border-2 border-gold/70 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(212,190,141,0.25)] overflow-hidden">
              {/* Holographic light shimmer strip */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-light/20 via-transparent to-transparent pointer-events-none" />

              {/* Top VIP Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-gold/30 mb-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-light" />
                  <span className="text-xs font-sans tracking-[0.25em] uppercase text-gold-light font-semibold">
                    VIP GUEST PASS
                  </span>
                </div>
                <span className="text-xs font-mono text-gold-light/80">
                  PASS #PR-2026
                </span>
              </div>

              {/* Main Pass Content */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <QRCodeComponent className="shrink-0" />

                <div className="flex flex-col text-center sm:text-left">
                  <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-gold-light mb-1">
                    ROYAL WEDDING CELEBRATION
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display-luxury font-bold text-cream gold-foil-text mb-2">
                    {weddingData.bride.name} & {weddingData.groom.name}
                  </h3>
                  <p className="text-xs font-serif-luxury text-champagne/90 mb-1">
                    Date: <strong>25 – 27 November 2026</strong>
                  </p>
                  <p className="text-xs font-serif-luxury text-champagne/90 mb-3">
                    Venue: <strong>{weddingData.venue.name}, Kharagpur</strong>
                  </p>
                  <div className="inline-block px-3 py-1 rounded bg-gold/15 border border-gold/30 text-[10px] font-mono text-gold-light tracking-wider self-center sm:self-start">
                    {weddingData.hashtag}
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Stub */}
              <div className="mt-6 pt-4 border-t border-dashed border-gold/30 flex items-center justify-between text-[11px] text-muted-light font-sans">
                <span>Admission: Family & Honoured Guests</span>
                <button
                  onClick={handlePrintPass}
                  className="flex items-center gap-1.5 text-gold-light hover:text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Save / Print</span>
                </button>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
