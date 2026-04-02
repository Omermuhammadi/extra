import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";

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
  title: "PRESERVE Infrastructure | Commercial Facility Maintenance",
  description: "High-end commercial cleaning, office facility maintenance, school janitorial services, and post-construction cleaning in Delaware County, PA and Chester, PA. Moving beyond aesthetics to engineered asset preservation.",
  keywords: [
    "Commercial Cleaning",
    "Office Facility Maintenance",
    "School Janitorial Services",
    "Post-Construction Cleaning",
    "Delaware County PA",
    "Chester PA",
    "B2B Custodial Services",
    "Facility Management PA"
  ],
  authors: [{ name: "PRESERVE Infrastructure" }],
  openGraph: {
    title: "PRESERVE Infrastructure",
    description: "Specialized in Commercial Cleaning and Office Facility Maintenance in Delaware County, PA and Chester, PA.",
    type: "website",
    locale: "en_US",
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
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-primary-container selection:text-white">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
