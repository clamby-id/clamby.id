"use client";

import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import { Sparkles, Lock } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI-Powered Style Assistant",
    description:
      "Get personalized outfit recommendations based on occasion, weather, and your unique style preferences.",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Secure Digital Wardrobe",
    description:
      "Store and organize your entire wardrobe digitally with bank-grade security and privacy protection.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about-us"
      ref={ref}
      className="relative w-full py-10 sm:py-16 bg-background scroll-mt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary border border-secondary/20">
                ABOUT US
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
              Empowering You to Elevate Your{" "}
              <span className="italic text-secondary">Style & Confidence</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Founded with a vision to revolutionize personal style, Clamby
              provides cutting-edge AI tools that simplify wardrobe management
              and outfit planning. We bring together advanced technology, expert
              fashion insights, and intuitive design to ensure your style
              journey is managed with creativity and precision.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex gap-4"
                >
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary border border-secondary/20">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image with Overlays */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl shadow-2xl">
              {/* Main Image */}
              <Image
                src="/hero.png"
                alt="Clamby team showcasing digital wardrobe"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

              {/* Floating Badges */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-sm px-5 py-3 shadow-lg border border-white/20 w-fit"
                >
                  <span className="text-base font-semibold text-gray-900">
                    AI Style Matching
                  </span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-sm px-5 py-3 shadow-lg border border-white/20 w-fit"
                >
                  <span className="text-base font-semibold text-gray-900">
                    Digital Wardrobe
                  </span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
