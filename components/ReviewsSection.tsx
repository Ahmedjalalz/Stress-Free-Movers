"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  ExternalLink,
  CheckCircle2,
  RefreshCw,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { ReviewsData, Review, DEFAULT_REVIEWS_DATA } from "@/lib/reviews.types";

interface ReviewsSectionProps {
  initialData?: ReviewsData;
}

// Trustpilot signature star boxes (green squares with white stars)
function TrustpilotStarRating({
  rating = 5,
  size = "md",
}: {
  rating?: number;
  size?: "sm" | "md" | "lg";
}) {
  const boxClasses =
    size === "sm"
      ? "w-4 h-4 text-[10px]"
      : size === "lg"
      ? "w-7 h-7 text-sm"
      : "w-5 h-5 text-xs";

  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= rating;
        return (
          <div
            key={star}
            className={`${boxClasses} flex items-center justify-center font-bold text-white rounded-[2px] transition-transform ${
              isFilled ? "bg-[#00b67a]" : "bg-gray-200 text-gray-400"
            }`}
          >
            ★
          </div>
        );
      })}
    </div>
  );
}

// Getamover round star badges
function GetamoverStarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          className="w-5 h-5 rounded-full bg-[#13c265] text-white flex items-center justify-center text-xs font-bold shadow-xs"
        >
          ★
        </div>
      ))}
    </div>
  );
}

export default function ReviewsSection({ initialData }: ReviewsSectionProps) {
  const [data, setData] = useState<ReviewsData>(initialData || DEFAULT_REVIEWS_DATA);
  const [activeTab, setActiveTab] = useState<"all" | "trustpilot" | "getamover">("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncMessage, setSyncMessage] = useState<string | null>(null);

  // Filter reviews based on active tab
  const filteredReviews: Review[] = React.useMemo(() => {
    if (activeTab === "trustpilot") {
      return data.trustpilot.reviews;
    }
    if (activeTab === "getamover") {
      return data.getamover.reviews;
    }
    return data.allReviews && data.allReviews.length > 0
      ? data.allReviews
      : [...data.trustpilot.reviews, ...data.getamover.reviews];
  }, [data, activeTab]);

  // Reset index when changing tabs
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  // Auto-advance carousel every 7 seconds
  useEffect(() => {
    if (filteredReviews.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [filteredReviews.length]);

  const prevReview = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredReviews.length - 1 : prev - 1
    );
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  // On-demand manual sync
  const handleManualSync = async () => {
    setIsSyncing(true);
    setSyncMessage(null);
    try {
      const res = await fetch("/api/reviews?sync=true");
      if (res.ok) {
        const freshData = await res.json();
        setData(freshData);
        setSyncMessage("Reviews successfully synced!");
      } else {
        setSyncMessage("Sync completed using cached live records.");
      }
    } catch {
      setSyncMessage("Could not contact sync server; showing latest cache.");
    } finally {
      setIsSyncing(false);
      setTimeout(() => setSyncMessage(null), 4000);
    }
  };

  const currentReview = filteredReviews[currentIndex] || filteredReviews[0];

  // Format date helper
  const formatSyncDate = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      if (isNaN(d.getTime())) return isoStr;
      return d.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return isoStr;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-amber-50/20 relative overflow-hidden">
      {/* Decorative background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-r from-trustpilot/5 via-gold/5 to-trustpilot/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-gold/30 text-navy-900 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#00b67a]" />
            <span>Verified Customer Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Trusted by UK families &amp;{" "}
            <span className="text-gold">businesses</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Real experiences from real clients. We pride ourselves on punctuality,
            careful handling, and an easy, stress-free moving journey.
          </p>
        </div>

        {/* Dual Platform Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-14">
          {/* Trustpilot Brand Card */}
          <div className="relative bg-white border-2 border-[#00b67a]/20 rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            {/* Top brand color accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#00b67a]" />

            <div>
              {/* Trustpilot Header */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="relative w-7 h-7 flex-shrink-0">
                    <Image
                      src="/images/single-star.svg"
                      alt="Trustpilot star logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-navy-900 tracking-tight">
                    Trustpilot
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 bg-[#00b67a]/10 text-[#008a5b] text-xs font-bold px-2.5 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified Company
                </span>
              </div>

              {/* Trustpilot Score & Stars */}
              <div className="flex items-center gap-3 mb-3">
                <TrustpilotStarRating rating={5} size="lg" />
                <span className="text-2xl font-extrabold text-navy-900">
                  {data.trustpilot.score}
                </span>
                <span className="text-sm font-semibold text-gray-500">/ 5</span>
              </div>

              <div className="text-xs text-muted font-medium mb-5">
                TrustScore <span className="font-bold text-navy-900">{data.trustpilot.score}</span> • Based on{" "}
                <span className="font-bold text-navy-900">{data.trustpilot.reviewCount} customer reviews</span>
              </div>
            </div>

            {/* Trustpilot Action Buttons */}
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={data.trustpilot.evaluateUrl || "https://uk.trustpilot.com/evaluate/stressfreemoveltd.co.uk"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#00b67a] hover:bg-[#009b67] text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm hover:shadow-md transition-all text-center"
              >
                <Star className="w-4 h-4 fill-white" />
                <span>Review us on Trustpilot</span>
              </a>
              <a
                href={data.trustpilot.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-navy-900 hover:text-[#00b67a] font-semibold text-xs py-2 px-3 transition-colors"
              >
                <span>Read Trustpilot reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Getamover Brand Card */}
          <div className="relative bg-white border-2 border-emerald-500/20 rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            {/* Top brand color accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#13c265]" />

            <div>
              {/* Getamover Header */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#13c265] text-white flex items-center justify-center font-black text-sm shadow-xs">
                    G
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-navy-900 tracking-tight">
                    Getamover
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Top Rated Mover
                </span>
              </div>

              {/* Getamover Score & Stars */}
              <div className="flex items-center gap-3 mb-3">
                <GetamoverStarRating rating={5} />
                <span className="text-2xl font-extrabold text-navy-900">
                  {data.getamover.score.replace(".", ",")}
                </span>
                <span className="text-sm font-semibold text-gray-500">/ 10</span>
              </div>

              <div className="text-xs text-muted font-medium mb-5">
                Review score <span className="font-bold text-navy-900">{data.getamover.score.replace(".", ",")}</span> • Based on{" "}
                <span className="font-bold text-navy-900">{data.getamover.reviewCount} customer reviews</span>
              </div>
            </div>

            {/* Getamover Action Link */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-muted">
                Official Getamover Partner Profile
              </span>
              <a
                href={data.getamover.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#13c265] hover:text-emerald-700 font-bold text-xs hover:underline transition-colors"
              >
                <span>View Getamover Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Platform Filter Tabs */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center p-1.5 bg-gray-100/90 rounded-2xl border border-gray-200">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "all"
                  ? "bg-navy-900 text-white shadow-sm"
                  : "text-navy-900/70 hover:text-navy-900 hover:bg-gray-200/60"
              }`}
            >
              All Reviews ({data.allReviews?.length || data.totalReviews})
            </button>
            <button
              onClick={() => setActiveTab("trustpilot")}
              className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "trustpilot"
                  ? "bg-[#00b67a] text-white shadow-sm"
                  : "text-navy-900/70 hover:text-navy-900 hover:bg-gray-200/60"
              }`}
            >
              <div className="w-3 h-3 rounded-[1px] bg-white text-[#00b67a] flex items-center justify-center text-[8px] font-black">
                ★
              </div>
              Trustpilot ({data.trustpilot.reviews.length})
            </button>
            <button
              onClick={() => setActiveTab("getamover")}
              className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === "getamover"
                  ? "bg-[#13c265] text-white shadow-sm"
                  : "text-navy-900/70 hover:text-navy-900 hover:bg-gray-200/60"
              }`}
            >
              <div className="w-3 h-3 rounded-full bg-white text-[#13c265] flex items-center justify-center text-[8px] font-black">
                ★
              </div>
              Getamover ({data.getamover.reviews.length})
            </button>
          </div>
        </div>

        {/* Interactive Themed Review Showcase */}
        {currentReview && (
          <div
            className={`max-w-4xl mx-auto relative rounded-3xl p-7 sm:p-11 shadow-xl transition-all duration-300 border-2 ${
              currentReview.source === "Trustpilot"
                ? "bg-white border-[#00b67a]/30 shadow-[#00b67a]/5"
                : "bg-white border-emerald-500/30 shadow-emerald-500/5"
            }`}
          >
            {/* Top Badge: Review Source & Verification */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                {currentReview.source === "Trustpilot" ? (
                  <span className="inline-flex items-center gap-1.5 bg-[#00b67a] text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-xs">
                    <span className="text-white text-[11px]">★</span>
                    Trustpilot Review
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 bg-[#13c265] text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-xs">
                    <span className="text-white text-[11px]">★</span>
                    Getamover Review
                  </span>
                )}

                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Verified Customer Move
                </span>
              </div>

              <div className="text-xs text-muted font-medium">
                {currentReview.date}
              </div>
            </div>

            {/* Stars & Headline */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                {currentReview.source === "Trustpilot" ? (
                  <TrustpilotStarRating rating={currentReview.rating} size="md" />
                ) : (
                  <div className="flex items-center gap-2">
                    <GetamoverStarRating rating={currentReview.rating} />
                    {currentReview.ratingOutOf10 && (
                      <span className="bg-emerald-50 text-emerald-800 text-xs font-extrabold px-2 py-0.5 rounded-md border border-emerald-200">
                        {currentReview.ratingOutOf10} / 10
                      </span>
                    )}
                  </div>
                )}
              </div>

              <span className="text-xs font-bold text-gray-400">
                Review {currentIndex + 1} of {filteredReviews.length}
              </span>
            </div>

            {/* Headline */}
            {currentReview.headline && (
              <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-3 tracking-tight">
                {currentReview.headline}
              </h3>
            )}

            {/* Review Body */}
            <div className="relative mb-6">
              <Quote className="w-10 h-10 text-gold/15 absolute -top-3 -left-3 pointer-events-none" />
              <p className="text-base sm:text-lg font-normal text-navy-900/90 italic leading-relaxed pl-2 relative z-10">
                &ldquo;{currentReview.text}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-xs ${
                    currentReview.source === "Trustpilot"
                      ? "bg-[#00b67a]"
                      : "bg-[#13c265]"
                  }`}
                >
                  {currentReview.author.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-navy-900 text-base leading-tight">
                    {currentReview.author}
                  </h4>
                  <p className="text-xs text-muted font-medium">
                    Verified Customer via {currentReview.source}
                  </p>
                </div>
              </div>

              {/* Quick source link */}
              <a
                href={
                  currentReview.source === "Trustpilot"
                    ? data.trustpilot.profileUrl
                    : data.getamover.profileUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-gray-500 hover:text-navy-900 inline-flex items-center gap-1 transition-colors"
              >
                <span>View on {currentReview.source}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Carousel Navigation Controls */}
            <div className="flex items-center justify-between mt-8 pt-5 border-t border-gray-100">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-full bg-white hover:bg-gold hover:text-navy-950 text-navy-900 border border-gray-200 flex items-center justify-center shadow-xs hover:shadow-md transition-all"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5 flex-wrap justify-center max-w-[200px] sm:max-w-md">
                {filteredReviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentIndex
                        ? currentReview.source === "Trustpilot"
                          ? "w-7 bg-[#00b67a]"
                          : "w-7 bg-[#13c265]"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-full bg-white hover:bg-gold hover:text-navy-950 text-navy-900 border border-gray-200 flex items-center justify-center shadow-xs hover:shadow-md transition-all"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Auto-Sync Status Bar */}
        <div className="max-w-4xl mx-auto mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted gap-2 px-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              Real-time reviews • Auto-synced every 2 days • Last synced:{" "}
              <strong className="text-navy-900 font-semibold">
                {formatSyncDate(data.lastSyncedAt)}
              </strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {syncMessage && (
              <span className="text-emerald-700 font-semibold animate-fade-in">
                {syncMessage}
              </span>
            )}
            <button
              onClick={handleManualSync}
              disabled={isSyncing}
              className="inline-flex items-center gap-1.5 text-navy-900 hover:text-gold font-semibold transition-colors disabled:opacity-50"
              title="Sync latest reviews from Trustpilot & Getamover"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${isSyncing ? "animate-spin text-gold" : ""}`}
              />
              <span>{isSyncing ? "Syncing..." : "Sync Now"}</span>
            </button>
          </div>
        </div>

        {/* Prominent Trustpilot Callout: "Loved our service?" */}
        <div className="max-w-3xl mx-auto mt-14 bg-gradient-to-r from-navy-900 to-navy-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl text-center relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-1.5 bg-white/10 text-emerald-300 font-bold px-3 py-1 rounded-full text-xs mb-3 border border-white/15">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Share Your Moving Experience</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
              Moved with Stress Free Move Limited?
            </h3>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-6 leading-relaxed">
              Your feedback helps other homeowners and businesses make confident
              moving choices. It takes less than 2 minutes to leave a review.
            </p>
            <a
              href={data.trustpilot.evaluateUrl || "https://uk.trustpilot.com/evaluate/stressfreemoveltd.co.uk"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#00b67a] hover:bg-[#009b67] text-white font-bold px-7 py-3.5 rounded-xl text-sm sm:text-base shadow-lg transition-all transform hover:scale-105"
            >
              <Star className="w-5 h-5 fill-white" />
              <span>Write a Review on Trustpilot</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
