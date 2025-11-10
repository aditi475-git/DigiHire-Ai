"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";
import { Rocket, Eye, Heart } from "lucide-react";
import Link from "next/link";

export default function AboutUs() {
  // ✅ Calendly popup state
  const [showCalendly, setShowCalendly] = useState(false);

  // ✅ Open Calendly popup
  const handleBookDemo = (e) => {
    e.preventDefault(); // Prevent default navigation
    setShowCalendly(true);
  };

  // ✅ Close Calendly popup
  const closeCalendlyPopup = () => {
    setShowCalendly(false);
  };
  return (
    <>
      {/*  Navbar */}
      <Navbar />

      {/*  Hero Section */}
      {/* <section
  className="bg-[#0A0E2E] text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 text-center md:text-left"
> */}
  {/* Left Text Content */}
  {/* <div className="max-w-xl mx-auto md:mx-0 md:w-1/2">
    <h1 className="text-2xl md:text-2xl font-bold mb-6 leading-tight">
      Empowering the Future of Hiring with Intelligence, Fairness, and Trust.
    </h1>
    <p className="text-black-300 text-base md:text-lg mb-8">
      At DigiHire, we believe hiring is more than a process — it’s a decision
      that shapes the future of every organization. Our mission is to make
      those decisions faster, smarter, and more human through technology.
    </p> */}

    {/* CTA Buttons */}
    {/* <div className="flex justify-center md:justify-start flex-wrap gap-4">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition">
        Explore Our Platform
      </button>
      <button className="bg-transparent border border-gray-400 hover:border-white text-white px-6 py-3 rounded-lg font-medium transition">
        Partner With Us
      </button>
    </div>
  </div> */}

  {/* 🌍 Rotating Earth GIF */}
  {/* <div className="relative flex justify-center md:justify-end w-full md:w-1/2 mt-12 md:mt-0">
    <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
      <img
        src="/rotating_earth1.gif"
        alt="Rotating Earth"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</section> */}



      {/*  Section 2: Our Story */}
      <section className="bg-gray-100 py-10 px-6 md:px-20 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-2xl font-bold mb-6 text-black-900">
            From Vision to Innovation — The DigiHire Journey
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            DigiHire was conceptualized by <span className="font-semibold">DigiHelic Solutions Pvt. Ltd.</span> in Pune, India —
            a company known for its expertise in enterprise automation and cloud solutions.
            <br /><br />
            With the rapid rise of AI and global hiring challenges, our founders envisioned a platform
            that combines intelligence with empathy — creating a digital bridge between recruiters and candidates.
            <br /><br />
            Today, DigiHire stands as a next-generation AI recruitment and video interview platform trusted
            by organizations across industries and continents.
          </p>
        </div>
      </section>

      {/*  Section 3: Our Mission, Vision & Values */}
      <section className="bg-blue-100 py-10 px-6 md:px-20 text-center">
        <h2 className="text-2xl md:text-2xl font-bold mb-6 text-black-900">
          Our Mission, Vision & Values
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Rocket className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Mission</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              To revolutionize hiring through automation that saves time, improves accuracy, and promotes fairness — enabling organizations to focus on people, not paperwork.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Vision</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become the world’s most trusted AI-powered hiring platform — where technology and human insight work together to make recruitment transparent, inclusive, and intelligent.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 flex flex-col items-center text-center hover:shadow-xl transition">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Heart className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold mb-3">Core Values</h4>
            <ul className="text-black-600 text-sm leading-relaxed space-y-2 text-left">
              <li>🤝 <span className="font-semibold">Integrity:</span> Every evaluation is honest, transparent, and data-driven.</li>
              <li>💡 <span className="font-semibold">Innovation:</span> Constantly evolving to meet tomorrow’s recruitment challenges.</li>
              <li>🌍 <span className="font-semibold">Inclusivity:</span> Fair and bias-free hiring for every candidate, everywhere.</li>
              <li>⚙️ <span className="font-semibold">Impact:</span> Deliver measurable improvement to how organizations hire.</li>
            </ul>
          </div>
        </div>
      </section>

     

  
    
{/* Section 4: Our Parent Company */}
<section className="bg-white py-12 px-6 md:px-20">
  <h2 className="text-2xl md:text-2xl font-bold mb-12 text-center text-black-900">
    A Legacy of Technology Excellence
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* 🩵 Left Column: Logo + Text */}
    <div className="flex flex-col justify-center items-start space-y-6">
      <Image
        src="/DigiHelic Logo.png"
        alt="DigiHelic Logo"
        width={220}
        height={90}
        className="mb-4"
      />

      <p className="text-gray-800 text-base md:text-lg leading-relaxed">
        DigiHire is proudly built by{" "}
        <span className="font-semibold">DigiHelic Solutions Pvt. Ltd.</span>, 
        a premier IT and automation firm incorporated in 2019.
        <br /><br />
        With expertise in <strong>SAP</strong>, <strong>Oracle</strong>,{" "}
        <strong>Salesforce</strong> and enterprise mobility solutions, 
        DigiHelic serves clients worldwide — combining experience with innovation.
      </p>

      <ul className="text-gray-800 text-sm md:text-base space-y-2">
        <li>SAP Silver Certified Partner</li>
        <li>Oracle Certified Partner</li>
        <li>
          Experts in Cloud, Citrix, MongoDB, PostgreSQL, React.js, .NET, Node.js,
          Next.js, VMware, Java & AI technologies powering intelligent hiring solutions.
        </li>
        <li>Global presence across India, UAE & USA</li>
      </ul>

      <p className="text-gray-600 text-sm mt-4">
        Our strong technology foundation ensures DigiHire meets enterprise standards
        for reliability, scalability, and support.
      </p>

     <button
  onClick={() => window.open("https://digihelic.com/", "_blank")}
   className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
  Visit DigiHelic.com
</button>


    </div>

    {/* 🩵 Right Column: Partner Logos */}
    <div className="flex flex-col justify-center items-center space-y-14">
      {/* ✅ Row 1 — 3 icons centered */}
      <div className="flex justify-center items-center gap-20">
        <div className="flex flex-col items-center">
          <Image src="/SAP.png" alt="SAP" width={130} height={60} className="drop-shadow-md" />
        </div>

        <div className="flex flex-col items-center">
          <Image src="/Oracal Logo.png" alt="Oracle" width={130} height={60} className="drop-shadow-md" />
        </div>

        <div className="flex flex-col items-center">
          <Image src="/Salesforce.png" alt="Salesforce" width={130} height={60} className="drop-shadow-md" />
        </div>
      </div>

      {/* ✅ Row 2 — 2 icons centered */}
      <div className="flex justify-center items-center gap-20">
       

        <div className="flex flex-col items-center">
          <Image src="/ServiceNow.png" alt="ServiceNow" width={130} height={60} className="drop-shadow-md" />
        </div>

         <div className="flex flex-col items-center">
          <Image src="/Technology.png" alt="Technology" width={200} height={110} className="drop-shadow-md" />
        </div>

      </div>
    </div>
  </div>
</section>



      {/*  Section 5 : Global Presence */}
     <section className="bg-blue-100 text-center py-10 px-6 md:px-20">
  <h2 className="text-2xl md:text-2xl font-bold mb-6 text-blue-900">
    Connecting Talent Across Continents
  </h2>

  <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto mb-8">
    From our headquarters in Pune to partnerships in North America and the Middle East, DigiHire empowers companies across time zones and industries.
    <br />
    Our distributed team and multi-region data centers ensure accessibility, security, and seamless collaboration.
  </p>

  {/* Map with glowing points */}
  <div className="relative w-full max-w-2xl mx-auto h-[400px] mb-4">
    <Image
      src="/WorldMap.png"
      alt="World Map"
      fill
      className="object-contain"
    />

    {/* Headquarters: Pune, India */}
    <div className="absolute top-[52%] left-[60%] text-gray-800">
      <svg
        className="w-6 h-6 text-red-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
      </svg>
      <span className="text-sm block mt-1">Pune, India</span>
    </div>

    {/* Regional Offices: UAE */}
    <div className="absolute top-[35%] left-[64%] text-gray-800">
      <svg
        className="w-6 h-6 text-yellow-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
      </svg>
      <span className="text-sm block mt-1">UAE</span>
    </div>

    {/* Partner Network: USA */}
    <div className="absolute top-[34%] left-[29%] text-gray-800">
      <svg
        className="w-6 h-6 text-blue-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
      </svg>
      <span className="text-sm block mt-1">USA</span>
    </div>
  </div>

  {/* CTA */}
  <div className="flex justify-center">
   <Link href="/partners">
      <button
        className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap mt-10 mx-auto"
      >
        Partner With Us
      </button>
    </Link>
  </div>
</section>


  {/*  Section 7: What Our Clients Say (Testimonials) */}
<section className="bg-white py-10 px-6 md:px-20 text-center">
  <h2 className="text-2xl md:text-2xl font-bold mb-6 text-black-900">

    Voices of Trust
  </h2>

  {/* Testimonials Wrapper */}
  <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
    {/* Testimonial 1 */}
    <div className="flex-none w-80 bg-white rounded-2xl shadow-md p-8 text-left">
      <p className="text-gray-700 text-sm mb-4">
        “DigiHire’s automation simplified our global hiring across four countries — and reduced screening time drastically.”
      </p>
      <p className="text-black-900 font-semibold text-sm">
        — HR Director, Enterprise Tech Firm
      </p>
    </div>

    {/* Testimonial 2 */}
    <div className="flex-none w-80 bg-white rounded-2xl shadow-md p-8 text-left">
      <p className="text-black-700 text-sm mb-4">
        “The fairness and accuracy of DigiHire’s AI evaluation truly impressed our leadership team.”
      </p>
      <p className="text-black-900 font-semibold text-sm">
        — Talent Acquisition Head, Consulting Group
      </p>
    </div>

    {/* Testimonial 3 */}
    <div className="flex-none w-80 bg-white rounded-2xl shadow-md p-8 text-left">
      <p className="text-black-700 text-sm mb-4">
        “Partnering with DigiHelic has been seamless; DigiHire delivers both technology and human understanding.”
      </p>
      <p className="text-black-900 font-semibold text-sm">
        — HR Lead, Manufacturing Company
      </p>
    </div>
  </div>

  {/* CTA */}
  <div className="mt-12 flex justify-center">
    <button className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
  See More Success Stories
</button>

  </div>
</section>


      {/*  Section 9: Final CTA Banner */}
      <section className="bg-blue-100 py-10 px-6 md:px-20 text-center text-black-600">
       <h2 className="text-2xl md:text-2xl font-bold mb-6 text-black-900">

          Building Tomorrow’s Hiring Experience — Today
        </h2>
        <p className="text-black-700 text-base md:text-lg mb-8 max-w-3xl mx-auto">
          Join DigiHire on its mission to make global hiring more intelligent, inclusive, and transparent.
        </p>
        <div className="flex justify-center">
<div className="relative flex flex-col items-center">
      {/* Book Demo link */}
      <a
        href="https://calendly.com/hr-digihireai/30min"
        onClick={handleBookDemo} // ✅ opens popup
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
      >
        Book Demo
      </a>

      {/* ✅ Calendly popup modal */}
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
    </div>


</div>
      </section>


      <section>
        <FooterSection /> 
      </section>

    </>
  );
}
