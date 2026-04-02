import React from "react";
import { Building2, GraduationCap, Factory, HardHat, Sparkles, CheckCircle2 } from "lucide-react";

// The 4 Core Standard Sector Cards
const industries = [
  {
    title: "Commercial & Office Buildings",
    services: [
      "Daily Janitorial",
      "Restroom Sanitization",
      "Waste Removal"
    ],
    icon: Building2,
    className: "md:col-start-1 md:row-start-1",
  },
  {
    title: "Schools & Education",
    services: [
      "Deep Cleaning",
      "Floor Stripping/Waxing",
      "High-Touch Disinfection"
    ],
    icon: GraduationCap,
    className: "md:col-start-2 md:row-start-1",
  },
  {
    title: "Industrial Facilities",
    services: [
      "Heavy-Duty Sweeping",
      "Degreasing",
      "High-Speed Buffing"
    ],
    icon: Factory,
    className: "md:col-start-1 md:row-start-2",
  },
  {
    title: "Post-Construction & Contractors",
    services: [
      "Debris Removal",
      "Mid-Project Cleanup",
      "Final 'Move-In' Polish"
    ],
    icon: HardHat,
    className: "md:col-start-1 md:row-start-3",
  },
];

// The Specialized Tall Card Content
const specializedServices = [
  { name: "High-Speed Floor Buffing", desc: "Industrial-grade shine" },
  { name: "Strip & Floor Waxing", desc: "Complete finish restoration" },
  { name: "Professional Window Washing", desc: "Interior & exterior clear-views" },
  { name: "Commercial Carpet Steam Cleaning", desc: "Deep spot & stain removal" },
  { name: "Dumpster Rentals & Debris Removal", desc: "Small to large scale" },
];

export function IndustriesGrid() {
  return (
    <section className="bg-muted/30 py-24 w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-primary mb-6">
            Specialized Facility Maintenance
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
            Delivering uncompromising cleanliness for Delaware County and Chester&apos;s most demanding environments.
          </p>
        </div>

        {/* 2-Column, 3-Row Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Render the 4 Standard Cards */}
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className={`bg-card text-card-foreground border-2 border-border/50 rounded-2xl p-8 md:p-10 flex flex-col group transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0px_20px_40px_-10px_rgba(245,158,11,0.15)] ${ind.className}`}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-8 text-primary group-hover:text-amber-500 transition-colors duration-300">
                    <Icon className="w-14 h-14 md:w-16 md:h-16" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-primary group-hover:text-amber-500 transition-colors duration-200 mb-8">
                    {ind.title}
                  </h3>

                  {/* Scannable Bullet List */}
                  <ul className="space-y-4 mt-auto">
                    {ind.services.map((service, sIndex) => (
                      <li key={sIndex} className="flex items-center gap-3 text-base md:text-lg font-bold text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            );
          })}

          {/* Render the 5th Tall Specialized Services Card */}
          <div
            className="bg-primary/5 border-2 border-amber-500/20 rounded-2xl p-8 md:p-10 flex flex-col group md:col-start-2 md:row-start-2 md:row-span-2 shadow-inner transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0px_20px_40px_-10px_rgba(245,158,11,0.2)]"
          >
            <div className="flex flex-col h-full">
              <div className="mb-8 text-amber-500 transition-colors duration-300">
                <Sparkles className="w-14 h-14 md:w-16 md:h-16" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-primary group-hover:text-[#428aff] transition-colors duration-200 mb-8">
                Specialized Facility Services
              </h3>

              {/* Vertical Menu List */}
              <ul className="space-y-6 mt-auto">
                {specializedServices.map((item, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#428aff] shrink-0 mt-[2px]" />
                    <div className="flex flex-col">
                      <span className="text-lg font-bold text-foreground leading-snug">{item.name}</span>
                      <span className="text-base text-muted-foreground font-medium mt-1">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
