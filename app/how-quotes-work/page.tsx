import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { ContactFooter } from "@/components/sections/contact-footer";
import { TrustCoverageSection } from "@/components/sections/trust-coverage-section";
import { absoluteUrl, businessAddressSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "How Commercial Cleaning Quotes Work | Artillery Cleaning Services",
  description:
    "Learn how Artillery Cleaning Services reviews building type, schedule, service scope, and local coverage before moving a quote forward.",
  alternates: {
    canonical: "/how-quotes-work",
  },
  openGraph: {
    title: "How Commercial Cleaning Quotes Work | Artillery Cleaning Services",
    description:
      "Review the quote process, service coverage, and next steps for commercial cleaning requests in Delaware County and Chester, PA.",
    url: "/how-quotes-work",
    type: "article",
    images: [
      {
        url: "/office-cleaning-services.jpg",
        alt: "Commercial cleaning quote process with Artillery Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Commercial Cleaning Quotes Work | Artillery Cleaning Services",
    description:
      "Review the quote process, service coverage, and next steps for commercial cleaning requests in Delaware County and Chester, PA.",
    images: ["/office-cleaning-services.jpg"],
  },
};

const quoteChecklist = [
  "Building type and location",
  "Service type needed",
  "Preferred schedule or frequency",
  "High-priority spaces or problem areas",
  "Any timing, access, or turnover deadlines",
];

export default function HowQuotesWorkPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "How Commercial Cleaning Quotes Work",
    description: metadata.description,
    url: absoluteUrl("/how-quotes-work"),
    about: {
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
        name: "How Quotes Work",
        item: absoluteUrl("/how-quotes-work"),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([pageSchema, breadcrumbSchema]) }}
      />

      <section className="bg-primary pt-32 pb-24 text-white md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm font-medium text-white/75"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-white/45" />
            <span className="text-white">How Quotes Work</span>
          </nav>
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-400">
            Quote Process
          </span>
          <h1 className="mb-6 max-w-4xl text-4xl font-heading font-extrabold tracking-tight md:text-6xl">
            How commercial cleaning quotes move forward
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
            This page explains what Artillery needs to review a cleaning request, what buyers should send first, and how the next step moves toward a site quote or walkthrough.
          </p>
        </div>
      </section>

      <TrustCoverageSection />

      <section className="bg-surface-container-low py-24 md:py-28">
        <div className="max-w-7xl mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 xl:gap-16">
          <div>
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-600">
              What To Send
            </span>
            <h2 className="mb-5 text-3xl font-heading font-extrabold tracking-tight text-primary md:text-5xl">
              The details that make a quote easier to review
            </h2>
            <p className="text-lg leading-8 text-muted-foreground md:text-xl">
              A short message with the right details usually moves faster than a generic “Do you do cleaning?” request.
            </p>
          </div>

          <div className="rounded-[30px] border border-border/60 bg-white p-8 md:p-10">
            <ul className="space-y-4">
              {quoteChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-gray-900 transition-colors hover:bg-amber-400"
              >
                Request a Site Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={siteConfig.emailHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 bg-background px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:border-amber-500/50 hover:text-amber-600"
              >
                Email Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </main>
  );
}

