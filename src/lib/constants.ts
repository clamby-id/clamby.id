/**
 * Application constants for Clamby
 * Centralized location for all internal and external links, and assets
 */

// Internal navigation links
export const NAV_LINKS = {
  ABOUT_US: "#about-us",
  MILESTONES: "#milestones",
  REVIEWS: "#reviews",
  CONTACT_US: "#contact-us",
} as const;

// External links
export const EXTERNAL_LINKS = {
  // App Store links (placeholder)
  APP_STORE: "https://apps.apple.com/app/clamby",
  GOOGLE_PLAY: "https://play.google.com/store/apps/details?id=com.clamby",

  // Social media (placeholder)
  INSTAGRAM: "https://instagram.com/clamby",
  TWITTER: "https://twitter.com/clamby",
  FACEBOOK: "https://facebook.com/clamby",
} as const;

// Brand information
export const BRAND = {
  NAME: "CLAMBY",
  TAGLINE: "Your Digital Wardrobe Assistant",
} as const;

// Asset paths (images, icons, etc.)
export const ASSETS = {
  LOGO_WITH_TEXT: "/logo-with-text.png",
  LOGO_WITH_TEXT_WHITE: "/logo-with-text-white.png",
  LOGO_WITH_TEXT_BLACK: "/logo-with-text-black.png",
  HERO_IMAGE: "/hero.png",
  OG_IMAGE: "/og.png",
  ICON: "/icon.png",
  PLACEHOLDER_VIDEO: "/placeholder-video.mp4",
  QR_CODE: "/qrcode.png",
  APP_STORE_BADGE: "/apple.png",
  GOOGLE_PLAY_BADGE: "/google-play.png",
} as const;
