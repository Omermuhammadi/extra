import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you work with both small businesses and large facilities?",
    answer: "Yes. Our scalable workforce allows us to seamlessly service intimate corporate office spaces as well as expansive industrial complexes and large-scale educational institutions across Delaware County and Chester, PA."
  },
  {
    question: "Can I hire you for one-time cleaning?",
    answer: "Absolutely. We offer robust one-time deep cleaning and post-construction cleaning services designed to prepare your facility for grand openings or strict compliance audits."
  },
  {
    question: "Are you insured?",
    answer: "Yes, Artillery's is fully insured. We carry comprehensive liability and workers' compensation coverage tailored for heavy commercial and industrial maintenance, providing you with absolute peace of mind."
  },
  {
    question: "How do I request a quote or inspection?",
    answer: "You can reach out via our contact form below, or call our offices directly to schedule an immediate on-site facility inspection. We deploy customized proposals within 48 hours."
  },
  {
    question: "Do you offer cleaning after renovations or construction?",
    answer: "Yes. Our post-construction cleanup teams specialize in heavy debris extraction, HEPA-filtered dusting, and fine polishing so contractors can hand over impeccable sites to their clients."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-primary text-center mb-16">
          Frequently Asked Questions
        </h2>
        
        <Accordion className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/50 py-2">
              <AccordionTrigger className="text-left text-lg md:text-xl font-heading text-primary font-bold hover:text-amber-500 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base md:text-lg leading-relaxed pt-2 pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
