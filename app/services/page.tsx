import React from "react";
import { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services-hero";
import { CoreServicesSection } from "@/components/sections/core-services-section";
import { ServicesList } from "@/components/sections/services-list";
import { ServicesCTA } from "@/components/sections/services-cta";
import { ContactFooter } from "@/components/sections/contact-footer";
import { LocalServicePagesSection } from "@/components/sections/local-service-pages-section";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services | Artillery Cleaning Services",
  description:
    "Explore commercial cleaning services including office cleaning, school cleaning, industrial cleaning, and post-construction cleanup in Delaware County and Chester, PA.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <ServicesHero />
      <CoreServicesSection
        compact
        title="Start With the Right Service Page"
        description="Each page below is written for a specific buyer need so visitors can find the right service faster and move toward a quote with less friction."
      />
      <LocalServicePagesSection
        title="Service plus location pages"
        description="These local landing pages give buyers a faster path when they search for a specific cleaning service in Delaware County or Chester."
      />
      <ServicesList />
      <ServicesCTA />
      <ContactFooter />
    </main>
  );
}
