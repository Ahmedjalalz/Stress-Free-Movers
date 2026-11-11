"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceDetailFaqProps {
  title?: string;
  subtitle?: string;
  faqs?: FaqItem[];
}

export const defaultServiceFaqs: FaqItem[] = [
  {
    question: "How much do house removals cost?",
    answer:
      "The cost depends on factors such as the size of your move, distance, number of belongings, and services required. Contact us for a free, personalised quote.",
  },
  {
    question: "Do you offer packing services?",
    answer:
      "Yes. We can provide packing assistance to help prepare your household belongings safely and efficiently for transportation.",
  },
  {
    question: "Are your house removal services insured?",
    answer:
      "Yes. We provide a professional removals service with appropriate insurance cover. Contact us for more information about the cover available for your move.",
  },
  {
    question: "Do you handle long-distance house removals?",
    answer:
      "Yes. We provide reliable house removal services for both local and long-distance moves across the UK.",
  },
  {
    question: "Can you dismantle and assemble furniture?",
    answer:
      "Yes. Our team can assist with dismantling furniture before the move and reassembling it at your new property where required.",
  },
  {
    question: "Do you help with loading and unloading?",
    answer:
      "Yes. Our professional movers can handle the loading, transportation, and unloading of your furniture and belongings.",
  },
  {
    question: "Can you move a single item?",
    answer:
      "Yes. We can assist with single-item moves and other smaller transportation requirements. Our Man & Van service may be ideal for these jobs.",
  },
  {
    question: "How far in advance should I book my move?",
    answer:
      "We recommend booking as early as possible, especially for weekends and busy periods. Contact us with your preferred moving date and we'll check availability.",
  },
];

export default function ServiceDetailFaq({
  title = "Frequently Asked Questions",
  subtitle = "Find quick answers about our house removal services, pricing, packing, furniture handling, insurance, and UK-wide moving support. If you can't find what you're looking for, our team is always happy to help.",
  faqs = defaultServiceFaqs,
}: ServiceDetailFaqProps) {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="site-badge mb-3">
            <span>Faq&apos;s</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121F36] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base sm:text-lg text-[#4A5568] max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:border-[#C7A567]/50 transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-[#121F36]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#121F36] text-[#C7A567]"
                        : "bg-gray-100 text-[#121F36]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 text-[#4A5568] text-sm sm:text-base leading-relaxed border-t border-gray-100 mt-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
