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
  FloralDivider,
  SideFloralBranch,
  FallingBubbles
} from "@/components";

export default function WeddingInvitation() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {/* Global Visual Effects */}
      <FallingBubbles count={50} />

      <main className="page-shell bg-white relative">
        {/* Side Framing Decorations */}
        <SideFloralBranch className="hidden lg:block fixed left-4 top-0 bottom-0 w-24 z-[5]" />
        <SideFloralBranch className="hidden lg:block fixed right-4 top-0 bottom-0 w-24 z-[5]" flip />

        <div id="opening">
          {!isOpened && <OpeningPopup onOpen={() => setIsOpened(true)} />}
        </div>

        {isOpened && (
          <>
            <FloatingControls autoPlay={isOpened} />

            <div id="home" className="relative">
              <HeroSection />
              <WaveSeparator className="absolute bottom-0 left-0 w-full h-16 text-white translate-y-[1px]" height={120} />
            </div>

            <div id="intro" className="relative">
              <InvitationLetter />
              <WaveSeparator
                className="absolute bottom-0 left-0 w-full h-16 text-secondary translate-y-[1px]"
                color="var(--color-secondary)"
                height={120}
              />
              <FloralDivider className="py-6 text-primary/30" />
            </div>

            <div id="couple" className="relative bg-secondary">
              <CoupleSection />
              <WaveSeparator
                className="absolute bottom-0 left-0 w-full h-16 text-white translate-y-[1px]"
                color="white"
                height={120}
              />
              <FloralDivider className="py-6 text-primary/30" />
            </div>

            <div id="venue" className="relative">
              <VenueSection />
              <WaveSeparator
                className="absolute bottom-0 left-0 w-full h-16 text-white translate-y-[1px]"
                color="white"
                height={120}
              />
              <FloralDivider className="py-6 text-primary/30" />
            </div>

            <div id="gallery" className="relative">
              <GallerySection />
              <WaveSeparator
                className="absolute bottom-0 left-0 w-full h-16 text-white translate-y-[1px]"
                color="white"
                height={120}
              />
              <FloralDivider className="py-6 text-primary/30" />
            </div>

            <div id="blessing" className="relative">
              <BlessingSection />
              <FloralDivider className="py-6 text-primary/30" />
            </div>

            <div id="thankyou">
              <ThankYouSection />
            </div>
          </>
        )}
      </main>
      );
    </>
  );
}

