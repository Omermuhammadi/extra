import Link from "next/link";
import { FileText, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/95 px-4 py-3 shadow-[0_-10px_25px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-xl gap-3">
        <a
          href={siteConfig.phoneHref}
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-border bg-white px-4 text-sm font-bold text-primary transition-colors hover:border-amber-500/50 hover:text-amber-600"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-amber-500 px-4 text-sm font-extrabold text-gray-900 transition-colors hover:bg-amber-400"
        >
          <FileText className="h-4 w-4" />
          Get Quote
        </Link>
      </div>
    </div>
  );
}
