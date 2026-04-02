import React from 'react';
import { Phone, Mail, Printer, MapPin, Clock } from 'lucide-react';
import { ContactFooterForm } from '@/components/sections/contact-footer-form';
import { ScrollToTopButton } from '@/components/ui/scroll-to-top-button';

export function ContactFooter() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 lg:gap-24">
        
        <ContactFooterForm />

        {/* Right: Contact Context */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-white">Contact Information</h3>
          <p className="text-gray-300 mb-12 text-lg md:text-xl leading-relaxed max-w-lg">
            Artillery cleaning Services is ready to deploy. Reach out directly or visit our headquarters.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6 text-gray-200">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-amber-500" />
              </div>
              <span className="text-lg font-medium">610-329-0240</span>
            </div>
            <div className="flex items-center gap-6 text-gray-200">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-amber-500" />
              </div>
              <span className="text-lg font-medium">Wkirk777@aol.com</span>
            </div>
            <div className="flex items-center gap-6 text-gray-200">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Printer className="w-6 h-6 text-amber-500" />
              </div>
              <span className="text-lg font-medium">Fax: 610-872-2005</span>
            </div>
            <div className="flex items-center gap-6 text-gray-200">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-amber-500" />
              </div>
              <span className="text-lg font-medium">413 Franklin Street<br/>Chester, Pennsylvania 19013</span>
            </div>
            <div className="flex items-center gap-6 text-gray-200 pt-6 border-t border-white/10">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-amber-500" />
              </div>
              <span className="text-lg font-bold">Opening Hours:<br/><span className="text-gray-400 font-medium tracking-wide">Monday – Saturday | 8:00 AM – 6:00 PM</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left font-medium">
            © 2025 Artillery cleaning Services, LLC. All rights reserved.
          </p>
          <ScrollToTopButton />
        </div>
      </div>
    </footer>
  );
}
