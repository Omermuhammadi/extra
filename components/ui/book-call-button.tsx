import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function BookCallButton() {
  return (
    <Link
      href="/contact"
      className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-md bg-amber-500 hover:bg-amber-600 px-6 py-3 text-sm font-bold text-gray-900 shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
    >
      <span className="relative z-10">Request a Site Quote</span>
      <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
