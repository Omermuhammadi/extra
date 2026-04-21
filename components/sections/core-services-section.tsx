import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { servicePages } from "@/lib/service-pages";

type CoreServicesSectionProps = {
  title?: string;
  description?: string;
  compact?: boolean;
};

export function CoreServicesSection({
  title = "Core Commercial Cleaning Services",
  description = "Explore the main service lines we want buyers to understand first. Each page is built around a real service need, a real facility type, and a clear next step.",
  compact = false,
}: CoreServicesSectionProps) {
  return (
    <section className={`w-full bg-background ${compact ? "py-20" : "py-28"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-600">
            Service Focus
          </span>
          <h2 className="mb-5 text-3xl font-heading font-extrabold tracking-tight text-primary md:text-5xl">
            {title}
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {servicePages.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-[28px] border border-border/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/60 hover:shadow-xl"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-primary/5">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent" />
                <div className="absolute left-6 bottom-6 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                  {service.shortName}
                </div>
              </div>

              <div className="flex h-full flex-col p-7 md:p-8">
                <h3 className="mb-4 text-[1.7rem] font-heading font-bold leading-tight text-primary md:text-3xl">
                  {service.name}
                </h3>
                <p className="mb-7 flex-1 text-[1.02rem] leading-8 text-muted-foreground">
                  {service.cardDescription}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
                  Learn More
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
