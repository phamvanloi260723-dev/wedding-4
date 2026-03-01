"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WEDDING_DATA } from "@/data/wedding-data";

export default function ContactSection() {
  const [selectedQR, setSelectedQR] = useState<null | "groom" | "bride">(null);
  const { content, groom, bride, images } = WEDDING_DATA;

  return (
    <section className="section bg-secondary/10">
      <div className="section-inner">
        <div className="text-center mb-12">
          <p className="eyebrow mb-2">{content.contact.eyebrow}</p>
          <h2 className="text-3xl font-title text-primary tracking-widest uppercase">
            {content.contact.title}
          </h2>
          <div className="section-divider" />
        </div>

        <div className="flex justify-center gap-20">
          {/* Groom QR Button */}
          <div className="flex flex-col items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedQR("groom")}
              className="w-24 h-24 rounded-[30px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex items-center justify-center border border-primary-light/30 relative group"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <svg className="w-12 h-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </motion.button>
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-medium">{content.contact.groomSide}</span>
          </div>

          {/* Bride QR Button */}
          <div className="flex flex-col items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedQR("bride")}
              className="w-24 h-24 rounded-[30px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex items-center justify-center border border-primary-light/30 relative group"
            >
              <div className="absolute inset-0 bg-accent/5 rounded-[30px] opacity-0 group-hover:opacity-100 transition-opacity" />
              <svg className="w-12 h-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </motion.button>
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-medium">{content.contact.brideSide}</span>
          </div>
        </div>
      </div>

      {/* QR Popup */}
      <AnimatePresence>
        {selectedQR && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedQR(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-sm rounded-[40px] p-10 text-center shadow-2xl"
            >
              <h3 className="text-2xl font-title text-primary mb-2">
                {selectedQR === "groom" ? content.contact.groomSide : content.contact.brideSide}
              </h3>
              <p className="text-xs text-text-light mb-8 tracking-widest uppercase">
                {content.contact.qrTitle}
              </p>

              <div className="aspect-square w-full relative mb-8 p-4 border border-divider rounded-3xl">
                <img
                  src={selectedQR === "groom" ? images.groomQR : images.brideQR}
                  alt="QR Code"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-sm font-body text-text p-4 bg-secondary/30 rounded-2xl">
                <p className="font-medium">{selectedQR === "groom" ? groom.account.bank : bride.account.bank}</p>
                <p className="text-lg my-1">{selectedQR === "groom" ? groom.account.accountNumber : bride.account.accountNumber}</p>
                <p className="text-xs opacity-60">Chủ TK: {selectedQR === "groom" ? groom.account.depositor : bride.account.depositor}</p>
              </div>

              <button
                onClick={() => setSelectedQR(null)}
                className="mt-8 text-primary uppercase tracking-[0.3em] text-[10px]"
              >
                Đóng
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
