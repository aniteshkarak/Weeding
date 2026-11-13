import React from 'react';
import { Heart, Sparkles, CheckCircle2, Calendar } from 'lucide-react';

export default function PresencePage({ brideName = "Priyanka", groomName = "Reon" }) {
  const functionsList = [
    {
      name: "Haldi Ceremony",
      date: "25 Nov 2026",
      time: "Morning",
      theme: "border-amber-400/60 bg-amber-50/70 text-amber-900",
      dot: "bg-amber-500",
      icon: "☀️"
    },
    {
      name: "Mehendi Ceremony",
      date: "25 Nov 2026",
      time: "Evening",
      theme: "border-emerald-400/60 bg-emerald-50/70 text-emerald-900",
      dot: "bg-emerald-500",
      icon: "🌿"
    },
    {
      name: "Wedding Ceremony",
      date: "26 Nov 2026",
      time: "7:00 PM Onwards",
      theme: "border-rose-400/60 bg-rose-50/70 text-rose-900",
      dot: "bg-rose-500",
      icon: "💍"
    },
    {
      name: "Wedding Reception",
      date: "27 Nov 2026",
      time: "7:00 PM Onwards",
      theme: "border-purple-400/60 bg-purple-50/70 text-purple-900",
      dot: "bg-purple-500",
      icon: "🥂"
    }
  ];

  return (
    <div className="h-full flex flex-col justify-between items-center text-center py-2 sm:py-3 overflow-hidden select-none">
      {/* Header */}
      <div>
        <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] uppercase text-gold font-medium block">
          A CORDIAL & HUMBLE REQUEST
        </span>
        <h2 className="text-xl sm:text-2xl font-serif-luxury font-bold text-brown gold-foil-text tracking-wide mt-0.5">
          Grace Every Moment
        </h2>
        <div className="w-14 h-[1px] bg-gold/40 mx-auto mt-1" />
      </div>

      {/* Main Heartfelt Presence Appeal */}
      <div className="my-auto max-w-sm px-1.5 w-full space-y-2.5">
        {/* Decorative Heart Icon */}
        <div className="w-8 h-8 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center mx-auto shadow-2xs">
          <Heart className="w-4 h-4 fill-gold/30 stroke-gold-dark animate-pulse" />
        </div>

        {/* Heartfelt Message */}
        <div className="bg-white/85 p-2.5 sm:p-3 rounded-xl border border-gold/30 shadow-xs text-center space-y-1.5">
          <p className="text-xs sm:text-[13px] font-serif-luxury font-bold text-brown tracking-wide">
            "Your Presence From Starting To End Is Our Greatest Blessing"
          </p>
          <div className="w-10 h-[1px] bg-gold/30 mx-auto" />
          <p className="text-[11px] sm:text-xs font-serif-luxury italic text-brown/90 leading-relaxed px-1">
            A wedding is incomplete without the laughter, warmth, and blessings of our loved ones. We earnestly request you and your family to join us right from the auspicious start on <strong>25th November</strong> until the grand finale on <strong>27th November</strong>.
          </p>
          <p className="text-[11px] font-serif-luxury font-semibold text-gold-dark tracking-wide">
            Kindly grace and attend all our wedding functions:
          </p>
        </div>

        {/* All Functions Checklist Grid */}
        <div className="grid grid-cols-2 gap-1.5 text-left">
          {functionsList.map((fn, idx) => (
            <div
              key={idx}
              className={`p-1.5 sm:p-2 rounded-lg border ${fn.theme} flex items-start gap-1.5 shadow-2xs`}
            >
              <span className="text-sm shrink-0">{fn.icon}</span>
              <div className="min-w-0">
                <p className="text-[11px] font-serif-luxury font-bold leading-tight truncate">
                  {fn.name}
                </p>
                <p className="text-[9px] font-sans opacity-85 leading-tight mt-0.5">
                  {fn.date} · <strong>{fn.time}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Urgent Warm Callout */}
        <div className="bg-gold/15 border border-gold/35 rounded-lg p-2 text-center">
          <p className="text-[10px] sm:text-[11px] font-serif-luxury font-semibold text-brown leading-snug">
            ✨ Please treat this as our personal and heartfelt invitation to celebrate every single ceremony with us!
          </p>
          <p className="text-[9px] font-sans text-muted mt-0.5 uppercase tracking-wider">
            Biswas & Molla Families Await Your Gracious Arrival
          </p>
        </div>
      </div>

      {/* Footer Accent */}
      <div className="text-center">
        <span className="text-[10px] font-serif-luxury italic text-muted">
          Your Love & Presence Make Our Celebration Complete
        </span>
      </div>
    </div>
  );
}

