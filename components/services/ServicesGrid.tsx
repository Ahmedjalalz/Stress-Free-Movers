"use client";
import React from "react";
import Link from "next/link";
import {
  LucideIcon,
  Home,
  Building2,
  Archive,
  Truck,
  Package,
  Layers,
  MapPin,
  RefreshCw,
  Music,
  Trash2,
  Bed,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const serviceRows: ServiceItem[][] = [
  // Row 1
  [
    {
      id: 1,
      slug: "house-removals",
      title: "House Removals",
      description:
        "Full home moves for flats, houses and large properties, handled door to door by an experienced crew.",
      icon: Home,
    },
    {
      id: 2,
      slug: "office-removals",
      title: "Office Removal",
      description:
        "Planned commercial moves designed around your operating hours to keep downtime to an absolute minimum.",
      icon: Building2,
    },
    {
      id: 3,
      slug: "storage-solutions",
      title: "Storage Solution",
      description:
        "Short-term and long-term storage for furniture and boxes when your dates don't line up perfectly.",
      icon: Archive,
    },
  ],
  // Row 2
  [
    {
      id: 4,
      slug: "man-van-moving",
      title: "Man & Van Services",
      description:
        "Flexible, affordable help for small moves, single items, student moves and last-minute jobs.",
      icon: Truck,
    },
    {
      id: 5,
      slug: "packing-and-moving",
      title: "Packing and Moving",
      description:
        "One sofa, one wardrobe, one appliance — collected and delivered without paying for a full removal.",
      icon: Package,
    },
    {
      id: 6,
      slug: "loading-unloading-solutions",
      title: "Loading & Unloading Solutions",
      description:
        "Full or partial packing using quality boxes, bubble wrap, tissue and tape, with everything clearly labelled.",
      icon: Layers,
    },
  ],
  // Row 3
  [
    {
      id: 7,
      slug: "local-moving",
      title: "Local Moving",
      description:
        "Boxes, wrap, covers and tape delivered to your door if you'd prefer to pack yourself.",
      icon: MapPin,
    },
    {
      id: 8,
      slug: "long-distance-nationwide-moves",
      title: "Long Distance & Nationwide Moves",
      description:
        "Cross-country relocations planned end to end, including overnight and multi-drop journeys.",
      icon: RefreshCw,
    },
    {
      id: 9,
      slug: "piano-removals",
      title: "Piano Removals",
      description:
        "Short-term and long-term storage for furniture and boxes when your dates don't line up perfectly.",
      icon: Music,
    },
  ],
  // Row 4
  [
    {
      id: 10,
      slug: "junk-removal",
      title: "Junk Removal",
      description:
        "Boxes, wrap, covers and tape delivered to your door if you'd prefer to pack yourself.",
      icon: Trash2,
    },
    {
      id: 11,
      slug: "furniture-assembly",
      title: "Furniture Assembly",
      description:
        "Cross-country relocations planned end to end, including overnight and multi-drop journeys.",
      icon: Bed,
    },
    {
      id: 12,
      slug: "cleaning-services",
      title: "Cleaning Services",
      description:
        "Short-term and long-term storage for furniture and boxes when your dates don't line up perfectly.",
      icon: Sparkles,
    },
  ],
];

export default function ServicesGrid() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1140px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14 text-left">
          {/* Gold Divider Pretitle */}
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 sm:w-12 h-[2px] bg-[#C7A567]" />
            <span className="text-[#C7A567] text-xs sm:text-sm font-bold tracking-widest uppercase">
              Our Services
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121F36] tracking-tight leading-[1.15] mb-4">
            Complete removals <br className="hidden sm:inline" />
            services across the UK
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#6D6C6C] font-normal leading-relaxed">
            Whether you need a single item shifted or an entire office relocated,
            there is a service here that fits.
          </p>
        </div>

        {/* 4 Rows x 3 Columns Enclosed Table Grid */}
        <div className="border border-[#C7A567] bg-white rounded-none shadow-sm overflow-hidden">
          {serviceRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex flex-col md:flex-row ${
                rowIndex > 0 ? "border-t border-[#C7A567]" : ""
              }`}
            >
              {row.map((item, colIndex) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    id={item.slug}
                    className={`flex-1 group p-6 sm:p-8 lg:p-10 transition-colors duration-200 hover:bg-[#FDFBF5]/70 scroll-mt-24 ${
                      colIndex < 2 ? "md:border-r md:border-[#C7A567]" : ""
                    } ${
                      colIndex < row.length - 1
                        ? "border-b md:border-b-0 border-[#C7A567]"
                        : ""
                    }`}
                  >
                    <div className="flex flex-col text-left gap-4 h-full justify-between">
                      <div>
                        {/* 50x50 Icon Container */}
                        <div className="w-[50px] h-[50px] rounded-[6px] bg-[#121F36] text-[#FDFBF5] group-hover:bg-[#C7A567] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-4 shadow-sm">
                          <IconComponent size={22} className="stroke-[1.8]" />
                        </div>

                        {/* Title */}
                        <h3 className="text-[18px] sm:text-[19px] font-bold text-[#121F36] group-hover:text-[#C7A567] transition-colors leading-[1.2] mb-2.5">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[14px] font-normal leading-[1.6] text-[#6D6C6C]">
                          {item.description}
                        </p>
                      </div>

                      {/* Action CTA Links */}
                      <div className="pt-3 flex items-center justify-between gap-3">
                        <Link
                          href={`/${item.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#C7A567] hover:text-[#121F36] transition-colors"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                        <Link
                          href="/#quote-form"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#121F36] hover:text-[#C7A567] transition-colors"
                        >
                          <span>Get a Quote</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
