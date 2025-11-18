"use client";

import Image from "next/image";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";
import { Settings, FileText, UserCheck, BarChart } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FeaturesPage() {
  const [showCalendly, setShowCalendly] = useState(false);

  const handleBookDemo = (e) => {
    e.preventDefault();
    setShowCalendly(true);
  };

  const closeCalendlyPopup = () => {
    setShowCalendly(false);
  };

  return (
    <>
      <Navbar />

      {/* Desktop Hero */}
      <section className="hidden md:flex h-[400px] flex-row items-center justify-between px-6 md:px-20 py-10 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-400 text-white">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-2xl font-extrabold leading-tight ">
            Powerful Features That Make Hiring Effortless.
          </h1>

          <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
            Simplify every stage of recruitment — from video screening to team
            collaboration — with DigiHire’s AI-powered platform designed for
            global-scale hiring.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <button className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition w-[200px] h-[52px] whitespace-nowrap">
              See DigiHire in Action
            </button>

            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition w-[200px] h-[52px]">
              Start Free Trial
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/Dashboard animation .png"
            alt="DigiHire Dashboard Illustration"
            width={400}
            height={200}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Mobile Hero */}
      <section className="flex md:hidden flex-col items-center px-6 py-10 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-400 text-white">
        <div className="w-full flex justify-center mb-10">
          <Image
            src="/Dashboard animation .png"
            alt="DigiHire Dashboard Illustration"
            width={400}
            height={200}
            className="rounded-2xl shadow-lg"
          />
        </div>

        <div className="w-full space-y-6">
          <h1 className="text-4xl font-extrabold leading-tight text-center">
            Powerful Features That Make Hiring Effortless.
          </h1>

          <p className="text-lg text-gray-100 leading-relaxed text-center">
            Simplify every stage of recruitment — from video screening to team
            collaboration — with DigiHire’s AI-powered platform designed for
            global-scale hiring.
          </p>

          <div className="flex flex-col gap-4 pt-6 items-center">
            <button className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition w-[260px] h-[52px]">
              See DigiHire in Action
            </button>

            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition w-[260px] h-[52px]">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-10 px-6 md:px-20 bg-white text-gray-800 text-center">
        <h2 className="text-3xl md:text-2xl font-bold mb-12 ">
          Why DigiHire Stands Out
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <FeatureCard
            icon={<img src="/AI-Powered Insights.png" className="w-16 h-16 mx-auto mb-4" />}
            title="AI-Powered Insights"
            text="Intelligent video analysis evaluates communication, confidence, and skill fit instantly."
          />

          <FeatureCard
            icon={<img src="/Speed Without Compromise.png" className="w-16 h-16 mx-auto mb-4" />}
            title="Speed Without Compromise"
            text="Screen and rank candidates 10× faster without sacrificing quality."
          />

          <FeatureCard
            icon={<img src="/Built for Global Hiring (2).png" className="w-27 h-20 mx-auto mb-4" />}
            title="Built for Global Hiring"
            text="Multi-language support, timezone flexibility, and enterprise-grade security."
          />
        </div>

        <Link
          href="/Platform"
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md w-[200px] h-[52px] inline-flex items-center justify-center whitespace-nowrap"
        >
          Explore the Platform
        </Link>
      </section>

      {/* Section 3 */}
      {/* DESKTOP SECTION — VISIBLE ONLY ON DESKTOP */}
<div className="hidden md:block">
  <TwoColumnSection
    bg="from-blue-100"
    img="/AI  image .png"
    alt="AI Video Interview Illustration"
    title={
      <span className="text-2xl md:text-2xl font-bold">
        AI Video Interviews — Assess Skills, Communication & Confidence.
      </span>
    }
    text="DigiHire enables candidates to record video interviews at their convenience."
    bullets={[
      <span key="1" className="flex items-center gap-2 text-gray-700">
        <CheckCircle2 className="text-blue-600 w-5 h-5" />
        24/7 candidate access
      </span>,
      <span key="2" className="flex items-center gap-2 text-gray-700">
        <CheckCircle2 className="text-blue-600 w-5 h-5" />
        Real-time AI analysis
      </span>,
      <span key="3" className="flex items-center gap-2 text-gray-700">
        <CheckCircle2 className="text-blue-600 w-5 h-5" />
        Automated feedback
      </span>,
      <span key="4" className="flex items-center gap-2 text-gray-700">
        <CheckCircle2 className="text-blue-600 w-5 h-5" />
        Time & location flexibility
      </span>,
    ]}
  />
</div>

{/* MOBILE SECTION — VISIBLE ONLY ON MOBILE */}
<section className="block md:hidden bg-blue-50 py-12 px-6 text-center">

  {/* IMAGE */}
  <div className="flex justify-center mb-6">
    <img
      src="/AI  image .png"
      alt="AI Video Interview Illustration"
      className="w-[320px] h-auto object-contain drop-shadow-lg"
    />
  </div>

  {/* TEXT */}
  <h2 className="text-2xl font-bold mb-4">
    AI Video Interviews — Assess Skills, Communication & Confidence.
  </h2>

  <p className="text-gray-700 mb-6">
    DigiHire enables candidates to record video interviews at their convenience.
  </p>

  {/* BULLETS */}
  <ul className="text-gray-700 text-left mx-auto max-w-sm space-y-3">
    <li className="flex items-center gap-2">
      <CheckCircle2 className="text-blue-600 w-5 h-5" />
      24/7 candidate access
    </li>
    <li className="flex items-center gap-2">
      <CheckCircle2 className="text-blue-600 w-5 h-5" />
      Real-time AI analysis
    </li>
    <li className="flex items-center gap-2">
      <CheckCircle2 className="text-blue-600 w-5 h-5" />
      Automated feedback
    </li>
    <li className="flex items-center gap-2">
      <CheckCircle2 className="text-blue-600 w-5 h-5" />
      Time & location flexibility
    </li>
  </ul>

</section>


      {/* Section 4 */}
     {/* DESKTOP SECTION — DO NOT CHANGE (Your Existing Code) */}
<div className="hidden md:block">
  <TwoColumnSection
    reverse
    bg="from-white to-gray-100"
    img="/AI Score Report.png"
    alt="AI Score Report"
    title={
      <span className="text-2xl md:text-2xl font-bold">
        Instant Candidate Ranking & Deep Analytics.
      </span>
    }
    text="DigiHire automatically scores candidates based on skills, communication, and behavior."
    bullets={[
      "• Smart scoring for faster shortlists",
      "• AI performance charts",
      "• One-click comparisons",
      "• Downloadable reports",
    ]}
  />
</div>

{/* MOBILE SECTION — NEWLY ADDED */}
<section className="block md:hidden bg-gradient-to-r from-white to-gray-100 py-12 px-6 text-center">

  {/* IMAGE */}
  <div className="flex justify-center mb-6">
    <img
      src="/AI Score Report.png"
      alt="AI Score Report"
      className="w-[320px] h-auto object-contain drop-shadow-lg"
    />
  </div>

  {/* TEXT */}
  <h2 className="text-2xl font-bold mb-4">
    Instant Candidate Ranking & Deep Analytics.
  </h2>

  <p className="text-gray-700 mb-6">
    DigiHire automatically scores candidates based on skills,
    communication, and behavior.
  </p>

  {/* BULLETS */}
  <ul className="text-gray-700 text-left mx-auto max-w-sm space-y-2">
    <li>• Smart scoring for faster shortlists</li>
    <li>• AI performance charts</li>
    <li>• One-click comparisons</li>
    <li>• Downloadable reports</li>
  </ul>

</section>


      {/* Section 5 */}
      <section className="py-10 px-6 md:px-20 bg-blue-100 text-center ">
        <h2 className="text-2xl md:text-2xl font-bold mb-12 ">
          Collaborate Seamlessly Across Your Hiring Team.
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Invite recruiters and interviewers to review candidates, comment, and
          share feedback.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          <FeatureCard
            icon={
              <img
                src="/Shared Dashboards.png"
                className="w-16 h-16 mx-auto mb-6"
              />
            }
            title="Shared Dashboards"
            text="Monitor candidates and progress easily."
          />
          <FeatureCard
            icon={<div className="text-6xl mb-6">📋</div>}
            title="Feedback Tagging System"
            text="Share instant feedback."
          />
          <FeatureCard
            icon={<div className="text-6xl mb-6">📎</div>}
            title="Candidate Notes"
            text="Attach resumes and files."
          />
          <FeatureCard
            icon={<div className="text-6xl mb-6">🔑</div>}
            title="Access Control"
            text="Set roles and permissions."
          />
        </div>
      </section>

      {/* Section 6 */}
      <section className="py-10 px-6 md:px-20 bg-white text-center">
        <h2 className="text-2xl md:text-2xl font-bold mb-8 text-blue-900">
          Dynamic Interviews That Adapt to Every Candidate.
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
          DigiHire’s AI adjusts question complexity based on candidate responses.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <Settings size={36} />, text: "Adaptive question logic" },
            { icon: <FileText size={36} />, text: "Custom templates by role" },
            {
              icon: <UserCheck size={36} />,
              text: "Personalized candidate journeys",
            },
            { icon: <BarChart size={36} />, text: "Better evaluation accuracy" },
          ].map((step, index) => (
            <div key={index} className="flex justify-center items-stretch">
              <div className="bg-white rounded-2xl shadow-lg p-8 w-full border flex flex-col justify-center items-center">
                <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <p className="text-gray-800 font-medium">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7 */}
      <section className="py-10 px-6 md:px-20 bg-blue-100 text-center">
        <h2 className="text-2xl md:text-2xl font-bold mb-8 text-blue-700">
          Fair, Transparent, and Bias-Free Hiring.
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
          Our AI ensures unbiased and consistent evaluation for every candidate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <FeatureCard
            icon={<img src="/Standardized Scoring.png" className="w-16 h-16 mx-auto" />}
            title="Standardized scoring"
            text="Consistent criteria across all candidates."
          />
          <FeatureCard
            icon={<img src="/Diversity Analytics.png" className="w-16 h-16 mx-auto" />}
            title="Diversity Analytics"
            text="AI ensures inclusive assessments."
          />
          <FeatureCard
            icon={<div className="text-5xl">🛡️</div>}
            title="Auditable Process"
            text="Every action is traceable."
          />
        </div>

        <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md w-[200px] h-[52px] whitespace-nowrap">
          Learn About Fair AI
        </button>
      </section>

      {/* Section 8 */}
      {/* DESKTOP SECTION — DO NOT CHANGE (Your Existing Code) */}
<div className="hidden md:block">
  <TwoColumnSection
    bg="from-white"
    img="/calendar animation.png"
    alt="Automated Scheduling"
    title={
      <span className="text-2xl md:text-2xl font-bold">
        Say Goodbye to Scheduling Chaos
      </span>
    }
    text="Candidates choose interview slots automatically synced with calendars."
    bullets={[
      "• Smart time-zone detection",
      "• Email/SMS reminders",
      "• Google/Outlook sync",
      "• Auto-rescheduling",
    ]}
  />
</div>

{/* MOBILE SECTION — NEWLY ADDED */}
<section className="block md:hidden bg-white py-12 px-6 text-center">

  {/* IMAGE */}
  <div className="flex justify-center mb-6">
    <img
      src="/calendar animation.png"
      alt="Automated Scheduling"
      className="w-[320px] h-auto object-contain drop-shadow-lg"
    />
  </div>

  {/* TEXT */}
  <h2 className="text-2xl font-bold mb-4">
    Say Goodbye to Scheduling Chaos
  </h2>

  <p className="text-gray-700 mb-6">
    Candidates choose interview slots automatically synced with calendars.
  </p>

  {/* BULLETS */}
  <ul className="text-gray-700 text-left mx-auto max-w-sm space-y-2">
    <li>• Smart time-zone detection</li>
    <li>• Email/SMS reminders</li>
    <li>• Google/Outlook sync</li>
    <li>• Auto-rescheduling</li>
  </ul>

</section>


      {/* Section 10 */}
      <section className="py-10 px-6 md:px-20 bg-gradient-to-r from-blue-800 to-cyan-500 text-white text-center">
        <h2 className="text-2xl md:text-2xl font-bold mb-8">
          Hire Anywhere, Anytime.
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-100 mb-10">
          DigiHire delivers a consistent experience across the globe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-5xl mx-auto">
          <ul className="space-y-3 text-lg text-gray-100">
            <li>• Multi-language</li>
            <li>• Timezone auto-adjust</li>
            <li>• 24/7 cloud access</li>
            <li>• AWS + Azure global servers</li>
          </ul>

          <Image
            src="/global-map.png"
            alt="Global Map"
            width={500}
            height={350}
            className="rounded-xl object-contain opacity-95"
          />
        </div>

        <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full mt-10 w-[200px] h-[52px] whitespace-nowrap">
          See Global Coverage
        </button>
      </section>

      {/* Section 11 */}
      <section className="py-10 px-6 md:px-20 bg-white text-gray-800 text-center">
        <h2 className="text-2xl md:text-2xl font-bold mb-12">Summary of Key Benefits</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-12">
          <FeatureCard
            icon={<img src="/Speed Without Compromise.png" className="w-16 h-16" />}
            title="Speed"
            text="Automated fast screening."
          />
          <FeatureCard icon="🧠" title="Intelligence" text="Data-driven decisions." />
          <FeatureCard
            icon={<img src="/Built for Global Hiring (2).png" className="w-[80px] h-[70px]" />}
            title="Scale"
            text="Handle 1 to 1,000 interviews easily."
          />
        </div>

        <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full w-[200px] h-[52px]">
          Start Free Trial
        </button>
      </section>

      {/* Section 12 */}
      <section className="py-10 px-6 md:px-20 bg-blue-100 text-black text-center">
        <h2 className="text-4xl md:text-2xl font-extrabold mb-6">
          Discover the Smarter Way to Hire.
        </h2>

        <p className="max-w-3xl mx-auto text-lg mb-10">
          Join the next generation of HR teams using DigiHire to build smarter
          workflows.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md w-[200px] h-[52px]">
            Start Free Trial
          </button>

          <div className="relative flex flex-col items-center">
            <a
              href="https://calendly.com/hr-digihireai/30min"
              onClick={handleBookDemo}
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md w-[200px] h-[52px]"
            >
              Book Demo
            </a>

            {showCalendly && (
              <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
                <div className="bg-white rounded-2xl shadow-xl w-[90%] md:w-[800px] h-[90%] relative">
                  <button
                    onClick={closeCalendlyPopup}
                    className="absolute top-3 right-3 text-gray-700 text-2xl font-bold"
                  >
                    ×
                  </button>

                  <iframe
                    src="https://calendly.com/hr-digihireai/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                    className="w-full h-full border-0 rounded-2xl"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}

/* Feature Card */
function FeatureCard({ icon, title, text }) {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{text}</p>
    </div>
  );
}

/* ⭐ UPDATED TwoColumnSection — CLEAN, NO SCROLL, PERFECT HEIGHT */
function TwoColumnSection({ reverse, bg, img, alt, title, text, bullets = [], button }) {
  return (
    <section
      className={`py-10 px-6 md:px-20 bg-gradient-to-r ${bg} text-gray-800 h-[400px] flex items-center`}
    >
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center justify-between gap-12 w-full h-full`}
      >
        {/* LEFT CONTENT (No scrollbar now) */}
        <div className="md:w-1/2 space-y-4 flex flex-col justify-center h-full">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">{title}</h2>
          <p className="text-lg text-gray-700">{text}</p>

          <ul className="space-y-2 text-gray-700">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          {button && (
            <button className="bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-800 transition">
              {button}
            </button>
          )}
        </div>

        {/* RIGHT IMAGE — auto-fit inside 400px section */}
        <div className="md:w-1/2 flex justify-center items-center h-full">
          <div className="h-full w-full max-w-[480px] flex justify-center items-center">
            <Image
              src={img}
              alt={alt}
              width={500}
              height={400}
              className="object-contain h-full w-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Step Box */
function StepBox({ number, text }) {
  return (
    <div className="flex flex-col items-center bg-white/20 p-6 rounded-2xl shadow-lg w-64">
      <div className="text-3xl font-bold mb-3 bg-white text-blue-700 rounded-full w-10 h-10 flex items-center justify-center">
        {number}
      </div>
      <p className="text-white font-medium">{text}</p>
    </div>
  );
}
