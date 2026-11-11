import React from "react";

export default function ContactMap() {
  return (
    <section className="w-full h-[400px] sm:h-[480px] lg:h-[520px] relative bg-gray-100 border-t border-b border-gray-200">
      <iframe
        title="Stress Free Move Limited Office Location"
        src="https://maps.google.com/maps?q=66%20Stanley%20Road,%20Croydon,%20CR0%203QA,%20United%20Kingdom&t=m&z=15&output=embed&iwloc=near"
        className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
