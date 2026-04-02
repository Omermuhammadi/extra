"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function IndustriesHero() {
  return (
    <section className="bg-gray-900 pt-24 pb-8 px-4 w-full relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-5xl mx-auto relative z-10 text-left">
        <span className="text-amber-500 font-mono text-sm uppercase tracking-widest mb-3 block">
          Industries We Serve
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight mb-4 leading-tight">
          Specialized Facility Maintenance<br />
          for Demanding Sectors.
        </h1>
        
        <p className="text-base md:text-xl text-gray-300 font-medium leading-relaxed max-w-3xl mb-8">
          We engineer our cleaning protocols to meet the strict compliance, safety, and operational standards of Delaware County and Chester&apos;s most complex facilities.
        </p>

        <Link 
          href="/contact"
          className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-md bg-amber-500 hover:bg-amber-600 text-gray-900 font-extrabold text-lg transition-colors shadow-lg"
        >
          Request a Custom Quote
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
