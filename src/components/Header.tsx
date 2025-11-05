"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, EXTERNAL_LINKS, ASSETS } from "@/lib/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo/Brand */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src={ASSETS.LOGO_WITH_TEXT}
            alt="Clamby Logo"
            width={120}
            height={40}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href={NAV_LINKS.ABOUT_US}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About us
          </Link>
          <Link
            href={NAV_LINKS.MILESTONES}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Milestones
          </Link>
          <Link
            href={NAV_LINKS.REVIEWS}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Reviews
          </Link>
          <Link
            href={NAV_LINKS.CONTACT_US}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact us
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Get the app Button */}
          <Button
            variant="default"
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href={EXTERNAL_LINKS.APP_STORE}>Get the app</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
