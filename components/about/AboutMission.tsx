"use client";
import React from "react";

export default function AboutMission() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-28 overflow-hidden text-white bg-[#121F36]">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center md:bg-fixed z-0"
        style={{
          backgroundImage: `url('/images/pexels-rdne-7464369.jpg')`,
        }}
      />

      {/* Dark Overlay - 60% opacity */}
      <div className="absolute inset-0 bg-black/60 z-[1] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Gold Divider Line + Label */}
        <div className="inline-flex items-center gap-3 mb-5">
          <div className="w-8 sm:w-12 h-[2px] bg-[#C7A567]" />
          <span className="text-[#C7A567] text-xs sm:text-sm font-bold tracking-widest uppercase">
            Our Purpose & Commitment
          </span>
          <div className="w-8 sm:w-12 h-[2px] bg-[#C7A567]" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-8">
          Our Mission
        </h2>

        {/* Mission Text */}
        <div className="space-y-5 text-base sm:text-lg lg:text-[19px] text-white/90 font-normal leading-relaxed">
          <p>
            Our mission is simple: to provide reliable, professional, and
            affordable moving services that make relocation easier for our
            customers.
          </p>
          <p>
            We aim to remove the uncertainty and hassle that often comes with
            moving by offering clear communication, careful planning, and
            dependable service from start to finish.
          </p>
          <p className="text-white/80 text-sm sm:text-base">
            Whether you’re moving to a new home, relocating your office,
            transporting furniture, or need help with a smaller move, Stress Free
            Move Limited is committed to making the entire process smooth and
            straightforward.
          </p>
        </div>
      </div>
    </section>
  );
}
