"use client";
import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export const faqs = [
  {
    question: "How do quotes work?",
    answer:
      "Tell us your move dates, property size and where you’re moving from and to. After a quick in-person or video survey, we send a clear written quote covering labour, transport and materials — usually the same day. The price you see is the price you pay, with no hidden extras.",
  },
  {
    question: "Are my belongings insured during the move?",
    answer:
      "Yes. Every job is fully insured for transit and goods-in-storage cover, and our crews are trained in careful handling and protective wrapping. High-value or specialist items like pianos and antiques can be covered with dedicated protection — just mention them when you book.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking two to four weeks ahead for a standard house move, and four to six weeks for larger or long-distance moves and office relocations. That said, we always try to accommodate last-minute and same-week jobs where we can, so it’s worth calling even if your date is soon.",
  },
  {
    question: "What's included in your packing service?",
    answer:
      "Full or partial packing using quality boxes, bubble wrap, tissue and tape, with every box clearly labelled by room and contents. We wrap fragile and valuable items individually, dismantle what’s needed, and can unpack and remove the empty boxes at the other end if you’d like.",
  },
  {
    question: "What happens on moving day?",
    answer:
      "Your crew arrives at the agreed time, walks through the property with you to confirm fragile and priority items, then loads, transports and unloads everything — placing each item where you want it in your new home. We protect floors and doorways, keep you updated throughout, and do a final check before we leave.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We move people across England, Wales and Scotland — from local moves to nationwide long-distance relocations. If you’re unsure whether we cover your area, give us a call and we’ll let you know straight away.",
  },
];

export default function FaqSection() {
  // First item open by default matching live site
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="site-badge mb-3">
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            Answers to the things people ask most
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Straight answers to the questions we hear on every move. If yours
            isn’t here, just give us a call — we’re happy to talk it through.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 sm:px-8 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-gray-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-navy-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-navy-900 text-gold"
                        : "bg-gray-100 text-navy-800"
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
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 animate-fade-in text-muted text-sm sm:text-base leading-relaxed border-t border-gray-100 mt-2">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center">
          <p className="text-sm font-semibold text-muted">
            Have a question that is not answered here?{" "}
            <a
              href="tel:02088584684"
              className="text-gold font-bold hover:underline"
            >
              Call 020 8858 4684
            </a>{" "}
            to speak with our friendly team directly.
          </p>
        </div>
      </div>
    </section>
  );
}
