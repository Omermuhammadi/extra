import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutVideoFacade } from "@/components/sections/about-video";
import { ContactFooter } from "@/components/sections/contact-footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `About ${siteConfig.name} | Delaware County & Chester, PA`,
  description:
    "Learn how Artillery Cleaning Services supports offices, schools, industrial properties, and post-construction sites across Delaware County and Chester, PA.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutHero />

      <section className="py-20 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4">
              The Artillery Standard
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-primary tracking-tight mb-5">
              Built for Facilities That Need Reliable Follow-Through
            </h2>
            <p className="text-lg text-gray-800 mb-5 leading-relaxed font-medium">
              Artillery Cleaning Services focuses on continuity, clear communication, and reliable building care for offices, schools, industrial sites, and post-construction work. Service planning is built around facility traffic, operating hours, and site access instead of forcing a generic checklist.
            </p>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed font-medium">
              From recurring janitorial service to transition support and post-construction cleanup, the goal is practical commercial cleaning support that is easier for the buyer to manage.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={siteConfig.emailHref}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-md bg-amber-500 hover:bg-amber-600 text-gray-900 font-extrabold text-base md:text-lg transition-colors shadow-md"
              >
                <Mail className="w-5 h-5" />
                Email Our Team
              </a>
              <Link
                href="/how-quotes-work"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-md border border-border bg-background hover:bg-surface-container-lowest text-primary font-bold transition-colors"
              >
                How Quotes Work
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
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
              Review our service focus and industry-specific support to match your building type, schedule, and cleaning workload.
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
              <Link
                href="/service-areas"
                className="inline-flex items-center justify-center gap-3 px-7 py-3 rounded-md border border-border bg-background hover:bg-surface-container-lowest text-primary font-bold transition-colors"
              >
                View Service Areas
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
