"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { EXTERNAL_LINKS, ASSETS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src={ASSETS.LOGO_WITH_TEXT_BLACK}
              alt="Clamby Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <Link
              href={EXTERNAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-foreground hover:text-accent-foreground/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href={EXTERNAL_LINKS.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-foreground hover:text-accent-foreground/80 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href={EXTERNAL_LINKS.FACEBOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-foreground hover:text-accent-foreground/80 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-accent-foreground">
            © {currentYear} Clamby. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
