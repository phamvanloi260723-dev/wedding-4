"use client";

import { motion } from "framer-motion";
import { WEDDING_DATA } from "@/data/wedding-data";
import { FloralCorner, PremiumSparkles } from "@/components";

export default function HeroSection() {
  const { groom, bride, images, events } = WEDDING_DATA;
  const weddingDate = new Date(events.wedding.date);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={images.main}
          alt="Wedding Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <PremiumSparkles className="opacity-30" />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">
        {/* Decorative Florals */}
        <FloralCorner className="absolute top-0 left-0 w-48 h-48 text-white/10 -translate-x-8 -translate-y-8" />
        <FloralCorner className="absolute bottom-0 right-0 w-48 h-48 text-white/10 translate-x-8 translate-y-8 rotate-180" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          <p className="text-sm uppercase tracking-[0.5em] mb-8 font-body opacity-90">
            Save the Date
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
            <h1 className="text-5xl md:text-7xl font-title tracking-wider leading-tight">
              {groom.name}
            </h1>
            <span className="text-3xl md:text-5xl font-script italic text-primary-light">
              &
            </span>
            <h1 className="text-5xl md:text-7xl font-title tracking-wider leading-tight">
              {bride.name}
            </h1>
          </div>

          <div className="h-[1px] w-24 bg-white/50 mx-auto mb-8" />

          <div className="font-body tracking-[0.2em] flex flex-col gap-2">
            <p className="text-lg md:text-xl uppercase">
              {weddingDate.toLocaleDateString('vi-VN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
            {/* <p className="text-sm opacity-80 italic">
              Tại {events.wedding.location}
            </p> */}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-60">Cuộn xuống</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-12 bg-gradient-to-b from-white to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
