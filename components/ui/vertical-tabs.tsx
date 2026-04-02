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
    description: 'Zero-disruption night scheduling and daily janitorial to maintain a pristine corporate image for your workforce and clientele.',
    image: '/1.jpg',
  },
  {
    id: '02',
    title: 'Educational Facilities',
    description: 'Aggressive sanitization protocols and high-touch disinfection designed to reduce absenteeism and ensure student safety.',
    image: '/2.jpg',
  },
  {
    id: '03',
    title: 'Industrial & Manufacturing',
    description: 'Heavy-duty degreasing, high-speed buffing, and sweeping that adheres to strict facility safety and compliance standards.',
    image: '/3.jpg',
  },
  {
    id: '04',
    title: 'Construction Support',
    description: 'Rapid-deployment temporary labor and final detail cleaning to get your multi-million dollar builds move-in ready on deadline.',
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
    enter: (direction: number) => ({ y: direction > 0 ? '-100%' : '100%', opacity: 0 }),
    center: { zIndex: 1, y: 0, opacity: 1 },
    exit: (direction: number) => ({ zIndex: 0, y: direction > 0 ? '100%' : '-100%', opacity: 0 }),
  };

  return (
    <section className="w-full bg-background py-8 md:py-16 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-4">
            <div className="space-y-1 mb-12">
              <h2 className="tracking-tighter text-balance text-3xl font-bold md:text-4xl lg:text-5xl text-foreground">
                Specialized Facility Maintenance
              </h2>
              <span className="text-amber-700 text-xs font-bold uppercase tracking-widest block mt-4">
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
                      'group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-500 border-t border-border/50 first:border-0',
                      isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    <div className="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[3px] bg-muted">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full bg-amber-500 origin-top"
                          initial={{ height: '0%' }}
                          animate={isPaused ? { height: '0%' } : { height: '100%' }}
                          transition={{ duration: AUTO_PLAY_DURATION / 1000, ease: 'linear' }}
                        />
                      )}
                    </div>
                    <span className="text-[10px] text-muted-foreground font-medium mt-1 tabular-nums">
                      /{industry.id}
                    </span>
                    <div className="flex flex-col gap-2 flex-1">
                      <span className={cn('text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-500', isActive ? 'text-foreground' : '')}>
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
                            <p className="text-muted-foreground text-sm md:text-base font-normal leading-relaxed max-w-sm pb-2 mt-2">
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
          <div className="lg:col-span-7 flex flex-col justify-end h-full order-1 lg:order-2">
            <div className="relative group/gallery" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              <div className="relative aspect-[4/3] lg:aspect-[16/11] rounded-3xl overflow-hidden bg-muted/30 border border-border/40 shadow-xl">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ y: { type: 'spring', stiffness: 260, damping: 32 }, opacity: { duration: 0.4 } }}
                    className="absolute inset-0 w-full h-full cursor-pointer bg-gray-900"
                    onClick={handleNext}
                  >
                    <Image
                      src={INDUSTRIES[activeIndex].image}
                      alt={INDUSTRIES[activeIndex].title}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      priority={activeIndex === 0}
                      className="object-cover transition-transform duration-700 hover:scale-105 opacity-80"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute bottom-6 right-6 flex gap-3 z-20">
                  <button
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                    aria-label="Show previous industry"
                    className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                    aria-label="Show next industry"
                    className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/80 transition-all"
                  >
                    <ArrowRight className="w-5 h-5" />
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
