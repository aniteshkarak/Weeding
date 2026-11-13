import React from 'react';
import ScrollProgress from '../components/3d/ScrollProgress';
import FloatingGoldCanvas from '../components/3d/FloatingGoldCanvas';
import LuxuryNavbar from '../components/sections/LuxuryNavbar';
import HeroSection from '../components/sections/HeroSection';
import BlessingsSection from '../components/sections/BlessingsSection';
import CoupleSection from '../components/sections/CoupleSection';
import EventsSection from '../components/sections/EventsSection';
import FamilyTreeSection from '../components/sections/FamilyTreeSection';
import CountdownSection from '../components/sections/CountdownSection';
import VenueSection from '../components/sections/VenueSection';
import PresenceSection from '../components/sections/PresenceSection';
import GuestWishesSection from '../components/sections/GuestWishesSection';
import FooterSection from '../components/sections/FooterSection';
import { weddingData } from '../data/weddingData';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-[#0F0D0B] text-cream overflow-x-hidden selection:bg-gold/30 selection:text-gold-light">
      {/* Top 3D Scroll Progress Line */}
      <ScrollProgress />

      {/* Ambient Floating Gold Particles Canvas */}
      <FloatingGoldCanvas />

      {/* Floating Luxury Glass Navigation Bar */}
      <LuxuryNavbar weddingData={weddingData} />

      {/* Main 3D Scrolling Content Sections */}
      <main className="relative z-20 flex flex-col w-full">
        {/* 1. Grand Hero Section */}
        <HeroSection weddingData={weddingData} />

        {/* 2. Family Blessings */}
        <BlessingsSection weddingData={weddingData} />

        {/* 3. The Couple Spotlight */}
        <CoupleSection weddingData={weddingData} />

        {/* 4. Wedding Festivities (Comes FIRST as requested) */}
        <EventsSection weddingData={weddingData} />

        {/* 5. Family Heritage Tree (Comes THEN as requested) */}
        <FamilyTreeSection weddingData={weddingData} />

        {/* 6. Live Countdown */}
        <CountdownSection weddingData={weddingData} />

        {/* 7. The Venue & Interactive Map */}
        <VenueSection weddingData={weddingData} />

        {/* 8. Heartfelt Presence Appeal */}
        <PresenceSection weddingData={weddingData} />

        {/* 9. Guest Wishes & Blessings (Replaced Digital Pass) */}
        <GuestWishesSection weddingData={weddingData} />
      </main>

      {/* Grand Footer */}
      <FooterSection weddingData={weddingData} />
    </div>
  );
}