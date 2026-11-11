import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailHero from "@/components/service-detail/ServiceDetailHero";
import ServiceDetailIntro from "@/components/service-detail/ServiceDetailIntro";
import ServiceDetailBanner from "@/components/service-detail/ServiceDetailBanner";
import ServiceDetailWhyChoose from "@/components/service-detail/ServiceDetailWhyChoose";
import ServiceDetailFaq from "@/components/service-detail/ServiceDetailFaq";

export const metadata: Metadata = {
  title: "Storage Solutions – Stress Free Move Limited",
  description:
    "Secure, flexible, and affordable storage solutions across the UK. Keep your furniture and possessions safe with Stress Free Move Limited.",
};

export default function StorageSolutionsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* 1. Hero Banner */}
      <ServiceDetailHero
        title="Storage Solutions"
        bgImage="/images/pexels-handiboyz-5775099.jpg"
      />

      {/* 2. Intro Section */}
      <ServiceDetailIntro
        heading="Space When You Need It, Storage You Can Rely On"
        paragraphs={[
          "Need somewhere safe to keep your belongings during a move, renovation, or change of circumstances? Stress Free Move Limited can provide practical storage solutions to help keep your furniture and possessions secure until you're ready for them. Whether you need storage for a few items or require space for a larger move, our flexible solutions make it easier to manage your belongings without adding unnecessary stress.",
        ]}
        imageSrc="/images/pexels-rdne-8580763.jpg"
        imageAlt="Storage Unit and Cardboard Boxes"
        buttonText="Get a Free Quote"
        buttonHref="/#quote-form"
      />

      {/* 3. Middle CTA Banner */}
      <ServiceDetailBanner
        bgImage="/images/pexels-artbovich-7045314.jpg"
        heading="Flexible Storage For Every Situation"
        description="Sometimes your new home isn't ready, your office move takes longer than expected, or you simply need extra space for your belongings. Our storage solutions can give you the flexibility you need during these transitions. From household furniture and boxes to business equipment and other possessions, we can help you arrange a practical storage solution around your requirements."
        buttonText="Make Your Move Stress-Free"
        buttonHref="/#quote-form"
      />

      {/* 4. Why Choose Us Section */}
      <ServiceDetailWhyChoose
        primaryImage="/images/pexels-bilguun-gantumur-2162568235-38310835.jpg"
        primaryImageAlt="Secure Storage Solutions"
        title="Keep Your Belongings Safe & Organised"
        description="We understand that storing your possessions requires trust and care. That's why we focus on making the storage process straightforward, convenient, and suitable for your individual needs."
        highlightImage="/images/pexels-cottonbro-6333743.jpg"
        highlightTitle="Storage Solutions Designed Around You"
        checklist={[
          "Short-Term & Longer-Term Storage",
          "Household Furniture Storage",
          "Flexible Storage Options",
          "Careful Handling of Your Belongings",
          "Convenient Moving & Storage Support",
        ]}
        galleryImages={[
          {
            src: "/images/pexels-odaksan-4224967.jpg",
            alt: "Clean and Secure Storage Compartment",
          },
          {
            src: "/images/pexels-theo-cold-814199886-34005910-scaled.jpg",
            alt: "Organized Box Storage Warehouse",
          },
        ]}
      />

      {/* 5. FAQs Section */}
      <ServiceDetailFaq
        title="Frequently Asked Questions"
        subtitle="Find quick answers about our storage services, pricing, packing, furniture handling, insurance, and UK-wide moving support. If you can't find what you're looking for, our team is always happy to help."
      />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
