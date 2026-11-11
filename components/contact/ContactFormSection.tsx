"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Send, CheckCircle2, Calendar, MapPin, User, Mail, Phone, FileText } from "lucide-react";
import { serviceOptions } from "@/components/QuoteForm";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    service: "House Removals",
    pickupPostcode: "",
    dropoffPostcode: "",
    moveDate: "",
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [minDate, setMinDate] = useState<string>("");

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FDFBF5] relative overflow-hidden" id="contact-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 lg:p-12 rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-[#C7A567]" />
                <span className="text-[#C7A567] text-xs sm:text-sm font-bold uppercase tracking-wider">
                  Get in Touch
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#121F36] tracking-tight mb-6">
                Send us a Message
              </h2>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#121F36]">Thank you!</h3>
                  <p className="text-[#4A5568] max-w-md mx-auto text-base">
                    Your enquiry has been received. Our moving coordination team will review your details and contact you shortly with a personalized quote.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        service: "House Removals",
                        pickupPostcode: "",
                        dropoffPostcode: "",
                        moveDate: "",
                        fullName: "",
                        email: "",
                        phone: "",
                        notes: "",
                      });
                    }}
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#121F36] text-white text-sm font-semibold hover:bg-[#C7A567] transition-colors shadow-sm"
                  >
                    Submit Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Service Type Select */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#121F36] mb-1.5">
                      Select Service Type *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#121F36] font-medium text-sm sm:text-base focus:border-[#C7A567] focus:ring-2 focus:ring-[#C7A567]/20 outline-none transition-all cursor-pointer shadow-sm"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Pickup & Dropoff Postcodes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#121F36] mb-1.5">
                        Pick up *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C7A567]" />
                        <input
                          type="text"
                          name="pickupPostcode"
                          value={formData.pickupPostcode}
                          onChange={handleChange}
                          required
                          placeholder="e.g. CR0 3QA"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-[#121F36] placeholder-gray-400 font-medium text-sm sm:text-base focus:border-[#C7A567] focus:ring-2 focus:ring-[#C7A567]/20 outline-none transition-all shadow-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#121F36] mb-1.5">
                        Drop off *
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C7A567]" />
                        <input
                          type="text"
                          name="dropoffPostcode"
                          value={formData.dropoffPostcode}
                          onChange={handleChange}
                          required
                          placeholder="e.g. SW1A 1AA"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-[#121F36] placeholder-gray-400 font-medium text-sm sm:text-base focus:border-[#C7A567] focus:ring-2 focus:ring-[#C7A567]/20 outline-none transition-all shadow-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Moving Date */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#121F36] mb-1.5">
                      Moving Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C7A567]" />
                      <input
                        type="date"
                        name="moveDate"
                        value={formData.moveDate}
                        onChange={handleChange}
                        min={minDate}
                        required
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-[#121F36] font-medium text-sm sm:text-base focus:border-[#C7A567] focus:ring-2 focus:ring-[#C7A567]/20 outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#121F36] mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C7A567]" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-[#121F36] placeholder-gray-400 font-medium text-sm sm:text-base focus:border-[#C7A567] focus:ring-2 focus:ring-[#C7A567]/20 outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#121F36] mb-1.5">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C7A567]" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-[#121F36] placeholder-gray-400 font-medium text-sm sm:text-base focus:border-[#C7A567] focus:ring-2 focus:ring-[#C7A567]/20 outline-none transition-all shadow-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#121F36] mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C7A567]" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="07123 456789"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-[#121F36] placeholder-gray-400 font-medium text-sm sm:text-base focus:border-[#C7A567] focus:ring-2 focus:ring-[#C7A567]/20 outline-none transition-all shadow-sm"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#121F36] mb-1.5">
                      Additional Notes
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-[#C7A567]" />
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={3}
                        placeholder="List of items, Assembly Service, Packing Service, Packing Materials..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-[#121F36] placeholder-gray-400 font-medium text-sm sm:text-base focus:border-[#C7A567] focus:ring-2 focus:ring-[#C7A567]/20 outline-none transition-all shadow-sm resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#121F36] text-white font-bold text-base shadow-lg hover:bg-[#C7A567] hover:shadow-xl transition-all duration-300 disabled:opacity-75 group"
                    >
                      <Send className="w-4 h-4 text-[#C7A567] group-hover:text-white transition-colors duration-200" />
                      <span>{isSubmitting ? "Sending Message..." : "Submit"}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Featured Image */}
          <div className="lg:col-span-5 h-full">
            <div className="relative h-[450px] sm:h-[550px] lg:h-full min-h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/pexels-mart-production-7414950.jpg"
                alt="Friendly Moving Specialists Assisting with Relocation"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1726]/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10">
                <p className="text-xs uppercase tracking-widest text-[#C7A567] font-bold mb-1">
                  Dedicated Support
                </p>
                <p className="text-sm font-semibold leading-snug">
                  Personal moving advisors ready to assist with single items, whole home moves, and commercial relocations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
