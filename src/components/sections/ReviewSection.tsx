"use client";

import * as motion from "motion/react-client";
import { useInView } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

interface Review {
  id: string;
  name: string;
  profileImage: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    id: "1",
    name: "Robert Mason",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=RobertMason",
    rating: 5,
    text: "Amazing experience! Smooth ordering process, fast shipping, and the product quality was exceptional. I'll be returning for more and recommending this service to others!",
  },
  {
    id: "2",
    name: "William Blake",
    profileImage:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=WilliamBlake",
    rating: 5,
    text: "Highly impressed! The product arrived on time, in perfect condition, and exceeded expectations. Great customer support made the process even better. Five stars!",
  },
  {
    id: "3",
    name: "Sarah Johnson",
    profileImage:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahJohnson",
    rating: 5,
    text: "Outstanding service! The AI-powered recommendations were spot-on and helped me discover styles I never would have tried. The app is intuitive and beautifully designed.",
  },
  {
    id: "4",
    name: "Michael Chen",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=MichaelChen",
    rating: 5,
    text: "Game changer for my wardrobe management! The digital closet feature is brilliant, and the style suggestions are always on point. Highly recommend to anyone interested in fashion.",
  },
];

export function ReviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    // Initialize state
    onSelect();

    // Subscribe to selection changes
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  // Render a single review card
  const ReviewCard = ({ review }: { review: Review }) => (
    <Card className="h-full bg-background border-border shadow-sm">
      <div className="p-6 space-y-4">
        {/* Profile Section */}
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 shrink-0 rounded-full overflow-hidden bg-secondary/10 border border-border">
            <Image
              src={review.profileImage}
              alt={`${review.name} profile picture`}
              fill
              className="object-cover"
              sizes="48px"
              unoptimized
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold text-foreground">
              {review.name}
            </h3>
            {/* Star Rating */}
            <div className="flex items-center gap-0.5 mt-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Review Text */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {review.text}
        </p>
      </div>
    </Card>
  );

  return (
    <section
      id="reviews"
      ref={ref}
      className="relative w-full py-10 sm:py-16 bg-secondary scroll-mt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Heading and Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="space-y-8"
          >
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-secondary-foreground">
              Customer reviews
              <br />
              and feedback from
              <br />
              real users.
            </h2>

            {/* Navigation Buttons - Desktop Only */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="h-12 w-12 rounded-full"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="h-12 w-12 rounded-full"
                aria-label="Next reviews"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Review Cards Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full space-y-6"
          >
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-3 md:-ml-6">
                {reviews.map((review) => (
                  <CarouselItem
                    key={review.id}
                    className="pl-3 md:pl-6 basis-full md:basis-1/2"
                  >
                    <ReviewCard review={review} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Navigation Buttons - Mobile Only */}
            <div className="flex lg:hidden items-center justify-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="h-12 w-12 rounded-full"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="h-12 w-12 rounded-full"
                aria-label="Next reviews"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
