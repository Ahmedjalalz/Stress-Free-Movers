"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Phone, Menu, X, ArrowRight } from "lucide-react";

export const servicesList = [
  { name: "House Removals", href: "house-removals" },
  { name: "Office Removals", href: "office-removals" },
  { name: "Storage Solutions", href: "storage-solutions" },
  { name: "Man & Van Moving", href: "man-van-moving" },
  { name: "Packing and Moving", href: "packing-and-moving" },
  { name: "Loading & Unloading Solutions", href: "loading-unloading-solutions" },
  { name: "Local Moving", href: "local-moving" },
  { name: "Long Distance & Nationwide Moves", href: "long-distance-nationwide-moves" },
  { name: "Piano Removals", href: "piano-removals" },
  { name: "Junk Removal", href: "junk-removal" },
  { name: "Furniture Assembly", href: "furniture-assembly" },
  { name: "Cleaning Services", href: "cleaning-services" },
];

export default function Header() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled
          ? "shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] border-b border-gray-100"
          : "border-b border-gray-100/80 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.04)]"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 lg:py-4">
        <div className="flex items-center justify-between">
          {/* 1. Left Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block relative">
              <Image
                src="/images/logo.png"
                alt="Stress Free Move Limited"
                width={220}
                height={59}
                priority
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* 2. Middle Desktop Nav Menu */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            <Link
              href="/"
              className={`text-[16px] transition-colors ${
                pathname === "/"
                  ? "font-semibold text-[#121F36]"
                  : "font-medium text-[#292929] hover:text-[#121F36]"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={`text-[16px] transition-colors ${
                pathname === "/about-us"
                  ? "font-semibold text-[#121F36]"
                  : "font-medium text-[#292929] hover:text-[#121F36]"
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                href="/services"
                className={`flex items-center gap-1.5 text-[16px] transition-colors py-2 ${
                  pathname === "/services"
                    ? "font-semibold text-[#121F36]"
                    : "font-medium text-[#292929] hover:text-[#121F36]"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#292929] transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180 text-[#121F36]" : ""
                  }`}
                />
              </Link>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 animate-slide-down z-50">
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-2xl p-2.5 grid grid-cols-1 gap-1">
                    <Link
                      href="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="px-3.5 py-2 text-sm font-bold text-[#121F36] bg-[#FDFBF5] hover:bg-amber-50 rounded-xl transition-all flex items-center justify-between border-b border-amber-100/60 mb-1"
                    >
                      <span>All Services Overview</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C7A567]" />
                    </Link>
                    {servicesList.map((service) => (
                      <Link
                        key={service.name}
                        href={`/${service.href}`}
                        onClick={() => setIsServicesOpen(false)}
                        className="px-3.5 py-2 text-sm font-medium text-[#292929] hover:text-[#121F36] hover:bg-[#FDFBF5] rounded-xl transition-all flex items-center justify-between group"
                      >
                        <span>{service.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#C7A567]" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact-us"
              className={`text-[16px] transition-colors ${
                pathname === "/contact-us"
                  ? "font-semibold text-[#121F36]"
                  : "font-medium text-[#292929] hover:text-[#121F36]"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* 3. Right Action Area: Request a Quote Button + Phone Box */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* Request a Quote Button */}
            <Link
              href="/#quote-form"
              className="inline-flex items-center gap-3 bg-[#121F36] hover:bg-[#C7A567] text-white text-[15px] font-bold px-6 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <span>Request a Quote</span>
              <svg
                aria-hidden="true"
                className="w-3.5 h-3.5 fill-current group-hover:translate-x-1 transition-transform"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
              </svg>
            </Link>

            {/* Phone Image Box */}
            <div className="flex items-center gap-3.5">
              <a
                href="tel:+442088584684"
                className="flex-shrink-0 transition-transform hover:scale-105"
              >
                <Image
                  src="/images/phone-call.png"
                  alt="Phone"
                  width={42}
                  height={42}
                  className="w-10 h-10 object-contain"
                />
              </a>
              <a
                href="tel:+442088584684"
                className="text-[19px] xl:text-[20px] font-bold text-[#121F36] hover:text-[#C7A567] transition-colors whitespace-nowrap"
              >
                020 8858 4684
              </a>
            </div>
          </div>

          {/* 4. Mobile / Tablet Action & Hamburger Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Quick Call Icon */}
            <a
              href="tel:+442088584684"
              className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#121F36] hover:bg-gray-100 transition-colors"
              aria-label="Call Stress Free Move"
            >
              <Image
                src="/images/phone-call.png"
                alt="Call"
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-[#121F36] hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#121F36]" />
              ) : (
                <Menu className="w-6 h-6 text-[#121F36]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 5. Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 animate-slide-down shadow-2xl">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-3.5 py-2.5 text-base rounded-xl ${
                pathname === "/"
                  ? "font-semibold text-[#121F36] bg-gray-100"
                  : "font-medium text-[#292929] hover:text-[#121F36] hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-3.5 py-2.5 text-base rounded-xl ${
                pathname === "/about-us"
                  ? "font-semibold text-[#121F36] bg-gray-100"
                  : "font-medium text-[#292929] hover:text-[#121F36] hover:bg-gray-50"
              }`}
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <div className="w-full flex items-center justify-between px-3.5 py-2.5 text-base rounded-xl transition-colors hover:bg-gray-50">
                <Link
                  href="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex-1 ${
                    pathname === "/services"
                      ? "font-semibold text-[#121F36]"
                      : "font-medium text-[#292929]"
                  }`}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="p-1 focus:outline-none"
                  aria-label="Expand services"
                >
                  <ChevronDown
                    className={`w-4 h-4 text-[#292929] transition-transform duration-200 ${
                      isMobileServicesOpen ? "rotate-180 text-[#121F36]" : ""
                    }`}
                  />
                </button>
              </div>

              {isMobileServicesOpen && (
                <div className="pl-4 pr-2 py-2 grid grid-cols-1 gap-1 bg-[#FDFBF5] rounded-xl mt-1 border border-amber-100/60">
                  <Link
                    href="/services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-3 py-2 text-sm font-bold text-[#121F36] hover:bg-white rounded-lg transition-colors flex items-center justify-between border-b border-amber-200/50 mb-1"
                  >
                    <span>All Services Overview</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C7A567]" />
                  </Link>
                  {servicesList.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href.startsWith("/") ? service.href : `/${service.href}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-2 text-sm font-medium text-[#292929] hover:text-[#121F36] hover:bg-white rounded-lg transition-colors flex items-center justify-between"
                    >
                      <span>{service.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C7A567]" />
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact-us"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3.5 py-2.5 text-base font-medium text-[#292929] hover:text-[#121F36] hover:bg-gray-50 rounded-xl transition-colors"
            >
              Contact Us
            </Link>

            {/* Mobile Actions */}
            <div className="pt-4 mt-2 border-t border-gray-100 flex flex-col gap-3">
              <Link
                href="/#quote-form"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-[#121F36] hover:bg-[#C7A567] text-white text-center py-3.5 rounded-full text-sm font-bold shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Request a Quote</span>
                <svg
                  aria-hidden="true"
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                </svg>
              </Link>

              <a
                href="tel:+442088584684"
                className="flex items-center justify-center gap-3 text-base text-[#121F36] font-bold py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full transition-colors"
              >
                <Image
                  src="/images/phone-call.png"
                  alt="Call"
                  width={22}
                  height={22}
                  className="w-5 h-5 object-contain"
                />
                <span>020 8858 4684</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
