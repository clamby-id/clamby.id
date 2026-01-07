import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { CarouselSection } from "@/components/sections/CarouselSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CTASection } from "@/components/sections/CTASection";
import { ASSETS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Clamby | AI Wardrobe in Your Pocket",
  description:
    "Organize your closet, create stunning outfits, and let AI style you perfectly every morning. Your personal AI fashion stylist.",
  keywords: [
    "fashion",
    "clamby",
    "digital wardrobe",
    "AI fashion",
    "style assistant",
    "wardrobe management",
    "fashion app",
    "AI stylist",
  ],
  authors: [{ name: "clamby.id" }],
  creator: "clamby.id",
  publisher: "clamby.id",
  openGraph: {
    title: "Clamby | AI Wardrobe in Your Pocket",
    description:
      "Organize your closet, create stunning outfits, and let AI style you perfectly every morning. Your personal AI fashion stylist.",
    url: "https://clamby.id",
    siteName: "Clamby",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Clamby - AI Wardrobe in Your Pocket",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clamby | AI Wardrobe in Your Pocket",
    description:
      "Organize your closet, create stunning outfits, and let AI style you perfectly every morning. Your personal AI fashion stylist.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://clamby.id"),
  icons: {
    icon: ASSETS.ICON,
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <CarouselSection />
      <BenefitsSection />
      <CTASection />
    </>
  );
}
