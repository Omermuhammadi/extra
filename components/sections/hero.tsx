import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, MapPin, Clock } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex flex-col w-full bg-background mt-[-1px]">
      {/* Main Hero Area */}
      {/* Min height ensures it commands the viewport, while flex-col handles internal stacking */}
      <div className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 bg-muted">
          <Image 
            src="/Gemini_Generated_Image_rnj7xirnj7xirnj7.png" 
            alt="Professional commercial cleaning staff meticulously polishing a facility floor" 
            fill
            sizes="100vw"
            quality={45}
            className="object-cover object-center"
            priority
          />
          {/* Deep gradient mask ONLY on the far left to shield text. Pure transparency on the right. */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent w-full md:w-[80%] lg:w-[65%]" />
          
          {/* Mobile-only gradient for 100% legibility when stacked */}
          <div className="absolute inset-0 bg-gray-900/80 block md:hidden" />
        </div>

        {/* Foreground Content (Strictly Left-Aligned) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-32 pb-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-8 drop-shadow-lg">
              Premium Commercial &<br className="hidden md:block"/> Industrial Cleaning
            </h1>
            
            <div className="bg-gray-900/40 backdrop-blur-[6px] border-l-[6px] border-amber-500 pl-6 py-5 pr-6 rounded-r-xl shadow-2xl mb-10 max-w-2xl transform transition-transform hover:scale-[1.01] duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <p className="text-lg md:text-[1.35rem] text-white leading-relaxed font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">
                Uncompromising standards for facility managers, schools, and general contractors across Delaware County & Chester, PA.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-md bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold shadow-2xl transition-all hover:scale-[1.02] duration-300">
                Request a Site Inspection
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 rounded-md backdrop-blur-md bg-white/10 border border-white/30 text-white font-bold shadow-lg hover:bg-white/20 transition-colors duration-300">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Solid High-End Proof Bar (Detached completely below the image) */}
      <div className="w-full bg-primary border-t-4 border-amber-500 shadow-xl relative z-20">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            
            {/* Proof Point 1 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Shield className="w-7 h-7 text-amber-500" />
              </div>
              <div className="flex flex-col justify-center h-full">
                <span className="text-white font-heading font-bold text-lg md:text-xl leading-tight">
                  Fully Insured & Bonded
                </span>
                <span className="text-amber-500 text-sm font-semibold tracking-wider mt-1 uppercase">
                  Protected Operations
                </span>
              </div>
            </div>
            
            {/* Proof Point 2 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-amber-500" />
              </div>
              <div className="flex flex-col justify-center h-full">
                <span className="text-white font-heading font-bold text-lg md:text-xl leading-tight">
                  Delaware County & Chester
                </span>
                <span className="text-amber-500 text-sm font-semibold tracking-wider mt-1 uppercase">
                  Local Pennsylvania Hub
                </span>
              </div>
            </div>
            
            {/* Proof Point 3 */}
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-[#428aff]" />
              </div>
              <div className="flex flex-col justify-center h-full">
                <span className="text-white font-heading font-bold text-lg md:text-xl leading-tight">
                  Available 24/7/365
                </span>
                <span className="text-[#428aff] text-sm font-semibold tracking-wider mt-1 uppercase">
                  Rapid Deployment
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
