import Image from "next/image";
import { ASSETS, EXTERNAL_LINKS, HERO_CONTENT } from "@/lib/constants";

export function CTASection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
          {/* Video background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
            poster={ASSETS.OG_IMAGE}
          >
            <source src={ASSETS.VIDEO} type="video/webm" />
            <source
              src={ASSETS.VIDEO.replace(".webm", ".mp4")}
              type="video/mp4"
            />
            {/* Fallback content for browsers that don't support video */}
            Your browser does not support the video tag.
          </video>

          {/* Static fallback image for reduced motion preference */}
          <div className="hidden motion-reduce:block absolute inset-0">
            <Image
              src={ASSETS.OG_IMAGE}
              alt="Clamby app showcase"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-white/75 backdrop-blur-sm" />

          {/* Content */}
          <div className="relative z-10 py-16 lg:py-24 px-6 text-center">
            {/* Headline */}
            <h2 className="text-4xl md:text-6xl font-black text-brand-900 uppercase tracking-tight mb-8">
              DRESS SMARTER
              <br />
              WITH CLAMBY
            </h2>

            {/* App Store badge */}
            <a
              href={EXTERNAL_LINKS.APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:-translate-y-0.5 mb-4"
            >
              <Image
                src={ASSETS.APP_STORE_BADGE}
                alt="Download on the App Store"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </a>

            {/* Subtext */}
            <p className="text-sm text-muted-foreground">
              {HERO_CONTENT.CTA_SUBTEXT}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
