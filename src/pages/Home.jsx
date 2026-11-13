import React from 'react';
import ScrollProgress from '../components/3d/ScrollProgress';
import FloatingGoldCanvas from '../components/3d/FloatingGoldCanvas';
import LuxuryNavbar from '../components/sections/LuxuryNavbar';
import HeroSection from '../components/sections/HeroSection';
import BlessingsSection from '../components/sections/BlessingsSection';
import CoupleSection from '../components/sections/CoupleSection';
import EventsSection from '../components/sections/EventsSection';
import CountdownSection from '../components/sections/CountdownSection';
import VenueSection from '../components/sections/VenueSection';
import GallerySection from '../components/sections/GallerySection';
import PresenceSection from '../components/sections/PresenceSection';
import DigitalPassSection from '../components/sections/DigitalPassSection';
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
        <HeroSection weddingData={weddingData} />
        <BlessingsSection weddingData={weddingData} />
        <CoupleSection weddingData={weddingData} />
        <EventsSection weddingData={weddingData} />
        <CountdownSection weddingData={weddingData} />
        <VenueSection weddingData={weddingData} />
        <GallerySection weddingData={weddingData} />
        <PresenceSection weddingData={weddingData} />
        <DigitalPassSection weddingData={weddingData} />
      </main>

      {/* Grand Footer */}
      <FooterSection weddingData={weddingData} />
    </div>
  );
}