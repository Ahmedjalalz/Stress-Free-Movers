import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-[#FDFBF5]">
        <div className="max-w-xl mx-auto text-center">
          <div className="site-badge mb-4">
            <span>404 — Page Not Found</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#121F36] tracking-tight mb-4">
            We couldn&apos;t find that page
          </h1>
          <p className="text-base sm:text-lg text-[#57606C] mb-8 leading-relaxed">
            The page you&apos;re looking for may have moved or no longer exists. Let&apos;s get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#121F36] text-white font-bold text-sm hover:bg-[#C7A567] hover:text-[#121F36] transition-colors shadow-md"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-[#121F36]/20 text-[#121F36] font-bold text-sm hover:border-[#C7A567] hover:text-[#C7A567] transition-colors"
            >
              <span>Browse Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
