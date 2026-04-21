import React from "react";
import Link from "next/link";
import { BookCallButton } from "@/components/ui/book-call-button";
import { MobileMenu } from "@/components/ui/mobile-menu";
import { NavMenu } from "@/components/ui/nav-menu";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 shadow-sm backdrop-blur-md">
      <div className="bg-primary text-white">
        <div className="container mx-auto flex min-h-10 flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2 text-xs sm:text-sm">
          <p className="font-medium text-white/80">Serving {siteConfig.serviceArea}</p>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href={siteConfig.phoneHref}
              className="font-semibold text-white transition-colors hover:text-amber-300"
            >
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={siteConfig.emailHref}
              className="hidden font-medium text-white/90 transition-colors hover:text-amber-300 sm:inline-flex"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex h-20 flex-row items-center justify-between px-4">
        <div className="ml-2 flex-shrink-0">
          <Link
            href="/"
            className="font-heading text-lg font-bold tracking-tight text-primary sm:text-xl"
          >
            ARTILLERY CLEANING SERVICES
          </Link>
        </div>

        <div className="hidden flex-1 justify-center md:flex">
          <NavMenu />
        </div>

        <div className="hidden flex-shrink-0 md:flex">
          <BookCallButton />
        </div>

        <div className="flex flex-shrink-0 md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
