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
    description: "Zero-disruption night scheduling and daily janitorial to maintain a pristine corporate image for your workforce and clientele.",
    services: [
      "After-hours deep janitorial cleaning",
      "High-speed floor buffing & lobby maintenance",
      "Restroom sanitization & supply management"
    ]
  },
  {
    id: "schools",
    label: "Educational Facilities",
    icon: GraduationCap,
    image: "/2.jpg",
    title: "Schools & Educational Campuses",
    description: "Aggressive sanitization protocols and high-touch disinfection designed to reduce absenteeism and ensure student safety.",
    services: [
      "High-touch surface disinfection programs",
      "Gymnasium & cafeteria deep cleaning",
      "Carpet steam cleaning & odor treatment"
    ]
  },
  {
    id: "industrial",
    label: "Industrial & Manufacturing",
    icon: Factory,
    image: "/3.jpg",
    title: "Industrial & Manufacturing Plants",
    description: "Heavy-duty degreasing, high-speed buffing, and sweeping that adheres to strict facility safety and compliance standards.",
    services: [
      "Industrial degreasing & chemical cleaning",
      "Warehouse floor strip & wax programs",
      "Safety-compliant waste & debris removal"
    ]
  },
  {
    id: "construction",
    label: "Construction Support",
    icon: HardHat,
    image: "/4.png",
    title: "Post-Construction & Contractor Support",
    description: "Rapid-deployment temporary labor and final detail cleaning to get your multi-million dollar builds move-in ready on deadline.",
    services: [
      "New construction final detail cleaning",
      "Commercial dumpster rental & debris hauling",
      "Temporary labor staffing for site turnover"
    ]
  }
];

export function IndustriesTabs() {
  return (
    <section className="bg-muted/10 py-16 w-full">
      <div className="max-w-6xl mx-auto px-4">
        
        <Tabs defaultValue="offices" className="flex flex-col md:flex-row gap-8">
          
          {/* Left Side: Tab Triggers */}
          <TabsList className="flex flex-row md:flex-col h-auto bg-transparent gap-2 p-0 shrink-0 md:w-64">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <TabsTrigger
                  key={industry.id}
                  value={industry.id}
                  className="flex items-center justify-start gap-3 w-full px-5 py-4 rounded-xl text-left font-bold text-base text-muted-foreground transition-all data-[state=active]:bg-amber-500 data-[state=active]:text-gray-900 data-[state=active]:shadow-md hover:bg-gray-100"
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="hidden md:inline">{industry.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* Right Side: Tab Content */}
          <div className="flex-1">
            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id} className="mt-0">
                <div className="bg-white border-[0.5px] border-blue-700/50 rounded-2xl p-6 md:p-8 shadow-sm transition-all hover:border-amber-500/60 hover:shadow-md">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6">
                    <Image 
                      src={industry.image} 
                      alt={industry.title} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    {industry.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-[15px] leading-relaxed font-medium mb-6">
                    {industry.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {industry.services.map((service, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-semibold text-primary/90">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
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
