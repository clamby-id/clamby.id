"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Milestone {
  id: string;
  label: string;
  year: string;
  title: string;
  description: string;
  details: string;
}

const milestones: Milestone[] = [
  {
    id: "beginnings",
    label: "Beginnings",
    year: "2020",
    title: "The Birth of Our Vision: Turning Ideas Into Action",
    description:
      "Despite the challenges, our passion and commitment paved the way for everything that followed, laying a strong foundation for what was yet to come.",
    details:
      "Every great success story starts with a bold idea. For us, it was about transforming that idea into a tangible product that could truly make an impact. With unwavering dedication and hard work, we created something unique that set the stage for our next big milestones.",
  },
  {
    id: "first-product",
    label: "Our First Product Launch",
    year: "2021",
    title: "Revolutionizing Fashion Discovery",
    description:
      "Our groundbreaking AI-powered wardrobe assistant launched, bringing personalized fashion recommendations to thousands of early adopters.",
    details:
      "After months of development and testing, we introduced our first product to the market. The response was overwhelming as users discovered a new way to manage their wardrobes and express their personal style with confidence.",
  },
  {
    id: "expansion",
    label: "Expansion & Partnerships",
    year: "2022",
    title: "Growing Our Fashion Ecosystem",
    description:
      "Strategic partnerships with leading fashion brands and retailers expanded our reach and enriched our platform with diverse style options.",
    details:
      "This year marked our transition from a startup to a recognized player in the fashion tech industry. Collaborations with major brands allowed us to offer users unprecedented access to fashion insights and exclusive collections.",
  },
  {
    id: "global-reach",
    label: "Global Reach",
    year: "2023",
    title: "Empowering Style Worldwide",
    description:
      "Breaking geographical boundaries, we brought our AI fashion assistant to users across continents, adapting to diverse fashion cultures and preferences.",
    details:
      "Our platform became truly global, serving fashion enthusiasts from Tokyo to Paris, New York to Mumbai. We learned to celebrate and incorporate the rich diversity of global fashion while maintaining our core mission of empowering personal style.",
  },
];

export function MilestonesSection() {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone>(
    milestones[0]
  );

  return (
    <section
      id="milestones"
      className="relative w-full py-20 sm:py-32 bg-linear-180 from-background to-secondary"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-card shadow-2xl border border-border">
          {/* Main container with two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] min-h-[600px]">
            {/* Left sidebar - Title and milestone list */}
            <div className="p-8">
              <div className="mb-8 space-y-3">
                <h2 className="text-4xl font-bold leading-tight text-foreground">
                  <span className="text-secondary">Milestones</span> of Growth
                  <br />
                  and Innovation
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Discover the key moments that defined our evolution. Each tab
                  tells a story of innovation, progress, and success as we grew
                  from an idea into a leading player in the industry.
                </p>
              </div>

              {/* Milestone tabs */}
              <nav className="space-y-1">
                <ul className="space-y-1">
                  {milestones.map((milestone, index) => (
                    <motion.li
                      key={milestone.id}
                      initial={false}
                      animate={{
                        backgroundColor:
                          milestone === selectedMilestone
                            ? "hsl(var(--card))"
                            : "transparent",
                      }}
                      transition={{
                        duration: 0.2,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={cn(
                        "relative cursor-pointer select-none overflow-hidden",
                        index !== 0 && "border-t border-border"
                      )}
                      onClick={() => setSelectedMilestone(milestone)}
                    >
                      <motion.div
                        className="flex items-center justify-between px-4 py-3"
                        initial={false}
                        animate={{
                          scale: milestone === selectedMilestone ? 1.03 : 1,
                        }}
                      >
                        <span
                          className={cn(
                            "text-xl font-medium transition-colors",
                            {
                              "text-secondary": milestone === selectedMilestone,
                              "text-muted-foreground/50":
                                milestone !== selectedMilestone,
                            }
                          )}
                        >
                          {milestone.label}
                        </span>
                        <motion.div
                          animate={{
                            rotate: milestone === selectedMilestone ? 0 : -45,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight
                            className={cn("text-2xl transition-colors", {
                              "text-secondary": milestone === selectedMilestone,
                              "text-muted-foreground/50":
                                milestone !== selectedMilestone,
                            })}
                          />
                        </motion.div>
                      </motion.div>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Right content area */}
            <div className="relative flex items-start p-4 lg:p-8">
              <div className="bg-secondary/10 p-8 rounded-3xl h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedMilestone.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full space-y-6"
                  >
                    {/* Year badge */}
                    <div className="inline-block rounded-xl bg-secondary/10 px-4 py-2 border border-secondary/20">
                      <span className="text-base font-semibold text-secondary">
                        {selectedMilestone.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl font-bold leading-tight text-foreground">
                      {selectedMilestone.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-foreground/90 leading-relaxed">
                      {selectedMilestone.description}
                    </p>

                    {/* Details */}
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {selectedMilestone.details}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
