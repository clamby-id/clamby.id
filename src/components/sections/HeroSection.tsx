"use client";

import { ASSETS, EXTERNAL_LINKS, HERO_CONTENT } from "@/lib/constants";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="overview"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 overflow-hidden "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col gap-8 items-center text-center">
          {/* Badge */}
          <span className="px-6 py-2 rounded-full bg-slate-950 text-white text-sm md:text-md  font-light tracking-normal ">
            {HERO_CONTENT.BADGE}
          </span>

          {/* Main headline with typewriter */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-medium tracking-tight text-black ">
            <span>{HERO_CONTENT.HEAD_TAGLINE}</span>
            <br />
            <span>{HERO_CONTENT.TAGLINE}</span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
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
              width={200}
              height={60}
              className="h-14 w-auto border rounded-full border-white drop-shadow-lg drop-shadow-black/50"
            />
          </a>

          <Image
            src={ASSETS.MOCK_UP}
            alt="Clamby app mockup"
            width={300}
            height={400}
          />
        </div>
      </div>
    </section >
  );
}
