/**
 * Application constants for Clamby
 * Centralized location for all internal and external links, and assets
 */

// Internal navigation links (hash links for sections)
export const NAV_LINKS = {
  OVERVIEW: "/#overview",
  BENEFITS: "/#benefits",
  CONTACT: "/#contact",
} as const;

// Internal route paths
export const ROUTES = {
  HOME: "/",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_OF_USE: "/terms-of-use",
} as const;

// External links
export const EXTERNAL_LINKS = {
  // App Store links
  APP_STORE:
    "https://apps.apple.com/app/ai-wardrobe-stylist-clamby/id6755164488",

  // Social media
  INSTAGRAM: "https://www.instagram.com/clamby.app/",

  // Contact
  EMAIL: "mailto:contact@clamby.id",
} as const;

// Brand information
export const BRAND = {
  NAME: "Clamby",
  TAGLINE: "Your personal AI stylist.",
  DESCRIPTION:
    "Organize your closet, create stunning outfits, and let AI style you perfectly every morning.",
} as const;

// Hero section content
export const HERO_CONTENT = {
  BADGE: "AI POWERED FASHION ASSISTANT",
  TYPEWRITER_WORDS: ["WARDROBE", "FASHION STYLIST", "SHOPPING ASSISTANT"],
  TAGLINE: "IN YOUR POCKET",
  DESCRIPTION:
    "Organize your closet, create stunning outfits, and let AI style you perfectly every morning.",
  CTA_SUBTEXT: "Free to download - Early access available",
} as const;

// Benefits section content
export const BENEFITS = [
  {
    title: "SAVE TIME",
    description:
      "Pick outfits in seconds, not minutes. Spend less time staring at your closet.",
    icon: "clock",
  },
  {
    title: "DRESS BETTER",
    description:
      "Discover combinations you wouldn't think of. Let AI style you.",
    icon: "shirt",
  },
  {
    title: "BUY LESS",
    description: "Make the most of the wardrobe you already own.",
    icon: "tag",
  },
] as const;

// Asset paths (images, icons, etc.)
export const ASSETS = {
  LOGO: "/clamby-logomark.webp",
  LOGO_WITH_TEXT: "/logo-with-text.png",
  LOGO_WITH_TEXT_WHITE: "/logo-with-text-white.png",
  LOGO_WITH_TEXT_BLACK: "/logo-with-text-black.png",
  OG_IMAGE: "/og.png",
  ICON: "/icon.png",
  APP_STORE_BADGE: "/app-store-badge.svg",
  VIDEO: "/clamby-showreel.webm",
  CAROUSEL: [
    "/carousel/1.webp",
    "/carousel/2.webp",
    "/carousel/3.webp",
    "/carousel/4.webp",
    "/carousel/5.webp",
    "/carousel/6.webp",
    "/carousel/7.webp",
  ],
} as const;
