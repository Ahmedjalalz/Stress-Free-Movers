"use client";
import React from "react";
import Image from "next/image";
import { CheckCircle2, Building, ShieldCheck, ArrowRight } from "lucide-react";

export const commercialPoints = [
  "Out-of-hours and weekend moves to protect trading time",
  "IT equipment, servers and workstations packed and reconnected safely",
  "Crate hire, labelling systems and floor-plan-based placement",
  "Secure handling of confidential files and archives",
  "Dedicated move manager and a written project timeline",
  "Full risk assessments, method statements and insurance documentation",
];

export default function CommercialSection() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content & Checklist */}
          <div>
            <div className="site-badge mb-4">
              <span>Business Relocation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-[1.15] mb-6">
              Move your business without{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-900 via-amber-700 to-gold">
                losing a working day
              </span>
            </h2>

            <p className="text-base sm:text-lg text-muted mb-8 leading-relaxed">
              Commercial moves live or die on planning. We survey your site, map the
              new floor plan, schedule around your operating hours and get your team
              productive again fast.
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-10">
              {commercialPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-navy-900">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#quote-form"
                className="btn-gold w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold shadow-md flex items-center justify-center gap-2 group"
              >
                <span>Book Business Move</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:02088584684"
                className="text-sm font-bold text-navy-900 hover:text-gold transition-colors py-2"
              >
                Or speak to our commercial team →
              </a>
            </div>
          </div>

          {/* Right Column: Imagery Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1 */}
              <div className="relative h-72 sm:h-88 rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                <Image
                  src="/images/business-team-1.jpg"
                  alt="Stress Free Move professional commercial movers"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Image 2 */}
              <div className="relative h-72 sm:h-88 rounded-2xl overflow-hidden shadow-xl border-2 border-white mt-8">
                <Image
                  src="/images/business-team-2.jpg"
                  alt="Office relocation equipment and packing"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-navy-900 text-white p-5 rounded-2xl shadow-2xl border border-white/10 flex items-center gap-4 max-w-xs backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center text-gold shrink-0">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-bold text-gold uppercase tracking-wider">
                  Zero Downtime Promise
                </p>
                <p className="text-xs text-white/80 font-medium mt-0.5">
                  Overnight & weekend corporate scheduling across the UK
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
