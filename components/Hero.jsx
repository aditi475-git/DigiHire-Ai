"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [hovered, setHovered] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  // ✅ Open Calendly popup
  const handleBookDemo = (e) => {
    e.preventDefault(); // prevent default behavior
    setShowCalendly(true);
  };

  // ✅ Close Calendly popup
  const closeCalendlyPopup = () => {
    setShowCalendly(false);
  };

  return (
    <>
      {/* 🌍 Section 1 — Empowering Future of Hiring */}
      <section className="h-[400px] bg-[#0A0E2E] text-white py-10 md:py-2 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 text-center md:text-left">
        {/* Left Text Content */}
        <div className="max-w-xl mx-auto md:mx-0 md:w-1/2">
          <h1 className="text-2xl md:text-2xl font-bold mb-6 leading-tight font-heading">
            Empowering the Future of Hiring with Intelligence, Fairness, and Trust.
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-8 font-body">
            At DigiHire, we believe hiring is more than a process — it’s a decision
            that shapes the future of every organization. Our mission is to make
            those decisions faster, smarter, and more human through technology.
          </p>

          {/* ✅ Button Group */}
          <div className="flex justify-center md:justify-start flex-wrap gap-4 relative z-10">
            {/* Start Free Trial Button */}
            <button
              className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body focus:outline-none focus:ring-0 w-[200px] h-[52px]"
            >
              Start Free Trial
            </button>

            {/* Book Demo Button */}
            <div className="relative flex flex-col items-center">
              <button
                className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px]"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={handleBookDemo} // ✅ opens popup
              >
                Book Demo
                <span
                  className={`transition-all duration-300 ease-in-out ${
                    hovered ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {showCalendly && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl shadow-xl w-[90%] md:w-[800px] h-[90%] relative overflow-hidden">
              {/* Close button */}
              <button
                onClick={closeCalendlyPopup}
                className="absolute top-3 right-3 text-gray-700 hover:text-black text-2xl font-bold z-10"
              >
                ×
              </button>

              {/* Calendly iframe */}
              <iframe
                src="https://calendly.com/hr-digihireai/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                className="w-full h-full border-0 rounded-2xl"
                title="Book a Demo"
              ></iframe>
            </div>
          </div>
        )}

        {/* 🌍 Rotating Earth GIF */}
        <div className="relative flex justify-center md:justify-end w-full md:w-1/2 mt-12 md:mt-0">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px]">
            <img
              src="/rotating_earth.gif"
              alt="Rotating Earth"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* 🌟 Section 2 — AI Video Interview Section */}
      <section className="relative py-10 md:py-10 bg-white text-black overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
          {/* Left Side — Image */}
          <div className="flex-1 relative w-full h-[220px] md:h-[450px]">
            <Image
              src="/hero image .png"
              alt="Hero Image"
              className="rounded-lg object-cover"
              fill
            />
          </div>

          {/* Right Side — Text Content */}
          <div className="flex-1 text-center lg:text-left relative z-10">
            <h1 className="text-2xl font-semibold mb-4 relative z-10 whitespace-nowrap font-heading">
              Hire Smarter. Hire Faster. With AI Video Interviews.
            </h1>

            <p className="text-xl mb-4 italic relative z-10 font-body">
              Interview More Candidates in No Time – Go Beyond Resumes with DigiHire AI.
            </p>

            <p className="text-lg max-w-2xl mb-8 relative z-10 font-light font-body">
              With DigiHire's video interview platform, quickly screen, compare, and select the best candidates within days.
            </p>

            {/* ✅ Unified Button Group */}
            <div className="flex justify-center flex-wrap gap-10 relative z-10">
              {/* Explore Our Platform Button */}
              <button className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body w-[200px] h-[52px] whitespace-nowrap">
                <Link href="/Platform" className="w-full h-full flex items-center justify-center">
                  Explore Our Platform
                </Link>
              </button>

              {/* Partner With Us Button */}
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition font-body w-[200px] h-[52px] whitespace-nowrap">
                <Link href="/partners" className="w-full h-full flex items-center justify-center">
                  Partner With Us
                </Link>
              </button>
            </div>

            {/* ✅ Performance Stats Section */}
            <div className="mt-16 grid grid-cols-3 gap-6 max-w-3xl text-center relative z-10">
              <div>
                <h3 className="text-3xl font-bold text-blue-900 font-heading">10x</h3>
                <p className="text-gray-600 mt-1 text-sm font-body">Faster Hiring</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-900 font-heading">50%</h3>
                <p className="text-gray-600 mt-1 text-sm font-body">Improved Efficiency</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-900 font-heading">90%</h3>
                <p className="text-gray-600 mt-1 text-sm font-body">Accurate Matches</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
