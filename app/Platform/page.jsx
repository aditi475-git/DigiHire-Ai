"use client";

import Image from "next/image";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";
import { Brain, BarChart3, Shield, CheckCircle, Globe, Lock } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function PlatformOverviewPage() {
  const [showCalendly, setShowCalendly] = useState(false); // ✅ popup state

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
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

{/* Desktop Section */}
<section className="hidden md:flex h-[400px] flex-row items-center justify-between px-6 md:px-20 py-10 
bg-gradient-to-r from-[#4A1FD1] to-[#766CF0] text-white">

  {/* Left - Image */}
  <div className="flex-1 mt-10 md:mt-0 flex justify-center order-2 md:order-1">
    <img
      src="/Platform image.png"
      alt="AI Core"
      className="w-full max-w-md mix-blend-screen opacity-95 drop-shadow-[0_0_40px_rgba(100,0,255,0.5)]"
    />
  </div>

  {/* Right - Text */}
  <div className="flex-1 max-w-3xl space-y-6 order-1 md:order-2">
    <h1 className="text-3xl md:text-2xl font-bold leading-tight">
      Your Intelligent Recruitment Platform — Built for Global-Scale Hiring.
    </h1>
    <p className="text-base md:text-lg text-gray-200">
      DigiHire combines artificial intelligence, data-driven insights, and enterprise security
      to transform how organizations hire talent — anywhere in the world.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <button
        className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body focus:outline-none focus:ring-0 w-[200px] h-[52px] whitespace-nowrap"
      >
        See Platform Demo
      </button>
      <button className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[250px] h-[52px] whitespace-nowrap"
      >
        Request Enterprise Access
      </button>
    </div>
  </div>
</section>

{/* Mobile Section */}
<section className="flex md:hidden flex-col items-center justify-between px-6 py-10 bg-gradient-to-r from-[#4A1FD1] to-[#766CF0] text-white">

  {/* Image first on mobile */}
  <div className="w-full flex justify-center mb-8">
    <img
      src="/Platform image.png"
      alt="AI Core"
      className="w-full max-w-md mix-blend-screen opacity-95 drop-shadow-[0_0_40px_rgba(100,0,255,0.5)]"
    />
  </div>

  {/* Text second on mobile */}
  <div className="w-full space-y-6 text-center">
    <h1 className="text-2xl font-bold leading-tight">
      Your Intelligent Recruitment Platform — Built for Global-Scale Hiring.
    </h1>
    <p className="text-base text-gray-200 leading-relaxed">
      DigiHire combines artificial intelligence, data-driven insights, and enterprise security
      to transform how organizations hire talent — anywhere in the world.
    </p>

    {/* CTA Buttons stacked on mobile */}
    <div className="flex flex-col gap-4 pt-6 items-center justify-center">
     <button
  className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body focus:outline-none focus:ring-0 w-[240px] h-[52px] flex items-center justify-center text-center"
>
  See Platform Demo
</button>

      <button className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[250px] h-[52px] whitespace-normal text-center"
      >
        Request Enterprise Access
      </button>
    </div>
  </div>
</section>



{/* ✅ Section 2: Overview */}
<section className="bg-white py-10 px-6 md:px-20 text-center flex flex-col items-center justify-center">
  <div className="max-w-5xl">
    <h2 className="text-2xl md:text-2xl font-bold mb-10 text-gray-900">
      All-in-One Platform for Smarter, Faster, Fairer Hiring.
    </h2>

    {/* 3-column grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
      <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
        <div className="flex justify-center mb-4">
          <Brain size={48} className="text-blue-600" />
        </div>
        <h3 className="text-xl font-semibold mb-3">AI Interview Engine</h3>
        <p className="text-gray-600">
          Automate candidate interviews with intelligent video assessments.
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
        <div className="flex justify-center mb-4">
          <BarChart3 size={48} className="text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Analytics Dashboard</h3>
        <p className="text-gray-600">
          Evaluate candidates and monitor hiring performance in real time.
        </p>
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
        <div className="flex justify-center mb-4">
          <Shield size={48} className="text-blue-700" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Enterprise Security</h3>
        <p className="text-gray-600">
          Protect every candidate and recruiter interaction with global compliance.
        </p>
      </div>
    </div>

  <div className="flex justify-center items-center w-full">
  <a
    href="/Features"
    className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
    Explore Features
  </a>
</div>


  </div>
</section>

      {/* Section 3: AI Interview Engine */}
      <section className="bg-blue-100 py-10 px-6 md:px-20 flex flex-col items-center text-center">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-2xl md:text-2xl font-bold text-gray-900">
            AI That Understands People — Not Just Data.
          </h2>

          <p className="text-gray-700 text-base md:text-lg">
            Our AI Interview Engine evaluates every candidate’s response using advanced Natural
            Language Processing (NLP) and Behavioral Signal Analysis. It measures clarity,
            confidence, tone, and skill relevance — giving you unbiased, intelligent insights.
          </p>

          <ul className="space-y-2 text-gray-800 text-left inline-block">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600" size={20} /> AI-led question delivery
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600" size={20} /> NLP-based sentiment & accuracy detection
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600" size={20} /> Role-based scoring templates
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-blue-600" size={20} /> Adaptive difficulty logic
            </li>
          </ul>

          <p className="text-gray-600">
            Focus on top performers while DigiHire handles the screening complexity.
          </p>
<div className="flex justify-center items-center w-full">
          <button className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
  See AI Engine Demo
</button>
</div>

        </div>
      </section>

      {/* Section 4: Analytics & Insights */}
      <section className="bg-white text-black py-10 px-6 md:px-20 flex flex-col items-center justify-center text-center gap-10">
        <div className="md:w-3/4 lg:w-2/3 space-y-6">
          <h2 className="text-2xl md:text-2xl font-bold text-black-400">
            Turn Hiring Data into Actionable Insights.
          </h2>
          <p className="text-black-300 text-base md:text-lg">
            The DigiHire Analytics Dashboard centralizes every hiring metric: interview data, recruiter efficiency, candidate success rates, and more.
Our intelligent dashboards turn raw numbers into decisions that matter.

          </p>

          <ul className="space-y-2 text-black-200">
            <li>• Candidate conversion rates</li>
            <li>• Interview completion timelines</li>
            <li>• Skill distribution by region</li>
            <li>• Recruiter productivity</li>
          </ul>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 mx-auto w-fit text-left">
  <div className="flex items-center justify-start gap-2">
    <CheckCircle className="text-cyan-400" size={20} /> Visual data dashboards
  </div>
  <div className="flex items-center justify-start gap-2">
    <CheckCircle className="text-cyan-400" size={20} /> Custom analytics filters
  </div>
  <div className="flex items-center justify-start gap-2">
    <CheckCircle className="text-cyan-400" size={20} /> Exportable reports
  </div>
  <div className="flex items-center justify-start gap-2">
    <CheckCircle className="text-cyan-400" size={20} /> Real-time performance tracking
  </div>
</div>


          <div className="flex justify-center">
  <button className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
    Explore Analytics
  </button>
</div>

        </div>
      </section>

      {/* ✅ Section 5: Seamless Integrations */}
      <section className="bg-blau-100 py-10 px-6 md:px-20 text-center">
        <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6">
          Integrate Effortlessly with Your Existing Systems.
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-10">
          DigiHire integrates natively with leading ATS, HRMS, and CRM tools, making implementation fast and seamless.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 mb-8">
  <Image
    src="/Platform  SAP Logo.png"
    alt="SAP"
    width={90}
    height={90}
    className="object-contain"
  />
  <Image
    src="/Platform Oracal Logo.png"
    alt="Oracle"
    width={110}
    height={90}
    className="object-contain"
  />
  <Image
    src="/Salesforce.png"
    alt="Salesforce"
    width={100}
    height={80}
    className="object-contain"
  />
</div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-800 mb-8">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="text-blue-600" size={20} /> REST APIs & Webhooks
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="text-blue-600" size={20} /> Single Sign-On (SSO)
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="text-blue-600" size={20} /> Two-way Data Sync
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="text-blue-600" size={20} /> Plug-and-Play Connectors
          </div>
        </div>
<div className="flex justify-center items-center w-full">
        <button className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
  View Integration Docs
</button>
</div>
      </section>

      {/* ✅ Section 6: Architecture & Scalability */}
      <section className="bg-white py-10 px-6 md:px-20 text-center flex flex-col items-center justify-center ">
        <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6">
          Enterprise Architecture Built for Scalability.
        </h2>
        <p className="text-gray-700 max-w-3xl text-center mb-10">
          DigiHire is designed with a modular, cloud-native architecture that scales as your hiring grows.
        </p>
        <ul className="space-y-2 text-gray-800 text-left inline-block mb-10">
          <li>• Cloud-native infrastructure (AWS & Azure)</li>
          <li>• Microservices architecture for reliability</li>
          <li>• Multi-tenant data isolation</li>
          <li>• 99.9% uptime </li>
          <li>• API-first design</li>
        </ul>
        <button className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
  See Platform Diagram
</button>

      </section>

      {/* 🌍 Section 7: Global Accessibility & Multi-language Support */}
      <section className="bg-blue-100 py-10 px-6 md:px-20 text-center flex flex-col items-center justify-center">
  <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-6">Global by Design.</h2>
  <p className="text-gray-700 max-w-3xl mb-8">
    DigiHire enables distributed hiring teams to operate seamlessly across time zones and languages.
    The platform auto-adjusts for candidate location, ensuring consistent experience worldwide.
  </p>

  <ul className="space-y-2 text-gray-800 text-left inline-block mb-10">
    <li className="flex items-center gap-2">
      <CheckCircle2 className="text-blue-600 w-5 h-5" />
      Multi-language UI
    </li>
    <li className="flex items-center gap-2">
      <CheckCircle2 className="text-blue-600 w-5 h-5" />
      Timezone auto-sync
    </li>
    <li className="flex items-center gap-2">
      <CheckCircle2 className="text-blue-600 w-5 h-5" />
      24/7 cloud availability
    </li>
    <li className="flex items-center gap-2">
      <CheckCircle2 className="text-blue-600 w-5 h-5" />
      Regional data centers in India, UAE, US, and EU
    </li>
  </ul>

  <button className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
    See Regional Availability
  </button>
</section>
     


      {/*  Section 9: Customization & Control */}
     <section className="bg-white py-10 px-6 md:px-20 text-center">
  <h2 className="text-2xl md:text-2xl font-bold text-black-900 mb-6">Make DigiHire Yours.</h2>
  <p className="text-black-800 max-w-3xl mx-auto mb-10">
    Every organization is unique. DigiHire allows you to customize workflows, dashboards, and branding —
    creating a platform that truly fits your process.
  </p>

  <div className="overflow-x-auto">
    <table className="min-w-[600px] mx-auto border border-blue-300 text-left shadow-lg">
      <thead className="bg-black-200">
        <tr>
          <th className="p-3 border-b border-blue-300 text-black-900 font-semibold">Feature</th>
          <th className="p-3 border-b bordeblackue-300 text-black-900 font-semibold text-center">Standard</th>
          <th className="p-3 border-b border-blue-300 text-black-900 font-semibold text-center">Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white hover:bg-blue-50 transition">
          <td className="p-3 border-b border-blue-200 text-black-800">Custom Interview Templates</td>
          <td className="p-3 border-b border-blue-200 text-center">✅</td>
          <td className="p-3 border-b border-blue-200 text-center">✅</td>
        </tr>
        <tr className="bg-blue-50 hover:bg-blue-100 transition">
          <td className="p-3 border-b border-blue-200 text-black-800">White-label Branding</td>
          <td className="p-3 border-b border-blue-200 text-center">❌</td>
          <td className="p-3 border-b border-blue-200 text-center">✅</td>
        </tr>
        <tr className="bg-white hover:bg-blue-50 transition">
          <td className="p-3 border-b border-blue-200 text-black-800">API Integration</td>
          <td className="p-3 border-b border-blue-200 text-center">✅</td>
          <td className="p-3 border-b border-blue-200 text-center">✅</td>
        </tr>
        <tr className="bg-blue-50 hover:bg-blue-100 transition">
          <td className="p-3 border-b border-blue-200 text-black-800">Custom Reports</td>
          <td className="p-3 border-b border-blue-200 text-center">❌</td>
          <td className="p-3 border-b border-blue-200 text-center">✅</td>
        </tr>
        <tr className="bg-white hover:bg-blue-50 transition">
          <td className="p-3 border-b border-blue-200 text-black-800">Dedicated Account Manager</td>
          <td className="p-3 border-b border-blue-200 text-center">❌</td>
          <td className="p-3 border-b border-blue-200 text-center">✅</td>
        </tr>
      </tbody>
    </table>
  </div>

  <button className="mt-8 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-10 py-4 rounded-full shadow-md transition min-w-[200px]">
  Talk to Sales for Custom Setup
</button>

</section>

       {/* Section 10: Testimonials & Case Studies */}
      <section className="bg-blue-100 py-10 px-6 md:px-20 text-center">
        <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-10">
          Trusted by Teams Across Industries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
            <p className="text-gray-700 italic mb-4">
              “DigiHire’s AI analytics completely changed how we shortlist talent. It’s efficient, fair, and surprisingly accurate.”
            </p>
            <h4 className="font-semibold text-blue-700">Recruitment Lead</h4>
            <p className="text-gray-500 text-sm">IT Services Company</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
            <p className="text-gray-700 italic mb-4">
              “We integrated DigiHire with our SAP HR system within days — zero downtime.”
            </p>
            <h4 className="font-semibold text-blue-700">HR Manager</h4>
            <p className="text-gray-500 text-sm">Global Manufacturing Firm</p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-lg transition">
            <p className="text-gray-700 italic mb-4">
              “Analytics dashboard helped us measure recruiter efficiency for the first time.”
            </p>
            <h4 className="font-semibold text-blue-700">Talent Director</h4>
            <p className="text-gray-500 text-sm">Consulting Agency</p>
          </div>
        </div>
<div className="flex justify-center items-center w-full">
       <button className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
  See All Success Stories
</button>
</div>

      </section>

      {/*  Section 11: Final CTA — Platform Demo Invite */}
      <section className="bg-white text-black text-center py-10 px-6 md:px-20">
        <h2 className="text-2xl md:text-2xl font-bold mb-4">
          Experience the Power of DigiHire’s Platform.
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-black">
          See how AI and automation can simplify your recruitment workflow.
          Request a personalized demo today and explore enterprise features built for the future of hiring.
        </p>

<div className="flex flex-wrap justify-center gap-6">
           <button
  className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body focus:outline-none focus:ring-0 w-[200px] h-[52px]"
>
  Start Free Trial
</button>
           <div className="relative flex flex-col items-center">
      <a
        href="https://calendly.com/hr-digihireai/30min"
        onClick={handleBookDemo} // ✅ open popup instead of new tab
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

      {/* Footer */}
      <FooterSection />
    </div>
  );
}