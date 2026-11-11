import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceDetailHero from "@/components/service-detail/ServiceDetailHero";
import ServiceDetailIntro from "@/components/service-detail/ServiceDetailIntro";
import ServiceDetailBanner from "@/components/service-detail/ServiceDetailBanner";
import ServiceDetailWhyChoose from "@/components/service-detail/ServiceDetailWhyChoose";
import ServiceDetailFaq from "@/components/service-detail/ServiceDetailFaq";

export const metadata: Metadata = {
  title: "House Removals – Stress Free Move Limited",
  description:
    "Professional house removals across the UK. Let Stress Free Move Limited take the stress out of your move with careful packing, transport, and reliable moving services.",
};

export default function HouseRemovalsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* 1. Hero Banner */}
      <ServiceDetailHero
        title="House Removals"
        bgImage="/images/2149103448.jpg"
      />

      {/* 2. Intro Section */}
      <ServiceDetailIntro
        heading="Stress-Free Moves, Handled With Care"
        paragraphs={[
          "Moving house? Let Stress Free Move Limited take the stress out of your move. We provide reliable and professional house removal services across the UK, helping you move your furniture and belongings safely and efficiently. Whether you're moving locally or relocating further away, our experienced team is here to make your moving day simple and hassle-free. From loading and transportation to unloading and positioning, we'll handle the heavy work while you focus on settling into your new home.",
        ]}
        imageSrc="/images/2149086870.jpg"
        imageAlt="Professional Movers Handling House Relocation"
        buttonText="Get a Free Quote"
        buttonHref="/#quote-form"
      />

      {/* 3. Middle CTA Banner */}
      <ServiceDetailBanner
        bgImage="/images/pexels-cottonbro-4569303.jpg"
        heading="Moving Home? We've Got You Covered."
        description="Whether you're moving from a flat, apartment, house, or larger property, Stress Free Move Limited can help make the process easier."
        buttonText="Make Your Move Stress-Free"
        buttonHref="/#quote-form"
      />

      {/* 4. Why Choose Us Section */}
      <ServiceDetailWhyChoose
        primaryImage="/images/17235.jpg"
        primaryImageAlt="Careful House Removals and Furniture Protection"
        title="Why Choose Stress Free Move Limited?"
        description="Choosing the right removal company can make all the difference. We combine professional service, careful handling, and flexible solutions to give you a smoother moving experience."
        highlightImage="/images/pexels-shvets-production-7203884.jpg"
        highlightTitle="Expert House Removals Tailored to Your Move"
        checklist={[
          "Reliable & Professional Service",
          "Fully Insured",
          "Careful Handling of Your Belongings",
          "Flexible Moving Solutions",
          "Clear Communication",
          "Customer-Focused Support",
        ]}
        galleryImages={[
          {
            src: "/images/12404.jpg",
            alt: "Moving House Boxes and Furniture",
          },
          {
            src: "/images/pexels-karola-g-4506226.jpg",
            alt: "Happy Family Moving into New Home",
          },
        ]}
      />

      {/* 5. FAQs Section */}
      <ServiceDetailFaq
        title="Frequently Asked Questions"
        subtitle="Find quick answers about our house removal services, pricing, packing, furniture handling, insurance, and UK-wide moving support. If you can't find what you're looking for, our team is always happy to help."
      />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
