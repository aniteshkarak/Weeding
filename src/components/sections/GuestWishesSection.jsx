import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Send, MessageCircle, Copy, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import TiltCard from '../3d/TiltCard';

export default function GuestWishesSection({ weddingData }) {
  const [guestName, setGuestName] = useState('');
  const [guestRelation, setGuestRelation] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const quickWishes = [
    "Wishing Priyanka & Reon a lifetime of endless love, joy & blessings! ✨",
    "May your beautiful journey together be filled with laughter & prosperity! 🌸",
    "Heartiest congratulations! Looking forward to attending all 4 ceremonies! 💛"
  ];

  const handleSelectQuickWish = (wish) => {
    setMessage(wish);
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4BE8D', '#FFF2D1', '#8C713F', '#E5C578']
      });
    } catch (err) {}

    const greeting = guestName.trim() ? `From: ${guestName.trim()}${guestRelation.trim() ? ` (${guestRelation.trim()})` : ''}\n\n` : '';
    const body = message.trim() || `Dearest ${weddingData.bride.name} & ${weddingData.groom.name}, heartiest congratulations on your wedding! Wishing you a blessed and beautiful marriage!`;
    const fullText = `*Wedding Blessing for ${weddingData.bride.name} & ${weddingData.groom.name}*\n\n${greeting}"${body}"\n\n${weddingData.hashtag}`;

    window.open(`https://wa.me/?text=${encodeURIComponent(fullText)}`, '_blank');
  };

  const handleCopyWish = () => {
    const greeting = guestName.trim() ? `From: ${guestName.trim()}${guestRelation.trim() ? ` (${guestRelation.trim()})` : ''}\n\n` : '';
    const body = message.trim() || `Dearest ${weddingData.bride.name} & ${weddingData.groom.name}, heartiest congratulations on your wedding! Wishing you a blessed and beautiful marriage!`;
    const fullText = `Wedding Blessing for ${weddingData.bride.name} & ${weddingData.groom.name}\n\n${greeting}"${body}"\n\n${weddingData.hashtag}`;

    navigator.clipboard.writeText(fullText).then(() => {
      setCopied(true);
      try {
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.7 },
          colors: ['#D4BE8D', '#FFF2D1', '#8C713F']
        });
      } catch (err) {}
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="wishes" className="relative py-20 sm:py-28 px-4 w-full flex flex-col items-center justify-center">
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
            <span className="text-xs font-sans tracking-[0.3em] uppercase">Blessings & Guestbook</span>
            <span className="w-8 h-[1px] bg-gold/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display-luxury font-bold text-cream tracking-wide">
            Send Your Warmest Blessings
          </h2>
          <p className="text-xs sm:text-sm font-serif-luxury text-champagne/80 tracking-widest mt-2 max-w-lg">
            Share your love, prayers and wishes for Priyanka & Reon as they begin their sacred journey together
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mt-3" />
        </motion.div>

        {/* 3D Elevated Guestbook Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="w-full max-w-2xl"
        >
          <TiltCard maxTilt={6} depth={22} className="w-full">
            <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-[#261E18] via-[#1B1511] to-[#100D0B] border-2 border-gold/50 shadow-2xl overflow-hidden">
              {/* Corner Ornaments */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-gold/60" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-gold/60" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-gold/60" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-gold/60" />

              <div className="flex items-center justify-center gap-2 mb-6">
                <Heart className="w-5 h-5 text-gold-light fill-gold/30 animate-pulse" />
                <span className="text-xs font-serif-luxury tracking-[0.25em] text-gold-light uppercase font-semibold">
                  Personal Blessing Message
                </span>
                <Heart className="w-5 h-5 text-gold-light fill-gold/30 animate-pulse" />
              </div>

              <form onSubmit={handleSendWhatsApp} className="space-y-4 text-left">
                {/* Name & Relation Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-wider text-gold-light/90 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-gold/30 text-cream text-xs font-sans placeholder-white/30 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-sans uppercase tracking-wider text-gold-light/90 mb-1">
                      Relationship / Family
                    </label>
                    <input
                      type="text"
                      value={guestRelation}
                      onChange={(e) => setGuestRelation(e.target.value)}
                      placeholder="e.g. Friend, Cousin, Well-wisher"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-gold/30 text-cream text-xs font-sans placeholder-white/30 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                {/* Quick Presets */}
                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-wider text-muted-light mb-1.5">
                    Quick Wishes (Tap to choose):
                  </label>
                  <div className="flex flex-col gap-1.5">
                    {quickWishes.map((w, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => handleSelectQuickWish(w)}
                        className="text-left text-[11px] font-serif-luxury italic text-champagne/80 hover:text-gold-light p-2 rounded-lg bg-white/5 hover:bg-gold/10 border border-gold/15 transition-all"
                      >
                        "{w}"
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-wider text-gold-light/90 mb-1">
                    Your Blessing
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your prayers, blessings and congratulatory wishes..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-gold/30 text-cream text-xs font-serif-luxury placeholder-white/30 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-600 text-white font-sans text-xs font-semibold tracking-wider uppercase shadow-xl hover:scale-102 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyWish}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 text-gold-light border border-gold/40 font-sans text-xs font-medium tracking-wider uppercase transition-all hover:scale-102"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? "Copied!" : "Copy Blessing"}</span>
                  </button>
                </div>
              </form>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}