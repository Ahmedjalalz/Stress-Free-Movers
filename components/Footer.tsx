"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 text-white border-t border-white/10 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column (spans 2 cols on lg) */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block relative w-48 h-14 mb-4">
              <Image
                src="/images/logo-footer.png"
                alt="Stress Free Move"
                fill
                sizes="192px"
                className="object-contain object-left"
              />
            </Link>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed mb-6">
              Trusted removals, secure storage, and professional cleaning for homes
              and businesses nationwide. Fully insured and committed to smooth,
              stress-free relocations.
            </p>

            <div className="flex items-center gap-3 text-xs text-white/60">
              <span className="w-2 h-2 rounded-full bg-trustpilot animate-pulse" />
              <span>Available 7 Days a Week • Nationwide Moving</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-bold text-gold uppercase tracking-wider mb-4">
              Quick links
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-gold transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-gold uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link
                  href="/house-removals"
                  className="hover:text-gold transition-colors"
                >
                  House Removals
                </Link>
              </li>
              <li>
                <Link
                  href="/office-removals"
                  className="hover:text-gold transition-colors"
                >
                  Office Removals
                </Link>
              </li>
              <li>
                <Link
                  href="/local-moving"
                  className="hover:text-gold transition-colors"
                >
                  Local Moving
                </Link>
              </li>
              <li>
                <Link
                  href="/cleaning-services"
                  className="hover:text-gold transition-colors"
                >
                  Cleaning Services
                </Link>
              </li>
              <li>
                <Link
                  href="/storage-solutions"
                  className="hover:text-gold transition-colors"
                >
                  Storage Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-bold text-gold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-1" />
                <span>66 Stanley Road, Croydon, United Kingdom, CR0 3QA</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="tel:02088584684"
                  className="hover:text-gold transition-colors font-semibold text-white"
                >
                  020 8858 4684
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="mailto:contact@stressfreemoveltd.co.uk"
                  className="hover:text-gold transition-colors"
                >
                  contact@stressfreemoveltd.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>

          <div>
            <p>Copyright &copy; {new Date().getFullYear()} Stress Free Move. All rights reserved.</p>
          </div>

          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold hover:text-navy-950 text-white flex items-center justify-center transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
