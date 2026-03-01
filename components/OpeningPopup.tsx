"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WEDDING_DATA } from "@/data/wedding-data";

export default function OpeningPopup({ onOpen }: { onOpen: () => void }) {
    const [isVisible, setIsVisible] = useState(true);

    const handleOpen = () => {
        setIsVisible(false);
        setTimeout(onOpen, 800);
    };

    // Particles/Petals for luxury feel
    const petals = Array.from({ length: 12 });

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
                    className="opening-overlay overflow-hidden"
                >
                    {/* Background & Cinematic Overlay */}
                    <div className="absolute inset-0 z-0">
                        <motion.img
                            initial={{ scale: 1.1 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 20, ease: "linear" }}
                            src={WEDDING_DATA.images.opening}
                            alt="Opening"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
                    </div>

                    {/* Floating Petals / Particles */}
                    <div className="absolute inset-0 z-[5] pointer-events-none">
                        {petals.map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    x: Math.random() * 100 + "%",
                                    y: "-10%",
                                    opacity: 0,
                                    rotate: 0,
                                    scale: Math.random() * 0.5 + 0.5
                                }}
                                animate={{
                                    y: "110%",
                                    opacity: [0, 0.4, 0.4, 0],
                                    rotate: 360,
                                    x: (Math.random() * 100 - 50) + "vw"
                                }}
                                transition={{
                                    duration: Math.random() * 10 + 10,
                                    repeat: Infinity,
                                    delay: Math.random() * 10,
                                    ease: "linear"
                                }}
                                className="absolute"
                            >
                                <div className="w-4 h-4 rounded-full bg-white/20 blur-[2px]" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 1.5, ease: "easeOut" }}
                        >
                            <span className="text-[11px] uppercase tracking-[0.8em] text-white/60 mb-16 block font-body">
                                The Wedding Celebration of
                            </span>

                            <div className="space-y-6 mb-20">
                                <motion.h1
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8, duration: 2 }}
                                    className="text-6xl md:text-8xl text-white font-script leading-tight drop-shadow-2xl"
                                >
                                    {WEDDING_DATA.groom.name}
                                </motion.h1>

                                <div className="flex items-center justify-center gap-8">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: 40 }}
                                        transition={{ delay: 1.2, duration: 1.5 }}
                                        className="h-px bg-white/30"
                                    />
                                    <span className="text-4xl text-primary-light font-script italic opacity-80">&</span>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: 40 }}
                                        transition={{ delay: 1.2, duration: 1.5 }}
                                        className="h-px bg-white/30"
                                    />
                                </div>

                                <motion.h1
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1, duration: 2 }}
                                    className="text-6xl md:text-8xl text-white font-script leading-tight drop-shadow-2xl"
                                >
                                    {WEDDING_DATA.bride.name}
                                </motion.h1>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.15)" }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleOpen}
                                className="group relative px-10 py-3.5 rounded-full overflow-hidden transition-all duration-700"
                            >
                                {/* Glass background */}
                                <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/30 rounded-full" />

                                {/* Light sweep effect */}
                                <span className="absolute inset-0 overflow-hidden rounded-full">
                                    <span className="absolute -left-1/3 top-0 h-full w-1/3
                     bg-gradient-to-r from-transparent via-white/60 to-transparent
                     skew-x-[-25deg]
                     group-hover:left-[130%]
                     transition-all duration-1200 ease-out" />
                                </span>

                                {/* Hover fill */}
                                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />

                                <span className="relative z-10 text-white group-hover:text-black transition-colors duration-700 tracking-[0.25em] uppercase text-xs font-semibold">
                                    {WEDDING_DATA.content.opening.openButton}
                                </span>
                            </motion.button>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
