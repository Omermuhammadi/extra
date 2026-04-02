import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServicesCTA() {
  return (
    <section className="bg-gray-50 py-24 w-full">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-10 md:p-16 text-center shadow-sm">
        <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
          Ready to upgrade your facility&apos;s standard of clean?
        </h2>
        
        <p className="text-lg text-gray-500 mt-4 mb-8 max-w-2xl mx-auto font-medium">
          Contact our operations team today to secure a dispatch unit or request an immediate on-site inspection for commercial contracting.
        </p>
        
        <Link 
          href="/contact"
          className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-md bg-amber-500 hover:bg-amber-600 text-gray-900 font-extrabold text-lg transition-colors shadow-md"
        >
          Schedule a Site Inspection
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
