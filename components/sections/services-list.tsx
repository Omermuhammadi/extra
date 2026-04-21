"use client";

import React from "react";
import Image from "next/image";

const categories = [
  {
    title: "Commercial Floor & Surface Care",
    services: [
      {
        name: "High-Speed Floor Buffing",
        desc: "Industrial-grade buffing for long-lasting shine and durability on high-traffic commercial floors.",
        image: "/floor buffing.svg",
      },
      {
        name: "Commercial Carpet Steam Cleaning",
        desc: "Deep steam extraction and heavy-duty spot removal to revitalize facility carpets.",
        image: "/carpet.svg",
      },
      {
        name: "Strip & Floor Waxing",
        desc: "Complete removal of old finish and application of premium fresh wax for a pristine, protected look.",
        image: "/floor buffing.svg",
      },
    ],
  },
  {
    title: "Post-Construction & Turnover Support",
    services: [
      {
        name: "New Construction Final Clean",
        desc: "Comprehensive debris, dust, and residue removal to make new commercial builds move-in ready.",
        image: "/construction.svg",
      },
      {
        name: "Rough Cleanup & Dust Removal",
        desc: "Site-ready cleanup support to control dust, debris, and handoff preparation during construction turnover.",
        image: "/construction.svg",
      },
      {
        name: "Final Detail Cleaning",
        desc: "Detailed finish cleaning for glass, fixtures, floors, and high-visibility areas before occupancy.",
        image: "/light repairs.svg",
      },
    ],
  },
  {
    title: "Facility Staffing & Ongoing Maintenance",
    services: [
      {
        name: "Temporary Labor Staffing",
        desc: "Immediate, flexible deployment of cleaning professionals for short-term facility projects or emergencies.",
        image: "/labor staff.svg",
      },
      {
        name: "Interior & Exterior Window Washing",
        desc: "Professional, streak-free window cleaning for multi-level commercial and educational buildings.",
        image: "/window washing.svg",
      },
      {
        name: "Contract Transition Cleaning",
        desc: "Temporary staffing to maintain cleanliness while you transition between long-term vendors.",
        image: "/labor staff.svg",
      },
    ],
  },
];

export function ServicesList() {
  return (
    <section className="w-full bg-muted/10 pt-10 pb-20">
      <div className="max-w-7xl mx-auto space-y-16 px-4 sm:px-6 lg:px-8">
        {categories.map((category, catIndex) => (
          <div key={catIndex}>
            <div>
              <h2 className="mb-8 border-l-[4px] border-amber-500 pl-4 text-2xl font-heading font-bold text-primary md:text-3xl">
                {category.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.services.map((service, sIndex) => (
                <div
                  key={sIndex}
                  className="group flex flex-col items-center rounded-xl border-[0.5px] border-blue-700/50 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/80 hover:shadow-lg md:p-8"
                >
                  <div className="mb-5 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-amber-500/5 transition-colors group-hover:bg-amber-500/10">
                    <Image
                      src={service.image}
                      alt={`${service.name} icon`}
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>

                  <h3 className="mb-3 text-xl font-heading font-bold leading-snug text-primary">
                    {service.name}
                  </h3>

                  <p className="text-[15px] font-medium leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
