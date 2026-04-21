import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { CoreServicesSection } from "@/components/sections/core-services-section";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { Capabilities } from "@/components/sections/capabilities";
import { AboutVideo } from "@/components/sections/about-video";
import { Gallery } from "@/components/sections/gallery";
import { FAQ } from "@/components/sections/faq";
import { ContactFooter } from "@/components/sections/contact-footer";
import { ProcessSection } from "@/components/sections/process-section";
import { CtaBand } from "@/components/sections/cta-band";
import { TrustCoverageSection } from "@/components/sections/trust-coverage-section";
import { absoluteUrl, businessAddressSchema, sitewideServiceAreas } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Commercial Cleaning in ${siteConfig.serviceArea}`,
  description:
    "Commercial cleaning, janitorial maintenance, and post-construction cleanup for offices, schools, industrial sites, and contractors across Delaware County and Chester, PA.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Commercial Cleaning in ${siteConfig.serviceArea}`,
    description:
      "Commercial cleaning for offices, schools, industrial facilities, and post-construction sites across Delaware County and Chester, PA.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/office-cleaning-services.jpg",
        alt: `${siteConfig.name} office cleaning services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Commercial Cleaning in ${siteConfig.serviceArea}`,
    description:
      "Commercial cleaning for offices, schools, industrial facilities, and post-construction sites across Delaware County and Chester, PA.",
    images: ["/office-cleaning-services.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  url: absoluteUrl("/"),
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  address: businessAddressSchema,
  areaServed: [...sitewideServiceAreas],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: siteConfig.hours.days,
      opens: siteConfig.hours.opens,
      closes: siteConfig.hours.closes,
    },
  ],
  image: [absoluteUrl("/office-cleaning-services.jpg")],
  serviceType: [...siteConfig.coreServices],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <CoreServicesSection />
      <Capabilities />
      <IndustriesGrid />
      <AboutVideo />
      <ProcessSection />
      <TrustCoverageSection />
      <Gallery />
      <FAQ />
      <CtaBand
        title="Need reliable commercial cleaning support?"
        description="Tell us about the building, the service type, and the schedule. We'll review the scope and help move the next step forward."
      />
      <ContactFooter />
    </>
  );
}
