import React from "react";
import Link from "next/link";

const items = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/industries' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export function NavMenu() {
  return (
    <nav className="flex items-center gap-1 rounded-full border border-border/40 bg-background/50 px-2 py-1 shadow-sm backdrop-blur-md">
      {items.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface-container-low hover:text-foreground"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
