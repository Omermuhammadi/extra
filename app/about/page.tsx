import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutVideoFacade } from "@/components/sections/about-video";
import { ContactFooter } from "@/components/sections/contact-footer";

export const metadata: Metadata = {
  title: "About Us | Artillery's Commercial Cleaning | Delaware County & Chester, PA",
  description:
    "Learn how Artillery's delivers insured, year-round commercial cleaning, janitorial contracts, and temporary staffing support for facilities across Delaware County and Chester, PA.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutHero />

      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4">
              The Artillery&apos;s Standard
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight mb-5">
              Built for Facility Managers Who Need Zero Guesswork
            </h2>
            <p className="text-lg text-gray-800 mb-5 leading-relaxed font-medium">
              We operate as a fully insured, year-round contractor focused on continuity, safety, and measurable building care. Our teams are trained to align with compliance-driven schedules, tenant traffic patterns, and operational windows that cannot fail.
            </p>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed font-medium">
              From ongoing janitorial contracts to temporary staffing during transitions, shutdowns, or post-construction handoff, we deploy structured support that keeps your site clean, staffed, and inspection-ready.
            </p>

            <a
              href="mailto:Wkirk777@aol.com"
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-md bg-amber-500 hover:bg-amber-600 text-gray-900 font-extrabold text-base md:text-lg transition-colors shadow-md"
            >
              <Mail className="w-5 h-5" />
              Email Our Operations Team
            </a>
          </div>

          <AboutVideoFacade priority />
        </div>
      </section>

      <section className="pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface-container-low border border-border/40 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary tracking-tight mb-4">
              Explore Our Core Commercial Sectors
            </h3>
            <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed mb-8 max-w-3xl">
              Review our service protocols and industry-specific capabilities to match your facility type, compliance level, and operational workload.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-3 px-7 py-3 rounded-md bg-amber-500 hover:bg-amber-600 text-gray-900 font-extrabold transition-colors"
              >
                View Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/industries"
                className="inline-flex items-center justify-center gap-3 px-7 py-3 rounded-md border border-border bg-background hover:bg-surface-container-lowest text-primary font-bold transition-colors"
              >
                View Industries
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}
