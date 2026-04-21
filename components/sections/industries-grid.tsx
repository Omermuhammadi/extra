import React from "react";
import {
  Building2,
  GraduationCap,
  Factory,
  HardHat,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const industries = [
  {
    title: "Commercial & Office Buildings",
    services: ["Daily Janitorial", "Restroom Sanitization", "Waste Removal"],
    icon: Building2,
    className: "md:col-start-1 md:row-start-1",
  },
  {
    title: "Schools & Education",
    services: ["Deep Cleaning", "Floor Stripping/Waxing", "High-Touch Disinfection"],
    icon: GraduationCap,
    className: "md:col-start-2 md:row-start-1",
  },
  {
    title: "Industrial Facilities",
    services: ["Heavy-Duty Sweeping", "Degreasing", "High-Speed Buffing"],
    icon: Factory,
    className: "md:col-start-1 md:row-start-2",
  },
  {
    title: "Post-Construction & Contractors",
    services: ["Debris Removal", "Mid-Project Cleanup", "Final Move-In Detail"],
    icon: HardHat,
    className: "md:col-start-1 md:row-start-3",
  },
];

const specializedServices = [
  { name: "High-Speed Floor Buffing", desc: "Industrial-grade shine" },
  { name: "Strip & Floor Waxing", desc: "Complete finish restoration" },
  { name: "Professional Window Washing", desc: "Interior & exterior clear views" },
  { name: "Commercial Carpet Steam Cleaning", desc: "Deep spot and stain removal" },
  { name: "High-Touch Detail Cleaning", desc: "Targeted cleaning for high-use areas" },
];

export function IndustriesGrid() {
  return (
    <section className="bg-muted/30 py-24 w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-heading font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
            Where We Work
          </h2>
          <p className="text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
            Commercial cleaning support for buildings that need consistent, professional service.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <div
                key={i}
                className={`group flex flex-col rounded-2xl border-2 border-border/50 bg-card p-8 text-card-foreground transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0px_20px_40px_-10px_rgba(245,158,11,0.15)] md:p-10 ${ind.className}`}
              >
                <div className="flex h-full flex-col">
                  <div className="mb-8 text-primary transition-colors duration-300 group-hover:text-amber-500">
                    <Icon className="h-14 w-14 md:h-16 md:w-16" />
                  </div>

                  <h3 className="mb-8 text-2xl font-heading font-extrabold text-primary transition-colors duration-200 group-hover:text-amber-500 md:text-3xl">
                    {ind.title}
                  </h3>

                  <ul className="mt-auto space-y-4">
                    {ind.services.map((service, sIndex) => (
                      <li
                        key={sIndex}
                        className="flex items-center gap-3 text-base font-bold text-foreground md:text-lg"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-500" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}

          <div className="group flex flex-col rounded-2xl border-2 border-amber-500/20 bg-primary/5 p-8 shadow-inner transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0px_20px_40px_-10px_rgba(245,158,11,0.2)] md:col-start-2 md:row-span-2 md:row-start-2 md:p-10">
            <div className="flex h-full flex-col">
              <div className="mb-8 text-amber-500 transition-colors duration-300">
                <Sparkles className="h-14 w-14 md:h-16 md:w-16" />
              </div>

              <h3 className="mb-8 text-2xl font-heading font-extrabold text-primary transition-colors duration-200 group-hover:text-[#428aff] md:text-3xl">
                Specialized Facility Services
              </h3>

              <ul className="mt-auto space-y-6">
                {specializedServices.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-[2px] h-6 w-6 shrink-0 text-[#428aff]" />
                    <div className="flex flex-col">
                      <span className="text-lg font-bold leading-snug text-foreground">
                        {item.name}
                      </span>
                      <span className="mt-1 text-base font-medium text-muted-foreground">
                        {item.desc}
                      </span>
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
