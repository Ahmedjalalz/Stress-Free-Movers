"use client";
import React from "react";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden border-t border-white/10">
      {/* Decorative subtle gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="site-badge mb-4 border-gold/30 text-gold bg-gold/10">
          <ShieldCheck className="w-4 h-4 text-gold" />
          <span>Ready When You Are</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Let’s take care of your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-amber-200 to-gold">
            business challenges
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/80 mb-10 leading-relaxed">
          From full domestic moves to commercial fleet relocations, we provide
          fast turnaround times, clear prices, and dependable support across the UK.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:02088584684"
            className="btn-gold w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-gold/20 flex items-center justify-center gap-2.5"
          >
            <Phone className="w-5 h-5 text-navy-950" />
            <span>020 8858 4684</span>
          </a>

          <a
            href="#quote-form"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
