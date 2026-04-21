import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We provide commercial cleaning across Delaware County and Chester, PA, with a focus on offices, schools, industrial properties, and contractor turnover work.",
  },
  {
    question: "Do you handle one-time cleaning and post-construction jobs?",
    answer:
      "Yes. We handle one-time deep cleaning, turnover cleaning, and post-construction cleanup in addition to ongoing janitorial support.",
  },
  {
    question: "Are you insured?",
    answer:
      "If your site requires insurance details as part of the quote review, mention that in your request and we can discuss the current documentation requirements.",
  },
  {
    question: "How do I request a quote?",
    answer:
      "Use the contact form on this site or call our office directly. We review the scope, confirm your service needs, and follow up with the next step quickly.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "We work with facility managers, office managers, schools, commercial property contacts, and contractors who need reliable commercial cleaning support.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-3xl font-heading font-bold tracking-tight text-primary md:text-5xl">
          Frequently Asked Questions
        </h2>

        <Accordion className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border/50 py-2"
            >
              <AccordionTrigger className="text-left text-lg font-heading font-bold text-primary transition-colors hover:text-amber-500 md:text-xl">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
