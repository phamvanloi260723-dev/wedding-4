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
  FloatingControls
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

          <div id="home">
            <HeroSection />
          </div>

          <div id="intro">
            <InvitationLetter />
          </div>

          <div id="couple">
            <CoupleSection />
          </div>

          <div id="venue">
            <VenueSection />
          </div>

          <div id="gallery">
            <GallerySection />
          </div>

          <div id="blessing">
            <BlessingSection />
          </div>

          <div id="thankyou">
            <ThankYouSection />
          </div>
        </>
      )}
    </main>
  );
}
