"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site";
import { submitContactForm } from "@/lib/contact-form";

const initialFormState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

export function ContactPageForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await submitContactForm({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        website: formData.website,
        source: "contact-page",
      });
      setFormData(initialFormState);
      setIsSubmitted(true);
    } catch {
      setErrorMessage(`We couldn't send your request right now. Please email ${siteConfig.email}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (isSubmitted) {
      setIsSubmitted(false);
    }

    if (errorMessage) {
      setErrorMessage("");
    }
  };

  return (
    <section className="w-full bg-muted/10 pt-0 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          <div className="flex flex-col justify-start space-y-8 pr-0 lg:col-span-5 lg:pr-4 xl:pr-8">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-4xl font-heading font-extrabold tracking-tight text-primary md:text-5xl">
                Request a Site Quote
              </h1>
              <p className="text-left text-lg font-medium leading-relaxed text-muted-foreground md:text-xl [text-align:justify]">
                Reach out to discuss your building, service needs, and schedule.
                <br />
                We review commercial cleaning requests across Delaware County and Chester, PA.
              </p>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                <Phone className="h-7 w-7 text-amber-500" />
              </div>
              <div className="flex flex-col pt-1">
                <span className="mb-1 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Direct Line
                </span>
                <a
                  href={siteConfig.phoneHref}
                  className="text-xl font-bold text-primary transition-colors hover:text-amber-600"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                <Mail className="h-7 w-7 text-amber-500" />
              </div>
              <div className="flex flex-col pt-1">
                <span className="mb-1 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Email Address
                </span>
                <a
                  href={siteConfig.emailHref}
                  className="break-all text-xl font-bold text-primary transition-colors hover:text-amber-600"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                <MapPin className="h-7 w-7 text-amber-500" />
              </div>
              <div className="flex flex-col pt-1">
                <span className="mb-1 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Base Location
                </span>
                <span className="text-xl font-bold leading-tight text-primary">
                  {siteConfig.baseLocation}
                  <br />
                  <span className="text-lg text-muted-foreground">{siteConfig.serviceArea}</span>
                </span>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-500/10">
                <Clock className="h-7 w-7 text-amber-500" />
              </div>
              <div className="flex flex-col pt-1">
                <span className="mb-1 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  Operating Hours
                </span>
                <span className="text-xl font-bold leading-tight text-primary">
                  Monday - Saturday
                  <br />
                  <span className="text-lg text-muted-foreground">8:00 AM - 6:00 PM</span>
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-white p-5">
              <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Need help before sending the form?
              </div>
              <p className="text-base leading-7 text-muted-foreground">
                Review what information helps the quote process move faster.
              </p>
              <Link
                href="/how-quotes-work"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-amber-600"
              >
                Read how quotes work
              </Link>
            </div>
          </div>

          <div className="self-start rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:col-span-7 md:p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-bold text-primary">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleFieldChange}
                    className="bg-gray-50 border-gray-200 py-5 focus-visible:ring-amber-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-bold text-primary">
                    Contact Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    value={formData.phone}
                    onChange={handleFieldChange}
                    className="bg-gray-50 border-gray-200 py-5 focus-visible:ring-amber-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-bold text-primary">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="contact@company.com"
                  value={formData.email}
                  onChange={handleFieldChange}
                  className="bg-gray-50 border-gray-200 py-5 focus-visible:ring-amber-500"
                  required
                />
              </div>

              <div className="hidden" aria-hidden="true">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={handleFieldChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-bold text-primary">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="e.g., Office Cleaning Quote"
                  value={formData.subject}
                  onChange={handleFieldChange}
                  className="bg-gray-50 border-gray-200 py-5 focus-visible:ring-amber-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-bold text-primary">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your building, schedule, and cleaning needs..."
                  value={formData.message}
                  onChange={handleFieldChange}
                  className="min-h-[120px] resize-y bg-gray-50 border-gray-200 focus-visible:ring-amber-500"
                  required
                />
              </div>

              {isSubmitted ? (
                <div
                  className="flex items-start gap-3 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-green-800"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <p className="text-sm font-semibold leading-relaxed md:text-base">
                    Thank you. Your request has been sent. Our team will follow up shortly.
                  </p>
                </div>
              ) : null}

              {errorMessage ? (
                <div
                  className="flex items-start gap-3 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-red-800"
                  role="alert"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                  <p className="text-sm font-semibold leading-relaxed md:text-base">
                    {errorMessage}
                  </p>
                </div>
              ) : null}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-500 py-5 text-lg font-extrabold text-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-amber-600 disabled:bg-amber-500/70"
              >
                {isSubmitting ? "Sending..." : "Send Quote Request"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
