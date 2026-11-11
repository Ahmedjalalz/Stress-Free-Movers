"use client";
import React from "react";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative w-full min-h-[35vh] sm:min-h-[42vh] lg:min-h-[48vh] flex items-center justify-center overflow-hidden bg-[#0C1726]">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/18268-1.jpg"
          alt="Services"
          fill
          priority
          className="object-cover object-top"
        />
        {/* Dark Overlay - 60% opacity matching Elementor */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-16 sm:pb-20">
        {/* Gold Accent Pretitle */}
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-8 sm:w-12 h-[2px] bg-[#C7A567]" />
          <span className="text-[#C7A567] text-xs sm:text-sm font-bold tracking-widest uppercase">
            Stress Free Move Limited
          </span>
          <div className="w-8 sm:w-12 h-[2px] bg-[#C7A567]" />
        </div>

        {/* Page Title */}
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15]">
          Services
        </h1>
      </div>

      {/* Angled Bottom Shape Divider - Seamless transition into white section */}
      <div
        className="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-8 sm:h-14 lg:h-16 fill-white"
        >
          <path d="M1200 0L0 120 1200 120z" />
        </svg>
      </div>
    </section>
  );
}
