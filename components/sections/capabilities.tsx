import React from "react";
import { CalendarDays, ArrowRightLeft, Wrench } from "lucide-react";

const capabilities = [
  {
    title: "After-Hours Scheduling",
    description:
      "Cleaning plans built around office traffic, school schedules, and facility operating hours.",
    icon: CalendarDays,
  },
  {
    title: "Transition & Overflow Support",
    description:
      "Short-term coverage to keep buildings clean during contract transitions, staffing gaps, or urgent needs.",
    icon: ArrowRightLeft,
  },
  {
    title: "Post-Construction Turnover",
    description:
      "Cleanup support for contractors who need detailed turnover work completed on schedule.",
    icon: Wrench,
  },
];

export function Capabilities() {
  return (
    <section className="bg-surface-container-lowest py-24 w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-heading font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
            Commercial Cleaning Built for Real Operations
          </h2>
          <p className="text-xl font-medium leading-relaxed text-muted-foreground">
            Practical support for facilities that need reliable follow-through, clear scope review, and predictable service planning.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <div
                key={i}
                className="flex h-full flex-col bg-transparent transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="mb-6">
                  <Icon className="h-14 w-14 text-amber-500 md:h-16 md:w-16" />
                </div>

                <h3 className="mb-3 text-2xl font-heading font-extrabold text-primary">
                  {cap.title}
                </h3>

                <p className="mb-6 text-[1.05rem] leading-relaxed text-muted-foreground">
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
