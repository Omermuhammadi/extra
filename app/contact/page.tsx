import React from "react";
import { Metadata } from "next";
import { ContactPageForm } from "@/components/sections/contact-page-form";
import { TrustCoverageSection } from "@/components/sections/trust-coverage-section";
import { ContactFooter } from "@/components/sections/contact-footer";

export const metadata: Metadata = {
  title: "Contact Artillery Cleaning Services",
  description:
    "Request a site quote for office cleaning, school cleaning, industrial cleaning, and post-construction cleanup in Delaware County and Chester, PA.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-14">
      <ContactPageForm />
      <TrustCoverageSection />
      <ContactFooter />
    </main>
  );
}
