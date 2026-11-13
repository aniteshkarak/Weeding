import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function GalleryPage({ gallery = [] }) {
  const [activeIdx, setActiveIdx] = useState(null);

  const openLightbox = (index) => {
    setActiveIdx(index);
  };

  const closeLightbox = () => {
    setActiveIdx(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="h-full flex flex-col justify-between items-center text-center py-2 sm:py-3 overflow-hidden">
      {/* Header */}
      <div>
        <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] uppercase text-gold font-medium block">
          MEMORIES & MOMENTS
        </span>
        <h2 className="text-xl sm:text-2xl font-serif-luxury font-bold text-brown gold-foil-text tracking-wide mt-0.5">
          Photo Gallery
        </h2>
        <div className="w-14 h-[1px] bg-gold/40 mx-auto mt-1" />
      </div>

      {/* Gallery Grid (Balanced 2x2 luxury layout fitted according to image proportions) */}
      <div className="my-auto w-full max-w-sm px-1">
        <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
          {gallery.map((item, index) => (
            <div
              key={item.id || index}
              onClick={() => openLightbox(index)}
              className="group relative rounded-xl overflow-hidden border border-gold/40 bg-white/70 p-1 cursor-pointer shadow-xs hover:border-gold transition-all duration-300 flex flex-col items-center"
            >
              <div className="w-full h-24 sm:h-28 rounded-lg overflow-hidden flex items-center justify-center bg-black/5">
                <img
                  src={item.src}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "/images/wedding/cover.jpg";
                  }}
                />
              </div>
              <div className="w-full py-1 px-1 flex items-center justify-between text-left">
                <span className="text-[10px] font-serif-luxury font-semibold text-brown truncate">
                  {item.title}
                </span>
                <ZoomIn className="w-3 h-3 text-gold shrink-0 opacity-70 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>

        <p className="text-[10px] text-muted font-sans mt-2.5 italic">
          Tap any photograph to view in full resolution
        </p>
      </div>

      {/* Footer Accent */}
      <div className="text-center">
        <span className="text-[10px] font-sans uppercase tracking-widest text-gold-dark font-medium">
          Captured In Love · Cherished Forever
        </span>
      </div>

      {/* Lightbox Modal (Displays 100% Uncropped Image Fitted to Viewport) */}
      {activeIdx !== null && gallery[activeIdx] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/92 backdrop-blur-md select-none animate-fade-in"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-cream/80 hover:text-white p-2 z-50 transition-colors"
            title="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
            title="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 transition-colors"
            title="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-xl w-full max-h-[90vh] bg-[#1C1814] border border-gold/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center text-center p-3 sm:p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex-1 max-h-[68vh] rounded-xl overflow-hidden border border-gold/25 mb-2.5 bg-black/90 flex items-center justify-center p-1">
              <img
                src={gallery[activeIdx].src}
                alt={gallery[activeIdx].title}
                className="max-h-[66vh] max-w-full object-contain"
                onError={(e) => {
                  e.target.src = "/images/wedding/cover.jpg";
                }}
              />
            </div>

            <h3 className="text-base sm:text-lg font-serif-luxury font-bold text-cream tracking-wide">
              {gallery[activeIdx].title}
            </h3>
            <p className="text-xs font-serif-luxury italic text-champagne/85 mt-0.5 max-w-md">
              "{gallery[activeIdx].caption}"
            </p>

            <span className="text-[10px] text-muted font-mono mt-1.5">
              {activeIdx + 1} / {gallery.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
