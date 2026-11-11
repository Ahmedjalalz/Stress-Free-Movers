import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailHero from "@/components/service-detail/ServiceDetailHero";
import ServiceDetailIntro from "@/components/service-detail/ServiceDetailIntro";
import ServiceDetailBanner from "@/components/service-detail/ServiceDetailBanner";
import ServiceDetailWhyChoose from "@/components/service-detail/ServiceDetailWhyChoose";
import ServiceDetailFaq from "@/components/service-detail/ServiceDetailFaq";

export const metadata: Metadata = {
  title: "Man & Van Moving – Stress Free Move Limited",
  description:
    "Convenient Man & Van moving solutions for smaller moves, collections, deliveries, and transportation jobs across the UK.",
};

export default function ManVanMovingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* 1. Hero Banner */}
      <ServiceDetailHero
        title="Man & Van Moving"
        bgImage="/images/pexels-artempodrez-5025638.jpg"
      />

      {/* 2. Intro Section */}
      <ServiceDetailIntro
        heading="Flexible Moving Help When You Need It"
        paragraphs={[
          "Need to move a few items without booking a full removal service? Stress Free Move Limited provides convenient Man & Van moving solutions for smaller moves, collections, deliveries, and transportation jobs across the UK.",
          "Whether you're collecting furniture, moving between properties, helping with a student move, or transporting a single bulky item, our practical service gives you the moving support you need without unnecessary hassle.",
        ]}
        imageSrc="/images/pexels-artempodrez-5025635-scaled.jpg"
        imageAlt="Man and Van Loading Cardboard Boxes"
        buttonText="Get a Free Quote"
        buttonHref="/#quote-form"
      />

      {/* 3. Middle CTA Banner */}
      <ServiceDetailBanner
        bgImage="/images/pexels-gustavo-fring-6699411.jpg"
        heading="The Simple Solution for Smaller Moves"
        description="Not every job requires a large removal team. Our Man & Van service is designed for those times when you need a reliable vehicle and professional moving assistance for a smaller job."
        buttonText="Make Your Move Stress-Free"
        buttonHref="/#quote-form"
      />

      {/* 4. Why Choose Us Section */}
      <ServiceDetailWhyChoose
        primaryImage="/images/pexels-artempodrez-5025498.jpg"
        primaryImageAlt="Man and Van Moving Assistance"
        title="Moving Made Easier With Stress Free Move Limited"
        description="We make smaller moves straightforward with a flexible service built around your requirements. Whether you need help lifting, loading, transporting, or unloading, our team is ready to assist."
        highlightImage="/images/pexels-artempodrez-5025633.jpg"
        highlightTitle="Convenient Transport for Smaller Moves & Single Items"
        checklist={[
          "Single-Item Transportation",
          "Furniture Collections & Deliveries",
          "Student & Small Moves",
          "Marketplace & Furniture Purchases",
          "Short-Distance Transportation",
          "Loading & Unloading Assistance",
        ]}
        galleryImages={[
          {
            src: "/images/pexels-artempodrez-5025638.jpg",
            alt: "Movers Carrying Boxes",
          },
          {
            src: "/images/pexels-artempodrez-5025665.jpg",
            alt: "Unloading Furniture Safely",
          },
        ]}
      />

      {/* 5. FAQs Section */}
      <ServiceDetailFaq
        title="Frequently Asked Questions"
        subtitle="Find quick answers about our man & van services, pricing, packing, furniture handling, insurance, and UK-wide moving support. If you can't find what you're looking for, our team is always happy to help."
      />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
