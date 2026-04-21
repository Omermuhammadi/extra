"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative w-full overflow-hidden px-4 pt-24 pb-8">
      <Image
        src="/images/w.png"
        alt="Cleaning professionals in action"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-3xl text-left">
          <span className="mb-3 block font-mono text-sm uppercase tracking-widest text-amber-500">
            Our Services
          </span>
          <h1 className="mb-4 text-4xl font-heading font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            Commercial Cleaning Services
            <br />
            For Local Facility Buyers
          </h1>

          <p className="mb-8 text-base font-medium leading-relaxed text-gray-100 md:text-xl">
            Explore office cleaning, school cleaning, industrial cleaning, and post-construction support across Delaware County and Chester, PA.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-md bg-amber-500 px-8 py-4 text-lg font-extrabold text-gray-900 shadow-lg transition-colors hover:bg-amber-600"
          >
            Request a Site Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
