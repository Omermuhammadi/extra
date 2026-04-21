import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnswerCards } from "@/components/sections/answer-cards";
import { CtaBand } from "@/components/sections/cta-band";
import { CoreServicesSection } from "@/components/sections/core-services-section";
import { ContactFooter } from "@/components/sections/contact-footer";
import { LocalServicePagesSection } from "@/components/sections/local-service-pages-section";
import type { AreaPageData } from "@/lib/area-pages";
import { siteConfig } from "@/lib/site";
import { absoluteUrl, businessAddressSchema } from "@/lib/seo";

type AreaDetailPageProps = {
  area: AreaPageData;
};

export function AreaDetailPage({ area }: AreaDetailPageProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    url: siteConfig.url,
    areaServed: area.name,
    description: area.metaDescription,
    address: businessAddressSchema,
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Areas",
        item: absoluteUrl("/service-areas"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: area.name,
        item: absoluteUrl(`/service-areas/${area.slug}`),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, breadcrumbSchema]) }}
      />

      <section className="relative overflow-hidden bg-primary pt-32 pb-24 text-white md:pt-36 md:pb-28">
        <div className="absolute inset-0">
          <Image
            src={area.image}
            alt={area.name}
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-[#162945]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm font-medium text-white/75"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-white/45" />
            <Link href="/service-areas" className="transition-colors hover:text-white">
              Service Areas
            </Link>
            <ChevronRight className="h-4 w-4 text-white/45" />
            <span className="text-white">{area.name}</span>
          </nav>
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-400">
            Service Area
          </span>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end xl:gap-20">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-heading font-extrabold tracking-tight md:text-6xl">
                {area.heroTitle}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                {area.heroDescription}
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/8 p-7 backdrop-blur-sm md:p-8">
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-white/60">
                Local Focus
              </div>
              <ul className="space-y-4">
                {area.focusPoints.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/85">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
                    <span className="text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-gray-900 transition-colors hover:bg-amber-400"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/12"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnswerCards
        tone="muted"
        title={`Quick answers about cleaning support in ${area.name}`}
        description="These answers are designed for local buyers who want to confirm service fit, coverage, and the first step before contacting the business."
        items={[
          {
            title: "What is offered here",
            text: area.cardDescription,
          },
          {
            title: "Who this fits",
            text: "Facility managers, property contacts, school teams, office managers, and contractors with local commercial cleaning needs.",
          },
          {
            title: "Where we work",
            text: `Commercial properties and job sites in ${area.name}.`,
          },
          {
            title: "How to start",
            text: "Send the building type, schedule, and service need so the scope can be reviewed.",
          },
        ]}
      />

      <section className="bg-white py-24 md:py-28">
        <div className="max-w-7xl mx-auto grid gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8 xl:gap-20">
          <div className="max-w-2xl">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-600">
              Local Overview
            </span>
            <h2 className="mb-6 text-3xl font-heading font-extrabold tracking-tight text-primary md:text-5xl">
              Commercial Cleaning Support for {area.name}
            </h2>
            <p className="text-lg leading-8 text-muted-foreground md:text-xl">
              {area.intro}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-[28px] border border-border/60 bg-surface-container-low p-7 md:p-8">
              <h3 className="mb-4 text-xl font-heading font-bold text-primary">
                Service Focus
              </h3>
              <ul className="space-y-4">
                {area.focusPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-border/60 bg-surface-container-low p-7 md:p-8">
              <h3 className="mb-4 text-xl font-heading font-bold text-primary">
                Typical Facility Types
              </h3>
              <ul className="space-y-4">
                {area.facilityTypes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CoreServicesSection
        title={`Cleaning Services Available in ${area.name}`}
        description={`These are the main service lines we want buyers in ${area.name} to find quickly.`}
        compact
      />

      <LocalServicePagesSection
        title={`Service plus location pages for ${area.name}`}
        description={`These pages connect the cleaning service and ${area.name} together so local buyers can land on a page with a clearer match.`}
        areaSlug={area.slug}
      />

      <section className="bg-background py-24 md:py-28">
        <div className="max-w-7xl mx-auto grid gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 xl:gap-20">
          <div>
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-600">
              Area FAQ
            </span>
            <h2 className="mb-6 text-3xl font-heading font-extrabold tracking-tight text-primary md:text-5xl">
              Questions About Service in {area.name}
            </h2>
            <Accordion className="w-full">
              {area.faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`} className="border-border/60">
                  <AccordionTrigger className="text-left text-lg font-heading font-bold text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-8 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="rounded-[30px] border border-border/60 bg-surface-container-low p-8 md:p-10">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-600">
              Next Steps
            </span>
            <h3 className="mb-4 text-2xl font-heading font-bold text-primary">
              Need a site quote in {area.name}?
            </h3>
            <p className="mb-6 text-base leading-8 text-muted-foreground">
              Share the building type, schedule, and service need. We&apos;ll review the scope and help move the next step forward.
            </p>
            <div className="space-y-3">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-gray-900 transition-colors hover:bg-amber-400"
              >
                Request a Site Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border/60 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:border-amber-500/50 hover:text-amber-600"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Looking for commercial cleaning in ${area.name}?`}
        description="Tell us what type of building you have, what kind of cleaning support you need, and what schedule works best."
      />
      <ContactFooter />
    </main>
  );
}
