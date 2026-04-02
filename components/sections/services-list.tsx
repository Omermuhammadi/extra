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
        image: "/floor buffing.svg"
      },
      {
        name: "Commercial Carpet Steam Cleaning",
        desc: "Deep steam extraction and heavy-duty spot removal to revitalize facility carpets.",
        image: "/carpet.svg"
      },
      {
        name: "Strip & Floor Waxing",
        desc: "Complete removal of old finish and application of premium fresh wax for a pristine, protected look.",
        image: "/floor buffing.svg"
      }
    ]
  },
  {
    title: "Post-Construction & Site Logistics",
    services: [
      {
        name: "New Construction Final Clean",
        desc: "Comprehensive debris, dust, and residue removal to make new commercial builds 100% move-in ready.",
        image: "/construction.svg"
      },
      {
        name: "Commercial Dumpster Rentals",
        desc: "Fast delivery of small, medium, and large dumpsters for contractor renovations and heavy debris removal.",
        image: "/dumpster.svg"
      },
      {
        name: "Small & Light Building Repairs",
        desc: "On-site minor fixes and ancillary maintenance to eliminate the need for multiple specialized contractors.",
        image: "/light repairs.svg"
      }
    ]
  },
  {
    title: "Facility Staffing & Ongoing Maintenance",
    services: [
      {
        name: "Temporary Labor Staffing",
        desc: "Immediate, flexible deployment of vetted cleaning professionals for short-term facility projects or emergencies.",
        image: "/labor staff.svg"
      },
      {
        name: "Interior & Exterior Window Washing",
        desc: "Professional, streak-free window cleaning for multi-level commercial and educational buildings.",
        image: "/window washing.svg"
      },
      {
        name: "Contract Transition Cleaning",
        desc: "Seamless temporary staffing to maintain strict compliance and cleanliness while you negotiate new long-term vendor contracts.",
        image: "/labor staff.svg"
      }
    ]
  }
];

export function ServicesList() {
  return (
    <section className="bg-muted/10 pt-10 pb-20 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {categories.map((category, catIndex) => (
          <div key={catIndex}>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold border-l-[4px] border-amber-500 pl-4 mb-8 text-primary">
                {category.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, sIndex) => {
                return (
                  <div 
                    key={sIndex} 
                    className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm border-[0.5px] border-blue-700/50 p-7 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-amber-500/80 group"
                  >
                    <div className="w-16 h-16 rounded-full bg-amber-500/5 flex items-center justify-center mb-5 shrink-0 transition-colors group-hover:bg-amber-500/10">
                      <Image 
                        src={service.image} 
                        alt={`${service.name} icon`} 
                        width={36} 
                        height={36} 
                        className="object-contain"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold font-heading text-primary mb-3 leading-snug">
                      {service.name}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-[15px] font-medium">
                      {service.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        ))}
        
      </div>
    </section>
  );
}
