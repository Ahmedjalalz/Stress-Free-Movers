"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const galleryImages = [
  { src: "/images/18268-1.jpg", alt: "Home relocation boxes" },
  { src: "/images/2148647497.jpg", alt: "Customer unpacking with mover" },
  { src: "/images/2287.jpg", alt: "Removals van loading" },
  { src: "/images/2289.jpg", alt: "Professional moving equipment" },
  { src: "/images/63273.jpg", alt: "Careful moving and handling" },
  { src: "/images/23770.jpg", alt: "Relocation team preparing boxes" },
  { src: "/images/18194.jpg", alt: "Residential move in progress" },
];

export default function AboutMoreThanMoving() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  // Responsively detect visible slides count
  useEffect(() => {
    const updateVisibleCount = () => {
      if (typeof window !== "undefined") {
        if (window.innerWidth < 640) {
          setVisibleCount(1);
        } else if (window.innerWidth < 1024) {
          setVisibleCount(2);
        } else {
          setVisibleCount(3);
        }
      }
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxIndex = Math.max(0, galleryImages.length - visibleCount);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 sm:w-12 h-[2px] bg-[#C7A567]" />
            <span className="text-[#C7A567] text-xs sm:text-sm font-bold tracking-widest uppercase">
              Full-Service Solutions
            </span>
            <div className="w-10 sm:w-12 h-[2px] bg-[#C7A567]" />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#121F36] tracking-tight leading-[1.18] mb-5">
            More Than a <span className="text-[#C7A567]">Moving Company</span>
          </h2>

          <p className="text-sm sm:text-base text-[#6D6C6C] leading-relaxed">
            Moving is more than transportation — it requires planning,
            logistics, protection, and trust. At Stress Free Move and Storage,
            we take responsibility for the full process so you can focus on
            your next chapter with confidence.
          </p>
        </div>

        {/* Horizontal Sliding Carousel Track */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden w-full rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="relative h-60 sm:h-72 lg:h-80 w-full rounded-2xl overflow-hidden shadow-md border border-gray-100 group">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls: Prev / Dots / Next */}
          <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#121F36] hover:bg-[#121F36] hover:text-white transition-colors focus:outline-none"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(Math.min(idx, maxIndex))}
                  className={`h-2.5 rounded-full transition-all focus:outline-none ${
                    currentIndex === idx
                      ? "w-7 bg-[#C7A567]"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#121F36] hover:bg-[#121F36] hover:text-white transition-colors focus:outline-none"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
