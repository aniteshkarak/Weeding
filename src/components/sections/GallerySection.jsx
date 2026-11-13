import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import TiltCard from '../3d/TiltCard';

export default function GallerySection({ weddingData }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const galleryItems = weddingData.gallery || [
    { id: 1, title: "Cover Portrait", caption: "Priyanka & Reon — A Beautiful Story Begins", src: weddingData.coverImage },
    { id: 2, title: "Haldi Celebration", caption: "Auspicious blessings, joy and golden turmeric moments", src: "/images/events/haldi.jpg" },
    { id: 3, title: "Mehendi Traditions", caption: "Intricate henna, celebration and colorful joy", src: "/images/events/mehendi.jpg" },
    { id: 4, title: "Wedding Reception", caption: "An evening of celebration, togetherness and love", src: "/images/events/reception.jpg" },
  ];

  const openLightbox = (index) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="gallery" className="relative py-20 sm:py-28 px-4 w-full flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center">
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
            <span className="text-xs font-sans tracking-[0.3em] uppercase">Visual Journey</span>
            <span className="w-8 h-[1px] bg-gold/50" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display-luxury font-bold text-cream tracking-wide">
            Moments of Love & Joy
          </h2>
          <p className="text-xs sm:text-sm font-serif-luxury text-champagne/80 tracking-widest mt-2">
            Cherished photographs capturing the beginning of our forever
          </p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mt-3" />
        </motion.div>

        {/* 3D Interactive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="w-full"
            >
              <TiltCard
                maxTilt={12}
                depth={25}
                onClick={() => openLightbox(idx)}
                className="cursor-pointer group h-full"
              >
                <div className="relative rounded-2xl p-2.5 bg-gradient-to-b from-[#241D17] to-[#120F0D] border border-gold/40 shadow-xl flex flex-col h-full overflow-hidden transition-all duration-300 group-hover:border-gold">
                  <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden bg-black/50 p-1 flex items-center justify-center">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg group-hover:scale-104 transition-transform duration-500"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-gold/80 text-brown-deep flex items-center justify-center shadow-gold-glow">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 px-1 text-center">
                    <h4 className="font-display-luxury text-base font-semibold text-cream">
                      {item.title}
                    </h4>
                    <p className="text-[11px] font-serif-luxury text-muted-light line-clamp-1 italic mt-0.5">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 select-none"
          >
            {/* Top Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 text-gold-light hover:text-white border border-gold/40 transition-colors z-50"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-gold-light border border-gold/40 transition-all z-50"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-gold-light border border-gold/40 transition-all z-50"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Modal Image */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[78vh] flex flex-col items-center"
            >
              <img
                src={galleryItems[selectedImageIndex].src}
                alt={galleryItems[selectedImageIndex].title}
                className="max-h-[70vh] max-w-full object-contain rounded-xl border-2 border-gold/50 shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="font-display-luxury text-xl font-bold text-cream">
                  {galleryItems[selectedImageIndex].title}
                </h3>
                <p className="font-serif-luxury text-sm text-gold-light italic mt-1">
                  {galleryItems[selectedImageIndex].caption}
                </p>
                <span className="text-[10px] text-muted-light font-sans mt-1 block">
                  {selectedImageIndex + 1} of {galleryItems.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}