import React from "react";
import Image from "next/image";

const images = [
  {
    src: "/office-cleaning-services.jpg",
    alt: "Office cleaning services for commercial workspaces",
  },
  {
    src: "/school-cleaning-services.jpg",
    alt: "School cleaning services for classrooms and hallways",
  },
  {
    src: "/industrial-cleaning-services.jpg",
    alt: "Industrial cleaning services for warehouse and facility spaces",
  },
  {
    src: "/post-construction-cleaning-services.jpg",
    alt: "Post-construction cleaning services for turnover and final detail work",
  },
];

export function Gallery() {
  return (
    <section className="w-full bg-surface-container-low py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-600">
              Visual Support
            </span>
            <h2 className="text-3xl font-heading font-bold tracking-tight text-primary md:text-5xl">
              A Cleaner Visual Story
            </h2>
            <p className="mt-5 text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
              Commercial buyers respond to clean visuals, clear pages, and obvious service fit. This section supports that without turning the site into an overdesigned portfolio.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-full bg-white px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-primary shadow-sm">
              Offices
            </div>
            <div className="rounded-full bg-white px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-primary shadow-sm">
              Schools
            </div>
            <div className="rounded-full bg-white px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-primary shadow-sm">
              Industrial
            </div>
            <div className="rounded-full bg-white px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-primary shadow-sm">
              Post-Construction
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {images.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-md"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                quality={72}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
