"use client";
import React from "react";
import { ClipboardList, CalendarCheck, Truck, Home } from "lucide-react";

export const steps = [
  {
    number: "01",
    title: "Get Your Quote",
    desc: "Tell us about your move, including where you’re moving from, where you’re going, and what you need help with.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Plan Your Move",
    desc: "We arrange the right team, vehicle, equipment, and schedule according to your requirements.",
    icon: CalendarCheck,
  },
  {
    number: "03",
    title: "We Handle the Move",
    desc: "Our experienced movers carefully load, secure, transport, and unload your belongings.",
    icon: Truck,
  },
  {
    number: "04",
    title: "Settle In",
    desc: "We make sure your items are delivered safely and placed where you need them, helping you start your new chapter with less stress.",
    icon: Home,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="site-badge mb-3 border-gold/30 text-gold bg-gold/10">
            <span>Simple 4-Step Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Your Move, Our Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70">
            From your very first enquiry to the moment the last box is unpacked,
            here is how we keep your move organized and completely stress-free.
          </p>
        </div>

        {/* 4 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/4 left-16 right-16 h-[2px] bg-gradient-to-r from-gold/20 via-gold/50 to-gold/20 -z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative bg-navy-850/80 rounded-2xl p-7 border border-white/10 hover:border-gold/50 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1 z-10"
              >
                {/* Step Number Badge */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-amber-600 text-navy-950 font-extrabold text-xl flex items-center justify-center mb-6 shadow-lg shadow-gold/20 group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 text-gold">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
