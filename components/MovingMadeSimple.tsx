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

export default function MovingMadeSimple() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Photos & Golden Pulse Ripple */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Primary Image */}
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/images/business-team-1.jpg"
                  alt="Stress Free Move team preparing removals"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Secondary Overlapping Image with Ripple Effect */}
              <div className="relative -mt-16 sm:-mt-24 ml-auto w-3/4 h-56 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/business-team-2.jpg"
                  alt="Professional moving boxes and equipment"
                  fill
                  className="object-cover"
                />

                {/* Concentric Golden Ripple Effect */}
                <div className="absolute -bottom-6 -left-6 z-20 pointer-events-none">
                  <div className="relative w-14 h-14">
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
                    <div className="w-14 h-14 rounded-full bg-gold/20 backdrop-blur-sm border border-gold flex items-center justify-center">
                      <span className="w-4 h-4 rounded-full bg-gold" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-navy-900 tracking-tight leading-[1.2] mb-6">
              Moving Made Simple From Start to Finish
            </h2>

            <div className="space-y-4 text-muted text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Whether you&apos;re moving home, relocating your office,
                transporting furniture, or simply need an extra pair of hands,
                Stress Free Move Limited is here to make your move easier.
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

            {/* 4 Icon Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full mb-10">
              {keyPoints.map((point) => (
                <div key={point} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm sm:text-base font-bold text-navy-900">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#quote-form"
              className="inline-flex items-center justify-center gap-2.5 bg-navy-900 hover:bg-gold hover:text-navy-950 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-[29px] shadow-lg transition-all group"
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
