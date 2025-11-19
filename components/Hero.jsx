"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import CandidateCard from "./CandidateCard";
import { useSearchParams, useRouter } from "next/navigation";

export default function Hero() {
  const [hovered, setHovered] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  // Open Calendly
  const handleBookDemo = (e) => {
    e.preventDefault();
    setShowCalendly(true);
  };

  // Close Calendly
  const closeCalendlyPopup = () => {
    setShowCalendly(false);
  };

  // Profiles list
  const profiles = [
    
    {
      name: "HR Manager",
      role: "Human Resources",
      location: "📍 New York, NY",
      photo: "/HR Photo.png",
      video: "/video/HR.mp4",
    },
    {
      name: "Priya Sharma",
      role: "Backend Developer",
      location: "📍 New York, NY",
      photo: "/Backend Developer photo.png",
      video: "/video/Backend Developer.mp4",
    },
    {
      name: "John Doe",
      role: "IT Project Coordinator",
      location: "📍 Los Angeles, CA",
      photo: "/Digital Marketing.png",
      video: "/video/Digital Marketing.mp4",
    },
    {
      name: "Ananya Verma",
      role: "Data Scientist",
      location: "📍 Bengaluru, India",
      photo: "/Data Scientist Photo.png",
      video: "/video/Data Scientist.mp4",
    },
    {
      name: "Emily Jacobs",
      role: "UX Designer",
      location: "📍 Seattle, WA",
      photo: "/photo.png",
      video: "/video/UX designer.mp4",
    },
  ];

  // Auto-rotate every 8 sec
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % profiles.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const current = profiles[index];

  // Autoplay parameter support
  useEffect(() => {
    if (searchParams?.get("autoplay") === "true") {
      setTimeout(() => {
        const video = document.getElementById("heroVideo");
        if (video) video.play();
      }, 500);
    }
  }, [searchParams, router]);


  return (
    <>
      {/* 🌍 Section 1 — Empowering Future of Hiring */}
      <section
  className="
    bg-[#0A0E2E] text-white 
    h-auto md:h-[400px]        
    py-10 md:py-2
    flex flex-col md:flex-row
    items-center md:items-center
    justify-between
    px-6 md:px-16
    text-center md:text-left
    overflow-hidden
  "
>
  {/* VIDEO / CANDIDATE CARD (LEFT) */}
  <div
    className="
      w-full md:w-1/2 
      flex justify-center md:justify-start 
      order-1 md:order-none
      mb-10 md:mb-0
    "
  >
    {/* 🔵 Earth GIF (still hidden) */}
    <img src="/rotating_earth.gif" alt="Earth" className="hidden" />

    {/* 🔥 Candidate Card */}
    <div className="w-full flex justify-center mt-3">
      <div
        className="relative p-6 rounded-xl shadow-xl bg-white"
        style={{
          width: "420px",
          height: "320px",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute left-1/2 top-3 transform -translate-x-1/2 rounded-md shadow-lg p-3 bg-white"
          style={{
            width: "400px",
            height: "350px",
          }}
        >
          {/* VIDEO */}
          <video
            id="heroVideo"
            src={current.video}
            className="rounded-md shadow-md w-full h-[200px] object-cover"
            autoPlay
            muted
            loop
          />

          {/* BASIC INFO */}
          <div className="text-center mt-3">
            <h3 className="text-lg font-bold text-gray-900">{current.name}</h3>
            <p className="text-sm text-gray-700">{current.role}</p>
            <p className="text-sm mt-1 text-gray-800">{current.location}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* TEXT & BUTTONS (RIGHT) */}
  <div className="w-full md:w-1/2 order-2 md:order-none">
    <h1 className="text-2xl md:text-2xl font-bold mb-6 leading-tight font-heading">
      Empowering the Future of Hiring with Intelligence,
      Fairness, and Trust.
    </h1>

    <p className="text-gray-300 text-base md:text-lg mb-8 font-body">
      At DigiHire, we believe hiring is more than a process — 
      it’s a decision that shapes the future of every organization. 
      Our mission is to make those decisions faster, smarter, 
      and more human through technology.
    </p>

    {/* BUTTONS */}
    <div className="flex flex-col items-center md:items-start sm:flex-row justify-center md:justify-start gap-4">
      <button
        className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body w-[200px] h-[52px]"
      >
        Start Free Trial
      </button>

      <button
        className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 font-body w-[200px] h-[52px]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleBookDemo}
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

  {/* CALENDLY POPUP — UNCHANGED */}
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



      {/* 🌟 Section 2 — AI Video Interview Section */}
    <section className="relative h-auto lg:h-[400px] py-10 bg-white text-black overflow-hidden">
      {/* ====== DESKTOP SECTION ====== */}
      <div className="hidden lg:flex max-w-7xl mx-auto h-full flex-row items-center gap-8 px-10">

        {/* TEXT */}
        <div className="flex-1 h-full flex flex-col justify-center text-center lg:text-left relative z-20 order-1 lg:order-none">
          <h1 className="text-2xl sm:text-2xl font-semibold mb-3 leading-tight font-heading">
            Hire Smarter. Hire Faster. With AI Video Interviews.
          </h1>

          <p className="text-base sm:text-lg mb-3 italic font-body">
            Interview More Candidates in No Time – Go Beyond Resumes with DigiHire AI.
          </p>

          <p className="text-sm sm:text-base max-w-2xl mb-4 mx-auto lg:mx-0 font-light font-body">
            With DigiHire's video interview platform, quickly screen, compare, and select the best candidates within days.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mb-6">
            <button className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body w-[200px] h-[52px] whitespace-nowrap">
              <Link href="/Platform" className="w-full h-full flex items-center justify-center">
                Explore Our Platform
              </Link>
            </button>

            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition font-body w-[200px] h-[52px] whitespace-nowrap">
              <Link href="/partners" className="w-full h-full flex items-center justify-center">
                Partner With Us
              </Link>
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 font-heading">10x</h3>
              <p className="text-gray-600 mt-1 text-xs sm:text-sm font-body">Faster Hiring</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900 font-heading">50%</h3>
              <p className="text-gray-600 mt-1 text-xs sm:text-sm font-body">Improved Efficiency</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900 font-heading">90%</h3>
              <p className="text-gray-600 mt-1 text-xs sm:text-sm font-body">Accurate Matches</p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex-1 h-full relative w-full order-2 lg:order-none">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/hero image .png"
              alt="Hero Image"
              className="rounded-lg object-contain lg:object-cover"
              fill
            />
          </div>
        </div>
      </div>

      {/* ====== MOBILE SECTION ====== */}
      <div className="flex flex-col lg:hidden max-w-7xl mx-auto h-auto items-center gap-6 px-6">

        {/* IMAGE */}
        <div className="w-full relative h-[250px] rounded-lg overflow-hidden">
          <Image
            src="/hero image .png"
            alt="Hero Image"
            className="rounded-lg object-contain"
            fill
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col items-center text-center gap-3">
          <h1 className="text-2xl font-semibold leading-tight font-heading">
            Hire Smarter. Hire Faster. With AI Video Interviews.
          </h1>

          <p className="text-base italic font-body">
            Interview More Candidates in No Time – Go Beyond Resumes with DigiHire AI.
          </p>

          <p className="text-sm max-w-md font-light font-body">
            With DigiHire's video interview platform, quickly screen, compare, and select the best candidates within days.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4 mb-6">
            <button className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body w-[200px] h-[52px] whitespace-nowrap">
              <Link href="/Platform" className="w-full h-full flex items-center justify-center">
                Explore Our Platform
              </Link>
            </button>

            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition font-body w-[200px] h-[52px] whitespace-nowrap">
              <Link href="/partners" className="w-full h-full flex items-center justify-center">
                Partner With Us
              </Link>
            </button>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 font-heading">10x</h3>
              <p className="text-gray-600 mt-1 text-xs sm:text-sm font-body">Faster Hiring</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900 font-heading">50%</h3>
              <p className="text-gray-600 mt-1 text-xs sm:text-sm font-body">Improved Efficiency</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-900 font-heading">90%</h3>
              <p className="text-gray-600 mt-1 text-xs sm:text-sm font-body">Accurate Matches</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}
