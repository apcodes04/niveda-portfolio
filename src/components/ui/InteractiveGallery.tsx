'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface InteractiveGalleryProps {
  gallery: string[];
  title: string;
}

export function InteractiveGallery({ gallery, title }: InteractiveGalleryProps) {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => {
    setSelectedIdx(idx);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) => (prev !== null && prev < gallery.length - 1 ? prev + 1 : 0));
    }
  }, [selectedIdx, gallery.length]);

  const prevImage = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : gallery.length - 1));
    }
  }, [selectedIdx, gallery.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, closeLightbox, nextImage, prevImage]);

  // Manage body scroll locking based on lightbox state and handle cleanup on unmount
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedIdx]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {gallery.map((img, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="aspect-[4/3] bg-secondary-bg rounded-xl overflow-hidden border border-accent-bg/30 relative cursor-zoom-in group"
          >
            <img
              src={img}
              alt={`${title} gallery image ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        ))}
        {gallery.length === 0 && (
          <div className="aspect-[4/3] bg-secondary-bg rounded-xl flex items-center justify-center border border-accent-bg/30 text-secondary-text col-span-full">
            Images Coming Soon
          </div>
        )}
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 select-none touch-none"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-55 pointer-events-auto cursor-pointer"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Left Navigation Arrow */}
            {gallery.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-55 pointer-events-auto cursor-pointer hidden md:block"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            {/* Main Image Container */}
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-[95vw] max-h-[80vh] md:max-w-[85vw] md:max-h-[85vh] flex items-center justify-center pointer-events-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            >
              <img
                src={gallery[selectedIdx]}
                alt={`${title} enlarged image ${selectedIdx + 1}`}
                className="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain rounded shadow-2xl"
              />
            </motion.div>

            {/* Right Navigation Arrow */}
            {gallery.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-200 z-55 pointer-events-auto cursor-pointer hidden md:block"
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            )}

            {/* Bottom Controls / Counter for Mobile & Desktop */}
            <div 
              className="absolute bottom-6 flex items-center gap-6 text-white/70 pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {gallery.length > 1 && (
                <div className="flex md:hidden gap-4">
                  <button
                    onClick={prevImage}
                    className="bg-white/10 p-2 rounded-full active:bg-white/20"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <span className="text-sm font-medium self-center">
                    {selectedIdx + 1} / {gallery.length}
                  </span>
                  <button
                    onClick={nextImage}
                    className="bg-white/10 p-2 rounded-full active:bg-white/20"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
              <span className="hidden md:inline text-sm tracking-wider font-light">
                {title} — {selectedIdx + 1} of {gallery.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
