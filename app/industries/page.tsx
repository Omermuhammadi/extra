import type { Metadata } from "next";
import { VerticalTabs } from "@/components/ui/vertical-tabs";
import Link from "next/link";
import { ContactFooter } from "@/components/sections/contact-footer";

export const metadata: Metadata = {
  title: "Industries We Serve | Artillery Cleaning Services",
  description:
    "Commercial cleaning support for offices, schools, industrial facilities, and post-construction sites in Delaware County and Chester, PA.",
  alternates: {
    canonical: "/industries",
  },
};

export default function IndustriesPage() {
  return (
    <main className="pt-24 pb-16">
      <VerticalTabs />
      <section className="bg-gray-900 text-white py-24 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Does your facility have unique requirements?
          </h2>
          <p className="text-lg text-gray-400 mb-10">
            Let&apos;s build a cleaning plan that fits your building, schedule, and operational needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-8 rounded-lg transition-colors"
          >
            Request a Site Quote
          </Link>
        </div>
      </section>
      <ContactFooter />
    </main>
  );
}
