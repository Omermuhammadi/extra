import React from 'react';
import Image from 'next/image';

const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.png",
  "/5.png",
  "/6.png"
];

export function Gallery() {
  return (
    <section className="py-24 bg-surface-container-low w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-primary">
            Our Standard of Clean
          </h2>
        </div>
        
        {/* CSS Grid standard layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className="relative overflow-hidden rounded-xl shadow-md bg-muted aspect-[4/3] group"
            >
              <Image
                src={src}
                alt={`Commercial cleaning gallery image ${idx + 1}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle hover overlay to enhance premium feel */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
