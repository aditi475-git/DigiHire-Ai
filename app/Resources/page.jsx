"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";
import { Lightbulb, Settings, BarChart, Cloud } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  // ✅ Calendly popup state
  const [showCalendly, setShowCalendly] = useState(false);

  // ✅ Open Calendly popup
  const handleBookDemo = (e) => {
    e.preventDefault();
    setShowCalendly(true);
  };

  // ✅ Close Calendly popup
  const closeCalendlyPopup = () => {
    setShowCalendly(false);
  };

  // ✅ FAQ Data
  const faqs = [
    {
      q: "Are the resources free to access?",
      a: "Yes, all DigiHire Knowledge Hub resources are free to explore for registered users.",
    },
    {
      q: "Can I download the guides offline?",
      a: "Absolutely! Most guides and playbooks are downloadable as PDFs for offline reading.",
    },
    {
      q: "How do I attend a DigiHire webinar?",
      a: "You can register through our 'Webinars & Videos' section or join via email invites after subscribing.",
    },
    {
      q: "Will I receive new updates automatically?",
      a: "Yes! Subscribers receive monthly updates with new articles, case studies, and reports.",
    },
    {
      q: "Can I share these reports internally with my HR team?",
      a: "Of course! We encourage sharing insights to help your team hire smarter together.",
    },
  ];

  // ✅ Newsletter state and logic
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ✅ FIXED FUNCTION NAME
  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) return setMessage("Please enter a valid email.");

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/sendSubscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubscribed(true);
        setMessage("✅ Subscribed successfully!");
      } else {
        setMessage("❌ Failed to send. Try again later.");
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      {/* 🏠 Section 1: Hero — Knowledge Hub Introduction */}
<section className=" h-[400px] relative bg-gradient-to-br from-sky-100 via-white to-white py-10 px-8 md:px-20 overflow-hidden flex items-center justify-center">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 relative z-10 text-center md:text-left">
    {/* Left: Text Content */}
    <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
      <h1 className="text-4xl md:text-2xl font-bold text-gray-800 mb-4">
        Learn. Innovate. Hire Smarter.
      </h1>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl">
        Explore insights, research, and best practices that help global
        teams simplify hiring, improve fairness, and scale recruitment
        intelligently with DigiHire.
      </p>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Stay ahead of the curve with expert articles, case studies, and
        guides on AI in hiring, HR automation, and digital transformation.
      </p>

      <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
        <button
          type="button"
          className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
        >
          Explore All Resources
        </button>

        <button
          type="button"
          className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body focus:outline-none focus:ring-0 w-[200px] h-[52px] whitespace-nowrap flex items-center justify-center"
        >
          Subscribe for Updates
        </button>
      </div>
    </div>

    {/* Right: Image */}
    <div className="flex-1 flex justify-center md:justify-end">
      <img
        src="/Modern illustration .png"
        alt="Modern Illustration"
        className="w-full max-w-md h-auto object-contain"
      />
    </div>
  </div>
</section>



      {/* 🧩 Section 2: Resource Categories Overview */}
      <section className="py-10 px-8 md:px-20 bg-blue-100">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-600">
            Discover expert insights, real-world examples, and practical guides
            crafted to help your team hire smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "📰",
              title: "Articles & Insights",
              desc: "Expert views on AI, automation, and future hiring trends.",
            },
            {
              icon: "📊",
              title: "Case Studies",
              desc: "Real stories of how DigiHire transforms recruitment.",
            },
            {
              icon: "📘",
              title: "Guides & Playbooks",
              desc: "Step-by-step resources for smarter hiring and HR optimization.",
            },
            {
              icon: "🎓",
              title: "Webinars & Videos",
              desc: "Learn directly from HR innovators and DigiHire experts.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition text-center border border-gray-100"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>


        <div className="flex justify-center text-center mt-10">
  <button
    type="button"
    className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
    Explore All Articles
  </button>
</div>


      
      </section>
 {/* 🧠 Section 3: Featured Articles */}
      <section className="py-10 px-8 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Featured Articles
          </h2>
          <p className="text-gray-600">
            Explore top insights and trends from DigiHire’s thought leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "How AI Interviews Are Transforming Talent Acquisition",
              desc: "Discover how companies are using AI to cut hiring time by 70%.",
            },
            {
              title: "Building a Fair Hiring Process with Technology",
              desc: "Understand how bias-free AI tools can help you hire inclusively.",
            },
            {
              title: "From Resumes to Real Skills — The Future of Hiring",
              desc: "Learn why video interviews reveal more than paper resumes.",
            },
          ].map((article, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition text-left border border-gray-100"
            >
              <div className="text-lg font-semibold text-gray-800 mb-2">
                {article.title}
              </div>
              <p className="text-gray-600 mb-4">{article.desc}</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Read More →
              </button>
            </div>
          ))}
        </div>

         <div className="flex justify-center text-center mt-10">
          <button
  type="button"
  className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
  View All Blog Posts
</button>

        </div>
      </section>

      {/* 📈 Section 4: Case Studies & Success Stories */}
      <section className="py-10 px-8 md:px-20 bg-blue-100">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Real Results. Real Impact.
          </h2>
          <p className="text-gray-600">
            See how global teams are achieving success with DigiHire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              company: "🏢 IT Services Company (India)",
              summary:
                "Reduced time-to-hire by 65% using AI-led video interviews.",
            },
            {
              company: "🏥 Healthcare Startup (UAE)",
              summary:
                "Improved candidate quality by 40% with automated analytics.",
            },
            {
              company: "💼 Consulting Firm (Europe)",
              summary:
                "Conducted 500+ interviews remotely across 4 countries.",
            },
          ].map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-left border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {caseStudy.company}
              </h3>
              <p className="text-gray-600 mb-4">{caseStudy.summary}</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                View Full Story →
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 flex justify-center">
         <button
  type="button"
  onClick={() => (window.location.href = "/CaseStudies")}
   className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
  Read Case Studies
</button>

        </div>
      </section>

      {/* 💡 Section 5: Guides & Playbooks */}
      <section className="py-10 px-8 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Guides for Modern Recruiters
          </h2>
          <p className="text-gray-600">
            Practical playbooks to improve efficiency and fairness in hiring.
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto text-left">
          {[
            "📘 The AI Hiring Playbook 2025 — How to deploy AI safely in recruitment",
            "📘 The Recruiter’s Productivity Guide — Reduce manual work by 50%",
            "📘 Candidate Experience Handbook — Building trust with automation",
          ].map((guide, index) => (
            <div
              key={index}
              className="bg-gray-50 p-5 rounded-xl shadow hover:shadow-lg transition flex justify-between items-center"
            >
              <p className="text-gray-800">{guide}</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                Download PDF
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 flex justify-center">
         <button
  type="button"
 className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >

  Download Guides
</button>

        </div>
      </section>

      {/* 🎥 Section 6: Webinars & Videos */}
      <section className="py-10 px-8 md:px-20 bg-blau-100">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Watch & Learn from Experts
          </h2>
          <p className="text-gray-600">
            Learn directly from HR innovators and AI leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "🎥 Webinar: The Future of AI in Recruitment",
            "🎥 Tutorial: How to Set Up Your First AI Interview",
            "🎥 Panel: Ethical AI in Hiring – Balancing Speed & Fairness",
          ].map((video, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <p className="text-gray-800 mb-4">{video}</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">
                ▶ Play Video
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 flex justify-center">
          <button
  type="button"
   className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
  View All Videos
</button>

        </div>
      </section>

      {/* 🔍 Section 7: Research & Data Reports */}
      <section className="py-10 px-8 md:px-20 bg-white text-black">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold mb-4">Data That Drives Decisions</h2>
          <p className="text-black">
            DigiHire publishes proprietary research on global hiring trends and
            AI efficiency metrics to help businesses make informed decisions.
          </p>
        </div>

        <ul className="max-w-3xl mx-auto space-y-4 text-center">
          <li> Annual Hiring Trends Report</li>
          <li> Global Recruiter Productivity Index</li>
          <li> Candidate Experience Benchmark Survey</li>
        </ul>

        <div className="text-center mt-10 flex justify-center">
          <button
  type="button"
   className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
  Access Reports
</button>

        </div>
      </section>

      {/* 🗣️ Section 8: Testimonials */}
      <section className="py-10 px-8 md:px-20 bg-blue-100">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            What HR Leaders Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              quote:
                "DigiHire’s insights helped us modernize our hiring completely — it’s like having a data scientist on your HR team.",
              author: "— VP HR, IT Company",
            },
            {
              quote:
                "Their guides on AI fairness and diversity are among the most practical I’ve seen.",
              author: "— Talent Acquisition Manager, BFSI Sector",
            },
          ].map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition text-left border border-gray-100"
            >
              <p className="text-gray-700 italic mb-3">“{t.quote}”</p>
              <p className="text-gray-800 font-semibold">{t.author}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 flex justify-center">
          <button
  type="button"
  className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
  Join Our Next Webinar
</button>

        </div>
      </section>

      {/* ❓ Section 9: FAQ */}
      <section className="py-10 px-8 md:px-20 bg-white">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find quick answers about learning, access, and using DigiHire resources.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-sm bg-white">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <span className="text-gray-800 font-medium">{faq.q}</span>
                <span className="text-blue-600 text-xl">{openFAQ === index ? "−" : "+"}</span>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10 flex justify-center">
           <Link href="/Support">
      <button
        type="button"
        className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
        Contact Support
      </button>
    </Link>

        </div>
      </section>

      {/* 📧 Section 10: Newsletter Subscription CTA */}
    <section className="py-16 px-8 text-center bg-white">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          DigiHire Knowledge Hub
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700">
          Explore expert insights, HR automation strategies, and AI-powered hiring
          trends to transform your recruitment process.
        </p>
      </section>

      {/* ✅ Newsletter Section (Fixed handleSubscribe usage) */}
      <section className="py-10 px-6 bg-blue-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-4">
            Stay Ahead in the Future of Hiring
          </h2>
          <p className="mb-8 text-black">
            Get the latest HR tech insights, AI trends, and hiring strategies — straight
            to your inbox once a month.
          </p>

          {/* ✅ FIXED HERE */}
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <input
              type="email"
              placeholder="📩 Enter your email address"
              className="px-6 py-3 w-full sm:w-2/3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading || subscribed}
            />

            <button
              type="submit"
              className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
              disabled={loading}
            >
              {loading
                ? "Sending..."
                : subscribed
                ? "Unsubscribe"
                : "Subscribe Now"}
            </button>
          </form>

          {message && <p className="text-sm text-gray-600 mt-3">{message}</p>}

          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. No spam.
          </p>
        </div>
      </section>


      {/* 📞 Section 11: Final CTA Banner */}
      <section className="py-10 px-8 bg-white text-black text-center">
        <h2 className="text-2xl font-bold mb-4">
          Experience the Future of Hiring with DigiHire.
        </h2>
        <p className="mb-8 text-black-100">
          Apply the knowledge you’ve gained — and see AI recruitment in action.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
           <button
  className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body focus:outline-none focus:ring-0 w-[200px] h-[52px]"
>
  Start Free Trial
</button>
          <div className="relative flex flex-col items-center">
      {/* Book Demo link button */}
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

      <FooterSection />
    </>
  );
}