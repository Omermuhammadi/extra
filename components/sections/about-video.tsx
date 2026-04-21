"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";
import Image from "next/image";

type AboutVideoFacadeProps = {
  priority?: boolean;
};

export function AboutVideoFacade({ priority = false }: AboutVideoFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted shadow-2xl outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-amber-500">
      {!isPlaying ? (
        <button
          onClick={() => setIsPlaying(true)}
          className="group relative flex h-full w-full cursor-pointer appearance-none items-center justify-center border-0 outline-none"
          aria-label="Play promotional video"
        >
          <Image
            src="/thumbnail.png"
            alt="About Artillery Cleaning Services video placeholder"
            fill
            priority={priority}
            className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-primary/30 transition-colors duration-500 group-hover:bg-primary/20" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]">
              <Play className="ml-2 h-8 w-8 text-white" fill="currentColor" />
            </div>
          </div>
        </button>
      ) : (
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/1109280853?h=5729a436df&autoplay=1"
          className="aspect-video h-full w-full rounded-2xl border-none bg-black outline-none"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
}

export function AboutVideo() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="max-w-7xl mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-600">
            Local Commercial Focus
          </span>
          <h2 className="mb-4 text-3xl font-heading font-extrabold tracking-tight text-primary md:text-5xl">
            Commercial cleaning framed around real building needs
          </h2>
          <p className="mb-6 text-lg font-medium leading-relaxed text-gray-800">
            Artillery Cleaning Services is positioned around the needs buyers usually check first: service fit, building type, local coverage, and a clear path to a quote.
          </p>
          <p className="mb-8 text-lg font-medium leading-relaxed text-gray-800">
            The company focuses on offices, schools, industrial properties, and post-construction work across Delaware County and Chester, PA, with local pages that make service coverage easier to understand.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-surface-container-low p-5">
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                Buyer Clarity
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                Clear service pages, local pages, and quote paths for commercial visitors.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-surface-container-low p-5">
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                Local Intent
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                Stronger local coverage structure for Delaware County and Chester search intent.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-500 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-gray-900 transition-colors hover:bg-amber-400"
            >
              Explore Services
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/service-areas"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-border/60 bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:border-amber-500/50 hover:text-amber-600"
            >
              View Service Areas
            </Link>
          </div>
        </div>

        <AboutVideoFacade />
      </div>
    </section>
  );
}
