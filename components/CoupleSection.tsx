"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WEDDING_DATA } from "@/data/wedding-data";

export default function CoupleSection() {
    const { groom, bride, content } = WEDDING_DATA;
    const { couple } = content;

    return (
        <section
            id="couple"
            className="bg-white py-24 relative overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-6">

                {/* Title */}
                <div className="text-center mb-20">
                    <span className="text-xs uppercase tracking-[0.5em] text-primary/60 font-semibold block mb-4">
                        Groom & Bride
                    </span>
                    <h2 className="text-5xl md:text-7xl font-script text-primary italic">
                        Cặp Đôi
                    </h2>
                    <div className="h-[1px] w-24 bg-primary/20 mx-auto mt-6" />
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-20 items-stretch">

                    {/* Groom */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center h-full"
                    >
                        <div className="relative w-[240px] h-[340px] md:w-[280px] md:h-[400px] mb-10">
                            <div className="relative w-full h-full rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                                <Image
                                    src={WEDDING_DATA.images.couplePhoto}
                                    alt={groom.name}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-heading text-primary uppercase tracking-widest mb-4">
                            {groom.name}
                        </h3>

                        <div className="space-y-1 text-slate-600 italic text-sm md:text-base mb-6 flex-1">
                            <p>
                                Con ông:{" "}
                                <span className="font-semibold text-primary/80">
                                    {groom.parents.father.name}
                                </span>
                            </p>
                            <p>
                                Con bà:{" "}
                                <span className="font-semibold text-primary/80">
                                    {groom.parents.mother.name}
                                </span>
                            </p>
                        </div>

                        <div className="h-[1px] w-12 bg-primary/20 mb-6" />

                        <p className="text-slate-500 italic max-w-xs">
                            {couple.groomBio}
                        </p>
                    </motion.div>

                    {/* Bride */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="relative w-[240px] h-[340px] md:w-[280px] md:h-[400px] mb-10">
                            <div className="relative w-full h-full rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
                                <Image
                                    src={WEDDING_DATA.images.couplePhoto}
                                    alt={groom.name}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-heading text-primary uppercase tracking-widest mb-4">
                            {bride.name}
                        </h3>

                        <div className="space-y-1 text-slate-600 italic text-sm md:text-base mb-6 flex-1">
                            <p>
                                Con ông:{" "}
                                <span className="font-semibold text-primary/80">
                                    {bride.parents.father.name}
                                </span>
                            </p>
                            <p>
                                Con bà:{" "}
                                <span className="font-semibold text-primary/80">
                                    {bride.parents.mother.name}
                                </span>
                            </p>
                        </div>

                        <div className="h-[1px] w-12 bg-primary/20 mb-6" />

                        <p className="text-slate-500 italic max-w-xs">
                            {couple.brideBio}
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}