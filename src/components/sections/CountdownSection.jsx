import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCountdown } from '../../hooks/useCountdown';
import { getGoogleCalendarUrl, downloadICalFile } from '../../utils/dateUtils';
import TiltCard from '../3d/TiltCard';

export default function CountdownSection({ weddingData }) {
  const timeLeft = useCountdown(weddingData.wedding.date, "19:00", weddingData.wedding.timezone);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  const handleCelebrate = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4BE8D', '#FFF2D1', '#8C713F', '#E5C578', '#FFFFFF']
      });
    } catch (e) {}
  };

  const handleGoogleCalendar = () => {
    handleCelebrate();
    const url = getGoogleCalendarUrl({
      title: `${weddingData.bride.name} Weds ${weddingData.groom.name} - Wedding Ceremony`,
      details: `Celebration of ${weddingData.bride.name} & ${weddingData.groom.name}'s Wedding Ceremony at ${weddingData.venue.name}, Kharagpur.`,
      location: weddingData.venue.address
    });
    window.open(url, '_blank');
  };

  const handleDownloadICal = () => {
    handleCelebrate();
    downloadICalFile({
      title: `${weddingData.bride.name} Weds ${weddingData.groom.name} - Wedding Ceremony`,
      details: `Celebration of ${weddingData.bride.name} & ${weddingData.groom.name}'s Wedding Ceremony at ${weddingData.venue.name}, Kharagpur.`,
      location: weddingData.venue.address
    });
  };

  return (
    <section id="countdown" className="relative py-20 sm:py-28 px-4 w-full flex flex-col items-center justify-center">
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
            <span className="text-xs font-sans tracking-[0.3em] uppercase">Counting Down</span>
            <span className="w-8 h-[1px] bg-gold/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display-luxury font-bold text-cream tracking-wide">
            Until We Say "I Do"
          </h2>
          <p className="text-xs sm:text-sm font-serif-luxury text-champagne/80 tracking-widest mt-2">
            26 November 2026 · 7:00 PM onwards · Ashoka Lodge, Kharagpur
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mt-3" />
        </motion.div>

        {/* 3D Countdown Blocks */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl mb-10 sm:mb-12">
          {timeUnits.map((unit, idx) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <TiltCard maxTilt={10} depth={20} className="w-full">
                <div className="relative rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#261E17] via-[#1A1410] to-[#100D0B] border border-gold/45 shadow-xl flex flex-col items-center text-center">
                  <span className="text-3xl sm:text-5xl md:text-6xl font-display-luxury font-bold text-cream tracking-wider gold-foil-text">
                    {String(unit.value || 0).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs font-serif-luxury tracking-[0.25em] text-gold-light uppercase mt-2">
                    {unit.label}
                  </span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Action Buttons for Saving Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <button
            onClick={handleGoogleCalendar}
            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light text-brown-deep font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-gold-glow hover:scale-105 transition-all"
          >
            <Calendar className="w-4 h-4 text-brown-deep" />
            <span>Add to Google Calendar</span>
          </button>

          <button
            onClick={handleDownloadICal}
            className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/15 text-cream border border-gold/40 font-sans text-xs sm:text-sm font-medium tracking-wider uppercase transition-all hover:scale-105"
          >
            <Download className="w-4 h-4 text-gold-light" />
            <span>Download Apple / iCal (.ics)</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}