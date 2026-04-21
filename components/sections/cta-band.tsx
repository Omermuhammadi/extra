import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

type CtaBandProps = {
  title: string;
  description: string;
};

export function CtaBand({ title, description }: CtaBandProps) {
  return (
    <section className="w-full bg-background py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-primary to-[#162945] p-8 text-white shadow-2xl md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
            <div>
              <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-400">
                Request a Quote
              </span>
              <h2 className="mb-4 text-3xl font-heading font-extrabold tracking-tight md:text-5xl">
                {title}
              </h2>
              <p className="max-w-3xl text-lg leading-relaxed text-white/80 md:text-xl">
                {description}
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-amber-500 px-7 py-4 text-base font-extrabold text-gray-900 shadow-lg transition-colors hover:bg-amber-400"
              >
                Request a Site Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <Phone className="h-5 w-5" />
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
