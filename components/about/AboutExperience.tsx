"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const trustPoints = [
  "Reliable Service",
  "Professional Team",
  "Careful Handling",
  "Customer Focused",
];

export default function AboutExperience() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage + Experience Counter Card */}
          <div className="relative mb-8 sm:mb-0">
            <div className="flex flex-col sm:grid sm:grid-cols-12 gap-4 items-center">
              {/* Primary Horizontal Image */}
              <div className="w-full sm:col-span-7 lg:col-span-8 relative">
                <div className="relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                  <Image
                    src="/images/63273.jpg"
                    alt="Experienced removals team"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating Experience Badge Card */}
                <div className="absolute -bottom-6 left-4 sm:left-6 z-20 bg-white p-3.5 sm:p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 sm:gap-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 relative flex-shrink-0">
                    <Image
                      src="/images/aboutpage-icon.png"
                      alt="Experience badge"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#121F36] leading-none">
                      10+
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-gray-600 mt-1">
                      Years of Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical Supporting Image (Hidden on very small screens, visible on sm+) */}
              <div className="hidden sm:block sm:col-span-5 lg:col-span-4 relative h-72 md:h-88 lg:h-96 w-full rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/images/2148095467.jpg"
                  alt="Professional moving support"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Experience You Can Trust */}
          <div className="flex flex-col items-start text-left pt-6 lg:pt-0">
            {/* Divider / Pretitle */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 sm:w-12 h-[2px] bg-[#C7A567]" />
              <span className="text-[#C7A567] text-xs sm:text-sm font-bold tracking-wide uppercase">
                Moving With Confidence
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#121F36] tracking-tight leading-[1.18] mb-6">
              Experience You{" "}
              <span className="text-[#C7A567]">Can Trust</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#6D6C6C] leading-relaxed mb-8">
              <p>
                Moving your belongings requires more than just a vehicle. It
                requires careful planning, responsible handling, and a team that
                understands how important your possessions are.
              </p>
              <p>
                At Stress Free Move Limited, we approach every job with attention
                to detail and a commitment to providing a professional customer
                experience.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold" />
                  </div>
                  <span className="text-sm sm:text-[15px] font-bold text-[#121F36]">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact Us Button */}
            <a
              href="/#quote-form"
              className="inline-flex items-center gap-2.5 bg-[#121F36] hover:bg-[#C7A567] text-white text-sm sm:text-base font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
