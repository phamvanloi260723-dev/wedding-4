import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@/lib/gsap/register";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SmoothScroll from "@/components/SmoothScroll";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Thiệp Cưới Nguyễn Anh ❤️ Lê Hòa",
  description: "Trân trọng kính mời quý vị đến dự lễ cưới của chúng tôi.",
  openGraph: {
    title: "Thiệp Cưới Nguyễn Anh ❤️ Lê Hòa",
    description: "Trân trọng kính mời quý vị đến dự lễ cưới của chúng tôi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Great+Vibes&family=Noto+Serif+KR:wght@300;400;500;600&family=Lavishly+Yours&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
