import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface ServiceDetailWhyChooseProps {
  primaryImage: string;
  primaryImageAlt: string;
  title: string;
  description: string;
  highlightImage: string;
  highlightTitle: string;
  checklist: string[];
  galleryImages: [
    { src: string; alt: string },
    { src: string; alt: string }
  ];
}

export default function ServiceDetailWhyChoose({
  primaryImage,
  primaryImageAlt,
  title,
  description,
  highlightImage,
  highlightTitle,
  checklist,
  galleryImages,
}: ServiceDetailWhyChooseProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FDFBF5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Primary Tall Image */}
          <div className="lg:col-span-5 h-full">
            <div className="relative h-[480px] sm:h-[560px] lg:h-full min-h-[480px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src={primaryImage}
                alt={primaryImageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Information, Highlight Box, Checklist, and 2-Image Grid */}
          <div className="lg:col-span-7 space-y-7">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-3">
                <span className="w-8 h-[2px] bg-[#C7A567]" />
                <span className="text-[#C7A567] text-xs sm:text-sm font-bold uppercase tracking-wider">
                  Why Choose Us
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121F36] tracking-tight leading-tight">
                {title}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#4A5568] leading-relaxed">
                {description}
              </p>
            </div>

            {/* Feature Highlight Box with Small Image */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#C7A567]/20 shadow-sm flex flex-col sm:flex-row items-center gap-4">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden flex-shrink-0 shadow-inner">
                <Image
                  src={highlightImage}
                  alt={highlightTitle}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#121F36] text-center sm:text-left leading-snug">
                {highlightTitle}
              </h3>
            </div>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#C7A567]/15 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#C7A567]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-[#121F36]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* 2-Image Gallery Row */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <Image
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
