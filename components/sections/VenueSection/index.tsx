"use client";

import { useState } from "react";
import { WEDDING_DATA } from "@/data/wedding-data";
import { EventCard } from "./EventCard";
import { MapModal } from "./MapModal";
import { Location } from "@/types/wedding";
import { FloralCorner, FloralDivider } from "@/components";

export default function VenueSection() {
    const { events, content } = WEDDING_DATA;
    const [mapModal, setMapModal] = useState<{ isOpen: boolean; locations: Location[] }>({
        isOpen: false,
        locations: [],
    });

    const openMap = (locations: Location[]) => setMapModal({ isOpen: true, locations });
    const closeMap = () => setMapModal({ isOpen: false, locations: [] });

    const engagementLocs: Location[] = [
        { label: "Nhà Trai", address: events.engagement.addressGroom, mapEmbed: events.engagement.mapLinkGroom },
        { label: "Nhà Gái", address: events.engagement.addressBride, mapEmbed: events.engagement.mapLinkBride }
    ];

    const weddingLocs: Location[] = [
        { label: "Nhà Trai", address: events.wedding.addressGroom, mapEmbed: events.wedding.mapLinkGroom },
        { label: "Nhà Gái", address: events.wedding.addressBride, mapEmbed: events.wedding.mapLinkBride }
    ];

    return (
        <section className="bg-white py-12 relative overflow-hidden">
            {/* Decorative Florals */}
            <FloralCorner className="absolute top-0 right-0 w-64 h-64 text-primary/5 translate-x-12 -translate-y-12 rotate-90" />
            <FloralCorner className="absolute bottom-0 left-0 w-64 h-64 -translate-x-12 translate-y-12 -rotate-90" />

            <div className="mx-auto max-w-7xl px-8">
                <div className="text-center mb-16 px-4">
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-primary font-bold mb-4 block">Event Details</span>
                    <h2 className="text-4xl md:text-5xl font-script text-primary italic">{content.venue.title}</h2>
                    <FloralDivider className="mt-6 text-primary/20" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-6">
                    <EventCard
                        idx={0}
                        title={events.engagement.title}
                        date={events.engagement.date}
                        locations={engagementLocs}
                        icon="💍"
                        onOpenMap={openMap}
                    />
                    <EventCard
                        idx={1}
                        title={events.wedding.title}
                        date={events.wedding.date}
                        locations={weddingLocs}
                        icon="🥂"
                        onOpenMap={openMap}
                    />
                </div>

                <MapModal
                    isOpen={mapModal.isOpen}
                    onClose={closeMap}
                    locations={mapModal.locations}
                />
            </div>
        </section>
    );
}
