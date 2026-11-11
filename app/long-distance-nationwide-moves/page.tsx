import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailHero from "@/components/service-detail/ServiceDetailHero";
import ServiceDetailIntro from "@/components/service-detail/ServiceDetailIntro";
import ServiceDetailBanner from "@/components/service-detail/ServiceDetailBanner";
import ServiceDetailWhyChoose from "@/components/service-detail/ServiceDetailWhyChoose";
import ServiceDetailFaq from "@/components/service-detail/ServiceDetailFaq";

export const metadata: Metadata = {
  title: "Long Distance & Nationwide Moves – Stress Free Move Limited",
  description:
    "Reliable long-distance and nationwide removal services across the UK. Stress Free Move Limited safely transports your belongings across cities and regions.",
};

export default function LongDistanceNationwideMovesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* 1. Hero Banner */}
      <ServiceDetailHero
        title="Long Distance & Nationwide Moves"
        bgImage="/images/pexels-shvets-production-7203883.jpg"
      />

      {/* 2. Intro Section */}
      <ServiceDetailIntro
        heading="Move Further With Confidence"
        paragraphs={[
          "Moving to a new city, region, or county? Stress Free Move Limited provides reliable long-distance and nationwide removal services across the UK. Whether you're relocating for work, moving closer to family, or starting a new chapter in another part of the country, our team can safely transport your furniture and belongings from your current property to your new destination.",
          "Long-distance moves require careful planning and dependable transportation. We coordinate your move around your requirements, helping ensure your belongings are properly loaded, secured, transported, and delivered to your destination.",
        ]}
        imageSrc="/images/pexels-shvets-production-7203848-1024x683.jpg"
        imageAlt="Long Distance Moving Truck on the Road"
        buttonText="Get a Free Quote"
        buttonHref="/#quote-form"
      />

      {/* 3. Middle CTA Banner */}
      <ServiceDetailBanner
        bgImage="/images/pexels-rdne-7464184.jpg"
        heading="Your Belongings, Safely Moving Across the UK"
        description="From smaller household relocations to larger property moves, we provide practical support to help make your journey as smooth as possible. We keep you updated throughout transit with reliable delivery scheduling."
        buttonText="Make Your Move Stress-Free"
        buttonHref="/#quote-form"
      />

      {/* 4. Why Choose Us Section */}
      <ServiceDetailWhyChoose
        primaryImage="/images/2148869442-683x1024.jpg"
        primaryImageAlt="Safe Transit for Long-Distance Moving"
        title="A Reliable Moving Service Wherever You're Going"
        description="At Stress Free Move Limited, we understand that moving to another part of the UK can feel overwhelming. Our experienced team takes care of the practical side of your move, giving you greater peace of mind throughout the journey. With flexible solutions and careful handling from collection to delivery, we're here to help you move further without the unnecessary hassle."
        highlightImage="/images/pexels-ketut-subiyanto-4246086-683x1024.jpg"
        highlightTitle="Nationwide Coverage & Scheduled UK Delivery"
        checklist={[
          "UK-Wide Moving Support",
          "Reliable Long-Distance Transportation",
          "Careful Handling Throughout",
          "Flexible Moving Options",
          "Direct Door-to-Door Service",
          "Goods-in-Transit Insurance Cover",
        ]}
        galleryImages={[
          {
            src: "/images/pexels-rdne-7464184-1024x683.jpg",
            alt: "Long Distance Delivery",
          },
          {
            src: "/images/pexels-shvets-production-7203883.jpg",
            alt: "UK Road Trip Moving",
          },
        ]}
      />

      {/* 5. FAQs Section */}
      <ServiceDetailFaq
        title="Frequently Asked Questions"
        subtitle="Find quick answers about our long-distance and nationwide moving services, pricing, packing, furniture handling, insurance, and UK-wide moving support. If you can't find what you're looking for, our team is always happy to help."
      />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
