"use client";

import { useState } from "react";
import {
  OpeningPopup,
  HeroSection,
  InvitationLetter,
  CoupleSection,
  VenueSection,
  GallerySection,
  BlessingSection,
  ThankYouSection,
  FloatingControls,
  WaveSeparator,
  FloralDivider
} from "@/components";

export default function WeddingInvitation() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="page-shell">
      <div id="opening">
        {!isOpened && <OpeningPopup onOpen={() => setIsOpened(true)} />}
      </div>

      {isOpened && (
        <>
          <FloatingControls autoPlay={isOpened} />

          <div id="home" className="relative">
            <HeroSection />
            <WaveSeparator className="absolute bottom-0 left-0 w-full h-12 text-background translate-y-[1px]" />
          </div>

          <div id="intro">
            <InvitationLetter />
            <FloralDivider className="py-12 text-primary/30" />
          </div>

          <div id="couple">
            <CoupleSection />
            <FloralDivider className="py-12 text-primary/30" />
          </div>

          <div id="venue">
            <VenueSection />
            <FloralDivider className="py-12 text-primary/30" />
          </div>

          <div id="gallery">
            <GallerySection />
            <FloralDivider className="py-12 text-primary/30" />
          </div>

          <div id="blessing">
            <BlessingSection />
            <FloralDivider className="py-12 text-primary/30" />
          </div>

          <div id="thankyou">
            <ThankYouSection />
          </div>
        </>
      )}
    </main>
  );
}
