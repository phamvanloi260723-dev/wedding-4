"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { WEDDING_DATA } from "@/data/wedding-data";

export default function OpeningPopup({ onOpen }: { onOpen: () => void }) {
    const [isVisible, setIsVisible] = useState(true);

    const handleOpen = () => {
        setIsVisible(false);
        setTimeout(onOpen, 1000); // Slightly longer for smoother outward transition
    };

    // Particles/Petals for luxury feel
    const petals = Array.from({ length: 15 });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const nameVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 1 + i * 0.1,
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                    className="opening-overlay overflow-hidden fixed inset-0 z-[9999] flex flex-col items-center justify-center text-center bg-background"
                >
                    {/* Background & Cinematic Ken Burns Effect */}
                    <div className="absolute inset-0 z-0">
                        <motion.div
                            initial={{ scale: 1.15, x: "2%", y: "2%" }}
                            animate={{ scale: 1, x: "0%", y: "0%" }}
                            transition={{ duration: 25, ease: "linear" }}
                            className="w-full h-full"
                        >
                            <img
                                src={WEDDING_DATA.images.opening}
                                alt="Opening"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />

                        {/* Elegant Desktop Frame */}
                        <div className="hidden lg:block absolute inset-12 border border-white/15 pointer-events-none z-10" />
                        <div className="hidden lg:block absolute inset-16 border border-white/5 pointer-events-none z-10" />
                    </div>

                    {/* Floating Luxury Particles */}
                    <div className="absolute inset-0 z-[5] pointer-events-none">
                        {petals.map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    x: Math.random() * 100 + "%",
                                    y: "-10%",
                                    opacity: 0,
                                    rotate: 0,
                                    scale: Math.random() * 0.4 + 0.3,
                                }}
                                animate={{
                                    y: "110%",
                                    opacity: [0, 0.5, 0.5, 0],
                                    rotate: Math.random() > 0.5 ? 360 : -360,
                                    x: Math.random() * 100 + "%",
                                }}
                                transition={{
                                    duration: Math.random() * 12 + 15,
                                    repeat: Infinity,
                                    delay: Math.random() * 5,
                                    ease: "linear",
                                }}
                                className="absolute"
                            >
                                <div className="w-4 h-4 rounded-full bg-white/10 blur-[3px]" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8"
                    >
                        <motion.span
                            variants={itemVariants}
                            className="text-[10px] md:text-xs uppercase tracking-[0.8em] text-white/50 mb-12 block font-body font-medium"
                        >
                            The Wedding Celebration of
                        </motion.span>

                        <div className="space-y-4 md:space-y-6 mb-16 md:mb-24">
                            <motion.h1
                                custom={0}
                                variants={nameVariants}
                                className="text-6xl md:text-8xl lg:text-9xl text-white font-script leading-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                            >
                                {WEDDING_DATA.groom.name}
                            </motion.h1>

                            <motion.div
                                variants={itemVariants}
                                className="flex items-center justify-center gap-6 md:gap-10"
                            >
                                <div className="h-px w-8 md:w-16 bg-white/20" />
                                <span className="text-3xl md:text-5xl lg:text-6xl text-primary-light font-script italic opacity-90 drop-shadow-lg">
                                    &
                                </span>
                                <div className="h-px w-8 md:w-16 bg-white/20" />
                            </motion.div>

                            <motion.h1
                                custom={1}
                                variants={nameVariants}
                                className="text-6xl md:text-8xl lg:text-9xl text-white font-script leading-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                            >
                                {WEDDING_DATA.bride.name}
                            </motion.h1>
                        </div>

                        <motion.div variants={itemVariants}>
                            <motion.button
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: "0 0 30px rgba(255,255,255,0.1)",
                                }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleOpen}
                                className="group relative px-12 py-4 rounded-full overflow-hidden transition-all duration-700"
                            >
                                {/* Premium Glass background */}
                                <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-500" />

                                {/* Light sweep effect */}
                                <span className="absolute inset-0 overflow-hidden rounded-full">
                                    <span
                                        className="absolute -left-1/3 top-0 h-full w-1/3
                     bg-gradient-to-r from-transparent via-white/40 to-transparent
                     skew-x-[-25deg]
                     group-hover:left-[130%]
                     transition-all duration-1500 ease-out"
                                    />
                                </span>

                                <span className="relative z-10 text-white tracking-[0.4em] uppercase text-[10px] md:text-xs font-semibold">
                                    {WEDDING_DATA.content.opening.openButton}
                                </span>

                                {/* Subtle outer glow on hover */}
                                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl bg-white/50 -z-10" />
                            </motion.button>
                        </motion.div>

                        {/* Scroll Indicator Hint (Subtle) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.3 }}
                            transition={{ delay: 3, duration: 2 }}
                            className="absolute bottom-10 flex flex-col items-center gap-3"
                        >
                            <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
