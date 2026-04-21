import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { serviceAreaPages } from "@/lib/service-area-pages";

type LocalServicePagesSectionProps = {
  title?: string;
  description?: string;
  serviceSlug?: string;
  areaSlug?: string;
  limit?: number;
  excludePath?: string;
};

export function LocalServicePagesSection({
  title = "Local Service Pages",
  description = "These pages combine service intent with local coverage so buyers can land on a page that matches what they need and where they need it.",
  serviceSlug,
  areaSlug,
  limit,
  excludePath,
}: LocalServicePagesSectionProps) {
  const filteredPages = serviceAreaPages
    .filter((page) => (serviceSlug ? page.serviceSlug === serviceSlug : true))
    .filter((page) => (areaSlug ? page.areaSlug === areaSlug : true))
    .filter((page) => (excludePath ? page.path !== excludePath : true))
    .slice(0, limit);

  if (filteredPages.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-surface-container-low py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-600">
            Local Search
          </span>
          <h2 className="mb-5 text-3xl font-heading font-extrabold tracking-tight text-primary md:text-5xl">
            {title}
          </h2>
          <p className="text-lg leading-8 text-muted-foreground md:text-xl">{description}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {filteredPages.map((page) => (
            <Link
              key={page.key}
              href={page.path}
              className="group overflow-hidden rounded-[28px] border border-border/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/60 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-primary/5">
                <Image
                  src={page.image}
                  alt={page.heroTitle}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/15 to-transparent" />
                <div className="absolute left-6 bottom-6 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                  {page.service.shortName} in {page.area.name}
                </div>
              </div>

              <div className="p-7 md:p-8">
                <h3 className="mb-4 text-[1.7rem] font-heading font-bold leading-tight text-primary md:text-3xl">
                  {page.heroTitle}
                </h3>
                <p className="mb-6 text-[1.02rem] leading-8 text-muted-foreground">
                  {page.metaDescription}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
                  View Local Page
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
