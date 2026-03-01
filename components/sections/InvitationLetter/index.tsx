"use client";

import { motion } from "framer-motion";
import { WEDDING_DATA } from "@/data/wedding-data";
import { FloatingPetals } from "@/components";

export default function InvitationLetter() {
    const { intro } = WEDDING_DATA.content;

    return (
        <section id="intro" className="section py-10 md:py-16 bg-white relative overflow-hidden">
            <FloatingPetals count={8} className="opacity-40" />
            <div className="section-inner max-w-3xl relative z-10 px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                    className="relative bg-white p-8 md:p-14 rounded-[35px] md:rounded-[60px] shadow-sm border border-primary/5"
                >
                    {/* Ornate Frame (Background Layer) */}
                    <div className="absolute inset-0 pointer-events-none z-0 opacity-25">
                        <svg className="w-full h-full text-primary" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M10,5 L90,5 Q95,5 95,10 L95,90 Q95,95 90,95 L10,95 Q5,95 5,90 L5,10 Q5,5 10,5 Z" fill="none" stroke="currentColor" strokeWidth="0.8" />
                            <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                            <circle cx="95" cy="5" r="1.5" fill="currentColor" />
                            <circle cx="5" cy="95" r="1.5" fill="currentColor" />
                            <circle cx="95" cy="95" r="1.5" fill="currentColor" />
                            <path d="M40,5 L60,5 M40,95 L60,95 M5,40 L5,60 M95,40 L95,60" stroke="currentColor" strokeWidth="1.2" />
                        </svg>
                    </div>

                    <div className="relative z-10 text-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mb-8 md:mb-10 inline-block p-4 rounded-full bg-primary/5"
                        >
                            <span className="text-3xl md:text-4xl">✉️</span>
                        </motion.div>

                        <div className="space-y-8 md:space-y-10">
                            <h2 className="text-4xl md:text-6xl font-script text-primary italic leading-tight">
                                {intro.title}
                            </h2>
                            <div className="section-divider h-px w-24 bg-primary/20 mx-auto" />
                            <div
                                className="text-base md:text-xl font-body text-slate-600 leading-[1.8] md:leading-[2.2] italic max-w-xl mx-auto"
                                dangerouslySetInnerHTML={{ __html: intro.mainText }}
                            />
                            <div className="section-divider h-px w-24 bg-primary/20 mx-auto" />
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-primary/60 font-bold">
                                {intro.eyebrow}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
