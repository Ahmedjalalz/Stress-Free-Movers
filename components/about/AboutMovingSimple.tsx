"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const keyPoints = [
  "Fully Insured",
  "Reliable Service",
  "Flexible Moving",
  "5★ Customer Service",
];

export default function AboutMovingSimple() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Photos & Golden Pulse Ripple */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Primary Image */}
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/images/18194.jpg"
                  alt="Stress Free Move removals team"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Secondary Overlapping Image with Ripple Effect */}
              <div className="relative -mt-14 sm:-mt-20 ml-auto w-3/4 h-52 sm:h-64 md:h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/23770.jpg"
                  alt="Professional moving boxes and equipment"
                  fill
                  className="object-cover"
                />

                {/* Concentric Golden Ripple Effect */}
                <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 z-20 pointer-events-none">
                  <div className="relative w-12 sm:w-14 h-12 sm:h-14">
                    {[0, 1, 2, 3, 4, 5].map((idx) => (
                      <span
                        key={idx}
                        className="absolute inset-0 rounded-full border border-gold animate-ping opacity-75"
                        style={{
                          animationDuration: "4s",
                          animationDelay: `${idx * 0.7}s`,
                        }}
                      />
                    ))}
                    <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-gold/20 backdrop-blur-sm border border-gold flex items-center justify-center">
                      <span className="w-3.5 sm:w-4 h-3.5 sm:h-4 rounded-full bg-gold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start text-left">
            {/* Gold Divider Line + Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 sm:w-12 h-[2px] bg-[#C7A567]" />
              <span className="text-[#C7A567] text-xs sm:text-sm font-bold tracking-wide uppercase">
                Welcome to Stress Free Move
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#121F36] tracking-tight leading-[1.18] mb-6">
              Moving Made Simple From Start to Finish
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#6D6C6C] leading-relaxed mb-8">
              <p>
                Whether you’re moving home, relocating your office, transporting
                furniture, or simply need an extra pair of hands, Stress Free
                Move Limited is here to make your move easier.
              </p>
              <p>
                Our experienced team takes care of the heavy lifting, careful
                handling, transportation, and delivery, giving you more time to
                focus on settling into your new space.
              </p>
              <p>
                From the first quote to the final delivery, we make moving
                straightforward, organised, and stress-free.
              </p>
            </div>

            {/* 4 Checkmark Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-8">
              {keyPoints.map((point) => (
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

            {/* CTA Button */}
            <a
              href="/#quote-form"
              className="inline-flex items-center gap-2.5 bg-[#121F36] hover:bg-[#C7A567] text-white text-sm sm:text-base font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
