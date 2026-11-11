"use client";
import React, { useRef, useEffect } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay policy prevented playback, poster acts as seamless fallback
      });
    }
  }, []);

  return (
    <section className="relative overflow-hidden w-full min-h-[88vh] max-sm:min-h-[60vh] bg-[#0C1726] flex items-center justify-center pt-[80px] pb-[140px] sm:pt-[100px] sm:pb-[190px] px-4 sm:px-6 lg:px-8">
      {/* 1. Background Video Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/images/relocation-bg.jpg"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover max-w-none"
          role="presentation"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/hero.mov" type="video/quicktime" />
          <source
            src="https://stressfreemoveltd.co.uk/wp-content/uploads/2026/08/woman-unpacking-boxes-with-delivery-man-2025-12-17-12-17-31-utc.mov"
            type="video/mp4"
          />
        </video>
      </div>

      {/* 2. Background Dark Overlay - 50% opacity */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none z-[1]" />

      {/* 3. Hero Inner Boxed Container - Left Aligned */}
      <div className="relative z-10 max-w-[1140px] w-full mx-auto flex flex-col items-start text-left">
        {/* Welcome Divider Line + Text */}
        <div className="flex items-center gap-3 mb-4 w-full">
          <div className="w-12 sm:w-16 h-[2px] bg-[#C7A567]" />
          <span className="text-[#C7A567] text-sm sm:text-[15px] font-bold tracking-wide">
            Welcome to Stress Free Move
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-white font-extrabold text-[36px] sm:text-[46px] lg:text-[60px] leading-[1.1] tracking-tight mb-5 text-left">
          Stress-Free Moves,
          <br />
          Handled With Care
        </h1>

        {/* Description - 65% width on desktop */}
        <p className="text-white/90 text-sm sm:text-base lg:text-lg font-normal leading-[1.6] max-w-full lg:max-w-[65%] mb-8 text-left">
          Your move should feel exciting, not overwhelming. Stress Free Move Limited
          provides reliable, professional removals and moving services designed to
          make every step simple, safe, and hassle-free.
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-row flex-wrap items-center gap-[19px] max-sm:gap-3 pt-2">
          {/* Button 1: Get a Free Quote */}
          <a
            href="#quote-form"
            className="inline-flex items-center justify-center gap-2.5 bg-[#121F36] hover:bg-[#1a2c4d] text-white font-bold text-sm sm:text-base px-7 sm:px-[30px] py-4 rounded-[29px] shadow-lg border border-white/10 transition-all group"
          >
            <span>Get a Free Quote</span>
            <svg
              aria-hidden="true"
              className="w-3.5 h-3.5 fill-current group-hover:translate-x-1 transition-transform"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
            </svg>
          </a>

          {/* Button 2: Call Number */}
          <a
            href="tel:+442088584684"
            className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white font-bold text-sm sm:text-base px-7 sm:px-[30px] py-4 rounded-[29px] border border-[#C7A567] transition-all"
          >
            <span>020 8858 4684</span>
          </a>
        </div>
      </div>
    </section>
  );
}
