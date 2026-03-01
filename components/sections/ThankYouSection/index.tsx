"use client";

import { motion } from "framer-motion";
import { WEDDING_DATA } from "@/data/wedding-data";

export default function ThankYouSection() {
    return (
        <section id="thank-you" className="section min-h-screen flex items-center justify-center bg-background py-20 relative overflow-hidden">
            {/* Artistic Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="text-[20vw] font-script text-primary/5 whitespace-nowrap leading-none">
                    Thank You
                </span>
            </div>

            <div className="section-inner max-w-4xl relative z-10">
                <div className="ornate-border rounded-[60px] bg-white p-12 md:p-20 shadow-xl relative text-center">
                    {/* Restored Ornate Frame */}
                    <div className="absolute inset-0 pointer-events-none opacity-20">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M10,5 L90,5 Q95,5 95,10 L95,90 Q95,95 90,95 L10,95 Q5,95 5,90 L5,10 Q5,5 10,5 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="5" cy="5" r="1.5" fill="currentColor" />
                            <circle cx="95" cy="5" r="1.5" fill="currentColor" />
                            <circle cx="5" cy="95" r="1.5" fill="currentColor" />
                            <circle cx="95" cy="95" r="1.5" fill="currentColor" />
                            <path d="M40,5 L60,5 M40,95 L60,95 M5,40 L5,60 M95,40 L95,60" stroke="currentColor" strokeWidth="1" />
                        </svg>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="relative"
                    >
                        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-12 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                            <img
                                src={WEDDING_DATA.images.footerPhoto}
                                alt="Thank You"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                        </div>

                        <div className="parallel-divider mb-8">
                            <span className="text-primary font-script text-4xl md:text-5xl">Sincerely,</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-script text-primary mb-10">
                            {WEDDING_DATA.groom.name.split(' ').pop()} & {WEDDING_DATA.bride.name.split(' ').pop()}
                        </h2>

                        <div className="space-y-4">
                            <p className="text-text-light font-body tracking-[0.3em] uppercase text-xs">
                                See you on our big day
                            </p>
                            <div className="flex justify-center gap-4 text-primary/40">
                                <span>✦</span>
                                <span>✦</span>
                                <span>✦</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="mt-12 text-center text-[10px] uppercase tracking-[0.5em] text-text-light opacity-50"
                >
                    {WEDDING_DATA.content.footer.credit}
                </motion.p>
            </div>
        </section>
    );
}
