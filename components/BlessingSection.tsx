"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, QrCode } from "lucide-react";
import { WEDDING_DATA } from "@/data/wedding-data";

const QRPopup = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean;
    onClose: () => void;
}) => {
    const { groom, bride, images } = WEDDING_DATA;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/70 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 30 }}
                        className="bg-white w-full max-w-4xl 
                       rounded-3xl md:rounded-[60px]
                       p-6 md:p-16
                       shadow-2xl relative
                       max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 md:top-6 md:right-6 
                         bg-slate-50 p-2 md:p-3 rounded-full 
                         text-slate-400 hover:text-primary transition-all"
                        >
                            <X size={22} />
                        </button>

                        {/* Title */}
                        <div className="text-center mb-8 md:mb-12">
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary/50 font-bold mb-4 block">
                                Wedding Gift
                            </span>
                            <h3 className="text-3xl md:text-5xl font-script text-primary italic">
                                Mừng Cưới
                            </h3>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                            {/* Groom */}
                            <div className="space-y-5 text-center">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold opacity-60">
                                        Nhà Trai
                                    </p>
                                    <p className="text-xl md:text-2xl font-heading text-primary uppercase">
                                        {groom.name}
                                    </p>
                                </div>

                                <div className="relative aspect-square max-w-[180px] md:max-w-[240px] mx-auto bg-slate-50 rounded-2xl md:rounded-3xl p-3 md:p-4 border border-primary/5">
                                    <img
                                        src={images.groomQR}
                                        alt="Groom QR"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div className="text-sm text-slate-500">
                                    <p className="font-bold text-slate-700">
                                        {groom.account.bank}
                                    </p>
                                    <p className="tracking-wider">
                                        {groom.account.accountNumber}
                                    </p>
                                </div>
                            </div>

                            {/* Bride */}
                            <div className="space-y-5 text-center">
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest text-primary font-bold opacity-60">
                                        Nhà Gái
                                    </p>
                                    <p className="text-xl md:text-2xl font-heading text-primary uppercase">
                                        {bride.name}
                                    </p>
                                </div>

                                <div className="relative aspect-square max-w-[180px] md:max-w-[240px] mx-auto bg-slate-50 rounded-2xl md:rounded-3xl p-3 md:p-4 border border-primary/5">
                                    <img
                                        src={images.brideQR}
                                        alt="Bride QR"
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <div className="text-sm text-slate-500">
                                    <p className="font-bold text-slate-700">
                                        {bride.account.bank}
                                    </p>
                                    <p className="tracking-wider">
                                        {bride.account.accountNumber}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-10 md:mt-16 pt-6 md:pt-8 border-t border-slate-100 text-center">
                            <p className="text-sm italic text-slate-400">
                                “Cảm ơn bạn đã gửi lời chúc mừng và món quà ý nghĩa!”
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default function BlessingSection() {
    const [isQRModalOpen, setIsQRModalOpen] = useState(false);
    const { content } = WEDDING_DATA;
    const { thankyou } = content;

    return (
        <section className="bg-white py-20 pb-28 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block p-6 rounded-full bg-primary/5 mb-8"
                >
                    <Heart size={32} className="text-primary" fill="currentColor" />
                </motion.div>

                <h2 className="text-4xl md:text-6xl font-script text-primary italic mb-6">
                    Mừng Cưới
                </h2>

                <p className="text-lg md:text-xl text-slate-500 italic leading-relaxed mb-12">
                    Sự hiện diện của bạn là niềm hạnh phúc lớn nhất đối với chúng mình.
                </p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsQRModalOpen(true)}
                    className="
    relative group
    bg-[#405C85] hover:bg-[#32496b]
    text-white
    py-6 px-10 md:px-14
    rounded-3xl
    font-bold text-base md:text-lg
    tracking-widest uppercase
    shadow-xl
    overflow-hidden
    transition-all duration-300
  "
                >
                    {/* Shine effect */}
                    <span className="absolute inset-0 overflow-hidden rounded-3xl">
                        <span
                            className="
        absolute -left-1/3 top-0 h-full w-1/3
        bg-gradient-to-r from-transparent via-white/40 to-transparent
        skew-x-[-20deg]
        group-hover:left-[120%]
        transition-all duration-1000 ease-out
      "
                        />
                    </span>

                    <QrCode size={36} className="mx-auto mb-3 relative z-10" />

                    <span className="relative z-10">
                        Gửi Mừng Cưới
                    </span>
                </motion.button>

                <div
                    className="mt-20 italic text-slate-400"
                    dangerouslySetInnerHTML={{ __html: thankyou.message }}
                />
            </div>

            <QRPopup
                isOpen={isQRModalOpen}
                onClose={() => setIsQRModalOpen(false)}
            />
        </section>
    );
}