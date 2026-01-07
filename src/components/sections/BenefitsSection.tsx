import { Clock, Shirt, Tag } from "lucide-react";
import { BENEFITS } from "@/lib/constants";

const iconMap = {
  clock: Clock,
  shirt: Shirt,
  tag: Tag,
};

const colorMap = {
  clock: { bg: "bg-blue-50", icon: "text-blue-500" },
  shirt: { bg: "bg-purple-50", icon: "text-primary" },
  tag: { bg: "bg-green-50", icon: "text-green-500" },
};

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-brand-900 uppercase tracking-tight italic">
            Why Clamby
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Vertical Dividers for Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-gray-200" />
          <div className="hidden md:block absolute top-0 bottom-0 right-1/3 w-px bg-gray-200" />

          {BENEFITS.map((benefit) => {
            const IconComponent =
              iconMap[benefit.icon as keyof typeof iconMap] || Clock;
            const colors = colorMap[benefit.icon as keyof typeof colorMap] || {
              bg: "bg-gray-50",
              icon: "text-gray-500",
            };

            return (
              <div
                key={benefit.title}
                className="flex flex-col items-center text-center px-4 group"
              >
                {/* Icon */}
                <div
                  className={`w-20 h-20 rounded-full ${colors.bg} flex items-center justify-center mb-8 group-hover:scale-105 transition-transform duration-300`}
                >
                  <IconComponent className={`w-10 h-10 ${colors.icon}`} />
                </div>

                {/* Title */}
                <h4 className="text-2xl font-black text-foreground uppercase tracking-wide mb-4">
                  {benefit.title}
                </h4>

                {/* Description */}
                <p className="text-muted-foreground text-lg leading-relaxed max-w-xs mx-auto">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
