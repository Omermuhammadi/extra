import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { areaPages } from "@/lib/area-pages";

type ServiceAreasSectionProps = {
  title?: string;
  description?: string;
};

export function ServiceAreasSection({
  title = "Local Service Area Pages",
  description = "These pages give nearby buyers a direct local entry point and make the service area clearer for both search engines and human visitors.",
}: ServiceAreasSectionProps) {
  return (
    <section className="w-full bg-surface-container-low py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-600">
              Local Reach
            </span>
            <h2 className="mb-5 text-3xl font-heading font-extrabold tracking-tight text-primary md:text-5xl">
              {title}
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              {description}
            </p>
          </div>

          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 self-start rounded-full border border-border/60 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:border-amber-500/50 hover:text-amber-600"
          >
            View All Areas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {areaPages.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="group overflow-hidden rounded-2xl border border-border/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/60 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-heading font-bold text-primary">
                  {area.name}
                </h3>
                <p className="mb-4 text-base leading-relaxed text-muted-foreground">
                  {area.cardDescription}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-amber-600">
                  Explore Area Page
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
