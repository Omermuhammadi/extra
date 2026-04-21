"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const mobileItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Industries", href: "/industries" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-site-menu"
        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border/50 bg-background text-primary transition-colors hover:bg-surface-container-low"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen ? (
        <div
          id="mobile-site-menu"
          className="absolute right-0 top-14 z-50 w-64 rounded-xl border border-border/50 bg-background p-2 shadow-xl"
        >
          <nav className="flex flex-col">
            {mobileItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-foreground/90 transition-colors hover:bg-surface-container-low hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
