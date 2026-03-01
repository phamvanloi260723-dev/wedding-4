"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin } from "lucide-react";
import { EventCountdown } from "./EventCountdown";
import { formatDate, formatTime } from "@/lib/formatters";
import { Location } from "@/types/wedding";

interface EventCardProps {
    title: string;
    date: string;
    icon: string | React.ReactNode;
    idx: number;
    locations: Location[];
    onOpenMap: (locations: Location[]) => void;
}

export function EventCard({
    title,
    date,
    icon,
    idx,
    onOpenMap,
    locations,
}: EventCardProps) {
    const eventDate = new Date(date);

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
            <div>
                <div className="w-16 h-16 bg-primary/5 rounded-full 
                        flex items-center justify-center 
                        text-2xl mx-auto mb-6">
                    {icon}
                </div>

                <h2 className="font-heading text-2xl md:text-3xl 
                       text-primary mb-6 uppercase tracking-widest">
                    {title}
                </h2>

                <div className="space-y-3 mb-8 text-slate-500">
                    <div className="flex items-center gap-2 justify-center">
                        <Calendar size={18} className="text-primary/60" />
                        <span className="font-semibold text-slate-700">
                            {formatDate(eventDate)}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 justify-center">
                        <Clock size={18} className="text-primary/60" />
                        <span>{formatTime(eventDate)}</span>
                    </div>
                </div>

                <div className="mb-8 p-5 bg-primary/5 rounded-3xl border border-primary/10">
                    <EventCountdown targetDate={eventDate} />
                </div>
            </div>

            <button
                onClick={() => onOpenMap(locations)}
                className="group relative w-full py-3 bg-primary text-white rounded-xl
             font-semibold text-xs tracking-[0.15em] uppercase
             shadow-md shadow-primary/20
             hover:bg-primary-light transition-all active:scale-95
             flex items-center justify-center gap-2
             overflow-hidden"
            >
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
}
