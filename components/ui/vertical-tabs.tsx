'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const INDUSTRIES = [
  {
    id: '01',
    title: 'Corporate Offices',
    description:
      'After-hours scheduling and daily janitorial support to help maintain a clean, professional environment for staff and visitors.',
    image: '/1.jpg',
  },
  {
    id: '02',
    title: 'Educational Facilities',
    description:
      'High-touch cleaning and scheduled facility support for schools, classrooms, cafeterias, and common areas.',
    image: '/2.jpg',
  },
  {
    id: '03',
    title: 'Industrial & Manufacturing',
    description:
      'Heavy-duty floor care, sweeping, and cleaning support for warehouses, production areas, and industrial properties.',
    image: '/3.jpg',
  },
  {
    id: '04',
    title: 'Construction Support',
    description:
      'Turnover cleaning support for contractors who need rough cleanup, final detail work, and dependable scheduling.',
    image: '/4.png',
  },
];

const AUTO_PLAY_DURATION = 5000;

export function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % INDUSTRIES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + INDUSTRIES.length) % INDUSTRIES.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const variants = {
    enter: (step: number) => ({ y: step > 0 ? "-100%" : "100%", opacity: 0 }),
    center: { zIndex: 1, y: 0, opacity: 1 },
    exit: (step: number) => ({ zIndex: 0, y: step > 0 ? "100%" : "-100%", opacity: 0 }),
  };

  return (
    <section className="w-full bg-background py-8 md:py-16 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 flex flex-col justify-center pt-4 lg:order-1 lg:col-span-5">
            <div className="mb-12 space-y-1">
              <h2 className="text-balance text-3xl font-bold tracking-tighter text-foreground md:text-4xl lg:text-5xl">
                Specialized Facility Maintenance
              </h2>
              <span className="mt-4 block text-xs font-bold uppercase tracking-widest text-amber-700">
                Industries We Serve
              </span>
            </div>
            <div className="flex flex-col space-y-0">
              {INDUSTRIES.map((industry, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={industry.id}
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "group relative flex items-start gap-4 border-t border-border/50 py-6 text-left transition-all duration-500 first:border-0 md:py-8",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <div className="absolute left-[-16px] top-0 bottom-0 w-[3px] bg-muted md:left-[-24px]">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full origin-top bg-amber-500"
                          initial={{ height: '0%' }}
                          animate={isPaused ? { height: '0%' } : { height: '100%' }}
                          transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: 'linear' }}
                        />
                      )}
                    </div>
                    <span className="mt-1 text-[10px] font-medium tabular-nums text-muted-foreground">
                      /{industry.id}
                    </span>
                    <div className="flex flex-1 flex-col gap-2">
                      <span
                        className={cn(
                          'text-2xl font-bold tracking-tight transition-colors duration-500 md:text-3xl',
                          isActive ? 'text-foreground' : ''
                        )}
                      >
                        {industry.title}
                      </span>
                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="mt-2 max-w-sm pb-2 text-sm font-normal leading-relaxed text-muted-foreground md:text-base">
                              {industry.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="order-1 flex h-full flex-col justify-end lg:order-2 lg:col-span-7">
            <div
              className="group/gallery relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/40 bg-muted/30 shadow-xl lg:aspect-[16/11]">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: 'spring', stiffness: 260, damping: 32 },
                      opacity: { duration: 0.4 },
                    }}
                    className="absolute inset-0 h-full w-full cursor-pointer bg-gray-900"
                    onClick={handleNext}
                  >
                    <Image
                      src={INDUSTRIES[activeIndex].image}
                      alt={INDUSTRIES[activeIndex].title}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      priority={activeIndex === 0}
                      className="object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-6 right-6 z-20 flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    aria-label="Show previous industry"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all hover:bg-black/80"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    aria-label="Show next industry"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-all hover:bg-black/80"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
