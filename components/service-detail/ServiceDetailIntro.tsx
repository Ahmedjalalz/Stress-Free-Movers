import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceDetailIntroProps {
  heading: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function ServiceDetailIntro({
  heading,
  paragraphs,
  imageSrc,
  imageAlt,
  buttonText = "Get a Free Quote",
  buttonHref = "/#quote-form",
}: ServiceDetailIntroProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5">
              <span className="w-8 h-[2px] bg-[#C7A567]" />
              <span className="text-[#C7A567] text-xs sm:text-sm font-bold uppercase tracking-wider">
                Reliable Moving Solutions
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121F36] tracking-tight leading-[1.2]">
              {heading}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#4A5568] leading-relaxed">
              {paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href={buttonHref}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#121F36] text-white font-semibold text-base shadow-lg hover:bg-[#C7A567] hover:shadow-xl transition-all duration-300 group"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4 text-[#C7A567] group-hover:text-white transition-colors group-hover:translate-x-1 duration-200" />
              </Link>
            </div>
          </div>

          {/* Right Column: Featured Image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative h-[360px] sm:h-[420px] lg:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 ring-1 ring-gray-100">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              {/* Subtle gold decorative background accent */}
              <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 bg-[#C7A567]/10 rounded-3xl -z-10 blur-sm pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
