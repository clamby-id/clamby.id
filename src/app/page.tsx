import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { MilestonesSection } from "@/components/sections/MilestonesSection";
import { ASSETS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Clamby - Your Digital Wardrobe Assistant",
  description:
    "Transform your wardrobe with AI-powered style guidance. Upload your clothes, get AI-enhanced versions, and mix & match fashion items based on occasion, weather, and your preferred style.",
  keywords: [
    "fashion",
    "clamby",
    "digital wardrobe",
    "AI fashion",
    "style assistant",
    "wardrobe management",
    "fashion app",
  ],
  authors: [{ name: "clamby.id" }],
  creator: "clamby.id",
  publisher: "clamby.id",
  openGraph: {
    title: "Clamby - Your Digital Wardrobe Assistant",
    description:
      "Transform your wardrobe with AI-powered style guidance. Upload your clothes, get AI-enhanced versions, and mix & match fashion items based on occasion, weather, and your preferred style.",
    url: "https://clamby.id",
    siteName: "Clamby",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Clamby - Digital Wardrobe Assistant",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clamby - Your Digital Wardrobe Assistant",
    description:
      "Transform your wardrobe with AI-powered style guidance. Upload your clothes, get AI-enhanced versions, and mix & match fashion items based on occasion, weather, and your preferred style.",
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
      <MilestonesSection />
    </>
  );
}
