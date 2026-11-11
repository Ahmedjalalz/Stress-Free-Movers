import React from "react";
import Link from "next/link";
import { MapPin, Phone, MessageSquare, Mail } from "lucide-react";

export default function ContactInfoSection() {
  const contactCards = [
    {
      title: "Our Location",
      value: "66 Stanley Road, Croydon, United Kingdom, CR0 3QA",
      icon: MapPin,
      href: "https://maps.google.com/?q=66+Stanley+Road,+Croydon,+CR0+3QA",
      isExternal: true,
    },
    {
      title: "Phone Number",
      value: "020 8858 4684",
      icon: Phone,
      href: "tel:02088584684",
      isExternal: false,
    },
    {
      title: "WhatsApp Number",
      value: "020 8858 4684",
      icon: MessageSquare,
      href: "https://wa.me/442088584684",
      isExternal: true,
    },
    {
      title: "Email us at",
      value: "contact@stressfreemoveltd.co.uk",
      icon: Mail,
      href: "mailto:contact@stressfreemoveltd.co.uk",
      isExternal: false,
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="site-badge mb-3.5">
            <span>Contact Info</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121F36] tracking-tight leading-[1.2]">
            Let&apos;s Make Your <br className="hidden sm:inline" />
            <span className="text-[#C7A567]">Move Stress-Free</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#4A5568] leading-relaxed">
            Planning a move? Whether you&apos;re moving home, relocating your office, transporting furniture, or simply need a helping hand, Stress Free Move Limited is ready to help. Get in touch with our team to discuss your requirements, ask any questions, or request a free moving quote. We&apos;ll help you find the right solution for your move.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl bg-[#FDFBF5] border border-gray-100/90 shadow-sm hover:shadow-md hover:border-[#C7A567]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-full bg-[#121F36] text-[#C7A567] group-hover:bg-[#C7A567] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-5 shadow-sm">
                    <IconComponent className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#121F36] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed break-words font-medium">
                    {item.value}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200/50">
                  <Link
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center text-xs sm:text-sm font-bold text-[#121F36] group-hover:text-[#C7A567] transition-colors"
                  >
                    <span>Connect now &rarr;</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
