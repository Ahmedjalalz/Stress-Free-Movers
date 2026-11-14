"use client";
import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle, Calendar, MapPin, User, Mail, Phone, FileText } from "lucide-react";

export const serviceOptions = [
  "House Removals",
  "Office Removals",
  "Local Moving",
  "International & European Removals",
  "Detailed Packing",
  "Piano Removals",
  "Loading & Offloading",
  "Junk Removals",
  "Furniture Assembly",
  "Commercial & Business Relocation",
  "Secure Storage Solutions",
  "Cleaning Services",
  "Man & Van Service",
  "Packing",
  "Moving Services",
];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    pickupPostcode: "",
    dropoffPostcode: "",
    moveDate: "",
    service: "House Removals",
    fullName: "",
    email: "",
    phone: "",
    notes: "",
    website: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [minDate, setMinDate] = useState<string>("");

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formSource: "Quote Request Form",
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrorMessage(
          result?.error || "Unable to submit your request right now. Please try calling us directly."
        );
        return;
      }

      setIsSubmitted(true);
    } catch {
      setErrorMessage("Network error. Please check your connection or call us on 020 8858 4684.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote-form" className="py-24 bg-cream relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="site-badge mb-3">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            Let&apos;s take care of your business challenges
          </h2>
          <p className="mt-3 text-base sm:text-lg text-muted max-w-2xl mx-auto">
            Fill in your move details below and our team will get back to you with a
            transparent, competitive quote — usually the same day.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-navy-800/10 p-6 sm:p-10 relative overflow-hidden">
          {/* Subtle top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-gold via-navy-800 to-gold" />

          {isSubmitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10 text-trustpilot" />
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-2">
                Thank You, {formData.fullName || "Customer"}!
              </h3>
              <p className="text-muted max-w-md mb-6">
                Your quote request has been received. Our moving specialists will review
                your route and contact you shortly with a personalized quote.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    pickupPostcode: "",
                    dropoffPostcode: "",
                    moveDate: "",
                    service: "House Removals",
                    fullName: "",
                    email: "",
                    phone: "",
                    notes: "",
                    website: "",
                  });
                }}
                className="btn-gold px-6 py-2.5 rounded-lg text-sm font-bold"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field for bot protection */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="quote-website">Website</label>
                <input
                  id="quote-website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                />
              </div>

              {/* Row 1: Pick up & Drop off Postcodes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="quote-pickup" className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gold" />
                    Pick up *
                  </label>
                  <input
                    id="quote-pickup"
                    type="text"
                    required
                    maxLength={20}
                    autoComplete="postal-code"
                    placeholder="Post code"
                    value={formData.pickupPostcode}
                    onChange={(e) =>
                      setFormData({ ...formData, pickupPostcode: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm font-medium text-navy-900 bg-gray-50/50 focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="quote-dropoff" className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-gold" />
                    Drop off *
                  </label>
                  <input
                    id="quote-dropoff"
                    type="text"
                    required
                    maxLength={20}
                    autoComplete="postal-code"
                    placeholder="Post code"
                    value={formData.dropoffPostcode}
                    onChange={(e) =>
                      setFormData({ ...formData, dropoffPostcode: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm font-medium text-navy-900 bg-gray-50/50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Row 2: Moving Date & Service selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="quote-date" className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gold" />
                    Moving date
                  </label>
                  <input
                    id="quote-date"
                    type="date"
                    min={minDate || undefined}
                    value={formData.moveDate}
                    onChange={(e) =>
                      setFormData({ ...formData, moveDate: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm font-medium text-navy-900 bg-gray-50/50 focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="quote-service" className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-gold" />
                    Moving service *
                  </label>
                  <select
                    id="quote-service"
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm font-medium text-navy-900 bg-gray-50/50 focus:bg-white"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Full Name, Email, Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label htmlFor="quote-name" className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-gold" />
                    Full name *
                  </label>
                  <input
                    id="quote-name"
                    type="text"
                    required
                    maxLength={120}
                    autoComplete="name"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm font-medium text-navy-900 bg-gray-50/50 focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="quote-email" className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Mail className="w-4 h-4 text-gold" />
                    Email *
                  </label>
                  <input
                    id="quote-email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm font-medium text-navy-900 bg-gray-50/50 focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="quote-phone" className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-gold" />
                    Phone Number *
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    required
                    maxLength={30}
                    autoComplete="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm font-medium text-navy-900 bg-gray-50/50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Row 4: Additional Notes */}
              <div>
                <label htmlFor="quote-notes" className="block text-xs font-bold text-navy-800 uppercase tracking-wider mb-2">
                  Additional notes
                </label>
                <textarea
                  id="quote-notes"
                  rows={3}
                  maxLength={3000}
                  placeholder="List of items , Assembly Service , Packing Service , Packing Materials"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all text-sm font-medium text-navy-900 bg-gray-50/50 focus:bg-white resize-y"
                />
              </div>

              {errorMessage && (
                <div
                  role="alert"
                  className="flex items-start gap-2.5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm font-medium"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full sm:w-auto px-10 py-4 rounded-xl text-base font-bold shadow-lg shadow-gold/20 flex items-center justify-center gap-3 disabled:opacity-70 transition-all cursor-pointer"
                >
                  <Send className="w-5 h-5 text-navy-950" />
                  <span>{isSubmitting ? "Submitting..." : "Submit"}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
