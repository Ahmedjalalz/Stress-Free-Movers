import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Stress Free Move Limited",
  description:
    "Terms and conditions for removals, packing, storage, and cleaning services provided by Stress Free Move Limited.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="bg-[#0C1726] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 sm:w-12 h-[2px] bg-[#C7A567]" />
            <span className="text-[#C7A567] text-xs sm:text-sm font-bold tracking-widest uppercase">
              Legal Information
            </span>
            <div className="w-8 sm:w-12 h-[2px] bg-[#C7A567]" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/75 max-w-2xl mx-auto">
            Clear, transparent terms for bookings, quotes, and moving services with Stress Free Move Limited.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-3xl mx-auto space-y-8 text-[#334155] leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-bold text-[#121F36] mb-2">1. Quotations &amp; Bookings</h2>
            <p>
              All written quotes are based on the inventory, property access, and route details provided at the time of enquiry.
              Any significant changes to item volume, access restrictions, or moving dates should be communicated as early as possible so we can update your schedule.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#121F36] mb-2">2. Customer Responsibilities</h2>
            <p>
              Unless packing services have been booked, customers are responsible for ensuring all boxes are securely packed and sealed prior to arrival,
              and that suitable parking or loading access is arranged at both pickup and delivery addresses.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#121F36] mb-2">3. Insurance &amp; Care</h2>
            <p>
              Stress Free Move Limited carries comprehensive goods-in-transit and public liability insurance.
              High-value, fragile, or specialist items (such as pianos or antiques) should be declared before moving day so dedicated protection can be arranged.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#121F36] mb-2">4. Cancellations &amp; Rescheduling</h2>
            <p>
              We understand moving dates can shift. Please notify us at least 48 hours in advance if you need to reschedule or cancel your booking.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <Link
              href="/#quote-form"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#121F36] text-white font-semibold text-sm hover:bg-[#C7A567] hover:text-[#121F36] transition-colors"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
