"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Shirt, Footprints } from "lucide-react";
import { HERO_CONTENT, ASSETS, EXTERNAL_LINKS } from "@/lib/constants";

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const words = HERO_CONTENT.TYPEWRITER_WORDS;
    const currentWord = words[currentWordIndex];
    let pauseTimeout: NodeJS.Timeout | null = null;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentWord.length) {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          } else {
            pauseTimeout = setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentWord.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => {
      clearTimeout(timeout);
      if (pauseTimeout) clearTimeout(pauseTimeout);
    };
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section
      id="overview"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient-bg"
    >
      {/* Floating decorative icons */}
      <div className="absolute left-[10%] top-[30%] text-brand-600 opacity-60 float-animation">
        <Shirt size={96} fill="currentColor" strokeWidth={1} />
      </div>
      <div className="absolute right-[15%] top-[25%] text-brand-600 opacity-60 float-animation-delay-1">
        <Footprints size={80} fill="currentColor" strokeWidth={1} />
      </div>
      <div className="absolute left-[20%] bottom-[20%] text-brand-600 opacity-40 float-animation-delay-2">
        <Shirt size={64} fill="currentColor" strokeWidth={1} />
      </div>
      <div className="absolute right-[10%] bottom-[30%] text-brand-600 opacity-40 float-animation-delay-0-5">
        <Footprints size={72} fill="currentColor" strokeWidth={1} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-2 rounded-full bg-brand-100 text-primary text-xs font-semibold tracking-wide uppercase mb-6">
            {HERO_CONTENT.BADGE}
          </span>

          {/* Main headline with typewriter */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-900 mb-2">
            <span>{displayText}</span>
            <span className="inline-block w-[3px] h-[0.9em] bg-brand-900 ml-1 align-middle blink-animation" />
          </h1>

          {/* Gradient tagline */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-linear-to-r from-brand-600 to-purple-400 bg-clip-text text-transparent">
            {HERO_CONTENT.TAGLINE}
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            {HERO_CONTENT.DESCRIPTION}
          </p>

          {/* App Store badge */}
          <a
            href={EXTERNAL_LINKS.APP_STORE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-transform hover:-translate-y-0.5"
          >
            <Image
              src={ASSETS.APP_STORE_BADGE}
              alt="Download on the App Store"
              width={180}
              height={60}
              className="h-14 w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
