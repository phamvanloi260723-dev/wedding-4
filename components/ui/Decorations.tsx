"use client";

import { motion } from "framer-motion";

interface DecorationProps {
    className?: string;
    color?: string;
}

/**
 * Elegant Floral Corner Decoration
 */
export function FloralCorner({ className = "", color = "currentColor" }: DecorationProps) {
    return (
        <svg
            viewBox="0 0 200 200"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20 180C20 180 40 120 100 100C160 80 180 20 180 20"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.6"
            />
            <path
                d="M60 140C60 140 80 170 110 160"
                stroke={color}
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.4"
            />
            <path
                d="M140 60C140 60 170 80 160 110"
                stroke={color}
                strokeWidth="1"
                strokeLinecap="round"
                opacity="0.4"
            />
            {/* Abstract Leaf shapes */}
            <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M100 100C110 90 130 90 140 100C130 110 110 110 100 100Z"
                fill={color}
            />
            <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                d="M60 140C70 130 90 130 100 140C90 150 70 150 60 140Z"
                fill={color}
            />
        </svg>
    );
}

/**
 * Elegant Leaf Divider
 */
export function FloralDivider({ className = "", color = "currentColor" }: DecorationProps) {
    return (
        <div className={`flex items-center justify-center gap-4 ${className}`}>
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-current opacity-20" />
            <svg
                viewBox="0 0 100 30"
                className="w-16 h-8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10 15C10 15 30 5 50 15C70 25 90 15 90 15"
                    stroke={color}
                    strokeWidth="1"
                    strokeLinecap="round"
                    opacity="0.5"
                />
                <circle cx="50" cy="15" r="2" fill={color} opacity="0.8" />
                <path
                    d="M45 12C45 12 48 8 50 10C52 8 55 12 55 12"
                    stroke={color}
                    strokeWidth="0.8"
                    opacity="0.6"
                />
            </svg>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-current opacity-20" />
        </div>
    );
}

interface WaveProps extends DecorationProps {
    flip?: boolean;
    height?: number;
}

/**
 * Premium Wave Separator
 */
export function WaveSeparator({ className = "", color = "currentColor", flip = false, height = 120 }: WaveProps) {
    return (
        <svg
            viewBox={`0 0 1440 ${height}`}
            className={`${className} ${flip ? 'rotate-180' : ''}`}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={`M0 ${height}V ${height / 2}C0 ${height / 2} 360 0 720 ${height / 2}C1080 ${height} 1440 ${height / 2} 1440 ${height / 2}V ${height}H0Z`}
                fill={color}
            />
        </svg>
    );
}

/**
 * Floating Petals Animation
 */
export function FloatingPetals({ count = 12, className = "" }: { count?: number; className?: string }) {
    const petals = Array.from({ length: count });
    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
            {petals.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: "-10%",
                        opacity: 0,
                        rotate: 0,
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                        y: "110%",
                        opacity: [0, 0.6, 0.6, 0],
                        rotate: Math.random() > 0.5 ? 360 : -360,
                        x: (Math.random() * 100) + (Math.random() * 20 - 10) + "%",
                    }}
                    transition={{
                        duration: Math.random() * 10 + 15,
                        repeat: Infinity,
                        delay: Math.random() * 10,
                        ease: "linear",
                    }}
                    className="absolute"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 2C12 2 15 6 15 10C15 14 12 18 12 18C12 18 9 14 9 10C9 6 12 2 12 2Z"
                            fill="var(--color-primary-light)"
                            opacity="0.3"
                        />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
}

/**
 * Premium Sparkles Effect
 */
export function PremiumSparkles({ className = "" }: { className?: string }) {
    return (
        <div className={`absolute inset-0 pointer-events-none ${className}`}>
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        scale: 0,
                        opacity: 0
                    }}
                    animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 0.8, 0],
                    }}
                    transition={{
                        duration: Math.random() * 2 + 1,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "easeInOut"
                    }}
                    style={{
                        boxShadow: '0 0 8px 1px white'
                    }}
                />
            ))}
        </div>
    );
}

/**
 * Side Floral Branch Decoration
 */
export function SideFloralBranch({ className = "", flip = false }: { className?: string; flip?: boolean }) {
    return (
        <div className={`${className} ${flip ? 'scale-x-[-1]' : ''}`}>
            <svg viewBox="0 0 100 600" fill="none" className="w-full h-full text-primary" opacity="0.15">
                <path
                    d="M10 0 Q30 150 10 300 T10 600"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    strokeDasharray="4 4"
                />
                {[...Array(6)].map((_, i) => (
                    <motion.path
                        key={i}
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.6 }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                        d={`M10 ${i * 100 + 50} Q40 ${i * 100 + 30} 60 ${i * 100 + 10} M10 ${i * 100 + 50} Q40 ${i * 100 + 70} 60 ${i * 100 + 90}`}
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeLinecap="round"
                    />
                ))}
            </svg>
        </div>
    );
}

/**
 * Continuous Falling Bubbles Effect (White & Blue)
 */
export function FallingBubbles({ count = 40, className = "" }: { count?: number; className?: string }) {
    const bubbles = Array.from({ length: count });
    return (
        <div className={`fixed inset-0 pointer-events-none overflow-hidden z-[10001] ${className}`}>
            {bubbles.map((_, i) => {
                const isBlue = Math.random() > 0.5;
                const size = Math.random() * 8 + 4;
                const duration = Math.random() * 8 + 8;
                const delay = Math.random() * 15;

                return (
                    <motion.div
                        key={i}
                        initial={{
                            x: (Math.random() * 100) + "vw",
                            y: "-10vh",
                            opacity: 0,
                        }}
                        animate={{
                            y: "110vh",
                            opacity: [0, 0.5, 0.5, 0],
                            x: (Math.random() * 100) + "vw",
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            delay: -delay, // Use negative delay for instant start
                            ease: "linear",
                        }}
                        className="absolute"
                        style={{
                            width: size,
                            height: size,
                            borderRadius: "50%",
                            backgroundColor: isBlue ? "var(--color-primary-light)" : "#ffffff",
                            boxShadow: isBlue ? "0 0 12px rgba(124, 154, 194, 0.4)" : "0 0 12px rgba(255, 255, 255, 0.6)",
                            filter: "blur(0.5px)",
                        }}
                    />
                );
            })}
        </div>
    );
}
