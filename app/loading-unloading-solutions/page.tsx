import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailHero from "@/components/service-detail/ServiceDetailHero";
import ServiceDetailIntro from "@/components/service-detail/ServiceDetailIntro";
import ServiceDetailBanner from "@/components/service-detail/ServiceDetailBanner";
import ServiceDetailWhyChoose from "@/components/service-detail/ServiceDetailWhyChoose";
import ServiceDetailFaq from "@/components/service-detail/ServiceDetailFaq";

export const metadata: Metadata = {
  title: "Loading & Unloading Solutions – Stress Free Move Limited",
  description:
    "Professional loading and unloading support across the UK. Safe heavy lifting, vehicle loading, and unloading for furniture, appliances, and boxes.",
};

export default function LoadingUnloadingSolutionsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* 1. Hero Banner */}
      <ServiceDetailHero
        title="Loading & Unloading Solutions"
        bgImage="/images/2148902572.jpg"
      />

      {/* 2. Intro Section */}
      <ServiceDetailIntro
        heading="Heavy Lifting Made Simple"
        paragraphs={[
          "Moving heavy furniture, boxes, and belongings can be one of the most difficult parts of any move. Stress Free Move Limited provides reliable loading and unloading support to make the process safer, easier, and more efficient.",
          "Whether you're moving home, relocating an office, loading a storage unit, or receiving a large delivery, our team can handle the heavy lifting and help get your belongings where they need to go.",
        ]}
        imageSrc="/images/2148902569-1024x681.jpg"
        imageAlt="Moving Crew Loading Boxes into Van"
        buttonText="Get a Free Quote"
        buttonHref="/#quote-form"
      />

      {/* 3. Middle CTA Banner */}
      <ServiceDetailBanner
        bgImage="/images/2148976303.jpg"
        heading="From Loading to Unloading, We've Got You Covered."
        description="Our team can take care of the heavy work involved in moving your belongings. We carefully load furniture, boxes, appliances, and other items, making sure everything is handled properly during transportation."
        buttonText="Make Your Move Stress-Free"
        buttonHref="/#quote-form"
      />

      {/* 4. Why Choose Us Section */}
      <ServiceDetailWhyChoose
        primaryImage="/images/2148902562-1024x1024.jpg"
        primaryImageAlt="Careful Moving and Heavy Lifting"
        title="Reliable Help When You Need It"
        description="At Stress Free Move Limited, we understand that heavy lifting requires care, planning, and the right approach. Whether you need help loading a removal vehicle or unloading at your new property, our team provides practical support tailored to your requirements."
        highlightImage="/images/77642-1024x683.jpg"
        highlightTitle="Safe Handling for Furniture and Heavy Belongings"
        checklist={[
          "Careful Handling of Your Belongings",
          "Experienced Moving Team",
          "Safe & Efficient Loading",
          "Reliable Unloading Support",
          "Furniture & Appliance Moving",
          "Storage Loading & Unloading",
        ]}
        galleryImages={[
          {
            src: "/images/2148902572-1024x681.jpg",
            alt: "Moving Van Loading",
          },
          {
            src: "/images/2148976303.jpg",
            alt: "Movers Handling Belongings",
          },
        ]}
      />

      {/* 5. FAQs Section */}
      <ServiceDetailFaq
        title="Frequently Asked Questions"
        subtitle="Find quick answers about our loading and unloading services, pricing, packing, furniture handling, insurance, and UK-wide moving support. If you can't find what you're looking for, our team is always happy to help."
      />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
