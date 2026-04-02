"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="pt-24 pb-8 px-4 w-full relative overflow-hidden">
      <Image
        src="/images/w.png"
        alt="Cleaning professionals in action"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/60 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl text-left">
          <span className="text-amber-500 font-mono text-sm uppercase tracking-widest mb-3 block">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mb-4 leading-tight">
            Commercial Cleaning &<br/>
            Facility Maintenance Services
          </h1>
          
          <p className="text-base md:text-xl text-gray-100 font-medium leading-relaxed mb-8">
            We offer professional building cleaning and maintenance services for commercial, residential, and construction clients.
          </p>

          <Link 
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-amber-500 hover:bg-amber-600 text-gray-900 font-extrabold text-lg transition-colors shadow-lg"
          >
            Request a Custom Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
