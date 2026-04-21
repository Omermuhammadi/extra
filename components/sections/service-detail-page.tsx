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
import { ContactFooter } from "@/components/sections/contact-footer";
import { LocalServicePagesSection } from "@/components/sections/local-service-pages-section";
import type { ServicePageData } from "@/lib/service-pages";
import { servicePages } from "@/lib/service-pages";
import { siteConfig } from "@/lib/site";
import { absoluteUrl, businessAddressSchema, sitewideServiceAreas } from "@/lib/seo";

type ServiceDetailPageProps = {
  service: ServicePageData;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.metaDescription,
    areaServed: [...sitewideServiceAreas],
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
        name: service.name,
        item: absoluteUrl(`/services/${service.slug}`),
      },
    ],
  };

  const relatedServices = servicePages.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema]) }}
      />

      <section className="relative overflow-hidden bg-primary pt-32 pb-24 text-white md:pt-36 md:pb-28">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.name}
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
            <span className="text-white">{service.shortName}</span>
          </nav>
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-400">
            {service.shortName}
          </span>
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end xl:gap-20">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-heading font-extrabold tracking-tight md:text-6xl">
                {service.heroTitle}
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
                {service.heroDescription}
              </p>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/8 p-7 backdrop-blur-sm md:p-8">
              <div className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-white/60">
                Best Fit
              </div>
              <ul className="space-y-4">
                {service.idealFor.slice(0, 3).map((item) => (
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
                  href="/service-areas"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/12"
                >
                  View Service Areas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnswerCards
        title={`Quick answers for ${service.shortName.toLowerCase()} buyers`}
        description="This section answers the first questions commercial buyers usually ask before they request a quote."
        items={[
          {
            title: "What this service is",
            text: service.cardDescription,
          },
          {
            title: "Who it fits",
            text: service.idealFor.slice(0, 2).join(" and "),
          },
          {
            title: "Where it is offered",
            text: `Available across ${siteConfig.serviceArea}.`,
          },
          {
            title: "How to start",
            text: "Send the building type, schedule, and service need to move toward a site quote or walkthrough.",
          },
        ]}
      />

      <section className="bg-white py-24 md:py-28">
        <div className="max-w-7xl mx-auto grid gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8 xl:gap-20">
          <div className="max-w-2xl">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-600">
              Service Overview
            </span>
            <h2 className="mb-6 text-3xl font-heading font-extrabold tracking-tight text-primary md:text-5xl">
              What This Service Is Designed To Solve
            </h2>
            <p className="text-lg leading-8 text-muted-foreground md:text-xl">
              {service.intro}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-[28px] border border-border/60 bg-surface-container-low p-7 md:p-8">
              <h3 className="mb-5 text-xl font-heading font-bold text-primary">Ideal For</h3>
              <ul className="space-y-4">
                {service.idealFor.map((item) => (
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
                {service.includes.map((item) => (
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
              Process
            </span>
            <h2 className="mb-5 text-3xl font-heading font-extrabold tracking-tight text-primary md:text-5xl">
              How We Approach This Work
            </h2>
            <p className="text-lg leading-8 text-muted-foreground md:text-xl">
              Clear scope, practical scheduling, and a simple next step matter more than long explanations.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {service.process.map((step, index) => (
              <div
                key={step}
                className="rounded-[28px] border border-border/60 bg-white p-8 shadow-sm md:p-10"
              >
                <div className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-amber-600">
                  Step {index + 1}
                </div>
                <p className="text-lg leading-8 text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocalServicePagesSection
        title={`Local pages for ${service.shortName.toLowerCase()}`}
        description={`These local pages connect ${service.shortName.toLowerCase()} intent to the two core service areas the business is targeting.`}
        serviceSlug={service.slug}
      />

      <section className="bg-background py-24 md:py-28">
        <div className="max-w-7xl mx-auto grid gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 xl:gap-20">
          <div>
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-600">
              Service FAQ
            </span>
            <h2 className="mb-6 text-3xl font-heading font-extrabold tracking-tight text-primary md:text-5xl">
              Questions Buyers Usually Ask
            </h2>
            <Accordion className="w-full">
              {service.faqs.map((faq, index) => (
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
              Related Pages
            </span>
            <h3 className="mb-5 text-2xl font-heading font-bold text-primary">
              Explore More Commercial Cleaning Services
            </h3>
            <div className="space-y-4">
              {relatedServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group block rounded-[24px] border border-border/60 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-amber-500/50 hover:shadow-sm"
                >
                  <div className="mb-2 text-lg font-heading font-bold text-primary">
                    {item.name}
                  </div>
                  <p className="text-sm leading-7 text-muted-foreground">
                    {item.cardDescription}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-600">
                    Read Page
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={`Need ${service.shortName.toLowerCase()} support in Delaware County or Chester?`}
        description="Tell us about the building, the service type, and the schedule. We'll review the scope and help move the next step forward."
      />
      <ContactFooter />
    </main>
  );
}
