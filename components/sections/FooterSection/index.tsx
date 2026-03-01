"use client";

import { motion } from "framer-motion";
import { WEDDING_DATA } from "@/data/wedding-data";

export default function FooterSection() {
  const { groom, bride, images, content } = WEDDING_DATA;

  return (
    <footer className="section bg-secondary/20 pb-16">
      <div className="section-inner text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md mb-8">
            <img
              src={images.footerPhoto}
              alt="Couple"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-4xl font-script text-primary mb-4 italic">
            {content.footer.thankyou}
          </h2>

          <div className="flex items-center gap-3 text-sm text-text-light font-body mb-12">
            <span>{groom.name}</span>
            <span className="text-accent">❤️</span>
            <span>{bride.name}</span>
          </div>

          <div className="pt-8 border-t border-divider w-full">
            <p className="text-[10px] uppercase tracking-[0.4em] text-text-light opacity-50">
              Designed by Helen Studio
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
