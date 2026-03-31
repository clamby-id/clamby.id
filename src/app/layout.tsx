import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ASSETS } from "@/lib/constants";
import type { Metadata } from "next";
import { Outfit, Archivo } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const saeada = localFont({
  src: [
    {
      path: "../../public/fonts/LTSaeada-ExtraLight.otf",
      style: "extralight",
      weight: "200",
    },
    {
      path: "../../public/fonts/LTSaeada-Light.otf",
      style: "light",
      weight: "300",
    },
    {
      path: "../../public/fonts/LTSaeada-Regular.otf",
      style: "regular",
      weight: "400",
    },
    {
      path: "../../public/fonts/LTSaeada-Medium.otf",
      style: "medium",
      weight: "500",
    },
  ],
  variable: "--font-primary",
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
      <body
        className={`${outfit.variable} ${archivo.variable} ${saeada.variable} font-outfit font-primary font-archivo antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
