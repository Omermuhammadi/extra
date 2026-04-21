import type { Metadata } from "next";
import { ServiceAreasSection } from "@/components/sections/service-areas-section";
import { CtaBand } from "@/components/sections/cta-band";
import { ContactFooter } from "@/components/sections/contact-footer";
import { LocalServicePagesSection } from "@/components/sections/local-service-pages-section";

export const metadata: Metadata = {
  title: "Service Areas | Artillery Cleaning Services",
  description:
    "Explore the local service areas covered by Artillery Cleaning Services across Delaware County and Chester, PA.",
  alternates: {
    canonical: "/service-areas",
  },
};

export default function ServiceAreasPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <section className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-400">
            Local Coverage
          </span>
          <h1 className="mb-5 max-w-4xl text-4xl font-heading font-extrabold tracking-tight md:text-6xl">
            Commercial Cleaning Service Areas
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
            We focus on Delaware County and Chester, PA, with commercial cleaning support designed for offices, schools, industrial properties, and contractor cleanup needs.
          </p>
        </div>
      </section>

      <ServiceAreasSection
        title="Explore Local Area Pages"
        description="Use these pages to find the most relevant local coverage for your building, job site, or facility."
      />
      <LocalServicePagesSection
        title="Popular local cleaning combinations"
        description="These pages combine the cleaning service and the local coverage area so visitors can find the right page faster."
      />

      <CtaBand
        title="Need commercial cleaning in your area?"
        description="Tell us the location, building type, and service need. We'll review the scope and help move the next step forward."
      />
      <ContactFooter />
    </main>
  );
}
