import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServicesCTA() {
  return (
    <section className="bg-gray-50 py-24 w-full">
      <div className="max-w-4xl mx-auto rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm md:p-16">
        <h2 className="mb-4 text-3xl font-heading font-bold text-gray-900">
          Need reliable commercial cleaning support?
        </h2>

        <p className="mx-auto mt-4 mb-8 max-w-2xl text-lg font-medium text-gray-500">
          Contact our team to request a site quote for office cleaning, school cleaning, industrial support, or post-construction cleanup.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-3 rounded-md bg-amber-500 px-8 py-3 text-lg font-extrabold text-gray-900 shadow-md transition-colors hover:bg-amber-600"
        >
          Request a Site Quote
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
