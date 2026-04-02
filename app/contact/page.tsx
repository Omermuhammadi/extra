import React from "react";
import { Metadata } from "next";
import { ContactPageForm } from "@/components/sections/contact-page-form";

export const metadata: Metadata = {
  title: "Contact Us | Artillery's Commercial Cleaning",
  description: "Request a custom quote or on-site inspection for commercial cleaning, sweeping, and facility maintenance in Delaware County and Chester, PA.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background pt-14 pb-10">
      {/* 
        pt-14 keeps content clear of the sticky Navbar while prioritizing above-the-fold form visibility.
        pb-10 keeps layout balanced with less unused space.
      */}
      <ContactPageForm />
    </main>
  );
}
