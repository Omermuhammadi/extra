"use client";

import React from "react";
import { ServiceCarousel, Service } from "@/components/ui/services-card";
import { Sparkles, Layers, Droplets, HardHat, Wrench, Users, ArrowRightLeft, Maximize } from "lucide-react";

const services: Service[] = [
  { id: "001", title: "High-Speed Floor Buffing", description: "Industrial-grade buffing for long-lasting shine and durability on high-traffic commercial floors.", icon: Sparkles, image: "/1.jpg" },
  { id: "002", title: "Strip & Floor Waxing", description: "Complete removal of old finish and application of premium fresh wax for a pristine, protected look.", icon: Layers, image: "/2.jpg" },
  { id: "003", title: "Commercial Carpet Steam", description: "Deep steam extraction and heavy-duty spot removal to revitalize facility carpets.", icon: Droplets, image: "/3.jpg" },
  { id: "004", title: "New Construction Final Clean", description: "Comprehensive debris, dust, and residue removal to make new commercial builds 100% move-in ready.", icon: HardHat, image: "/4.png" },
  { id: "005", title: "Final Detail Cleaning", description: "Detailed finish cleaning for fixtures, glass, and high-visibility areas before handoff.", icon: Wrench, image: "/5.png" },
  { id: "006", title: "Small & Light Repairs", description: "On-site minor fixes and ancillary maintenance to eliminate the need for multiple specialized contractors.", icon: Wrench, image: "/6.png" },
  { id: "007", title: "Temporary Labor Staffing", description: "Immediate, flexible deployment of vetted cleaning professionals for short-term facility projects or emergencies.", icon: Users, image: "/1.jpg" },
  { id: "008", title: "Contract Transition Cleaning", description: "Seamless temporary staffing to maintain strict compliance and cleanliness while you negotiate new long-term vendor contracts.", icon: ArrowRightLeft, image: "/2.jpg" },
  { id: "009", title: "Window Washing", description: "Professional, streak-free window cleaning for multi-level commercial and educational buildings.", icon: Maximize, image: "/3.jpg" },
];

export function ServicesDirectory() {
  return <ServiceCarousel services={services} />;
}
