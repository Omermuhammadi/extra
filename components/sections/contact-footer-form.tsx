"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export function ContactFooterForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setIsSubmitted(true);
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
  };

  return (
    <div className="bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md flex flex-col justify-center">
      <h3 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-white">Deploy Our Team</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm text-gray-300 font-medium mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleFieldChange}
            className="w-full bg-black/20 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
            placeholder="Your name or company"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-gray-300 font-medium mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleFieldChange}
            className="w-full bg-black/20 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
            placeholder="contact@company.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-gray-300 font-medium mb-2">Message or Inspection Request</label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleFieldChange}
            className="w-full bg-black/20 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
            placeholder="How can we assist your facility?"
            required
          />
        </div>

        {isSubmitted ? (
          <div className="flex items-start gap-3 rounded-md border border-green-400/50 bg-green-500/15 px-4 py-3 text-green-100" role="status" aria-live="polite">
            <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
            <p className="text-sm font-semibold leading-relaxed">
              Thank you. Your request has been received. Our operations team will contact you shortly.
            </p>
          </div>
        ) : null}

        <button className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-4 rounded-md shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
          Submit Now
        </button>
      </form>
    </div>
  );
}
