"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Location } from "@/types/wedding";

interface MapModalProps {
    isOpen: boolean;
    onClose: () => void;
    locations: Location[];
}

export function MapModal({ isOpen, onClose, locations }: MapModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/70 backdrop-blur-md"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="bg-white w-full max-w-5xl rounded-[40px] overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh] border border-primary/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-50 bg-white/90 p-3 rounded-full text-gray-400 hover:text-primary transition-all shadow-md active:scale-90"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 md:p-14 overflow-y-auto">
                            <div className="text-center mb-10">
                                <h3 className="text-3xl md:text-4xl font-heading text-primary uppercase tracking-widest">Bản Đồ Chỉ Đường</h3>
                                <div className="w-12 h-1 bg-primary/20 mx-auto mt-4" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {locations.map((loc, idx) => (
                                    <div key={idx} className="flex flex-col gap-4">
                                        <div className="bg-slate-50 p-5 rounded-3xl border border-primary/5">
                                            <p className="font-heading text-xl text-primary mb-1">{loc.label}</p>
                                            <p className="text-xs text-slate-500 leading-relaxed">{loc.address}</p>
                                        </div>
                                        <div className="aspect-video w-full rounded-[25px] overflow-hidden border-2 border-primary/5">
                                            <iframe src={loc.mapEmbed} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title={loc.label}></iframe>
                                        </div>
                                        <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                                            target="_blank" rel="noreferrer"
                                            className="py-3 bg-primary/5 hover:bg-primary/10 rounded-xl text-primary font-bold text-[10px] tracking-widest uppercase text-center transition-all"
                                        >
                                            Mở Google Maps
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
