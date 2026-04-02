"use client";

import React, { FormEvent, useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const initialFormState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactPageForm() {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData(initialFormState);
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
    <section className="bg-muted/10 pt-0 pb-8 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Contact Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          {/* Left Side: Intro + Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-8 pr-0 lg:pr-4 xl:pr-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-primary mb-6 tracking-tight">
                Get a Custom Quote
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed text-left [text-align:justify]">
                Reach out today to discuss your facility&apos;s service needs or request an on-site inspection.<br />
                We are currently accepting new commercial contracts across Delaware County & Chester, PA.
              </p>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                <Phone className="w-7 h-7 text-amber-500" />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-1">Direct Line</span>
                <span className="text-xl font-bold text-primary">610-329-0240</span>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                <Mail className="w-7 h-7 text-amber-500" />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-1">Email Address</span>
                <span className="text-xl font-bold text-primary">Wkirk777@aol.com</span>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-amber-500" />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-1">Headquarters</span>
                <span className="text-xl font-bold text-primary leading-tight">
                  413 Franklin Street<br />Chester, PA 19013
                </span>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-amber-500" />
              </div>
              <div className="flex flex-col pt-1">
                <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase mb-1">Operating Hours</span>
                <span className="text-xl font-bold text-primary leading-tight">
                  Monday – Saturday<br />
                  <span className="text-muted-foreground text-lg">8:00 AM – 6:00 PM</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-7 self-start bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 md:p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-bold text-primary">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleFieldChange}
                    className="bg-gray-50 border-gray-200 focus-visible:ring-amber-500 py-5"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-bold text-primary">Contact Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    value={formData.phone}
                    onChange={handleFieldChange}
                    className="bg-gray-50 border-gray-200 focus-visible:ring-amber-500 py-5"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-bold text-primary">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="contact@company.com"
                  value={formData.email}
                  onChange={handleFieldChange}
                  className="bg-gray-50 border-gray-200 focus-visible:ring-amber-500 py-5"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-bold text-primary">Subject</Label>
                <Input
                  id="subject"
                  placeholder="e.g., Office Cleaning Quote"
                  value={formData.subject}
                  onChange={handleFieldChange}
                  className="bg-gray-50 border-gray-200 focus-visible:ring-amber-500 py-5"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-bold text-primary">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your facility size and requirements..." 
                  value={formData.message}
                  onChange={handleFieldChange}
                  className="bg-gray-50 border-gray-200 focus-visible:ring-amber-500 min-h-[120px] resize-y" 
                  required
                />
              </div>

              {isSubmitted ? (
                <div className="flex items-start gap-3 rounded-md border border-green-200 bg-green-50 px-4 py-3 text-green-800" role="status" aria-live="polite">
                  <CheckCircle className="w-5 h-5 mt-0.5 shrink-0" />
                  <p className="text-sm md:text-base font-semibold leading-relaxed">
                    Thank you. Your request has been received. Our operations team will contact you shortly.
                  </p>
                </div>
              ) : null}

              <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-extrabold text-lg py-5 shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
