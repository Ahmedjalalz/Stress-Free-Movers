import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailHero from "@/components/service-detail/ServiceDetailHero";
import ServiceDetailIntro from "@/components/service-detail/ServiceDetailIntro";
import ServiceDetailBanner from "@/components/service-detail/ServiceDetailBanner";
import ServiceDetailWhyChoose from "@/components/service-detail/ServiceDetailWhyChoose";
import ServiceDetailFaq from "@/components/service-detail/ServiceDetailFaq";

export const metadata: Metadata = {
  title: "Piano Removals – Stress Free Move Limited",
  description:
    "Specialist piano removals across the UK. Careful handling, protective wrapping, and secure transportation for upright and grand pianos.",
};

export default function PianoRemovalsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* 1. Hero Banner */}
      <ServiceDetailHero
        title="Piano Removals"
        bgImage="/images/2148673646.jpg"
      />

      {/* 2. Intro Section */}
      <ServiceDetailIntro
        heading="Specialist Piano Moving, Handled With Care"
        paragraphs={[
          "Moving a piano requires more than simply lifting and transporting it. Stress Free Move Limited provides careful piano removal services designed to help move your piano safely from one location to another.",
          "Whether you're moving home, relocating a piano to another property, or need help transporting a piano, our experienced moving team can provide the practical support and careful handling your move requires.",
        ]}
        imageSrc="/images/14298-1024x683.jpg"
        imageAlt="Grand and Upright Piano Specialist Handling"
        buttonText="Get a Free Quote"
        buttonHref="/#quote-form"
      />

      {/* 3. Middle CTA Banner */}
      <ServiceDetailBanner
        bgImage="/images/2149247133.jpg"
        heading="Piano Moving Made Simple"
        description="Moving a piano can be challenging, especially when dealing with heavy furniture, narrow spaces, stairs or difficult access. Our team provides dependable support to make the process easier and more organised."
        buttonText="Make Your Move Stress-Free"
        buttonHref="/#quote-form"
      />

      {/* 4. Why Choose Us Section */}
      <ServiceDetailWhyChoose
        primaryImage="/images/2149247134.jpg"
        primaryImageAlt="Specialist Piano Transit and Loading"
        title="Moving Your Piano Safely From Start to Finish"
        description="Your piano is carefully prepared and protected to help minimise the risk of scratches, marks or damage during the move. Our moving team uses careful lifting and handling techniques to safely move your piano from the property and load it for secure transportation."
        highlightImage="/images/2148673646-1024x576.jpg"
        highlightTitle="Protective Padding & Expert Piano Relocation"
        checklist={[
          "Careful Planning & Property Access Check",
          "Protective Padding & Wrapping",
          "Safe Handling & Specialised Equipment",
          "Secure Transport with Restraints",
          "Doorway, Hallway & Stair Navigation",
          "Flexible Upright & Grand Piano Removals",
        ]}
        galleryImages={[
          {
            src: "/images/14298-1024x683.jpg",
            alt: "Acoustic Piano Handling",
          },
          {
            src: "/images/2148673646.jpg",
            alt: "Piano Transit and Protection",
          },
        ]}
      />

      {/* 5. FAQs Section */}
      <ServiceDetailFaq
        title="Frequently Asked Questions"
        subtitle="Find quick answers about our piano removals, pricing, packing, furniture handling, insurance, and UK-wide moving support. If you can't find what you're looking for, our team is always happy to help."
      />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
