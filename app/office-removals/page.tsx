import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailHero from "@/components/service-detail/ServiceDetailHero";
import ServiceDetailIntro from "@/components/service-detail/ServiceDetailIntro";
import ServiceDetailBanner from "@/components/service-detail/ServiceDetailBanner";
import ServiceDetailWhyChoose from "@/components/service-detail/ServiceDetailWhyChoose";
import ServiceDetailFaq from "@/components/service-detail/ServiceDetailFaq";

export const metadata: Metadata = {
  title: "Office Removals – Stress Free Move Limited",
  description:
    "Reliable and professional office removal services across the UK. Minimise business downtime with Stress Free Move Limited's specialist office relocation services.",
};

export default function OfficeRemovalsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* 1. Hero Banner */}
      <ServiceDetailHero
        title="Office Removals"
        bgImage="/images/2149312726.jpg"
      />

      {/* 2. Intro Section */}
      <ServiceDetailIntro
        heading="Stress-Free Moves, Handled With Care"
        paragraphs={[
          "Moving your office? Let Stress Free Move Limited take the hassle out of your business relocation. We provide reliable and professional office removal services across the UK, helping businesses move office furniture, equipment, documents, and other workplace belongings safely and efficiently. Whether you're moving to a new office nearby or relocating further away, our experienced team is here to keep your move organised and running smoothly. From packing and loading to transportation and unloading, we'll handle the heavy work while you focus on keeping your business moving.",
        ]}
        imageSrc="/images/2149392086.jpg"
        imageAlt="Office Removals and Workplace Relocation"
        buttonText="Get a Free Quote"
        buttonHref="/#quote-form"
      />

      {/* 3. Middle CTA Banner */}
      <ServiceDetailBanner
        bgImage="/images/2148890046.jpg"
        heading="Moving Home? We've Got You Covered."
        description="Whether you're relocating a small office, expanding into a larger workspace, or moving your business to a new location, Stress Free Move Limited can provide the practical support you need. We can help with office furniture, desks, workstations, equipment, filing cabinets, and other commercial items, with careful handling throughout the moving process."
        buttonText="Make Your Move Stress-Free"
        buttonHref="/#quote-form"
      />

      {/* 4. Why Choose Us Section */}
      <ServiceDetailWhyChoose
        primaryImage="/images/2149445153.jpg"
        primaryImageAlt="Professional Office Relocation Team"
        title="Why Choose Stress Free Move Limited?"
        description="Choosing the right removal company can make a big difference to your business relocation. We combine professional service, careful handling, and flexible solutions to help minimise disruption and keep your office move on track."
        highlightImage="/images/2149392092.jpg"
        highlightTitle="Professional Office Removals Tailored to Your Business"
        checklist={[
          "Reliable & Professional Service",
          "Fully Insured",
          "Careful Handling of Your Belongings",
          "Flexible Moving Solutions",
          "Clear Communication",
          "Customer-Focused Support",
        ]}
        galleryImages={[
          {
            src: "/images/2149445187.jpg",
            alt: "Office Workstations and Computer Equipment Moving",
          },
          {
            src: "/images/asian-woman-standing-deks-office-with-belongings-cardboard-box-scaled.jpg",
            alt: "Office Employee Settled into New Modern Workspace",
          },
        ]}
      />

      {/* 5. FAQs Section */}
      <ServiceDetailFaq
        title="Frequently Asked Questions"
        subtitle="Find quick answers about our office removal services, pricing, packing, furniture handling, insurance, and UK-wide moving support. If you can't find what you're looking for, our team is always happy to help."
      />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
