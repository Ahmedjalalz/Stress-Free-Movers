import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Stress Free Move Limited",
  description:
    "How Stress Free Move Limited collects, uses, and protects your personal information when you request a removal quote or use our services.",
};

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/75 max-w-2xl mx-auto">
            Your privacy matters to us. This policy explains how Stress Free Move Limited handles your personal data.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-3xl mx-auto space-y-8 text-[#334155] leading-relaxed text-sm sm:text-base">
          <div>
            <h2 className="text-xl font-bold text-[#121F36] mb-2">1. Who We Are</h2>
            <p>
              Stress Free Move Limited operates from 66 Stanley Road, Croydon, United Kingdom, CR0 3QA.
              You can contact us regarding any privacy matter at{" "}
              <a href="mailto:contact@stressfreemoveltd.co.uk" className="text-[#99773D] font-semibold hover:underline">
                contact@stressfreemoveltd.co.uk
              </a>{" "}
              or by calling{" "}
              <a href="tel:+442088584684" className="text-[#99773D] font-semibold hover:underline">
                020 8858 4684
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#121F36] mb-2">2. Information We Collect</h2>
            <p>
              When you submit a quote request or contact form on our website, we collect your name, email address,
              telephone number, pickup and drop-off postcodes, preferred moving date, and any inventory or service notes you choose to provide.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#121F36] mb-2">3. How We Use Your Information</h2>
            <p>
              We use your details solely to prepare your moving quote, coordinate surveys or bookings, communicate with you
              about your relocation, and deliver our removals, storage, or cleaning services. We never sell or rent your personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#121F36] mb-2">4. Data Security &amp; Retention</h2>
            <p>
              We take appropriate technical and organisational measures to protect your information against unauthorised access or disclosure.
              Enquiry records are retained only for as long as necessary to fulfil your booking or meet legal and accounting obligations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#121F36] mb-2">5. Your Rights</h2>
            <p>
              Under UK GDPR, you have the right to request access to, correction of, or deletion of your personal data.
              To exercise these rights, please email{" "}
              <a href="mailto:contact@stressfreemoveltd.co.uk" className="text-[#99773D] font-semibold hover:underline">
                contact@stressfreemoveltd.co.uk
              </a>.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <Link
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 rounded-full bg-[#121F36] text-white font-semibold text-sm hover:bg-[#C7A567] hover:text-[#121F36] transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
