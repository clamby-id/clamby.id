"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Camera, Wand2, Shirt } from "lucide-react";
import { ASSETS } from "@/lib/constants";

const carouselImages = ASSETS.CAROUSEL;

export function CarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = carouselImages.length;

  const moveCarousel = useCallback(
    (targetIndex: number) => {
      // Calculate shortest path around the ring
      const diff = targetIndex - activeIndex;
      const absDiff = Math.abs(diff);
      const halfTotal = totalItems / 2;

      if (absDiff <= halfTotal) {
        setActiveIndex(targetIndex);
      } else {
        // Go the other way around
        if (diff > 0) {
          setActiveIndex(targetIndex - totalItems);
        } else {
          setActiveIndex(targetIndex + totalItems);
        }
      }
    },
    [activeIndex, totalItems]
  );

  // Normalize index for display
  const normalizedIndex =
    ((activeIndex % totalItems) + totalItems) % totalItems;

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getItemStyle = (index: number) => {
    const diff = index - normalizedIndex;
    let offset = diff;

    // Handle wrapping
    if (diff > totalItems / 2) {
      offset = diff - totalItems;
    } else if (diff < -totalItems / 2) {
      offset = diff + totalItems;
    }

    const absOffset = Math.abs(offset);

    // Position calculations
    let translateX = 0;
    let scale = 1;
    let zIndex = 40;
    let opacity = 1;

    if (offset === 0) {
      scale = 1.1;
      zIndex = 40;
    } else if (absOffset === 1) {
      translateX = offset * 220;
      scale = 0.9;
      zIndex = 30;
    } else if (absOffset === 2) {
      translateX = offset * 175;
      scale = 0.8;
      zIndex = 20;
    } else {
      translateX = offset * 150;
      scale = 0.7;
      zIndex = 10;
      opacity = 0.2;
    }

    // Hide items too far on mobile
    if (absOffset > 2) {
      opacity = 0;
    }

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      zIndex,
      opacity,
    };
  };

  return (
    <section className="py-16 lg:py-24 bg-brand-50/50" id="app-preview">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center text-brand-900 mb-12 italic">
          Your Digital Closet
        </h2>

        {/* Carousel */}
        <div className="relative h-[350px] sm:h-[400px] lg:h-[450px] flex items-center justify-center overflow-hidden">
          {carouselImages.map((src, index) => {
            const style = getItemStyle(index);
            return (
              <button
                key={index}
                onClick={() => moveCarousel(index)}
                className="absolute cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none"
                style={{
                  ...style,
                  width: index === normalizedIndex ? "18rem" : "12rem",
                  height: index === normalizedIndex ? "24rem" : "16rem",
                }}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={src}
                    alt={`Wardrobe ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 200px, 300px"
                  />
                  {/* Overlay for non-active items */}
                  {index !== normalizedIndex && (
                    <div
                      className="absolute inset-0 bg-white transition-opacity duration-500"
                      style={{
                        opacity:
                          Math.abs(
                            index -
                              normalizedIndex -
                              (index - normalizedIndex > totalItems / 2
                                ? totalItems
                                : index - normalizedIndex < -totalItems / 2
                                  ? -totalItems
                                  : 0)
                          ) * 0.2,
                      }}
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Step indicators */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
            {/* Step 1: SNAP! */}
            <div className="p-6 rounded-3xl bg-white/60 backdrop-blur-sm border border-white hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-brand-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Camera className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">SNAP!</h3>
              <p className="text-muted-foreground font-medium">Take photos</p>
            </div>

            {/* Step 2: AI Magic */}
            <div className="relative">
              <div className="p-8 rounded-full bg-primary text-white w-40 h-40 mx-auto flex flex-col items-center justify-center shadow-xl shadow-brand-200 animate-pulse">
                <Wand2 className="w-8 h-8 mb-2" />
                <span className="font-bold text-xl">AI Magic</span>
              </div>
            </div>

            {/* Step 3: SAVE! */}
            <div className="p-6 rounded-3xl bg-white/60 backdrop-blur-sm border border-white hover:shadow-lg transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto bg-brand-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shirt className="w-8 h-8 text-brand-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">SAVE!</h3>
              <p className="text-muted-foreground font-medium">New Outfits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
