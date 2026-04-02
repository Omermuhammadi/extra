import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { IndustriesGrid } from "@/components/sections/industries-grid";
import { Capabilities } from "@/components/sections/capabilities";
import { AboutVideo } from "@/components/sections/about-video";
import { Gallery } from "@/components/sections/gallery";
import { FAQ } from "@/components/sections/faq";
import { ContactFooter } from "@/components/sections/contact-footer";

export const metadata: Metadata = {
  title: "Commercial Cleaning & Facility Maintenance | Delaware County & Chester, PA | Artillery's",
  description:
    "Premium B2B commercial cleaning, janitorial maintenance, and facility support for offices, schools, industrial sites, and construction projects across Delaware County and Chester, PA.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <IndustriesGrid />
      <AboutVideo />
      <Capabilities />
      <Gallery />
      <FAQ />
      <ContactFooter />
    </>
  );
}
