"use client";

import React, { useState } from 'react';
import { Play } from 'lucide-react';
import Image from 'next/image';

type AboutVideoFacadeProps = {
  priority?: boolean;
};

export function AboutVideoFacade({ priority = false }: AboutVideoFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-muted outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-amber-500"
    >
      {!isPlaying ? (
        <button
          onClick={() => setIsPlaying(true)}
          className="group relative w-full h-full cursor-pointer flex items-center justify-center appearance-none outline-none border-none border-0"
          aria-label="Play promotional video"
        >
          <Image
            src="/thumbnail.png"
            alt="About Artillery's Video Placeholder"
            fill
            priority={priority}
            className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/20 transition-colors duration-500" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]">
              <Play className="w-8 h-8 text-white ml-2 transition-transform" fill="currentColor" />
            </div>
          </div>
        </button>
      ) : (
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/1109280853?h=5729a436df&autoplay=1"
          className="w-full h-full aspect-video rounded-2xl bg-black border-none outline-none"
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
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side: Text */}
        <div>
          <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4">
            About Artillery&apos;s
          </span>
          <h2 className='text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight mb-4'>
            Trusted. Experienced. Year-Round Service.
          </h2>
          <p className='text-lg text-gray-800 mb-6 leading-relaxed font-medium'>
            Artillery&apos;s is a full-service, year-round commercial cleaning and facility maintenance contractor. We go beyond standard janitorial work to offer a complete suite of specialized services, including high-speed floor buffing, deep carpet cleaning, strip & wax treatments, and window washing.
          </p>
          <p className='text-lg text-gray-800 mb-6 leading-relaxed font-medium'>
            We specialize in uncompromising cleaning solutions for <strong className="text-primary font-bold">Commercial Offices, Schools, Industrial Facilities, and New Construction projects.</strong> We handle everything from heavy post-construction debris removal to providing temporary labor staffing between your new contract negotiations.
          </p>
          <p className='text-lg font-semibold text-primary leading-relaxed'>
            We are currently accepting new commercial contracts and temporary assignments across Delaware County and Chester, PA.
          </p>
        </div>

        <AboutVideoFacade />
      </div>
    </section>
  );
}
