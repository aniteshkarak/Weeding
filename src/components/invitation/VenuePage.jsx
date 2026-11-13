import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export default function VenuePage({ venue }) {
  const mapsUrl = venue?.mapsUrl || "https://maps.app.goo.gl/XzURPCksuPgBktre7";

  const handleOpenMaps = () => {
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="h-full flex flex-col justify-between items-center text-center py-2 sm:py-3 overflow-hidden">
      {/* Header */}
      <div>
        <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] uppercase text-gold font-medium block">
          LOCATION & DIRECTIONS
        </span>
        <h2 className="text-xl sm:text-2xl font-serif-luxury font-bold text-brown gold-foil-text tracking-wide mt-0.5">
          Wedding Venue
        </h2>
        <div className="w-14 h-[1px] bg-gold/40 mx-auto mt-1" />
      </div>

      {/* Main Venue Card */}
      <div className="my-auto max-w-sm px-1 w-full space-y-2.5">
        {/* Venue Information Box */}
        <div className="bg-white/85 p-3 sm:p-4 rounded-xl border border-gold/30 shadow-xs text-center space-y-1.5">
          {/* Map Pin Icon */}
          <div className="w-9 h-9 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center mx-auto mb-1">
            <MapPin className="w-4 h-4 text-gold-dark" />
          </div>

          {/* Venue Name */}
          <h3 className="text-xl sm:text-2xl font-display-luxury font-bold text-brown tracking-wider">
            {venue?.name || "ASHOKA LODGE"}
          </h3>

          <div className="w-12 h-[1px] bg-gold/30 mx-auto my-1" />

          {/* Full Address */}
          <div className="text-xs sm:text-[13px] font-serif-luxury text-brown/90 leading-relaxed px-2 space-y-0.5">
            <p className="font-semibold">{venue?.landmark || "Near Bazar Kolkata"},</p>
            <p>{venue?.road || "Malancha Road"},</p>
            <p>{venue?.city || "Kharagpur"},</p>
            <p className="font-medium text-brown">West Bengal – 721301.</p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 grid grid-cols-2 gap-2">
            {/* Google Maps Button */}
            <button
              onClick={handleOpenMaps}
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-gold/15 hover:bg-gold/25 border border-gold/40 text-brown font-sans text-xs font-medium transition-all group shadow-2xs"
              title="Open Google Maps"
            >
              <ExternalLink className="w-3.5 h-3.5 text-gold-dark group-hover:scale-110 transition-transform" />
              <span>Google Maps</span>
            </button>

            {/* Get Directions Button */}
            <button
              onClick={handleOpenMaps}
              className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg bg-gradient-to-r from-gold-dark via-gold to-gold-light text-brown-deep font-sans text-xs font-semibold uppercase tracking-wider shadow-2xs hover:brightness-105 transition-all group"
              title="Get Directions to Ashoka Lodge"
            >
              <Navigation className="w-3.5 h-3.5 text-brown-deep group-hover:rotate-45 transition-transform" />
              <span>Get Directions</span>
            </button>
          </div>
        </div>

        {/* Travel Note */}
        <div className="bg-cream/90 p-2 rounded-lg border border-gold/20 text-center">
          <p className="text-[10px] text-muted font-sans leading-relaxed">
            Conveniently situated near Bazar Kolkata on Malancha Road, accessible by local transport and taxis from Kharagpur Railway Station.
          </p>
        </div>
      </div>

      {/* Footer Contact */}
      <div className="text-center">
        <span className="text-[10px] font-sans text-muted tracking-wider">
          Kharagpur, Paschim Medinipur · West Bengal
        </span>
      </div>
    </div>
  );
}
