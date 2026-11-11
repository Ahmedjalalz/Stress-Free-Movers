"use client";
import React from "react";
import Image from "next/image";
import {
  Home,
  Building2,
  Package,
  Truck,
  Boxes,
  Layers,
  MapPin,
  Navigation,
  Music,
  ArrowRight,
} from "lucide-react";

export const services = [
  {
    title: "House Removals",
    desc: "Full home moves for flats, houses and large properties, handled door to door by an experienced crew.",
    iconImg: "/images/home.png",
    fallbackIcon: Home,
  },
  {
    title: "Office Removal",
    desc: "Planned commercial moves designed around your operating hours to keep downtime to an absolute minimum.",
    iconImg: null,
    fallbackIcon: Building2,
  },
  {
    title: "Storage Solution",
    desc: "Short-term and long-term storage for furniture and boxes when your dates don't line up perfectly.",
    iconImg: "/images/package.png",
    fallbackIcon: Package,
  },
  {
    title: "Man & Van Services",
    desc: "Flexible, affordable help for small moves, single items, student moves and last-minute jobs.",
    iconImg: "/images/transport.png",
    fallbackIcon: Truck,
  },
  {
    title: "Packing and Moving",
    desc: "One sofa, one wardrobe, one appliance — collected and delivered without paying for a full removal.",
    iconImg: "/images/package.png",
    fallbackIcon: Boxes,
  },
  {
    title: "Loading & Unloading Solutions",
    desc: "Full or partial packing using quality boxes, bubble wrap, tissue and tape, with everything clearly labelled.",
    iconImg: "/images/transport.png",
    fallbackIcon: Layers,
  },
  {
    title: "Local Moving",
    desc: "Boxes, wrap, covers and tape delivered to your door if you'd prefer to pack yourself.",
    iconImg: "/images/home.png",
    fallbackIcon: MapPin,
  },
  {
    title: "Long Distance & Nationwide Moves",
    desc: "Cross-country relocations planned end to end, including overnight and multi-drop journeys.",
    iconImg: null,
    fallbackIcon: Navigation,
  },
  {
    title: "Piano Removals",
    desc: "Short-term and long-term storage for furniture and boxes when your dates don't line up perfectly.",
    iconImg: null,
    fallbackIcon: Music,
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="site-badge mb-3">
            <span>Our Professional Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            Complete removals services across the UK
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            Whether you need a single item shifted or an entire office relocated,
            there is a service here that fits.
          </p>
        </div>

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.fallbackIcon;
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-gold/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-14 h-14 rounded-2xl bg-cream border border-gold/25 flex items-center justify-center mb-6 group-hover:bg-gold/15 group-hover:scale-105 transition-all">
                    {service.iconImg ? (
                      <div className="relative w-7 h-7">
                        <Image
                          src={service.iconImg}
                          alt={service.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <Icon className="w-7 h-7 text-gold" />
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Card CTA Link */}
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-navy-900 group-hover:text-gold uppercase tracking-wider">
                  <span>Book this service</span>
                  <a
                    href="#quote-form"
                    className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gold group-hover:text-navy-950 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
