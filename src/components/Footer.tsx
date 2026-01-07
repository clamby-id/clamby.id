"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import { EXTERNAL_LINKS, BRAND, ROUTES } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <Link
              href={ROUTES.HOME}
              className="text-lg font-bold text-foreground hover:opacity-80 transition-opacity"
            >
              {BRAND.NAME}
            </Link>
            <p className="text-sm text-muted-foreground">{BRAND.TAGLINE}</p>
          </div>

          {/* Contact & Social */}
          <div className="flex items-center gap-4">
            <a
              href={EXTERNAL_LINKS.EMAIL}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <a
              href={EXTERNAL_LINKS.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Copyright and Links */}
        <div className="mt-8 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Clamby. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={ROUTES.PRIVACY_POLICY}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
            >
              Privacy Policy
            </Link>
            <Link
              href={ROUTES.TERMS_OF_USE}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors underline"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
