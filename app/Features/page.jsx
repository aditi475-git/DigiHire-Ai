"use client";

import Image from "next/image";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";
import { Settings, FileText, UserCheck, BarChart } from "lucide-react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function FeaturesPage() {
  const [showCalendly, setShowCalendly] = useState(false); //popup state

  //  Open Calendly popup
  const handleBookDemo = (e) => {
    e.preventDefault(); // prevent default link behavior
    setShowCalendly(true);
  };

  // ✅ Close Calendly popup
  const closeCalendlyPopup = () => {
    setShowCalendly(false);
  };

  return (
    <>
      {/* ✅ Navbar */}
      <Navbar />

{/*  Section 1: Hero (Feature Introduction) */}
<section className="h-[400px] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-400 text-white">
  <div className="md:w-1/2 space-y-6">
    <h1 className="text-5xl md:text-2xl font-extrabold leading-tight ">
      Powerful Features That Make Hiring Effortless.
    </h1>

    <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
      Simplify every stage of recruitment — from video screening to team collaboration — 
      with DigiHire’s AI-powered platform designed for global-scale hiring.
    </p>

    <div className="flex flex-wrap gap-4 pt-6">
      <button
  className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body focus:outline-none focus:ring-0 w-[200px] h-[52px] whitespace-nowrap flex items-center justify-center text-center"
>
  See DigiHire in Action
</button>


      <button  className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px]">
        Start Free Trial
      </button>
    </div>
  </div>

  <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
    <Image
      src="/Dashboard animation .png"
      alt="DigiHire Dashboard Illustration"
      width={400}
      height={200}
      className="rounded-2xl shadow-lg"
    />
  </div>
</section>


     {/* Section 2: Why DigiHire Stands Out */}
<section className="py-10 px-6 md:px-20 bg-white text-gray-800 text-center">
  <h2 className="text-3xl md:text-2xl font-bold mb-12 ">
    Why DigiHire Stands Out
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
    <FeatureCard
      icon={
        <img
          src="/AI-Powered Insights.png"
          alt="AI-Powered Insights"
          className="w-16 h-16 mx-auto mb-4"
        />
      }
      title="AI-Powered Insights"
      text="Intelligent video analysis evaluates communication, confidence, and skill fit instantly."
    />

    <FeatureCard
      icon={
        <img
          src="/Speed Without Compromise.png"
          alt="Speed Without Compromise"
          className="w-16 h-16 mx-auto mb-4"
        />
      }
      title="Speed Without Compromise"
      text="Screen and rank candidates 10× faster without sacrificing quality."
    />

    <FeatureCard
      icon={
        <img
          src="/Built for Global Hiring (2).png"
          alt="Built for Global Hiring"
          className="w-27 h-20 mx-auto mb-4"
        />
      }
      title="Built for Global Hiring"
      text="Multi-language support, timezone flexibility, and enterprise-grade security — ready for worldwide use."
    />
  </div>

 <div className="flex justify-center items-center w-full">
  <Link
    href="/Platform"
    className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
    Explore the Platform
  </Link>
</div>

</section>


      {/* Section 3: AI Video Interviews */}

<TwoColumnSection
  bg="from-blue-100"
  img="/AI  image .png"
  alt="AI Video Interview Illustration"
  title={
    <span className="text-2xl md:text-2xl font-bold ">
      AI Video Interviews — Assess Skills, Communication & Confidence.
    </span>
  }
  text="DigiHire enables candidates to record video interviews at their convenience. Our AI analyzes tone, body language, and clarity — revealing personality, capability, and potential beyond resumes."
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
  button="See Demo Interview"
/>




      {/* Section 4: Smart Screening & Reports */}
      <TwoColumnSection
        reverse
        bg="from-white to-gray-100"
        img="/AI Score Report.png"
        alt="AI Score Report"
        title={
          <span className="text-2xl md:text-2xl font-bold ">
            Instant Candidate Ranking & Deep Analytics.
          </span>
        }
        text="DigiHire automatically scores candidates based on skills, communication, and behavior — creating objective rankings that remove human bias. Custom filters help you prioritize top talent immediately."
        bullets={[
          "• Smart scoring for faster shortlists",
          "• AI-generated performance charts",
          "• Candidate comparison in one click",
          "• Downloadable reports for HR audits",
        ]}
      />

      {/*  Section 5: Team Collaboration */}
      <section className="py-10 px-6 md:px-20 bg-blue-100 text- black-800 text-center ">
        <h2 className="text-2xl md:text-2xl font-bold mb-12 ">
          Collaborate Seamlessly Across Your Hiring Team.
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Invite recruiters and interviewers to review candidates, comment, and share feedback — all in one secure workspace.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          <FeatureCard
            icon={<img src="/Shared Dashboards.png" alt="Shared Dashboards" className="w-16 h-16 mx-auto mb-6 object-contain" />}
            title="Shared Dashboards"
            text="Centralized workspace to monitor candidates and progress."
          />
          <FeatureCard
            icon={<div className="flex justify-center mb-6 text-6xl">📋</div>}
            title="Feedback Tagging System"
            text="Tag reviewers and share instant feedback for transparent evaluations."
          />
          <FeatureCard
            icon={<div className="flex justify-center mb-6 text-6xl">📎</div>}
            title="Candidate Notes & Attachments"
            text="Attach resumes, notes, and files directly within the platform."
          />
          <FeatureCard
            icon={<div className="flex justify-center mb-6 text-6xl">🔑</div>}
            title="Role-Based Access Control"
            text="Assign specific roles and permissions to keep data secure and workflows organized."
          />

        </div>


      </section>

      {/*  Section 6: Adaptive Interview Flow */}
      <section className="py-10 px-6 md:px-20 bg-white text-center">
      <h2 className="text-2xl md:text-2xl font-bold mb-8 text-blue-900">
        Dynamic Interviews That Adapt to Every Candidate.
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
        DigiHire’s AI adjusts question complexity based on each candidate’s performance.
        It ensures balanced evaluations and keeps every interview engaging and accurate.
      </p>

      {/* ✅ Grid with balanced, icon-based white cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
        style={{ alignItems: "stretch" }}
      >
        {[
          { icon: <Settings size={36} />, text: "Adaptive question logic" },
          { icon: <FileText size={36} />, text: "Custom templates by role" },
          { icon: <UserCheck size={36} />, text: "Personalized candidate journeys" },
          { icon: <BarChart size={36} />, text: "Better evaluation accuracy" },
        ].map((step, index) => (
          <div
            key={index}
            className="flex justify-center items-stretch"
            style={{ minHeight: "220px" }}
          >
            <div className="flex flex-col justify-center items-center bg-white hover:bg-gray-50 rounded-2xl shadow-lg p-8 w-full transition-all duration-300 border border-gray-200">
              <div className="flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-700 font-bold rounded-full mb-4 shadow">
                {step.icon}
              </div>
              <p className="text-gray-800 text-center font-medium leading-snug">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>



      {/* Section 7: Bias-Free Evaluation */}
     <section className="py-10 px-6 md:px-20 bg-blue-100 text-center">
  <h2 className="text-2xl md:text-2xl font-bold mb-8 text-blue-700">
    Fair, Transparent, and Bias-Free Hiring.
  </h2>
  <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12">
    Our AI models are trained to ensure every candidate is evaluated fairly — focusing solely on skills and communication, not demographic data.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
    <FeatureCard
      icon={
        <img
          src="/Standardized Scoring.png"
          alt="Standardized Scoring"
          style={{ width: "64px", height: "64px", margin: "0 auto" }}
        />
      }
      title="Standardized scoring model"
      text="Every candidate is judged equally across consistent criteria."
      className="bg-blue-50 text-gray-800"
    />

    <FeatureCard
      icon={
        <img
          src="/Diversity Analytics.png"
          alt="Diversity Analytics"
          style={{ width: "64px", height: "64px", margin: "0 auto" }}
        />
      }
      title="Diversity-friendly analytics"
      text="AI ensures inclusive and diversity-friendly assessments."
      className="bg-blue-50 text-gray-800"
    />

    <FeatureCard
      icon={
        <div
          alt="Auditable Process"
          style={{ width: "64px", height: "64px", margin: "0 auto", fontSize: "48px" }}
        >
          🛡️
        </div>
      }
      title="Auditable evaluation process"
      text="Every evaluation step is trackable and reviewable."
      className="bg-blue-50 text-gray-800"
    />
  </div>

 <div className="flex justify-center items-center w-full">
  <button
    className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
    Learn About Fair AI
  </button>
</div>

</section>


      {/* Section 8: Automated Scheduling */}
      <TwoColumnSection
        bg="from-white"
        img="/calendar animation.png"
        alt="Automated Scheduling"
        title={
          <span className="text-2xl md:text-2xl font-bold">
            Say Goodbye to Scheduling Chaos
          </span>
        }
        text="Candidates choose their preferred interview slots based on recruiter availability — automatically synced with your calendar.
         No emails. No time-zone confusion. Just instant scheduling."
        bullets={[
          "• Smart time-zone detection",
          "• Email + SMS reminders",
          "• Calendar sync (Google / Outlook)",
          "• Auto-reschedule system",
        ]}
        button="Try Scheduling Demo"
      />

       
      {/* <section className="py-10 px-6 md:px-20 bg-white text-gray-800 text-center">
        <h2 className="text-2xl md:text-2xl font-bold mb-8">Connect DigiHire with Your Existing Tools.</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
          Integrate DigiHire with your ATS, HRMS, and communication platforms.
          Sync candidate data, analytics, and reports — ensuring continuity across your ecosystem.</p> */}

        {/* <div className="flex flex-wrap justify-center items-center gap-10 mb-10">
          <Image src="/SAP.png" alt="SAP" width={100} height={50} />
          <Image src="/Oracal Logo.png" alt="Oracle" width={100} height={50} /> */}
          {/* <Image src="/Workday.png" alt="Workday" width={100} height={50} />
          <Image src="/Zoho.png" alt="Zoho" width={100} height={50} /> */}
        {/* </div>

        <ul className="text-gray-700 space-y-2 mb-8">
          <li>Plug-and-play setup</li>
          <li>RESTful API endpoints</li>
          <li>SSO authentication</li>
          <li>Custom webhook support</li>
        </ul>

        <button className="bg-blue-700 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-800 transition">
          View Integration Docs
        </button>
      </section> */}

      {/*  Section 10: Global Accessibility */}
      <section className="py-10 px-6 md:px-20 bg-gradient-to-r from-blue-800 to-cyan-500 text-white text-center relative overflow-hidden">
  <h2 className="text-2xl md:text-2xl font-bold mb-8">
    Hire Anywhere, Anytime.
  </h2>
  <p className="max-w-3xl mx-auto text-lg text-gray-100 mb-10">
    DigiHire is designed for distributed workforces. Whether you’re hiring in Pune or Paris,
    the platform delivers a consistent, secure experience for both recruiters and candidates.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-5xl mx-auto items-center justify-center text-center md:text-left">
    {/* ✅ Text List */}
    <ul className="space-y-3 text-lg text-gray-100 mx-auto leading-relaxed">
      <li>• Multi-language interface</li>
      <li>• Timezone auto-adjustment</li>
      <li>• 24/7 cloud access</li>
      <li>• Global server network (AWS + Azure)</li>
    </ul>

    {/* ✅ Image Section (cleaner visual, no shadow box) */}
    <div className="flex justify-center">
      <Image
        src="/global-map.png"
        alt="Global Accessibility Map"
        width={500}
        height={350}
        className="rounded-xl object-contain opacity-95 hover:opacity-100 transition-all duration-500"
      />
    </div>
  </div>

  {/* ✅ Button */}
  <div className="flex justify-center items-center w-full">
  <button
    className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
    See Global Coverage
  </button>
  </div>
</section>


      {/* 📊 Section 11: Summary of Key Benefits */}
      <section className="py-10 px-6 md:px-20 bg-white text-gray-800 text-center">
        <h2 className="text-2xl md:text-2xl font-bold mb-12">Summary of Key Benefits</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-12">
          <FeatureCard
            icon={
              <img
                src="/Speed Without Compromise.png"
                alt="Speed"
                style={{ width: "64px", height: "64px", margin: "0 auto" }}
              />
            }
            title="Speed"
            text="Automate early screening in hours, not days."
          />

          <FeatureCard
            icon="🧠"
            title="Intelligence"
            text="Make data-driven hiring decisions confidently."
          />

          <FeatureCard
            icon={
              <img
                src="/Built for Global Hiring (2).png"
                alt="Scale"
                style={{ width: "80px", height: "70px", margin: "0 auto" }}
              />
            }
            title="Scale"
            text="Manage 1 or 1,000 interviews with equal ease."
          />
        </div>


        <div className="flex justify-center items-center w-full">
  <button
    className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
          Start Free Trial
        </button>
        </div>
      </section>

      {/*  Section 12: Call to Action */}
      <section className="py-10 px-6 md:px-20 bg-blue-100 text-black text-center">
        <h2 className="text-4xl md:text-2xl font-extrabold mb-6">
          Discover the Smarter Way to Hire.
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-black mb-10">
          Join the next generation of HR teams using DigiHire to build faster, fairer, and smarter recruitment workflows.
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
        onClick={handleBookDemo}
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

      {/* ✅ Footer */}
      <FooterSection />
    </>
  );
}

/* ✅ Reusable Feature Card */
function FeatureCard({ icon, title, text }) {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 text-center">{text}</p>
    </div>
  );
}

/* ✅ Reusable Two-Column Section */
function TwoColumnSection({ reverse, bg, img, alt, title, text, bullets = [], button }) {
  return (
    <section className={`py-20 px-6 md:px-20 bg-gradient-to-r ${bg} text-gray-800`}>
      <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-12`}>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">{title}</h2>
          <p className="text-lg text-gray-700">{text}</p>
          <ul className="space-y-3 text-gray-700">
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

        <div className="md:w-1/2 flex justify-center">
          <Image src={img} alt={alt} width={500} height={400} className="rounded-2xl shadow-lg" />
        </div>
      </div>
    </section>
  );
}

/* ✅ Reusable Step Box */
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
