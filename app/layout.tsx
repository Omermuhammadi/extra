import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { siteConfig } from "@/lib/site";
import { MobileActionBar } from "@/components/ui/mobile-action-bar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Commercial Cleaning in ${siteConfig.serviceArea}`,
  description:
    "Commercial cleaning for offices, schools, industrial facilities, and post-construction sites across Delaware County and Chester, PA.",
  keywords: [
    "Commercial Cleaning",
    "Office Cleaning",
    "School Janitorial Services",
    "Industrial Cleaning",
    "Post-Construction Cleaning",
    "Delaware County PA",
    "Chester PA",
    "Facility Cleaning",
    "Janitorial Services",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | Commercial Cleaning in ${siteConfig.serviceArea}`,
    description:
      "Commercial cleaning for offices, schools, industrial properties, and construction turnover projects in Delaware County and Chester, PA.",
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/office-cleaning-services.jpg",
        width: 1600,
        height: 900,
        alt: `${siteConfig.name} commercial cleaning team`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Commercial Cleaning in ${siteConfig.serviceArea}`,
    description:
      "Commercial cleaning for offices, schools, industrial facilities, and post-construction sites across Delaware County and Chester, PA.",
    images: ["/office-cleaning-services.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground selection:bg-primary-container selection:text-white pb-20 md:pb-0">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <MobileActionBar />
      </body>
    </html>
  );
}
