"use client";

import React from "react";
import { AlertCircle, CheckCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { submitContactForm } from "@/lib/contact-form";

export function ContactFooterForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    website: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      await submitContactForm({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        website: formData.website,
        source: "footer",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        website: "",
      });
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
    <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md md:p-10">
      <h3 className="mb-4 text-3xl font-heading font-bold text-white md:text-4xl">
        Request a Site Quote
      </h3>
      <p className="mb-8 text-base leading-relaxed text-gray-300 md:text-lg">
        Tell us about your facility and service needs. We&apos;ll review the scope and follow up with the next step.
      </p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleFieldChange}
            className="w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-white transition-colors focus:border-amber-500 focus:outline-none"
            placeholder="Your name or company"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-300">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleFieldChange}
            className="w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-white transition-colors focus:border-amber-500 focus:outline-none"
            placeholder="Your direct number"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleFieldChange}
            className="w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-white transition-colors focus:border-amber-500 focus:outline-none"
            placeholder="contact@company.com"
            required
          />
        </div>
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            value={formData.website}
            onChange={handleFieldChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-300">
            Message or Scope Details
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleFieldChange}
            className="w-full rounded-md border border-white/10 bg-black/20 px-4 py-3 text-white transition-colors focus:border-amber-500 focus:outline-none"
            placeholder="How can we assist your facility?"
            required
          />
        </div>

        {isSubmitted ? (
          <div
            className="flex items-start gap-3 rounded-md border border-green-400/50 bg-green-500/15 px-4 py-3 text-green-100"
            role="status"
            aria-live="polite"
          >
            <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" />
            <p className="text-sm font-semibold leading-relaxed">
              Thank you. Your request has been sent. Our team will follow up shortly.
            </p>
          </div>
        ) : null}

        {errorMessage ? (
          <div
            className="flex items-start gap-3 rounded-md border border-red-400/40 bg-red-500/10 px-4 py-3 text-red-100"
            role="alert"
          >
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
            <p className="text-sm font-semibold leading-relaxed">{errorMessage}</p>
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-amber-500 py-4 font-bold text-gray-900 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-amber-600 disabled:cursor-not-allowed disabled:bg-amber-500/60"
        >
          {isSubmitting ? "Sending..." : "Send Quote Request"}
        </button>
      </form>
    </div>
  );
}
