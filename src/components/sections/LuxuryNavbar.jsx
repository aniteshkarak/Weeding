import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Share2, Sparkles } from 'lucide-react';
import ShareButton from '../common/ShareButton';

export default function LuxuryNavbar({ weddingData }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Our Story", href: "#story" },
    { label: "The Couple", href: "#couple" },
    { label: "Celebrations", href: "#events" },
    { label: "Family Tree", href: "#family-tree" },
    { label: "Countdown", href: "#countdown" },
    { label: "Venue", href: "#venue" },
    { label: "Presence", href: "#presence" },
    { label: "Send Wishes", href: "#wishes" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#120F0D]/90 backdrop-blur-md border-b border-gold/30 shadow-2xl py-2.5'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2 select-none"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-gold-dark via-gold to-gold-light p-[1px] shadow-gold-glow group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-[#1A1410] flex items-center justify-center">
              <span className="font-display-luxury text-sm font-bold text-gold-light tracking-widest">
                P&R
              </span>
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display-luxury text-xs sm:text-sm font-semibold tracking-[0.2em] text-cream uppercase">
              Priyanka & Reon
            </span>
            <span className="text-[9px] font-sans tracking-[0.3em] text-gold-light uppercase hidden sm:block">
              26 November 2026
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs font-serif-luxury tracking-[0.18em] uppercase text-cream/80 hover:text-gold-light transition-colors relative group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-gold via-gold-light to-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2.5">
          <ShareButton
            brideName={weddingData.bride.name}
            groomName={weddingData.groom.name}
            date="26 November 2026"
            venue={`${weddingData.venue.name}, Kharagpur`}
          />

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-white/10 text-gold-light hover:text-white border border-gold/30 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#16120E]/98 border-b border-gold/40 backdrop-blur-xl px-5 py-6 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-3.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-serif-luxury tracking-widest uppercase text-cream hover:text-gold flex items-center justify-between py-1.5 border-b border-white/5"
              >
                <span>{link.label}</span>
                <span className="text-gold text-xs">›</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
