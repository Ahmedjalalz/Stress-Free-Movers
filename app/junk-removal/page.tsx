import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailHero from "@/components/service-detail/ServiceDetailHero";
import ServiceDetailIntro from "@/components/service-detail/ServiceDetailIntro";
import ServiceDetailBanner from "@/components/service-detail/ServiceDetailBanner";
import ServiceDetailWhyChoose from "@/components/service-detail/ServiceDetailWhyChoose";
import ServiceDetailFaq from "@/components/service-detail/ServiceDetailFaq";

export const metadata: Metadata = {
  title: "Junk Removal – Stress Free Move Limited",
  description:
    "Reliable junk removal and property clearance services across the UK. Stress Free Move Limited clears unwanted furniture, household items, and rubbish.",
};

export default function JunkRemovalPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* 1. Hero Banner */}
      <ServiceDetailHero
        title="Junk Removal"
        bgImage="/images/4392.jpg"
      />

      {/* 2. Intro Section */}
      <ServiceDetailIntro
        heading="Clear Your Space, Stress-Free"
        paragraphs={[
          "Stress Free Move Limited provides reliable junk removal services to help clear unwanted furniture, household items, rubbish and general unwanted belongings from your property.",
          "Whether you're clearing out your home, preparing for a move, renovating a property, or simply need to get rid of unwanted items, our team can handle the heavy lifting, removal and transportation for you.",
        ]}
        imageSrc="/images/2151216825-1024x712.jpg"
        imageAlt="Clear Your Space with Junk Removal"
        buttonText="Get a Free Quote"
        buttonHref="/#quote-form"
      />

      {/* 3. Middle CTA Banner */}
      <ServiceDetailBanner
        bgImage="/images/vertical-shot-young-delivery-men-moving-objects-out-car_23-2148944588.jpg"
        heading="Junk Removal Made Simple"
        description="Getting rid of unwanted items can be time-consuming, especially when dealing with heavy furniture, bulky belongings or large amounts of rubbish. Our team provides dependable support to make the process easier and more convenient."
        buttonText="Make Your Move Stress-Free"
        buttonHref="/#quote-form"
      />

      {/* 4. Why Choose Us Section */}
      <ServiceDetailWhyChoose
        primaryImage="/images/13152.jpg"
        primaryImageAlt="Responsible Waste Clearance and Rubbish Removal"
        title="Clearing Unwanted Items From Start to Finish"
        description="We make junk removal straightforward with reliable service tailored to your clearance needs. From single heavy items to full house and garage clearances, our team takes care of all the lifting, loading, and responsible disposal."
        highlightImage="/images/23932-1024x683.jpg"
        highlightTitle="Heavy Item Removal & Responsible Property Clearance"
        checklist={[
          "Unwanted Furniture Removal",
          "Household & Garden Clearance",
          "Safe Lifting & Heavy Work Handled",
          "Eco-Friendly & Responsible Disposal",
          "End of Tenancy Waste Clearance",
          "Prompt & Reliable Collection",
        ]}
        galleryImages={[
          {
            src: "/images/2151216825-1024x712.jpg",
            alt: "Junk Removal Team",
          },
          {
            src: "/images/4392.jpg",
            alt: "Cleared Property Space",
          },
        ]}
      />

      {/* 5. FAQs Section */}
      <ServiceDetailFaq
        title="Frequently Asked Questions"
        subtitle="Find quick answers about our junk removal services, pricing, packing, furniture handling, insurance, and UK-wide moving support. If you can't find what you're looking for, our team is always happy to help."
      />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
