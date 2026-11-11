import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailHero from "@/components/service-detail/ServiceDetailHero";
import ServiceDetailIntro from "@/components/service-detail/ServiceDetailIntro";
import ServiceDetailBanner from "@/components/service-detail/ServiceDetailBanner";
import ServiceDetailWhyChoose from "@/components/service-detail/ServiceDetailWhyChoose";
import ServiceDetailFaq from "@/components/service-detail/ServiceDetailFaq";

export const metadata: Metadata = {
  title: "Furniture Assembly – Stress Free Move Limited",
  description:
    "Professional furniture assembly services across the UK. Stress Free Move Limited sets up your flat-pack, wardrobes, beds, tables, and office units safely and quickly.",
};

export default function FurnitureAssemblyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* 1. Hero Banner */}
      <ServiceDetailHero
        title="Furniture Assembly"
        bgImage="/images/hands-driving-nail-with-hammer-into-wooden-shelf_74855-5668.jpg"
      />

      {/* 2. Intro Section */}
      <ServiceDetailIntro
        heading="Furniture Assembly Made Simple"
        paragraphs={[
          "Stress Free Move Limited provides reliable furniture assembly services to help you set up your furniture quickly and safely without the hassle of doing the heavy work yourself.",
          "Whether you have recently moved home, purchased new furniture, or need help assembling larger items, our team can assist with putting your furniture together and getting it ready to use.",
        ]}
        imageSrc="/images/male-worker-checking-new-furniture-after-assambly-handyman-helping-people_482257-24857-1024x576.jpg"
        imageAlt="Worker Assembling and Checking New Furniture"
        buttonText="Get a Free Quote"
        buttonHref="/#quote-form"
      />

      {/* 3. Middle CTA Banner */}
      <ServiceDetailBanner
        bgImage="/images/man-assembly-furniture-new-house-they-purchased_482257-24165.jpg"
        heading="Furniture Assembly Made Easier"
        description="Assembling furniture can take time and effort, especially when dealing with large wardrobes, beds, desks, tables or other complex items. Our team provides practical support to make the process easier and more convenient."
        buttonText="Make Your Move Stress-Free"
        buttonHref="/#quote-form"
      />

      {/* 4. Why Choose Us Section */}
      <ServiceDetailWhyChoose
        primaryImage="/images/smiling-man-putting-together-self-assembly-furniture-new-home-furniture-new-house_482257-24153.jpg"
        primaryImageAlt="Self-Assembly Furniture Expert Setup"
        title="Assembling Your Furniture Safely From Start to Finish"
        description="From reading instructions and organizing hardware to assembling and positioning every piece, our skilled team ensures your furniture is solidly built and placed exactly where you want it."
        highlightImage="/images/furniture-assembly-worker-standing-reading-instruction-using-tape-measure-worker-tools_482257-24849-1024x576.avif"
        highlightTitle="Flat-Pack & Large Furniture Assembly Specialists"
        checklist={[
          "Flat-Pack & Self-Assembly Furniture",
          "Wardrobes, Beds & Dining Tables",
          "Desks, Office Units & Bookcases",
          "Dismantling & Reassembly Services",
          "Accurate Tool & Hardware Handling",
          "Sturdy & Safe Assembly Guaranteed",
        ]}
        galleryImages={[
          {
            src: "/images/male-worker-checking-new-furniture-after-assambly-handyman-helping-people_482257-24857-1024x576.jpg",
            alt: "Assembled Furniture",
          },
          {
            src: "/images/hands-driving-nail-with-hammer-into-wooden-shelf_74855-5668.jpg",
            alt: "Precision Furniture Assembly",
          },
        ]}
      />

      {/* 5. FAQs Section */}
      <ServiceDetailFaq
        title="Frequently Asked Questions"
        subtitle="Find quick answers about our furniture assembly services, pricing, packing, furniture handling, insurance, and UK-wide moving support. If you can't find what you're looking for, our team is always happy to help."
      />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
