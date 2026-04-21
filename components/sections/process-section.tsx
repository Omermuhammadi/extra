import { ClipboardList, MapPinned, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Review the Building",
    description:
      "We start with the scope, schedule, and facility type so the service plan matches the building instead of forcing a generic checklist.",
    icon: ClipboardList,
  },
  {
    title: "Set the Right Cleaning Plan",
    description:
      "The schedule is built around office traffic, school timing, contractor deadlines, or industrial workflow.",
    icon: MapPinned,
  },
  {
    title: "Deliver a Clearer Standard of Clean",
    description:
      "The goal is dependable follow-through, visible results, and a service structure that is easier for the client to manage.",
    icon: Sparkles,
  },
];

export function ProcessSection() {
  return (
    <section className="w-full bg-primary py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="mb-4 block text-sm font-bold uppercase tracking-[0.24em] text-amber-400">
            How It Works
          </span>
          <h2 className="mb-5 text-3xl font-heading font-extrabold tracking-tight md:text-5xl">
            How service planning moves from first request to active scope
          </h2>
          <p className="text-lg leading-relaxed text-white/80 md:text-xl">
            Buyers usually want to know the scope, the schedule, and the next step. This keeps that process easy to understand.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-sm"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/15 text-amber-400">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-white/60">
                  Step {index + 1}
                </div>
                <h3 className="mb-3 text-2xl font-heading font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-white/75">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
