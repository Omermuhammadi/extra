import React from "react";
import { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesList } from "@/components/sections/services-list";
import { ServicesCTA } from "@/components/sections/services-cta";
import { ContactFooter } from "@/components/sections/contact-footer";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services | Delaware County, PA | Artillery's",
  description: "Explore our B2B commercial cleaning services including high-speed floor buffing, post-construction cleanup, and temporary labor staffing in Chester & Delaware County.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <ServicesHero />
      <ServicesList />
      <ServicesCTA />
      
      {/* Include the global master footer at the very bottom so layout is consistent */}
      <ContactFooter />
    </main>
  );
}
