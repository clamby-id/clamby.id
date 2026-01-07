"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, ASSETS, EXTERNAL_LINKS } from "@/lib/constants";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-20 bg-white/85 backdrop-blur-md transition-shadow duration-300 ${
        hasScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src={ASSETS.LOGO_WITH_TEXT}
            alt="Clamby Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Right side - Navigation Links + Get App Button */}
        <div className="flex items-center gap-4">
          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href={NAV_LINKS.OVERVIEW}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Overview
            </Link>
            <Link
              href={NAV_LINKS.BENEFITS}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefits
            </Link>
            <Link
              href={NAV_LINKS.CONTACT}
              className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Get App Button - Desktop */}
          <Button
            variant="default"
            size="lg"
            className="hidden md:inline-flex rounded-full px-8"
            asChild
          >
            <a
              href={EXTERNAL_LINKS.APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get App
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          <Link
            href={NAV_LINKS.OVERVIEW}
            className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Overview
          </Link>
          <Link
            href={NAV_LINKS.BENEFITS}
            className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Benefits
          </Link>
          <Link
            href={NAV_LINKS.CONTACT}
            className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Button
            variant="default"
            size="lg"
            className="mt-2 rounded-full"
            asChild
          >
            <a
              href={EXTERNAL_LINKS.APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get App
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
