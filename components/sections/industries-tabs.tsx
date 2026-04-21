"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, GraduationCap, Factory, HardHat, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const industries = [
  {
    id: "offices",
    label: "Corporate Offices",
    icon: Building2,
    image: "/1.jpg",
    title: "Corporate & Commercial Offices",
    description:
      "After-hours scheduling and daily janitorial support to help maintain a clean, professional environment for staff and visitors.",
    services: [
      "After-hours janitorial cleaning",
      "Floor buffing and lobby maintenance",
      "Restroom sanitization and supply support",
    ],
  },
  {
    id: "schools",
    label: "Educational Facilities",
    icon: GraduationCap,
    image: "/2.jpg",
    title: "Schools & Educational Campuses",
    description:
      "High-touch cleaning and scheduled facility support for schools, classrooms, cafeterias, and common areas.",
    services: [
      "High-touch surface disinfection",
      "Gymnasium and cafeteria cleaning",
      "Carpet steam cleaning and odor treatment",
    ],
  },
  {
    id: "industrial",
    label: "Industrial & Manufacturing",
    icon: Factory,
    image: "/3.jpg",
    title: "Industrial & Manufacturing Plants",
    description:
      "Heavy-duty floor care, sweeping, and cleaning support for warehouses, production areas, and industrial properties.",
    services: [
      "Industrial degreasing and cleaning",
      "Warehouse floor strip and wax programs",
      "Safety-focused debris and waste removal",
    ],
  },
  {
    id: "construction",
    label: "Construction Support",
    icon: HardHat,
    image: "/4.png",
    title: "Post-Construction & Contractor Support",
    description:
      "Turnover cleaning support for contractors who need rough cleanup, final detail work, and dependable scheduling.",
    services: [
      "New construction final detail cleaning",
      "Rough cleanup, dust control, and turnover prep",
      "Temporary labor staffing for site turnover",
    ],
  },
];

export function IndustriesTabs() {
  return (
    <section className="bg-muted/10 py-16 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <Tabs defaultValue="offices" className="flex flex-col gap-8 md:flex-row">
          <TabsList className="flex h-auto shrink-0 flex-row gap-2 bg-transparent p-0 md:w-64 md:flex-col">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <TabsTrigger
                  key={industry.id}
                  value={industry.id}
                  className="flex w-full items-center justify-start gap-3 rounded-xl px-5 py-4 text-left text-base font-bold text-muted-foreground transition-all hover:bg-gray-100 data-[state=active]:bg-amber-500 data-[state=active]:text-gray-900 data-[state=active]:shadow-md"
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="hidden md:inline">{industry.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="flex-1">
            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id} className="mt-0">
                <div className="rounded-2xl border-[0.5px] border-blue-700/50 bg-white p-6 shadow-sm transition-all hover:border-amber-500/60 hover:shadow-md md:p-8">
                  <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-xl">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="mb-3 text-2xl font-heading font-bold text-primary">
                    {industry.title}
                  </h3>

                  <p className="mb-6 text-[15px] font-medium leading-relaxed text-muted-foreground">
                    {industry.description}
                  </p>

                  <ul className="space-y-3">
                    {industry.services.map((service, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm font-semibold text-primary/90"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-500" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
