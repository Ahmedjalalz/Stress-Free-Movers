import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailHero from "@/components/service-detail/ServiceDetailHero";
import ServiceDetailIntro from "@/components/service-detail/ServiceDetailIntro";
import ServiceDetailBanner from "@/components/service-detail/ServiceDetailBanner";
import ServiceDetailWhyChoose from "@/components/service-detail/ServiceDetailWhyChoose";
import ServiceDetailFaq from "@/components/service-detail/ServiceDetailFaq";

export const metadata: Metadata = {
  title: "Local Moving – Stress Free Move Limited",
  description:
    "Fast, reliable, and affordable local moving services across your area and throughout the UK. Stress Free Move Limited handles the heavy lifting.",
};

export default function LocalMovingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* 1. Hero Banner */}
      <ServiceDetailHero
        title="Local Moving"
        bgImage="/images/pexels-artempodrez-5025663.jpg"
      />

      {/* 2. Intro Section */}
      <ServiceDetailIntro
        heading="Moving Nearby Let Us Handle the Heavy Lifting"
        paragraphs={[
          "Planning a move across town or to a nearby area? Stress Free Move Limited provides convenient local moving services designed to make short-distance relocations simple, organised, and stress-free.",
          "Whether you're moving to a new home, changing apartments, collecting furniture, or relocating a few belongings, our team can take care of the lifting, loading, transportation, and unloading.",
        ]}
        imageSrc="/images/pexels-kampus-7843960-1024x684.jpg"
        imageAlt="Local Moving Team Delivering Boxes"
        buttonText="Get a Free Quote"
        buttonHref="/#quote-form"
      />

      {/* 3. Middle CTA Banner */}
      <ServiceDetailBanner
        bgImage="/images/pexels-artempodrez-5025665-1.jpg"
        heading="A Smoother Way to Move Locally"
        description="Even a short-distance move can involve plenty of lifting, packing, and transportation. Our team helps take the pressure off by handling your belongings carefully and getting them safely to their new destination. From small household moves to larger local relocations, we'll work around your requirements and help keep everything running smoothly."
        buttonText="Make Your Move Stress-Free"
        buttonHref="/#quote-form"
      />

      {/* 4. Why Choose Us Section */}
      <ServiceDetailWhyChoose
        primaryImage="/images/pexels-pavel-danilyuk-6407533-1024x684.jpg"
        primaryImageAlt="Local Moving Couple Packing Boxes"
        title="Simple, Reliable Moving Around Your Area"
        description="When you're not moving far, you shouldn't have to deal with unnecessary complications. Stress Free Move Limited provides practical local moving support with a focus on reliability, careful handling, and efficient service. Whether you need help with a complete move or just the heavy lifting and transportation, we're ready to make your local relocation easier."
        highlightImage="/images/pexels-artempodrez-5025663.jpg"
        highlightTitle="Flexible Local Moving Solutions Tailored to You"
        checklist={[
          "Fast & Flexible Local Moves",
          "Careful Furniture Handling",
          "Convenient Collection & Delivery",
          "Professional Moving Support",
          "Competitive Local Rates",
          "Reliable Scheduled Arrival",
        ]}
        galleryImages={[
          {
            src: "/images/pexels-kampus-7843960-1024x684.jpg",
            alt: "Local Move Boxes",
          },
          {
            src: "/images/pexels-artempodrez-5025665-1.jpg",
            alt: "Movers Carrying Sofa",
          },
        ]}
      />

      {/* 5. FAQs Section */}
      <ServiceDetailFaq
        title="Frequently Asked Questions"
        subtitle="Find quick answers about our local moving services, pricing, packing, furniture handling, insurance, and UK-wide moving support. If you can't find what you're looking for, our team is always happy to help."
      />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
