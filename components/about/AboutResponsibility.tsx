"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const approachSteps = [
  "Understand Your Move",
  "Plan The Service",
  "Handle With Care",
  "Complete Your Move",
];

export default function AboutResponsibility() {
  return (
    <section className="py-20 lg:py-28 bg-[#0C1726] text-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            {/* Pretitle */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 sm:w-12 h-[2px] bg-[#C7A567]" />
              <span className="text-[#C7A567] text-xs sm:text-sm font-bold tracking-wide uppercase">
                Our Approach
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.18] mb-6">
              Your Move,{" "}
              <span className="text-[#C7A567]">Our Responsibility</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed mb-8">
              <p>
                We know that moving can involve a lot of planning and
                preparation. Our role is to make that process easier by taking
                care of the physical work and transportation.
              </p>
              <p>
                From the moment you contact us, we focus on understanding your
                requirements and providing the right moving solution.
              </p>
            </div>

            {/* Checklist */}
            <div className="space-y-3.5 w-full">
              {approachSteps.map((step) => (
                <div key={step} className="flex items-center gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#C7A567]/20 flex items-center justify-center shrink-0 border border-[#C7A567]/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A567]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Featured Relocation Photo */}
          <div className="relative w-full h-[280px] sm:h-[380px] lg:h-[460px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/images/2147707102.jpg"
              alt="Careful removals and relocation handling"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
