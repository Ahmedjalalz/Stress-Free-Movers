import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceDetailBannerProps {
  bgImage: string;
  heading: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function ServiceDetailBanner({
  bgImage,
  heading,
  description,
  buttonText = "Make Your Move Stress-Free",
  buttonHref = "/#quote-form",
}: ServiceDetailBannerProps) {
  return (
    <section className="relative w-full py-20 sm:py-24 lg:py-28 overflow-hidden bg-[#0C1726]">
      {/* Background Image Container with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={bgImage}
          alt={heading}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0C1726]/80 backdrop-brightness-75 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-8 h-[2px] bg-[#C7A567]" />
          <span className="text-[#C7A567] text-xs sm:text-sm font-bold uppercase tracking-wider">
            Stress-Free Support
          </span>
          <div className="w-8 h-[2px] bg-[#C7A567]" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {heading}
        </h2>

        <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C7A567] text-[#121F36] font-bold text-base sm:text-lg shadow-xl hover:bg-white hover:text-[#121F36] transition-all duration-300 group hover:scale-[1.02]"
          >
            <span>{buttonText}</span>
            <ArrowRight className="w-5 h-5 text-[#121F36] group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
