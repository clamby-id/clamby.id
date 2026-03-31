/**
 * Application constants for Clamby
 * Centralized location for all internal and external links, and assets
 */

// Internal navigation links (hash links for sections)
export const NAV_LINKS = {
  FEATURES: "/#features",
  REVIEW: "/#review",
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
  LINKEDIN: "https://www.linkedin.com/company/clamby/",

  // Contact
  EMAIL: "mailto:contact@clamby.id",
} as const;

// Brand information
export const BRAND = {
  NAME: "Clamby",
  TAGLINE: "Your personal AI stylist.",
  DESCRIPTION: "Rediscover your closet and make mindful fashion choices.",
  FOOTER: "Wear more of what you own. We help you visualize your style potential so you can maximize your wardrobe and shop less.",
  IMAGE: "/logo-with-text.png"
} as const;

// Hero section content
export const HERO_CONTENT = {
  BADGE: "#Buy Less - Style More",
  HEAD_TAGLINE: "YOUR WARDROBE",
  TAGLINE: "IN YOUR POCKET",
  DESCRIPTION: "Rediscover your closet and make mindful fashion choices.",
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

export const REVIEWS = [
  {
    review: "One mirror selfie completely organized my entire closet.",
    name: "Sarah Jenkins",
    occupation: "Marketing Manager",
    image: "/reviews/1.png"
  },
  {
    review: "No more messy piles of clothes every single morning.",
    name: "Marcus Chen",
    occupation: "Software Engineer",
    image: "/reviews/2.png"
  },
  {
    review: "I can visualize my outfits without opening my closet.",
    name: "Elena Rodriguez",
    occupation: "Graphic Designer",
    image: "/reviews/3.png"
  },
  {
    review: "The AI stylist picks my outfits perfectly every day.",
    name: "Chloe Bennet",
    occupation: "Data Analyst",
    image: "/reviews/4.png"
  }
] as const;

// Asset paths (images, icons, etc.)
export const ASSETS = {
  LOGO: "/clamby-logomark.webp",
  LOGO_WITH_TEXT: "/logo-with-text.png",
  LOGO_WITH_TEXT_WHITE: "/logo-with-text-white.png",
  LOGO_WITH_TEXT_BLACK: "/logo-with-text-black.png",
  MOCK_UP: "/hero-mockup.webp",
  CLOSET: ["/messy-clothes.webp"],
  OG_IMAGE: "/og.png",
  ICON: "/icon.png",
  APP_STORE_BADGE: "/app_store_badge.webp",
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
