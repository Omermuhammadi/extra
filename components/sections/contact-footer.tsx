import React from "react";
import Link from "next/link";
import { Phone, Mail, Printer, MapPin, Clock } from "lucide-react";
import { ContactFooterForm } from "@/components/sections/contact-footer-form";
import { ScrollToTopButton } from "@/components/ui/scroll-to-top-button";
import { siteConfig } from "@/lib/site";

export function ContactFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto grid gap-16 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        <ContactFooterForm />

        <div className="flex flex-col justify-center">
          <h3 className="mb-8 text-3xl font-heading font-bold text-white md:text-4xl">
            Contact Information
          </h3>
          <p className="mb-12 max-w-lg text-lg leading-relaxed text-gray-300 md:text-xl">
            Reach out for a site quote, service questions, or a walkthrough request for your facility.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 text-gray-200">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5">
                <Phone className="h-6 w-6 text-amber-500" />
              </div>
              <a
                href={siteConfig.phoneHref}
                className="text-lg font-medium transition-colors hover:text-white"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center gap-6 text-gray-200">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5">
                <Mail className="h-6 w-6 text-amber-500" />
              </div>
              <a
                href={siteConfig.emailHref}
                className="break-all text-lg font-medium transition-colors hover:text-white"
              >
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center gap-6 text-gray-200">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5">
                <Printer className="h-6 w-6 text-amber-500" />
              </div>
              <span className="text-lg font-medium">Fax: {siteConfig.faxDisplay}</span>
            </div>
            <div className="flex items-center gap-6 text-gray-200">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5">
                <MapPin className="h-6 w-6 text-amber-500" />
              </div>
              <span className="text-lg font-medium">
                Based in {siteConfig.baseLocation}
                <br />
                Serving {siteConfig.serviceArea}
              </span>
            </div>
            <div className="flex items-center gap-6 border-t border-white/10 pt-6 text-gray-200">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5">
                <Clock className="h-6 w-6 text-amber-500" />
              </div>
              <span className="text-lg font-bold">
                Opening Hours:
                <br />
                <span className="font-medium tracking-wide text-gray-400">
                  {siteConfig.hoursDisplay}
                </span>
              </span>
            </div>
            <div className="pt-2">
              <Link
                href="/how-quotes-work"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-amber-400 transition-colors hover:text-white"
              >
                Learn how quotes work
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:px-8">
          <p className="text-center text-sm font-medium text-gray-400 md:text-left">
            (c) {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <ScrollToTopButton />
        </div>
      </div>
    </footer>
  );
}
