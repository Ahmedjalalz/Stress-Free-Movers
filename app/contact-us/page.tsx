import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactMap from "@/components/contact/ContactMap";

export const metadata: Metadata = {
  title: "Contact Us – Stress Free Move Limited",
  description:
    "Get in touch with Stress Free Move Limited. Reach out for a free moving quote, ask questions, or discuss home, office, and storage relocations across the UK.",
};

export default function ContactUsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* 1. Hero Banner with Angle Divider */}
      <ContactHero />

      {/* 2. Contact Information (4 Cards Grid) */}
      <ContactInfoSection />

      {/* 3. Send Us a Message Form & Split Image */}
      <ContactFormSection />

      {/* 4. Full Width Interactive Location Map */}
      <ContactMap />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
