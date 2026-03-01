"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { WEDDING_DATA } from "@/data/wedding-data";

// Using a list of images with orientation.
// Pattern: V, V, H, V, V, H... for variety
const slideVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : direction < 0 ? -1000 : 0,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : direction > 0 ? -1000 : 0,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface GalleryImage {
  src: string;
  alt: string;
  isHorizontal: boolean;
}

export default function GallerySection() {
  const galleryImages = WEDDING_DATA.images.gallery;
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);

  const displayedImages = isExpanded ? galleryImages : galleryImages.slice(0, 6);

  const paginate = (newDirection: number) => {
    if (selectedImage === null) return;
    setDirection(newDirection);
    let nextIndex = selectedImage + newDirection;
    if (nextIndex < 0) nextIndex = galleryImages.length - 1;
    if (nextIndex >= galleryImages.length) nextIndex = 0;
    setSelectedImage(nextIndex);
  };

  if (!galleryImages || galleryImages.length === 0) return null;

  return (
    <section className="section bg-white">
      <div className="section-inner">
        <div className="text-center mb-12">
          <p className="eyebrow mb-2">{WEDDING_DATA.content.gallery.eyebrow}</p>
          <h2 className="text-3xl font-title text-primary tracking-widest uppercase">
            {WEDDING_DATA.content.gallery.title}
          </h2>
          <div className="section-divider" />
        </div>

        {/* 2-column grid */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-4 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedImages.map((item, index) => (
              <motion.div
                layout
                key={index}
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group relative cursor-pointer overflow-hidden rounded-3xl shadow-sm aspect-[3/4] bg-secondary/10"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={item.src}
                  alt={item.alt || `${WEDDING_DATA.content.gallery.title} ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {galleryImages.length > 6 && (
          <div className="mt-20 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="relative w-20 h-20 mx-auto group"
            >
              {/* Jewelry-like background */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-full shadow-[0_8px_32px_rgba(176,141,87,0.1)] border border-primary/20" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative h-full flex items-center justify-center">
                <motion.div
                  animate={isExpanded ? { scale: [1, 1.1, 1] } : { scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <svg
                    className={`w-8 h-8 transition-all duration-700 ${isExpanded ? 'text-primary' : 'text-primary/70'}`}
                    fill={isExpanded ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.button>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              className="mt-6 text-[10px] uppercase tracking-[0.6em] text-primary/80 font-medium"
            >
              {isExpanded ? "Thu gọn" : "Xem thêm"}
            </motion.p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white p-2 z-[120]">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
              <Image
                src={galleryImages[selectedImage].src}
                alt="Full preview"
                fill
                className="object-contain"
              />
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white"
                onClick={() => paginate(-1)}
              >
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-white/50 hover:text-white"
                onClick={() => paginate(1)}
              >
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
