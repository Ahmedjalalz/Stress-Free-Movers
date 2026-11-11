import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutHero from "@/components/about/AboutHero";
import AboutMovingSimple from "@/components/about/AboutMovingSimple";
import AboutMission from "@/components/about/AboutMission";
import AboutExperience from "@/components/about/AboutExperience";
import AboutResponsibility from "@/components/about/AboutResponsibility";
import AboutMoreThanMoving from "@/components/about/AboutMoreThanMoving";
import AboutCta from "@/components/about/AboutCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Stress Free Move Limited",
  description:
    "Learn more about Stress Free Move Limited. Providing reliable, professional, and affordable removals and moving services designed to make every step simple, safe, and hassle-free.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* 1. Hero Banner with Angled Shape Transition */}
      <AboutHero />

      {/* 2. Moving Made Simple From Start to Finish */}
      <AboutMovingSimple />

      {/* 3. Our Mission (Parallax Background) */}
      <AboutMission />

      {/* 4. Experience You Can Trust (10+ Years Badge & Photo Collage) */}
      <AboutExperience />

      {/* 5. Your Move, Our Responsibility (Midnight Navy & 4-Step Approach) */}
      <AboutResponsibility />

      {/* 6. More Than a Moving Company (Responsive 7-Photo Sliding Carousel) */}
      <AboutMoreThanMoving />

      {/* 7. Ready for a Stress-Free Move CTA Banner */}
      <AboutCta />

      {/* Footer */}
      <Footer />
    </main>
  );
}
