import React from "react";
import { CalendarDays, ArrowRightLeft, Wrench } from "lucide-react";

const capabilities = [
  {
    title: "365-Day Operations",
    description: "Operational infrastructure engineered to run continuously for ongoing and temporary work.",
    icon: CalendarDays,
  },
  {
    title: "Seamless Transitions",
    description: "Professional temporary labor deployment to bridge critical gaps during new vendor negotiations.",
    icon: ArrowRightLeft,
  },
  {
    title: "Comprehensive Maintenance",
    description: "Consolidated logistics for light building repairs and structured full-scale debris removal.",
    icon: Wrench,
  }
];

export function Capabilities() {
  return (
    <section className="bg-surface-container-lowest py-24 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-primary mb-6">
            Unmatched Operational Scale
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed font-medium">
            More than just cleaning. We provide comprehensive, year-round facility support.
          </p>
        </div>

        {/* Compressed Single-Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div 
                key={i} 
                className="flex flex-col h-full bg-transparent transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-6">
                  <Icon className="w-14 h-14 md:w-16 md:h-16 text-amber-500" />
                </div>
                
                <h3 className="text-2xl font-heading font-extrabold text-primary mb-3">
                  {cap.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 text-[1.05rem]">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
