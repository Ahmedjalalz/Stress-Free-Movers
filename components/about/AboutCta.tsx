"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function AboutCta() {
  return (
    <section className="py-16 sm:py-20 bg-[#FDFBF5] border-t border-gray-100 relative overflow-hidden">
      {/* Subtle decorative glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#121F36]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2.5 mb-4">
          <div className="w-8 h-[2px] bg-[#C7A567]" />
          <span className="text-[#C7A567] text-xs sm:text-sm font-bold tracking-widest uppercase">
            Start Your Journey
          </span>
          <div className="w-8 h-[2px] bg-[#C7A567]" />
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#121F36] tracking-tight leading-[1.2] mb-4">
          Ready for a Stress-Free Move?
        </h2>

        <p className="text-base sm:text-lg text-[#6D6C6C] max-w-2xl mx-auto leading-relaxed mb-8">
          Get in touch with our friendly removal specialists today for a free,
          no-obligation quote tailored to your exact dates and requirements.
        </p>

        {/* Dual Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/#quote-form"
            className="inline-flex items-center gap-2.5 bg-[#121F36] hover:bg-[#C7A567] text-white text-sm sm:text-base font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="tel:+442088584684"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-[#121F36] text-sm sm:text-base font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <Image
              src="/images/phone-call.png"
              alt="Call"
              width={22}
              height={22}
              className="w-5 h-5 object-contain"
            />
            <span>020 8858 4684</span>
          </a>
        </div>
      </div>
    </section>
  );
}
