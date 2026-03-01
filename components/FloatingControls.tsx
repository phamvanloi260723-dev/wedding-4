"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingControls({ autoPlay = false }: { autoPlay?: boolean }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        // Handle autoplay
        if (autoPlay && audioRef.current && !isPlaying) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
            }).catch(error => {
                console.log("Autoplay blocked by browser:", error);
            });
        }

        return () => window.removeEventListener("scroll", handleScroll);
    }, [autoPlay]);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
            <audio
                ref={audioRef}
                src="/music/i_do-duc_phuc.mp3"
                loop
            />

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="w-14 h-14 rounded-full bg-white text-accent shadow-lg flex items-center justify-center border border-primary-light/30"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Music Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMusic}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-colors border ${isPlaying
                    ? "bg-white text-primary border-primary-light/50"
                    : "bg-primary text-white border-transparent"
                    }`}
            >
                <div className="relative">
                    {isPlaying && (
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                            className="absolute inset-0 border-2 border-primary-light/30 rounded-full -m-2"
                        />
                    )}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                </div>
            </motion.button>



        </div>
    );
}
