"use client";

import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { EXTERNAL_LINKS, BRAND, ROUTES } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col gap-1">
            <Link
              href={ROUTES.HOME}
              className=" hover:opacity-80 transition-opacity"
            >
              <Image src={BRAND.IMAGE} alt="Clamby Logo" width={211} height={64} className="w-52 h-16" />
            </Link>
            <p className="text-md text-muted-foreground font-light w-96">{BRAND.FOOTER}</p>
          </div>

          {/* Contact & Social */}
          <div className="flex gap-4">
            <a
              href={EXTERNAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-lg p-1.5 hover:bg-black/50 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6  text-white " />
            </a>

            <a
              href={EXTERNAL_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black rounded-lg p-1.5 hover:bg-black/50 transition-colors"
              aria-label="Linkedin"
            >
              <Linkedin className="h-6 w-6  text-white " />
            </a>
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="mt-8 pt-6 border-t border-black flex flex-col md:flex-row  justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Clamby. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href={ROUTES.PRIVACY_POLICY}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
            >
              Privacy Policy
            </Link>
            <p>|</p>
            <Link
              href={ROUTES.TERMS_OF_USE}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
