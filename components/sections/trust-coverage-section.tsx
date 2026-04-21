import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site";

const quoteSteps = [
  "Tell us the building type, location, and service need.",
  "We review the scope, schedule, and access timing.",
  "If the fit is clear, the next step moves to a site quote or walkthrough.",
];

const coveragePoints = [
  "Delaware County, PA",
  "Chester, PA",
  "Offices, schools, industrial spaces, and post-construction sites",
  "Recurring contracts, overflow support, and turnover cleaning",
];

export function TrustCoverageSection() {
  return (
    <section className="w-full bg-white py-24 md:py-28">
      <div className="max-w-7xl mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8 xl:gap-16">
        <div className="rounded-[30px] border border-border/60 bg-surface-container-low p-8 md:p-10">
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-600">
            How Quotes Work
          </span>
          <h2 className="mb-5 text-3xl font-heading font-extrabold tracking-tight text-primary md:text-4xl">
            A clear path from first message to site quote
          </h2>
          <p className="mb-8 text-lg leading-8 text-muted-foreground">
            Buyers usually want to know what information to send and what happens next. This keeps that process simple.
          </p>
          <div className="space-y-5">
            {quoteSteps.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="pt-1 text-base leading-7 text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/how-quotes-work"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-amber-600"
            >
              Read the full quote page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="rounded-[30px] border border-border/60 bg-background p-8 md:p-10">
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-600">
            Service Area Coverage
          </span>
          <h2 className="mb-5 text-3xl font-heading font-extrabold tracking-tight text-primary md:text-4xl">
            Commercial cleaning focused on the right local coverage
          </h2>
          <p className="mb-8 text-lg leading-8 text-muted-foreground">
            Artillery is positioned as a service-area commercial cleaning business based around Chester with active coverage across the stated service area.
          </p>
          <ul className="space-y-4">
            {coveragePoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <span className="leading-7">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/service-areas"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:bg-primary/90"
            >
              View Service Areas
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:border-amber-500/50 hover:text-amber-600"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

