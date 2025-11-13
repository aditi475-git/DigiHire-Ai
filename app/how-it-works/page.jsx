"use client";

import React, { useState } from "react"; // ✅ added useState for popup
import Image from "next/image";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";
import Link from "next/link";

// ✅ Custom Button Component (kept unchanged)
function Button({ children, variant = "default", className = "", ...props }) {
  const base =
    "px-6 py-3 rounded-lg font-medium shadow-md transition focus:outline-none";

  const variants = {
    default: "bg-blue-600 hover:bg-blue-700 text-white",
    outline:
      "border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export default function HowItWorksPage() {
  const [showCalendly, setShowCalendly] = useState(false); // ✅ popup state

  // ✅ Open Calendly popup
  const handleBookDemo = (e) => {
    e.preventDefault(); // prevent default navigation
    setShowCalendly(true);
  };

  // ✅ Close Calendly popup
  const closeCalendlyPopup = () => {
    setShowCalendly(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* ✅ Navbar */}
      <Navbar />

      {/* 🏠 Section 1: Hero Banner */}
    <section className=" h-[400px] flex flex-col md:flex-row-reverse items-center justify-between px-6 md:px-16 py-10 bg-gradient-to-r from-blue-50 to-white relative overflow-hidden">
  {/* ✅ Right Side - Text (now visually on right side on desktop) */}
  <div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
    <h1 className="text-3xl md:text-2xl font-bold leading-tight text-gray-900">
      From Job Creation to Hiring Decision — Streamlined with AI Precision.
    </h1>
    <p className="text-black-600 text-lg">
      DigiHire automates every step of recruitment — from setting up roles
      to selecting the right candidate.
      <br />
      Our AI takes care of screening, analytics, and reporting, so your
      team can focus on what really matters: people.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
      <Button
  className="relative !bg-blue-700 hover:!bg-blue-800 !text-white !font-bold !px-8 !py-3 !rounded-full !shadow-md !transition flex items-center justify-center gap-2 overflow-hidden font-body !w-[200px] !h-[52px] !whitespace-nowrap"
>
  See DigiHire in Action
</Button>

     <Button
  variant="outline"
  className="!bg-white !border-2 !border-blue-900 !text-blue-900 !font-bold !px-8 !py-3 !rounded-full !shadow-md hover:!bg-blue-900 hover:!text-white !transition font-body focus:!outline-none focus:!ring-0 !w-[200px] !h-[52px]"
>
  Start Free Trial
</Button>

    </div>
  </div>

  {/* ✅ Left Side - Image (now on left side in desktop view, clean – no bg/shadow) */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
    <div className="md:w-[400px] text-center">
      <Image
        src="/AI hiring workflow.png"
        alt="AI Hiring Workflow"
        width={400}
        height={400}
        className="object-contain mx-auto"
      />
    </div>
  </div>
</section>


      {/* 🧩 Section 2: Quick 4-Step Summary */}
    <section className="py-10 px-6 md:px-20 bg-blue-100 text-center">
  <h2 className="text-2xl font-bold mb-12 text-gray-900">
    The DigiHire Process in 4 Simple Steps
  </h2>

  <div className="flex flex-wrap justify-center md:justify-between items-start gap-8 md:gap-4">
    {[
      {
        step: "1",
        title: "Create Role",
        text: "Define your job, choose questions, and configure skill criteria.",
      },
      {
        step: "2",
        title: "Engage Candidates",
        text: "Candidates complete AI-led interviews at their convenience.",
      },
      {
        step: "3",
        title: "AI Evaluation",
        text: "Our engine analyzes video responses and ranks candidates automatically.",
      },
      {
        step: "4",
        title: "Review & Decide",
        text: "Compare analytics, collaborate with your team, and hire the best-fit.",
      },
    ].map((step, index) => (
      <div
        key={index}
        className="flex flex-col items-center text-center w-[200px] md:w-[220px] lg:w-[250px]"
      >
        {/* ✅ Stylish Gradient Number Badge */}
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white text-2xl font-bold shadow-lg">
          {step.step}
        </div>

        <h3 className="text-xl font-semibold mb-2 text-blue-700">
          {step.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
      </div>
    ))}
  </div>
</section>

      {/* 🎯 Section 3: Step 1 — Create Role & Define Criteria */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-gray-50">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Step 1: Set the Foundation.
          </h2>
          <p className="text-gray-700 text-lg">
            Start by defining your role. Choose from ready-made question
            templates for sales, IT, HR, or finance — or create your own.
            Configure skills, evaluation weights, and AI analysis parameters in
            just a few clicks.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li> Ready-made question libraries</li>
            <li> Role-based templates</li>
            <li> Skill-weight customization</li>
            <li> Team permissions setup</li>
          </ul>
          <Button
  className="!rounded-full !px-8 !py-3 !text-lg font-bold shadow-md hover:opacity-90 transition"
>
  Explore Question Templates
</Button>

        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/interview dashboard.png"
            alt="Create Role Dashboard"
            width={450}
            height={300}
            className="rounded-xl shadow-md object-contain"
          />
        </div>
      </section>

      {/* 👥 Section 4: Step 2 — Engage Candidates */}
     <section className="py-10 px-6 md:px-16 bg-blue-100 to-sky-200 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
  {/* ✅ Left Side - Image */}
  <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
    <div className="w-[350px] md:w-[420px]">
      <Image
        src="/Engage Candidates.png"
        alt="Engage Candidates"
        width={420}
        height={420}
        className="object-contain rounded-xl mx-auto"
      />
    </div>
  </div>

  {/* ✅ Right Side - Text Content (unchanged) */}
  <div className="md:w-1/2 max-w-4xl mx-auto space-y-6">
    <h2 className="text-2xl font-bold text-gray-900">
      Step 2: Engage Candidates Anytime, Anywhere.
    </h2>
    <p className="text-gray-800 text-lg leading-relaxed">
      Candidates receive an invite link and record their interviews when it suits them.
      DigiHire’s AI ensures consistent question delivery and smooth user experience —
      no scheduling conflicts or timezone hassles.
    </p>
    <ul className="list-none text-gray-800 text-lg space-y-2">
      <li>24/7 accessibility</li>
      <li>Mobile-friendly interface</li>
      <li>Multilingual support</li>
      <li>Automated email notifications</li>
    </ul>
    <p className="text-gray-700 italic">
      Enhance candidate experience while saving hours in manual coordination.
    </p>
    <div className="flex justify-center md:justify-start">
      <Button
  className="relative !bg-blue-700 hover:!bg-blue-800 !text-white !font-bold !px-10 !py-4 !rounded-full !shadow-md !transition flex items-center justify-center gap-2 overflow-hidden font-body !w-[200px] !h-[52px] whitespace-nowrap"
>
  Send a Test Invite
</Button>

    </div>
  </div>
</section>


      {/* 🧠 Section 5: Step 3 — AI Evaluation */}
<section className="py-10 px-6 md:px-16 bg-white text-gray-900">
  <div className="flex flex-col md:flex-row-reverse items-center justify-between">
    {/* ✅ Right Side - Image */}
    <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
      <Image
        src="/AI brain icon.png"
        alt="AI Evaluation Visual"
        width={500}
        height={500}
        className="object-contain rounded-xl"
      />
    </div>

    {/* ✅ Left Side - Text / Information */}
    <div className="md:w-1/2 space-y-6">
      <h2 className="text-2xl font-bold">
        Step 3: Let AI Do the Heavy Lifting.
      </h2>
      <p className="text-gray-800 text-lg">
        Our advanced algorithms analyze video responses for:
      </p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Skill Competency (content relevance)</li>
        <li>Communication Clarity (tone, structure, confidence)</li>
        <li>Behavioral Indicators (consistency & engagement)</li>
      </ul>
      <p className="text-gray-700">
        The system instantly generates a scorecard, highlighting each
        candidate’s performance and match percentage.
      </p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Instant candidate ranking</li>
        <li>Smart bias prevention</li>
        <li>AI-generated insights</li>
        <li>Downloadable reports</li>
      </ul>
      <Button
        variant="default"
        className="!bg-blue-700 !text-white !px-8 !py-3 !rounded-full !min-w-[200px] hover:opacity-90 transition"
      >
        View AI Score Report Example
      </Button>
    </div>
  </div>
</section>


      {/* 📊 Section 6: Step 4 — Review, Compare & Decide */}
      <section className="py-10 px-6 md:px-16 bg-blue-100">
  <div className="flex flex-col md:flex-row-reverse items-center justify-between">
    {/* ✅ Right Side — Information */}
    <div className="md:w-1/2 space-y-6 mt-8 md:mt-0">
      <h2 className="text-2xl font-bold text-gray-900">
        Step 4: Review, Compare, and Collaborate.
      </h2>
      <p className="text-gray-700 text-lg">
        All candidate analytics, recordings, and notes appear in one
        unified dashboard. Hiring teams can review clips, add comments,
        and finalize the shortlist together — eliminating confusion and bias.
      </p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Team collaboration tools</li>
        <li>Candidate comparison view</li>
        <li>Shared feedback notes</li>
        <li>Final shortlist export</li>
      </ul>
      <Button
  className="relative !bg-blue-700 hover:!bg-blue-800 !text-white !font-bold !px-10 !py-4 !rounded-full !shadow-md !transition flex items-center justify-center gap-2 overflow-hidden font-body !w-[200px] !h-[52px] whitespace-nowrap"
>
  See Hiring Dashboard
</Button>

    </div>

    {/* ✅ Left Side — Image */}
    <div className="md:w-1/2 flex justify-center">
      <Image
        src="/analytics dashboard.png"
        alt="Review Dashboard"
        width={450}
        height={300}
        className="rounded-xl shadow-md object-contain"
      />
    </div>
  </div>
</section>


      {/* 🔁 Section 7: Continuous Feedback & Optimization */}
<section className="py-10 px-6 md:px-16 bg-white-100">
  <div className="flex flex-col md:flex-row items-center justify-between text-left">
    {/* ✅ Left Side — Text Content */}
    <div className="md:w-1/2 space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">
        Constant Improvement Through Feedback.
      </h2>
      <p className="text-gray-700 text-lg">
        After each hiring cycle, DigiHire captures recruiter and candidate feedback
        to continuously enhance AI accuracy and overall experience. This makes each
        hiring round smarter, faster, and more personalized.
      </p>
      <ul className="list-none text-gray-800 text-lg space-y-2">
        <li>• Built-in satisfaction tracking</li>
        <li>• AI model fine-tuning</li>
        <li>• Continuous learning for better predictions</li>
      </ul>
    </div>

    {/* ✅ Right Side — Image */}
    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
      <Image
        src="/ai-feedback-loop.png"
        alt="AI Feedback Loop"
        width={400}
        height={400}
        className="object-contain"
      />
    </div>
  </div>
</section>


     {/* 🔐 Section 8: Why It Works Better */}
<section className="py-10 px-6 md:px-20 bg-blue-100 text-center">
  <h2 className="text-2xl font-bold text-gray-900 mb-12">
    Why Companies Choose DigiHire
  </h2>

  {/* ✅ Table Wrapper */}
  <div className="overflow-x-auto flex justify-center">
    <table className="min-w-[700px] bg-white rounded-xl shadow-lg border border-gray-200 text-left">
      {/* ✅ Table Head */}
      <thead>
        <tr className="bg-blue-50 text-gray-900 font-semibold text-lg">
          <th className="py-4 px-6 border-b border-gray-200 w-1/2">
            Traditional Process
          </th>
          <th className="py-4 px-6 border-b border-gray-200 w-1/2">
            DigiHire Advantage
          </th>
        </tr>
      </thead>

      {/* ✅ Table Body */}
      <tbody>
        {[
          ["Manual scheduling", "Automated candidate scheduling"],
          ["Subjective evaluations", "AI-based standardized scoring"],
          ["Repetitive screening calls", "On-demand video interviews"],
          ["Missed communication", "Real-time notifications & tracking"],
          ["Inconsistent quality", "AI ensures fairness and consistency"],
        ].map(([traditional, advantage], i) => (
          <tr
            key={i}
            className="hover:bg-gray-50 transition border-b last:border-b-0"
          >
            <td className="py-4 px-6 text-gray-700">{traditional}</td>
            <td className="py-4 px-6 text-blue-700 font-medium">{advantage}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* ✅ Subtext */}
  <p className="text-gray-700 mt-8">
    With DigiHire, hiring becomes data-driven, consistent, and delightfully simple.
  </p>
</section>



      {/* 📈 Section 9: Results & Impact */}
<section className="py-10 px-6 md:px-16 bg-white text-center">
  <h2 className="text-2xl font-bold text-gray-900 mb-10">
    Proven Results from Global Teams
  </h2>

  {/* ✅ Centered Content */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-10">
    <div className="md:w-1/2 space-y-4">
      <p className="text-xl font-semibold text-blue-700">
        70% reduction in time-to-hire
      </p>
      <p className="text-xl font-semibold text-blue-700">
        60% improvement in candidate quality
      </p>
      <p className="text-xl font-semibold text-blue-700">
        50% less recruiter effort per hire
      </p>
    </div>

    <div className="md:w-1/2 text-gray-700 italic flex flex-col items-center justify-center">
      <p className="max-w-md">
        “DigiHire allowed us to handle hundreds of interviews a week without
        adding recruiters. It’s like having a digital hiring assistant.”
      </p>
      <span className="font-semibold text-gray-900 mt-2">
        — Talent Director, IT Consulting Company
      </span>

      {/* ✅ Centered Button */}
      <div className="mt-6 flex justify-center">
 <Link href="/CaseStudies" passHref>
      <Button
        className="relative !bg-blue-700 hover:!bg-blue-800 !text-white !font-bold !px-8 !py-3 !rounded-full !shadow-md !transition flex items-center justify-center gap-2 overflow-hidden font-body !w-[200px] !h-[52px] whitespace-nowrap"
      >
        Read More Case Studies
      </Button>
    </Link>

      </div>
    </div>
  </div>
</section>


      {/* 💬 Section 10: FAQ */}
      <section className="py-10 px-6 md:px-20 bg-blue-100 text-center">
  <h2 className="text-2xl font-bold text-gray-900 mb-10">
    Frequently Asked Questions
  </h2>

  <div className="max-w-3xl mx-auto text-left space-y-4">
    {[
      {
        question: "How long does it take to set up an interview?",
        answer: "Less than 5 minutes using templates and one-click scheduling.",
      },
      {
        question: "Can candidates use mobile devices?",
        answer: "Yes, DigiHire works smoothly on any smartphone or tablet.",
      },
      {
        question: "What AI parameters are evaluated?",
        answer: "Skills, communication clarity, behavior, and tone analysis.",
      },
      {
        question: "Is human review possible alongside AI?",
        answer: "Yes, recruiters can review and override AI scores anytime.",
      },
      {
        question: "How secure is the video data?",
        answer: "All videos and candidate data are encrypted and stored securely with compliance standards.",
      },
    ].map(({ question, answer }, index) => (
      <details key={index} className="border rounded-lg p-4 bg-white">
        <summary className="font-semibold cursor-pointer text-blue-700">
          {question}
        </summary>
        <p className="text-gray-600 mt-2">{answer}</p>
      </details>
    ))}
  </div>

  <div className="mt-8">
  <div className="flex justify-center items-center">
  <Link href="/Support">
      <Button
        className="relative bg-blue-700 hover:bg-blue-800 text-white !font-bold !px-10 !py-4 !rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
      >
        Contact Support
      </Button>
    </Link>
</div>




  </div>
</section>

  {/* 📞 Section 11: Final CTA – Conversion Banner */}
<section className="py-10 px-6 md:px-20 bg-white text-center text-gray-900 relative overflow-hidden">
  <div className="relative z-10 max-w-3xl mx-auto">
    <h2 className="text-2xl font-bold mb-6">
      Experience DigiHire in Action
    </h2>
    <p className="text-lg mb-8 text-gray-700 leading-relaxed">
      Start your free trial today or book a live demo to see how DigiHire
      can automate your screening, reduce hiring time, and improve
      decision quality.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
        <button
  className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body focus:outline-none focus:ring-0 w-[200px] h-[52px]"
>
  Start Free Trial
</button>
          <div className="relative flex flex-col items-center">
      <a
        href="https://calendly.com/hr-digihireai/30min"
        onClick={handleBookDemo} // ✅ opens popup instead of new tab
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
      >
        Book Demo
      </a>

      {/* ✅ Calendly popup modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-xl w-[90%] md:w-[800px] h-[70%] relative overflow-hidden">
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
  </div>
</section>


      {/* ✅ Footer */}
      <FooterSection />
    </div>
  );
}