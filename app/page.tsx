import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReviewsSection from "@/components/ReviewsSection";
import MovingMadeSimple from "@/components/MovingMadeSimple";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessSection from "@/components/ProcessSection";
import CommercialSection from "@/components/CommercialSection";
import FaqSection from "@/components/FaqSection";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import { getReviewsData } from "@/lib/reviews";

export const revalidate = 172800; // 2 days auto-revalidation in seconds

export default async function Home() {
  const reviewsData = await getReviewsData();

  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* Top Header */}
      <Header />

      {/* Exact Hero Section with Video */}
      <Hero />

      {/* Reviews, Ratings & Verified Testimonials (Moved directly after Hero) */}
      <ReviewsSection initialData={reviewsData} />

      {/* Moving Made Simple From Start to Finish (Overlapping photos & checklist) */}
      <MovingMadeSimple />

      {/* Complete Removals Services Grid */}
      <ServicesGrid />

      {/* 4-Step Process Flow */}
      <ProcessSection />

      {/* Commercial & Business Relocation */}
      <CommercialSection />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Let's Take Care of Your Business Challenges (Quote Form) */}
      <QuoteForm />

      {/* Footer */}
      <Footer />
    </main>
  );
}
