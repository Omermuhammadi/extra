"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  image?: string;
}

export function ServiceCarousel({ services }: { services: Service[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "start", dragFree: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-[1400px] mx-auto px-4 py-24">
      
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-primary tracking-tight">
            Specialized Portfolio
          </h2>
          <p className="text-lg text-muted-foreground mt-2 font-medium">Swipe to explore our facility maintenance capabilities.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={scrollPrev}
            className="p-4 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button 
            onClick={scrollNext}
            className="p-4 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Embla Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="min-w-0 pl-6 flex-[0_0_90%] sm:flex-[0_0_50%] lg:flex-[0_0_32%]">
                
                <div className="relative h-[480px] bg-gray-900 border border-gray-800 rounded-2xl p-8 flex flex-col justify-end overflow-hidden group cursor-grab active:cursor-grabbing">
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={service.image || "/4.png"}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 90vw"
                      className="object-cover opacity-30 mix-blend-overlay grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 transform group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/80 to-gray-900/10 pointer-events-none" />
                  </div>

                  <div className="relative z-10 flex flex-col items-start">
                    <div className="w-16 h-16 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 shrink-0 backdrop-blur-md transition-colors group-hover:bg-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                      <Icon className="w-8 h-8 text-amber-500" />
                    </div>
                    
                    <span className="text-amber-500 font-mono text-sm tracking-[0.2em] font-bold mb-3">{service.id}</span>
                    
                    <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-white mb-4 leading-tight group-hover:text-amber-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed line-clamp-3 font-medium">
                      {service.description}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
