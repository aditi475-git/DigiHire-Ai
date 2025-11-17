"use client";

import Navbar from "../../../components/Navbar";
import FooterSection from "../../../components/FooterSection";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AllFaqsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  

  const faqs = [
    {
      q: "How can I invite candidates to AI interviews?",
      a: "Go to your DigiHire dashboard → select a job → choose candidates → click “Invite to AI Interview.” Candidates receive an email link to complete their AI interview.",
    },
    {
      q: "Can I customize AI interview templates?",
      a: "Yes, DigiHire lets you create or edit interview templates. You can modify questions, durations, and evaluation rubrics depending on your plan level.",
    },
    {
      q: "How does DigiHire's AI scoring work?",
      a: "Our AI analyzes communication clarity, relevance, tone, and content against role benchmarks. The results help recruiters quickly shortlist top candidates.",
    },
    {
      q: "What makes DigiHire different from other platforms?",
      a: "DigiHire combines AI interviews, automated shortlisting, and team collaboration tools — saving 80% of screening time with unbiased evaluation.",
    },
    {
      q: "Does DigiHire use facial or voice recognition?",
      a: "No biometric data is stored or used for scoring. DigiHire focuses only on job-related communication, clarity, and content understanding.",
    },
    {
      q: "Can I download AI interview reports?",
      a: "Yes. After an AI interview, open the candidate profile → click 'Download Report' to export a PDF summary with AI and recruiter scores.",
    },
    {
      q: "How do I reset my password or update my email?",
      a: "Use the 'Forgot Password' option on login, or go to Settings → Account → Update Email. Confirm via verification email sent to your new address.",
    },
    {
      q: "How long do AI interviews take?",
      a: "Interviews typically last 10–15 minutes. Each question is time-bound to ensure consistency across candidates.",
    },
    {
      q: "Can I schedule AI interviews in advance?",
      a: "Yes. You can schedule interviews to start automatically on a specific date and time, with automated email reminders for candidates.",
    },
    {
      q: "Can multiple team members review AI results?",
      a: "Yes, recruiters and hiring managers can collaboratively review scores, add notes, and finalize shortlists together in DigiHire.",
    },
    {
      q: "Can candidates reattempt their AI interview?",
      a: "By default, candidates have one attempt. You can enable 'Reattempt' in the job settings for exceptional cases.",
    },
    {
      q: "How can I add custom questions for interviews?",
      a: "When creating a template, click 'Add Question' → choose response type (video, audio, text) → save the question set for future use.",
    },
    {
      q: "How does DigiHire improve candidate quality?",
      a: "DigiHire's AI ensures structured evaluation and helps remove unconscious bias, resulting in better candidate quality and faster hires.",
    },
    {
      q: "Does DigiHire support multiple languages?",
      a: "Yes. DigiHire supports English, French, Hindi, and other major languages for AI-based assessments and transcripts.",
    },
    {
      q: "What’s included in each DigiHire plan?",
      a: "Basic: Limited AI interviews and reports. Professional: Unlimited interviews + team access. Enterprise: API access, analytics, and white-label features.",
    },
    {
      q: "Can I integrate DigiHire with my ATS?",
      a: "Yes. DigiHire integrates with leading ATS tools like Greenhouse, Workable, and Lever via secure API or webhooks.",
    },
    {
      q: "Can I brand my interview experience?",
      a: "Yes, with Enterprise plans you can use your company logo, color scheme, and custom intro videos for a branded candidate experience.",
    },
    {
      q: "Where does DigiHire store candidate data?",
      a: "Data is stored on secure, GDPR-compliant cloud servers. DigiHire never shares data with third parties without consent.",
    },
    {
      q: "How can I contact support?",
      a: "You can email support@digihireai.com or use the in-app 'Help Center' for chat assistance during business hours.",
    },
    {
      q: "How do I get started with DigiHire?",
      a: "Sign up on DigiHire.ai → create your first job → invite candidates to AI interviews → review insights and hire faster!",
    },
  ];

  const router = useRouter();

  // ✅ Define handleBack function
  const handleBack = () => {
    router.back(); // navigates to previous page
  };


  return (
    <>
      <Navbar />

      <button
  onClick={handleBack}
  className="
    fixed 
    right-4 
    bottom-28 
    w-12 
    h-12 
    rounded-full 
    bg-white/10 
    backdrop-blur-md 
    shadow-lg 
    flex 
    items-center 
    justify-center 
    text-white 
    hover:bg-white/20 
    transition
    z-50
  "
>
  {/* Chevron Back Icon */}
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="black" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="w-6 h-6"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
</button>


      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 md:px-20 py-20 bg-blue-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/graph-pattern.svg')] bg-cover bg-center"></div>
        <div className="z-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            All Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Explore everything you need to know about using DigiHire.ai — from setup to advanced features.
          </p>
        </div>
      </section>

      {/* FAQ List Section */}
      <section className="py-10 px-8 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              open={openIndex === index}
              onClick={() => handleToggle(index)}
              className="border rounded-xl p-5 transition-all duration-300 cursor-pointer hover:shadow-md"
            >
              <summary className="font-semibold text-lg text-gray-800 list-none flex justify-between items-center">
                <span>{faq.q}</span>
                <span className="text-blue-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </summary>
              <p className="mt-3 text-gray-600 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact HR Section */}
      <section className="py-16 bg-blue-50 text-center px-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Still Have Questions?
        </h2>
        <p className="text-gray-700 mb-6">
          If you have any questions, our team is always happy to assist you.
        </p>
        <a
          href="mailto:hr@digihireai.com"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
        >
          Contact Support
        </a>
      </section>

      <FooterSection />
    </>
  );
}
