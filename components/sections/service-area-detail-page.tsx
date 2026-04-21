import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnswerCards } from "@/components/sections/answer-cards";
import { CtaBand } from "@/components/sections/cta-band";
import { ContactFooter } from "@/components/sections/contact-footer";
import { LocalServicePagesSection } from "@/components/sections/local-service-pages-section";
import type { ServiceAreaPageData } from "@/lib/service-area-pages";
import { absoluteUrl, businessAddressSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type ServiceAreaDetailPageProps = {
  page: ServiceAreaPageData;
};

export function ServiceAreaDetailPage({ page }: ServiceAreaDetailPageProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.heroTitle,
    serviceType: page.service.name,
    description: page.metaDescription,
    areaServed: page.area.name,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phoneDisplay,
      email: siteConfig.email,
      address: businessAddressSchema,
    },
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
        name: "Services",
        item: absoluteUrl("/services"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.service.name,
        item: absoluteUrl(`/services/${page.service.slug}`),
      },
      {
        "@type": "ListItem",
        position: 4,
        name: page.area.name,
        item: absoluteUrl(page.path),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />

      <section className="relative overflow-hidden bg-primary pt-32 pb-24 text-white md:pt-36 md:pb-28">
        <div className="absolute inset-0">
          <Image
            src={page.image}
            alt={page.heroTitle}
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
            <Link href="/services" className="transition-colors hover:text-white">
              Services
            </Link>
            <ChevronRight className="h-4 w-4 text-white/45" />
            <Link href={`/services/${page.service.slug}`} className="transition-colors hover:text-white">
              {page.service.shortName}
            </Link>
            <ChevronRight className="h-4 w-4 text-white/45" />
            <span className="text-white">{page.area.name}</span>
          </nav>

          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-400">
            {page.service.shortName} in {page.area.name}
          </span>

          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end xl:gap-20">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-heading font-extrabold tracking-tight md:text-6xl">
                {page.heroTitle}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                {page.heroDescription}
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/8 p-7 backdrop-blur-sm md:p-8">
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-white/60">
                Local Fit
              </div>
              <ul className="space-y-4">
                {page.localPoints.slice(0, 3).map((item) => (
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
                  href={`/service-areas/${page.area.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/12"
                >
                  View Area Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnswerCards
        title={`Quick answers for ${page.service.shortName.toLowerCase()} in ${page.area.name}`}
        description="This page is written to answer the first questions buyers usually ask before they request a site quote."
        items={page.answerCards}
      />

      <section className="bg-white py-24 md:py-28">
        <div className="max-w-7xl mx-auto grid gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8 xl:gap-20">
          <div className="max-w-2xl">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-600">
              Local Overview
            </span>
            <h2 className="mb-6 text-3xl font-heading font-extrabold tracking-tight text-primary md:text-5xl">
              A local page built around real buyer intent
            </h2>
            <p className="text-lg leading-8 text-muted-foreground md:text-xl">{page.intro}</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-[28px] border border-border/60 bg-surface-container-low p-7 md:p-8">
              <h3 className="mb-5 text-xl font-heading font-bold text-primary">Good Fit For</h3>
              <ul className="space-y-4">
                {page.facilityTypes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[28px] border border-border/60 bg-surface-container-low p-7 md:p-8">
              <h3 className="mb-5 text-xl font-heading font-bold text-primary">
                Typical Scope Includes
              </h3>
              <ul className="space-y-4">
                {page.scopeIncludes.map((item) => (
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

      <section className="bg-surface-container-low py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-600">
              Why This Page Exists
            </span>
            <h2 className="mb-5 text-3xl font-heading font-extrabold tracking-tight text-primary md:text-5xl">
              Useful local detail instead of a generic city page
            </h2>
            <p className="text-lg leading-8 text-muted-foreground md:text-xl">
              Buyers usually search for both the service and the area together. This page keeps that search intent clear while still giving a real overview of the work.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {page.localPoints.map((point, index) => (
              <div
                key={point}
                className="rounded-[28px] border border-border/60 bg-white p-8 shadow-sm md:p-10"
              >
                <div className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-amber-600">
                  Point {index + 1}
                </div>
                <p className="text-lg leading-8 text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 md:py-28">
        <div className="max-w-7xl mx-auto grid gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 xl:gap-20">
          <div>
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-600">
              Local FAQ
            </span>
            <h2 className="mb-6 text-3xl font-heading font-extrabold tracking-tight text-primary md:text-5xl">
              Questions about {page.service.shortName.toLowerCase()} in {page.area.name}
            </h2>
            <Accordion className="w-full">
              {page.faqs.map((faq, index) => (
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
              Keep Exploring
            </span>
            <h3 className="mb-5 text-2xl font-heading font-bold text-primary">
              Related local and service pages
            </h3>
            <div className="space-y-4">
              <Link
                href={`/services/${page.service.slug}`}
                className="group block rounded-[24px] border border-border/60 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-amber-500/50 hover:shadow-sm"
              >
                <div className="mb-2 text-lg font-heading font-bold text-primary">
                  {page.service.name}
                </div>
                <p className="text-sm leading-7 text-muted-foreground">
                  View the parent service page for the full service overview and quote guidance.
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-600">
                  View Service Page
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
              <Link
                href={`/service-areas/${page.area.slug}`}
                className="group block rounded-[24px] border border-border/60 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-amber-500/50 hover:shadow-sm"
              >
                <div className="mb-2 text-lg font-heading font-bold text-primary">
                  Commercial Cleaning in {page.area.name}
                </div>
                <p className="text-sm leading-7 text-muted-foreground">
                  Review the broader area page for service coverage, facility types, and local FAQs.
                </p>
                <div className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-600">
                  View Area Page
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LocalServicePagesSection
        title={`More local cleaning pages for ${page.area.name}`}
        description={`Use these pages to compare other cleaning services available in ${page.area.name}.`}
        areaSlug={page.areaSlug}
        excludePath={page.path}
      />

      <CtaBand
        title={`Need ${page.service.shortName.toLowerCase()} support in ${page.area.name}?`}
        description="Tell us about the building, the service need, and the schedule. We will review the scope and help move the next step forward."
      />
      <ContactFooter />
    </main>
  );
}
