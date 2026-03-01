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

/**
 * Premium Wave Separator
 */
export function WaveSeparator({ className = "", color = "currentColor" }: DecorationProps) {
    return (
        <svg
            viewBox="0 0 1440 120"
            className={className}
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 120V60C0 60 360 0 720 60C1080 120 1440 60 1440 60V120H0Z"
                fill={color}
            />
        </svg>
    );
}
