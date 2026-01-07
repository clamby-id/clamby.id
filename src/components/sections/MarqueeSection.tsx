import { Star } from "lucide-react";

export function MarqueeSection() {
  const marqueeText = "MIX, MATCH YOUR STYLE";

  return (
    <section className="bg-primary py-4 border-y-4 border-white overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 25s linear infinite" }}
      >
        {/* Duplicate the content for seamless loop */}
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            <span className="text-white text-2xl font-black tracking-widest uppercase">
              {marqueeText}
            </span>
            <Star className="text-accent h-6 w-6 fill-accent" />
          </div>
        ))}
      </div>
    </section>
  );
}
