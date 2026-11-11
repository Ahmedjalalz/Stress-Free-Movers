import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailHero from "@/components/service-detail/ServiceDetailHero";
import ServiceDetailIntro from "@/components/service-detail/ServiceDetailIntro";
import ServiceDetailBanner from "@/components/service-detail/ServiceDetailBanner";
import ServiceDetailWhyChoose from "@/components/service-detail/ServiceDetailWhyChoose";
import ServiceDetailFaq from "@/components/service-detail/ServiceDetailFaq";

export const metadata: Metadata = {
  title: "Packing and Moving – Stress Free Move Limited",
  description:
    "Professional packing and moving services across the UK. Let Stress Free Move Limited protect, pack, and transport your belongings safely.",
};

export default function PackingAndMovingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* 1. Hero Banner */}
      <ServiceDetailHero
        title="Packing and Moving"
        bgImage="/images/pexels-shvets-production-7203815.jpg"
      />

      {/* 2. Intro Section */}
      <ServiceDetailIntro
        heading="Professional Support From Packing to Moving Day"
        paragraphs={[
          "At Stress Free Move Limited, we take the hassle out of moving by providing dependable packing, transportation, and moving support. Our team handles your belongings with care and works efficiently to make every stage of your move easier.",
          "From wrapping delicate belongings to preparing furniture and boxes for transportation, we help ensure everything is ready for moving day. Whether you need help with the entire property or only certain items and rooms, our flexible service can be tailored around your requirements.",
        ]}
        imageSrc="/images/pexels-tima-miroshnichenko-6169010-1024x683.jpg"
        imageAlt="Packing Boxes with Care"
        buttonText="Get a Free Quote"
        buttonHref="/#quote-form"
      />

      {/* 3. Middle CTA Banner */}
      <ServiceDetailBanner
        bgImage="/images/2148060057.jpg"
        heading="Pack With Care. Move With Confidence."
        description="Our packing and moving service takes care of the time-consuming work that comes with relocating. From wrapping fragile items to loading and transport, we handle every detail so you don't have to."
        buttonText="Make Your Move Stress-Free"
        buttonHref="/#quote-form"
      />

      {/* 4. Why Choose Us Section */}
      <ServiceDetailWhyChoose
        primaryImage="/images/17235-1-683x1024.jpg"
        primaryImageAlt="Packing and Moving Supplies and Box Preparation"
        title="Your Moving Partner From Packing to Delivery"
        description="At Stress Free Move Limited, we believe moving should be organised, careful, and straightforward. Our team can support you throughout the process, from preparing your belongings to loading, transportation, unloading, and delivery."
        highlightImage="/images/58847-1024x681.jpg"
        highlightTitle="Expert Packing Solutions Tailored to Your Move"
        checklist={[
          "Careful Packing & Protection",
          "Experienced Moving Team",
          "Reliable Transportation",
          "Full or Partial Packing Support",
          "Quality Packing Materials",
          "Unloading & Room Placement",
        ]}
        galleryImages={[
          {
            src: "/images/2148060057-1024x683.jpg",
            alt: "Packing Household Supplies",
          },
          {
            src: "/images/pexels-shvets-production-7203815.jpg",
            alt: "Cardboard Boxes Packed Safely",
          },
        ]}
      />

      {/* 5. FAQs Section */}
      <ServiceDetailFaq
        title="Frequently Asked Questions"
        subtitle="Find quick answers about our packing and moving services, pricing, packing, furniture handling, insurance, and UK-wide moving support. If you can't find what you're looking for, our team is always happy to help."
      />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
