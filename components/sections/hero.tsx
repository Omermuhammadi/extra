import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, MapPin, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex w-full flex-col bg-background">
      <div className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-muted">
          <Image
            src="/Gemini_Generated_Image_rnj7xirnj7xirnj7.png"
            alt="Professional commercial cleaning staff meticulously polishing a facility floor"
            fill
            sizes="100vw"
            quality={45}
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 w-full bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent md:w-[80%] lg:w-[65%]" />
          <div className="absolute inset-0 block bg-gray-900/80 md:hidden" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-32 pb-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="mb-8 font-heading text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg md:text-6xl lg:text-7xl">
              Commercial Cleaning for
              <br className="hidden md:block" /> Demanding Facilities
            </h1>

            <div className="group relative mb-10 max-w-2xl overflow-hidden rounded-r-xl border-l-[6px] border-amber-500 bg-gray-900/40 py-5 pl-6 pr-6 shadow-2xl backdrop-blur-[6px] transition-transform duration-300 hover:scale-[1.01]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <p className="text-lg font-semibold leading-relaxed tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:text-[1.35rem]">
                Reliable cleaning support for offices, schools, industrial properties, and post-construction sites across Delaware County & Chester, PA.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-amber-500 px-8 py-4 font-bold text-gray-900 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:bg-amber-600"
              >
                Request a Site Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-8 py-4 font-bold text-white shadow-lg backdrop-blur-md transition-colors duration-300 hover:bg-white/20"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full border-t-4 border-amber-500 bg-primary shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Shield className="h-7 w-7 text-amber-500" />
              </div>
              <div className="flex h-full flex-col justify-center">
                <span className="font-heading text-lg font-bold leading-tight text-white md:text-xl">
                  Commercial-Only Focus
                </span>
                <span className="mt-1 text-sm font-semibold uppercase tracking-wider text-amber-500">
                  Offices, Schools, Industrial, Turnover
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10">
                <MapPin className="h-7 w-7 text-amber-500" />
              </div>
              <div className="flex h-full flex-col justify-center">
                <span className="font-heading text-lg font-bold leading-tight text-white md:text-xl">
                  Delaware County & Chester
                </span>
                <span className="mt-1 text-sm font-semibold uppercase tracking-wider text-amber-500">
                  Local Pennsylvania Service Area
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Clock className="h-7 w-7 text-[#428aff]" />
              </div>
              <div className="flex h-full flex-col justify-center">
                <span className="font-heading text-lg font-bold leading-tight text-white md:text-xl">
                  Quote-Friendly Process
                </span>
                <span className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#428aff]">
                  Clear Scope And Next Step
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
