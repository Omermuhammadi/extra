import React from "react";
import Link from "next/link";
import { BookCallButton } from "@/components/ui/book-call-button";
import { MobileMenu } from "@/components/ui/mobile-menu";
import { NavMenu } from "@/components/ui/nav-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border/40">
      <div className="container mx-auto px-4 h-20 flex flex-row items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex-shrink-0 ml-2">
          <Link href="/" className="font-heading font-bold tracking-tighter text-xl text-primary">
            ARTILLERY&apos;S
          </Link>
        </div>

        {/* Center: Nav Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <NavMenu />
        </div>

        {/* Right Side: Desktop CTA */}
        <div className="hidden md:flex flex-shrink-0">
          <BookCallButton />
        </div>

        {/* Right Side: Mobile Hamburger */}
        <div className="flex md:hidden flex-shrink-0">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
