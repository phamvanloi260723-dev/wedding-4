"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Calendar, Timer, X, Heart, ExternalLink } from "lucide-react";
import { WEDDING_DATA } from "@/data/wedding-data";

/**
 * EventCountdown Component
 */
function EventCountdown({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const distance = targetDate.getTime() - new Date().getTime();
      if (distance < 0) {
        clearInterval(timer);
        return;
      }
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-between w-full max-w-[240px] mx-auto text-center">
      <div className="flex-1">
        <div className="text-base font-semibold text-primary">
          {timeLeft.days}
        </div>
        <div className="text-[10px] uppercase tracking-widest text-primary/60">
          Ngày
        </div>
      </div>

      <div className="flex-1">
        <div className="text-base font-semibold text-primary">
          {timeLeft.hours}
        </div>
        <div className="text-[10px] uppercase tracking-widest text-primary/60">
          Giờ
        </div>
      </div>

      <div className="flex-1">
        <div className="text-base font-semibold text-primary">
          {timeLeft.minutes}
        </div>
        <div className="text-[10px] uppercase tracking-widest text-primary/60">
          Phút
        </div>
      </div>

      <div className="flex-1">
        <div className="text-base font-semibold text-primary">
          {timeLeft.seconds}
        </div>
        <div className="text-[10px] uppercase tracking-widest text-primary/60">
          Giây
        </div>
      </div>
    </div>
  );
}

/**
 * EventCard Component
 */
const EventCard = ({ title, date, icon, idx, onOpenMap, locations }: any) => {
  const eventDate = new Date(date);

  const day = eventDate.getDate().toString().padStart(2, "0");
  const month = (eventDate.getMonth() + 1).toString().padStart(2, "0");
  const year = eventDate.getFullYear();
  const formattedDate = `${day} . ${month} . ${year}`;

  const formattedTime =
    eventDate.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
    }) + (eventDate.getHours() < 12 ? " Sáng" : " Chiều");

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: idx * 0.2 }}
      className="flex flex-col justify-between h-full bg-white p-8 md:p-10 
                 rounded-[40px] shadow-xl border border-primary/10 
                 text-center transition-all hover:-translate-y-2"
    >
      {/* Top Content */}
      <div>
        <div className="w-16 h-16 bg-primary/5 rounded-full 
                        flex items-center justify-center 
                        text-2xl mx-auto mb-6">
          {icon}
        </div>

        <h3 className="font-heading text-2xl md:text-3xl 
                       text-primary mb-6 uppercase tracking-widest">
          {title}
        </h3>

        <div className="space-y-3 mb-8 text-slate-500">
          <div className="flex items-center gap-2 justify-center">
            <Calendar size={18} className="text-primary/60" />
            <span className="font-semibold text-slate-700">
              {formattedDate}
            </span>
          </div>

          <div className="flex items-center gap-2 justify-center">
            <Clock size={18} className="text-primary/60" />
            <span>{formattedTime}</span>
          </div>
        </div>

        <div className="mb-8 p-5 bg-primary/5 rounded-3xl border border-primary/10">
          <EventCountdown targetDate={eventDate} />
        </div>
      </div>

      {/* Bottom Button */}
      <button
        onClick={() => onOpenMap(locations)}
        className="group relative w-full py-3 bg-primary text-white rounded-xl
             font-semibold text-xs tracking-[0.15em] uppercase
             shadow-md shadow-primary/20
             hover:bg-primary-light transition-all active:scale-95
             flex items-center justify-center gap-2
             overflow-hidden"
      >
        {/* Light sweep effect */}
        <span className="absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute -left-1/3 top-0 h-full w-1/3 
                     bg-gradient-to-r from-transparent via-white/40 to-transparent
                     skew-x-[-20deg]
                     group-hover:left-[120%]
                     transition-all duration-1000 ease-out" />
        </span>

        <MapPin size={16} />
        Xem Bản Đồ
      </button>
    </motion.div>
  );
};

/**
 * MapModal Component
 */
const MapModal = ({ isOpen, onClose, locations }: any) => {
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
                {locations.map((loc: any, idx: number) => (
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
};

export default function VenueSection() {
  const { events, content } = WEDDING_DATA;
  const [mapModal, setMapModal] = useState({ isOpen: false, locations: [] });

  const openMap = (locations: any) => setMapModal({ isOpen: true, locations });
  const closeMap = () => setMapModal({ isOpen: false, locations: [] });

  const engagementLocs = [
    { label: "Nhà Trai", address: events.engagement.addressGroom, mapEmbed: events.engagement.mapLinkGroom },
    { label: "Nhà Gái", address: events.engagement.addressBride, mapEmbed: events.engagement.mapLinkBride }
  ];

  const weddingLocs = [
    { label: "Nhà Trai", address: events.wedding.addressGroom, mapEmbed: events.wedding.mapLinkGroom },
    { label: "Nhà Gái", address: events.wedding.addressBride, mapEmbed: events.wedding.mapLinkBride }
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center mb-16 px-4">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-primary font-bold mb-4 block">Event Details</span>
          <h2 className="text-4xl md:text-5xl font-script text-primary italic">{content.venue.title}</h2>
          <div className="h-px w-20 bg-primary/20 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-6">
          <EventCard idx={0} title={events.engagement.title} date={events.engagement.date} locations={engagementLocs} icon="💍" onOpenMap={openMap} />
          <EventCard idx={1} title={events.wedding.title} date={events.wedding.date} locations={weddingLocs} icon="🥂" onOpenMap={openMap} />
        </div>

        <MapModal isOpen={mapModal.isOpen} onClose={closeMap} locations={mapModal.locations} />
      </div>
    </section>
  );
}
