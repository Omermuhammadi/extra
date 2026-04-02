"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
    >
      Scroll to Top
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
