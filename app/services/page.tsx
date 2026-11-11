import type { Metadata } from "next";
import Header from "@/components/Header";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services – Stress Free Move Limited",
  description:
    "Complete removals services across the UK. Whether you need a single item shifted or an entire office relocated, discover our full spectrum of professional moving and storage solutions.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* Hero Banner */}
      <ServicesHero />

      {/* Complete Removals Services Across the UK (12 Services in 4-Row Grid) */}
      <ServicesGrid />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
