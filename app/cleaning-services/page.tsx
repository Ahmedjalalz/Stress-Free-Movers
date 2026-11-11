import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailHero from "@/components/service-detail/ServiceDetailHero";
import ServiceDetailIntro from "@/components/service-detail/ServiceDetailIntro";
import ServiceDetailBanner from "@/components/service-detail/ServiceDetailBanner";
import ServiceDetailWhyChoose from "@/components/service-detail/ServiceDetailWhyChoose";
import ServiceDetailFaq from "@/components/service-detail/ServiceDetailFaq";

export const metadata: Metadata = {
  title: "Cleaning Services – Stress Free Move Limited",
  description:
    "Professional move-in, move-out, and deep cleaning services across the UK. Stress Free Move Limited keeps your home or property clean and fresh.",
};

export default function CleaningServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* 1. Hero Banner */}
      <ServiceDetailHero
        title="Cleaning Services"
        bgImage="/images/closeup-waitress-disinfecting-tables-outdoor-cafe_637285-7996.jpg"
      />

      {/* 2. Intro Section */}
      <ServiceDetailIntro
        heading="A Cleaner Space, Without the Stress"
        paragraphs={[
          "Stress Free Move Limited provides reliable cleaning services to help keep your home or property clean, fresh and ready for what comes next.",
          "Whether you're preparing for a move, leaving a property, settling into a new home, or simply need help with a thorough clean, our team can provide practical cleaning support tailored to your requirements.",
        ]}
        imageSrc="/images/full-shot-man-cleaning-indoors_23-2150454482-682x1024.jpg"
        imageAlt="Professional Cleaner Working Indoors"
        buttonText="Get a Free Quote"
        buttonHref="/#quote-form"
      />

      {/* 3. Middle CTA Banner */}
      <ServiceDetailBanner
        bgImage="/images/full-shot-people-cleaning-building_23-2150454543.avif"
        heading="Cleaning Made Easier"
        description="Cleaning an entire property can take considerable time and effort, especially when preparing for a move or dealing with a larger home. Our team provides practical support to make the process simpler and more convenient."
        buttonText="Make Your Move Stress-Free"
        buttonHref="/#quote-form"
      />

      {/* 4. Why Choose Us Section */}
      <ServiceDetailWhyChoose
        primaryImage="/images/man-servant-doing-chores-around-house_23-2149508125.jpg"
        primaryImageAlt="Thorough Property and Domestic Cleaning"
        title="From Start to Finish, We Keep It Clean"
        description="Our dedicated cleaners use quality equipment and proven sanitisation techniques to leave every room spotless. From ovens and skirting boards to bathrooms and carpets, we ensure your property passes inspection or welcomes you warmly."
        highlightImage="/images/professional-cleaning-service-people-working-together-office_23-2150520599-1024x682.avif"
        highlightTitle="Move-In & Move-Out Deep Cleaning Specialists"
        checklist={[
          "Move-In & Move-Out Deep Cleans",
          "End of Tenancy Cleaning",
          "Kitchens, Bathrooms & Living Areas",
          "Floor Scrubbing & Surface Sanitisation",
          "Tailored Cleaning Packages",
          "High-Grade Eco Cleaning Supplies",
        ]}
        galleryImages={[
          {
            src: "/images/closeup-waitress-disinfecting-tables-outdoor-cafe_637285-7996.jpg",
            alt: "Commercial and Domestic Cleaning",
          },
          {
            src: "/images/full-shot-man-cleaning-indoors_23-2150454482-682x1024.jpg",
            alt: "Detailed Room Cleaning",
          },
        ]}
      />

      {/* 5. FAQs Section */}
      <ServiceDetailFaq
        title="Frequently Asked Questions"
        subtitle="Find quick answers about our cleaning services, pricing, packing, furniture handling, insurance, and UK-wide moving support. If you can't find what you're looking for, our team is always happy to help."
      />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
