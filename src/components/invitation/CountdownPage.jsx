import React, { useState } from 'react';
import Countdown from '../common/Countdown';
import { Calendar, Clock, Sparkles, CalendarPlus, Check, Download } from 'lucide-react';
import { getGoogleCalendarUrl, downloadICalFile } from '../../utils/dateUtils';

export default function CountdownPage({ wedding }) {
  const [added, setAdded] = useState(false);

  const handleGoogleCalendar = () => {
    const url = getGoogleCalendarUrl({});
    window.open(url, '_blank');
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  const handleDownloadICal = () => {
    downloadICalFile({});
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <div className="h-full flex flex-col justify-between items-center text-center py-2 sm:py-3 overflow-hidden">
      {/* Header */}
      <div>
        <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] uppercase text-gold font-medium block">
          THE MOMENT APPROACHES
        </span>
        <h2 className="text-xl sm:text-2xl font-serif-luxury font-bold text-brown gold-foil-text tracking-wide mt-0.5">
          Wedding Countdown
        </h2>
        <div className="w-14 h-[1px] bg-gold/40 mx-auto mt-1" />
      </div>

      {/* Main Countdown Display */}
      <div className="my-auto max-w-sm w-full px-1 flex flex-col items-center space-y-3">
        <p className="text-xs sm:text-sm font-serif-luxury text-brown/90 italic leading-relaxed">
          "Counting every heartbeat until Priyanka & Reon take their sacred vows."
        </p>

        {/* Real-time Countdown Timer */}
        <div className="w-full">
          <Countdown
            weddingDate={wedding?.date || "2026-11-26"}
            weddingTime={wedding?.time || "19:00"}
            timezone={wedding?.timezone || "Asia/Kolkata"}
          />
        </div>

        {/* Date & Muhurat Card */}
        <div className="bg-white/85 p-2.5 sm:p-3 rounded-xl border border-gold/30 shadow-xs w-full text-center space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm font-serif-luxury font-bold text-brown">
            <Calendar className="w-3.5 h-3.5 text-gold" />
            <span>Thursday, 26 November 2026</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 text-xs text-muted font-sans">
            <Clock className="w-3 h-3 text-gold" />
            <span>7:00 PM onwards · Asia/Kolkata</span>
          </div>
        </div>

        {/* New Feature: Add to Calendar Smart Buttons */}
        <div className="w-full space-y-1.5">
          <span className="text-[10px] font-sans uppercase tracking-wider text-muted block">
            Save the Date to Your Calendar:
          </span>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleGoogleCalendar}
              className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-gold/15 hover:bg-gold/25 border border-gold/35 text-brown font-sans text-[11px] font-medium transition-all group shadow-2xs"
            >
              <CalendarPlus className="w-3.5 h-3.5 text-gold-dark group-hover:scale-110 transition-transform" />
              <span>Google Calendar</span>
            </button>

            <button
              onClick={handleDownloadICal}
              className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-white/80 hover:bg-white border border-gold/35 text-brown font-sans text-[11px] font-medium transition-all group shadow-2xs"
            >
              <Download className="w-3.5 h-3.5 text-gold-dark group-hover:translate-y-0.5 transition-transform" />
              <span>Apple / Outlook</span>
            </button>
          </div>

          {added && (
            <p className="text-[10px] text-emerald-700 font-sans flex items-center justify-center gap-1">
              <Check className="w-3 h-3" /> Event added to your calendar!
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="text-center">
        <span className="text-[10px] font-sans uppercase tracking-widest text-gold-dark font-medium">
          Indian Standard Time (IST)
        </span>
      </div>
    </div>
  );
}
