import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ASSETS } from "@/lib/constants";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Clamby | AI Wardrobe in Your Pocket",
  description:
    "Organize your closet, create stunning outfits, and let AI style you perfectly every morning. Your personal AI fashion stylist.",
  icons: {
    icon: ASSETS.ICON,
  },
  openGraph: {
    title: "Clamby | AI Wardrobe in Your Pocket",
    description:
      "Organize your closet, create stunning outfits, and let AI style you perfectly every morning.",
    type: "website",
    url: "https://clamby.id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
