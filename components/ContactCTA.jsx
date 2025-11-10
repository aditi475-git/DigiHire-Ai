"use client";

import { useState } from "react";

export default function ContactCTA() {
  const [showCalendly, setShowCalendly] = useState(false);

  const openCalendlyPopup = (e) => {
    e.preventDefault();
    setShowCalendly(true);
  };

  const closeCalendlyPopup = () => {
    setShowCalendly(false);
  };

  return (
    <section className="bg-white-100 py-12 relative">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-heading font-bold text-black-800 mb-4">
          Let’s Build Your Smarter Hiring Future
        </h2>

        {/* Body */}
        <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
          Whether you’re a startup or an enterprise, DigiHire helps you make faster, fairer
          hiring decisions powered by AI. Let’s connect and transform the way you hire.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center items-center w-full">
          <a
            href="https://calendly.com/hr-digihireai/30min"
            onClick={openCalendlyPopup}
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center font-body w-[200px] h-[52px] text-center"
          >
            Book a Demo
          </a>
        </div>
      </div>

      {/* ✅ Calendly same-page popup */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-[90%] md:w-[800px] h-[90%] relative overflow-hidden">
            <button
              onClick={closeCalendlyPopup}
              className="absolute top-3 right-3 text-gray-700 hover:text-black text-2xl font-bold z-10"
            >
              ×
            </button>

            <iframe
              src="https://calendly.com/hr-digihireai/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              className="w-full h-full border-0 rounded-2xl"
              title="Book a Demo"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
