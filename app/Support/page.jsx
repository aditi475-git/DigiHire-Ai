"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";

export default function HelpCenterPage() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    // Close all FAQs when clicking outside
    const handleClickOutside = (e) => {
      if (!e.target.closest("details")) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const faqs = [
    {
      q: "🔥 How to invite candidates to AI interviews?",
      a: `Create or select a job requisition in DigiHIRE AI → select candidates → click “Invite to AI Interview.” The system sends candidates a link to complete the AI interview, and you can review their AI-score and responses later.`,
    },
    {
      q: "⭐ Can I customize interview templates?",
      a: `Yes, DigiHIRE AI allows you to customize interview templates. You can edit questions, adjust formats, and define scoring rubrics — though some advanced options depend on your subscription plan.`,
    },
    {
      q: "💡 How does the AI scoring algorithm work?",
      a: `The AI analyses responses (video, audio, or text) for factors like relevance, fluency, and completeness, then compares them with role criteria to produce a score. Always combine AI results with human review.`,
    },
    {
      q: "🔐 How to reset my password or update login email?",
      a: `Click “Forgot Password” on the login page to reset it. To change your login email, go to Profile → Edit Email → Verify New Email. If locked out, contact DigiHIRE AI Support for manual assistance.`,
    },
    {
      q: "📥 How to download candidate reports?",
      a: `Go to the job’s candidate list → open a candidate report → click “Download” or “Export.” DigiHIRE usually supports PDF, CSV, or Excel formats, with bulk exports available in higher plans.`,
    },
    {
      q: "💳 What’s included in each subscription plan?",
      a: `DigiHIRE offers flexible plans. Standard plans include AI screening and reports; Enterprise plans offer unlimited users, job requisitions, and assessments. Check with DigiHIRE for the latest plan details.`,
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.q.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <>
      <Navbar />

      {/* 🏠 Section 1: Hero Banner */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-8 md:px-20 py-24 bg-blue-100 relative overflow-hidden min-h-screen">
  {/* Background pattern */}
  <div className="absolute inset-0 opacity-10 bg-[url('/graph-pattern.svg')] bg-cover bg-center"></div>

  {/* Left content (text + search) */}
  <div className="z-10 max-w-2xl w-full md:w-1/2">
    <h1 className="text-3xl md:text-2xl font-bold mb-4 text-blue-900">
      How Can We Help You Today?
    </h1>
    <p className="text-lg mb-6 text-gray-700">
      Whether you’re exploring DigiHire or already using it, find instant
      answers, step-by-step guides, and live support to make your
      experience smooth and successful.
    </p>

    {/* <div className="flex items-center justify-center bg-white rounded-full shadow-md overflow-hidden w-full max-w-md mx-auto md:mx-0">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Type your question here... (e.g., How to set up AI interviews?)"
        className="flex-1 px-4 py-3 outline-none text-gray-700"
      />
      <button className="bg-blue-700 text-white px-6 py-3 font-semibold">
        Search
      </button>
    </div> */}
  </div>

  {/* Right image */}
  <div className="z-10 mt-10 md:mt-0 md:ml-12 flex justify-center md:justify-end w-full md:w-1/2">
    <img
      src="/support agent.png"
      alt="Support Agent"
      className="w-[320px] md:w-[420px] lg:w-[480px] object-contain drop-shadow-lg"
    />
  </div>
</section>


      {/* 🔍 Section 2: Quick Access Categories */}
      <section className="py-10 px-8 md:px-20 bg-white text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-10">
          Browse Help by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "🧭",
              title: "Getting Started",
              desc: "Setup, account creation, onboarding tutorials.",
            },
            {
              icon: "🧠",
              title: "AI Interview Setup",
              desc: "Configure questions, automate scoring, and scheduling.",
            },
            {
              icon: "📈",
              title: "Reports & Analytics",
              desc: "View and export performance reports.",
            },
            {
              icon: "📊",
              title: "Reports & Analytics",
              desc: "View and export performance reports.",
            },
            {
              icon: "🔒",
              title: "Security & Compliance",
              desc: "Privacy, data access, and user permissions.",
            },
            {
              icon: "💳",
              title: "Billing & Subscription",
              desc: "Payment, invoices, and plan management.",
            },
          ].map((cat, i) => (
            <div
              key={i}
              className="p-6 bg-blue-50 rounded-2xl shadow border"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                {cat.title}
              </h3>
              <p className="text-gray-600 text-sm">{cat.desc}</p>
            </div>
          ))}
        </div>
<div className="flex justify-center">

<button
  onClick={() => (window.location.href = "/Support/help-topics")}
  className="relative mt-10 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
>
  View All Help Topics
</button>

        </div>
      </section>

      {/* 🧩 Section 3: Popular Articles */}
 <section className="py-10 px-8 md:px-20 bg-blue-50 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-8">
          Top Questions This Week
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {filteredFaqs.map((faq, index) => (
            <details
              key={index}
              open={openIndex === index}
              onClick={() => handleToggle(index)}
              className="border rounded-xl p-4 transition-all duration-300 cursor-pointer hover:shadow-md"
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

          {filteredFaqs.length === 0 && (
            <p className="text-gray-500 text-center">
              No results found for your search.
            </p>
          )}
        </div>

        {/* 🆕 Browse All FAQs Button */}
         <div className="flex justify-center mt-10">
    <button
      onClick={() => window.location.href = "/Support/all-faqs"}
      className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition"
    >
      Browse All FAQs
    </button>
  </div>
      </section>



      {/*  Section 4: Live Support Options */}
      <section className="py-10 px-8 md:px-20 bg-white text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-10">
          Need Personalized Help?
        </h2>

        <div className="w-full flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl w-full items-stretch">
    {[
      {
        icon: (
          <div className="flex justify-center items-center mb-6 w-[90px] h-[90px] mx-auto">
            <Image
              src="/Live Chat.png"
              alt="Live Chat"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>
        ),
        title: "Live Chat",
        desc: "Talk to our support bot or agent instantly.",
        availability: "24×7 (Priority for Growth+ plans)",
      },
      {
        icon: (
          <div className="flex justify-center items-center mb-6 w-[90px] h-[90px] mx-auto text-6xl text-blue-800">
            ✉️
          </div>
        ),
        title: "Email Support",
        desc: "Send detailed queries to hr@digihireai.com",
        availability: "Response within 24 hrs",
      },
      {
        icon: (
          <div className="flex justify-center items-center mb-6 w-[90px] h-[90px] mx-auto text-6xl text-blue-800">
            📞
          </div>
        ),
        title: "Phone Support",
        desc: "Speak with our helpdesk directly.",
      },
    ].map((support, i) => (
      <div
        key={i}
        className="p-8 bg-blue-50 rounded-2xl shadow border flex flex-col justify-between items-center text-center hover:shadow-lg transition-all duration-300 min-h-[280px] h-full"
      >
        <div className="text-blue-800">{support.icon}</div>
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            {support.title}
          </h3>
          <p className="text-gray-600 mb-2">{support.desc}</p>
        </div>
        <p className="text-sm text-gray-500 mt-2">{support.availability}</p>
      </div>
    ))}
  </div>
</div>



<div className="flex justify-center">

        <button  className="relative  mt-10 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
          Start Chat
        </button>
        </div>
      </section>

      {/* 📘 Section 5: Step-by-Step Product Guides */}
      <section className="py-10 px-8 md:px-20 bg-blue-100 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-10">
          Step-by-Step Tutorials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto text-left">
          {[
            "🎥 Setting Up Your First AI Interview",
            "📊 Understanding Candidate Scoring Reports",
            "🔄 Managing Recruiter Roles & Permissions",
            "💡 How to Integrate DigiHire with Your ATS",
            "🧾 Billing Portal Walkthrough",
          ].map((guide, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-lg shadow border-l-4 border-blue-500"
            >
              {guide}
            </div>
          ))}
        </div>
            <div className="flex justify-center">

       <button  className="relative  mt-10 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
          View Tutorials Library
        </button>
        </div>
        <p className="mt-4 text-gray-600 text-sm">
          Each tutorial includes screenshots and short video clips for easy
          learning.
        </p>
      </section>

      {/* 🤖 Section 6: AI Chat Assistant */}
      <section className="py-16 px-8 md:px-20 bg-white text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          Experience 24×7 Smart Hiring Assistance
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
         Ask anything about DigiHire AI— from setting up interviews to
analyzing reports. Our AI assistant provides real-time answers and
links to relevant help articles.

        </p>
        <div className="bg-blue-50 p-6 rounded-2xl shadow-md max-w-3xl mx-auto mb-6">
          <ul className="text-left text-gray-700 space-y-2">
            <li>• Show me how to add a new recruiter.</li>
            <li>• Generate an analytics report for interviews.</li>
            <li>• How do I change billing plans?</li>
          </ul>
        </div>
        <div className="flex justify-center">
        <button className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
         Get Help Now
        </button>
        </div>
      </section>

      {/* 📞 Section 7: Contact Support Form */}
    <section className="py-16 px-8 md:px-20 bg-blue-50">
  <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">
    Submit a Support Request
  </h2>

  {/* ✅ Centered the form and removed the image */}
  <div className="flex justify-center">
    <form className="bg-white p-8 rounded-2xl shadow space-y-4 w-full max-w-lg">
      <input placeholder="Name" className="w-full border rounded p-3" />
      <input
        placeholder="Company / Organization"
        className="w-full border rounded p-3"
      />
      <input
        placeholder="Email"
        type="email"
        className="w-full border rounded p-3"
      />
      <select className="w-full border rounded p-3">
        <option>Select Category</option>
        <option>Account</option>
        <option>Billing</option>
        <option>Technical</option>
        <option>Other</option>
      </select>
      <textarea
        placeholder="Message"
        rows="4"
        className="w-full border rounded p-3"
      ></textarea>
      <button className="bg-blue-700 text-white px-6 py-3 rounded-full font-semibold w-full">
        Submit Ticket
      </button>
      <p className="text-gray-500 text-sm text-center">
        You’ll receive a confirmation email with a tracking ID.
      </p>
    </form>
  </div>
</section>


      {/* 🕓 Section 8: Service Level Commitments */}
      <section className="py-16 px-8 md:px-20 bg-white text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-10">
          Our Support Promise
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-[600px] mx-auto border-collapse border border-blue-300 text-gray-700">
            <thead className="bg-blue-100">
              <tr>
                <th className="border border-blue-300 px-4 py-2">Level</th>
                <th className="border border-blue-300 px-4 py-2">
                  Response Time
                </th>
                <th className="border border-blue-300 px-4 py-2">Channels</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Starter Plan", "24 hrs", "Email only"],
                ["Growth Plan", "12 hrs", "Email + Chat"],
                ["Professional Plan", "6 hrs", "Email + Chat + Call"],
                [
                  "Enterprise Plan",
                  "2 hrs",
                  "Priority SLA, Dedicated Manager",
                ],
              ].map((row, i) => (
                <tr key={i}>
                  <td className="border border-blue-300 px-4 py-2 font-semibold">
                    {row[0]}
                  </td>
                  <td className="border border-blue-300 px-4 py-2">
                    {row[1]}
                  </td>
                  <td className="border border-blue-300 px-4 py-2">
                    {row[2]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-gray-600">
          We take pride in being responsive, transparent, and dependable for
          every client.
        </p>
      </section>

     
      {/* 🌍 Section 10: Multi-Language Support */}
      {/* <section className="py-16 px-8 md:px-20 bg-white text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-4">
          We Speak Your Language
        </h2>
        <p className="text-gray-700 mb-6">Support available in:</p>
        <p className="text-lg">
         English | French |  Arabic |  French-Canadian 
        </p>
        <p className="mt-4 text-gray-500 text-sm">
          Our multilingual team ensures you get clear, context-aware assistance
          wherever you are.
        </p>
      </section> */}

      {/* 📩 Section 11: Final CTA */}
      <section className="py-10 px-8 md:px-20 bg-blue-100 text-center text-black">
        <h2 className="text-2xl font-bold mb-4">
          Still Need Help? Let’s Connect.
        </h2>
        <p className="text-lg mb-8">
          Our support team and AI assistant are always ready to ensure you get
          the most out of DigiHire.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button  className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body focus:outline-none focus:ring-0 w-[200px] h-[52px]"
>
            Start Live Chat
          </button>
          <button  className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px]">
            Contact Support
          </button>
        </div>
      </section>

      <FooterSection />
    </>
  );
}
