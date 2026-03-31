"use client";

import { Button } from "@/components/ui/button";
import { ASSETS, EXTERNAL_LINKS, NAV_LINKS } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    < header
      className={`fixed top-0 left-0 right-0 z-50 h-20  backdrop-blur-md transition-shadow duration-300 ${hasScrolled ? "shadow-md bg-white/85" : ""
        }`
      }

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
            width={210}
            height={64}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Right side - Navigation Links + Get App Button */}
        <div className="flex items-center gap-4">
          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center text-lg font-regular gap-8">
            <Link
              href={NAV_LINKS.FEATURES}
              className=" ext-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href={NAV_LINKS.REVIEW}
              className=" text-muted-foreground hover:text-foreground transition-colors"
            >
              Review
            </Link>
            <Link
              href={NAV_LINKS.CONTACT}
              className=" text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
        {/* Get App Button - Desktop */}
        <div>
          <Button
            variant="default"
            size="lg"
            className="hidden md:inline-flex rounded-full"
            asChild
          >
            <a
              href={EXTERNAL_LINKS.APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-foreground hover:text-muted-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${isMenuOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          <Link
            href={NAV_LINKS.FEATURES}
            className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href={NAV_LINKS.REVIEW}
            className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Review
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
    </header >
  );
}
