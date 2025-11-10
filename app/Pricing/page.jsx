"use client";

import React, { useState } from "react"; 
import Image from "next/image";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";

export default function PricingPage() {
  // ✅ FAQ toggle logic (existing)
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
  
  return (
    <>
      <Navbar />

     {/* 🏠 Section 1: Hero / Pricing Banner */}
<section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-10 px-8 md:px-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-10">
    {/* Left side - text */}
    <div className="max-w-xl text-center md:text-left md:flex-1">
      <h1 className="text-4xl md:text-2xl font-bold mb-6 leading-tight">
        Flexible Pricing for Every Stage of Hiring
      </h1>
      <p className="text-lg text-gray-100 mb-8 leading-relaxed">
        Whether you’re hiring for five roles or five hundred, DigiHire’s
        AI-driven recruitment plans scale with your business. Choose a
        plan that fits your growth and pay only for what you use.
      </p>
      <div className="flex flex-wrap justify-center md:justify-start gap-4">
        <button className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body focus:outline-none focus:ring-0 w-[200px] h-[52px]"
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
    </div>

    {/* Right side - illustration */}
    <div className="flex justify-center md:justify-end md:flex-1">
      <Image
        src="/pricing-illustration.png"
        alt="Pricing Illustration"
        width={820}
        height={820}
        className="opacity-90 w-full max-w-[380px] h-auto"
      />
    </div>
  </div>
</section>


    {/* ⚙️ Section 2: Pricing Plans */}
<section className="py-10 px-8 md:px-20 bg-gray-50">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-3xl md:text-2xl font-bold text-gray-800 mb-4">
      Our Plans for Every Hiring Need
    </h2>
  </div>

  {/* ✅ Pricing Cards - Equal height and capsule buttons */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
    {[
      {
        title: "Starter",
        price: "₹6,499 / month",
        desc: "Ideal for startups & small teams",
        features: [
          "120 AI Interviews / month",
          "2 Recruiter Seats",
          "60 GB Secure Storage",
          "Job & Interview Management",
          "Basic Analytics Reports",
          "Automated Scheduling",
          "Email Support",
        ],
        button: "Choose Starter",
      },
      {
        title: "Growth",
        price: "₹16,999 / month",
        desc: "Perfect for expanding companies",
        features: [
          "600 AI Interviews / month",
          "5 Recruiter Seats",
          "180 GB Storage",
          "Advanced Analytics & Insights",
          "ATS Integrations (SAP / Oracle / Workday)",
          "Team Collaboration Dashboard",
          "Priority Email Support",
        ],
        button: "Get Growth Plan",
      },
      {
        title: "Professional",
        price: "₹34,999 / month",
        desc: "For agencies & large teams",
        features: [
          "2,400 AI Interviews / month",
          "10 Recruiter Seats",
          "500 GB Storage",
          "API Access for Custom Integration",
          "Advanced Reporting Suite",
          "Role-based Access Control",
          "Dedicated Account Manager",
        ],
        button: "Select Professional",
      },
      {
        title: "Enterprise",
        price: "Custom Pricing",
        desc: "For enterprises hiring globally or in volume",
        features: [
          "Unlimited AI Interviews",
          "Custom Recruiter Seats & Storage",
          "Enterprise SLA & Premium Support",
          "Custom Workflows & Integrations",
          "Dedicated Customer Success Manager",
          "White-labeled Branding Option",
        ],
        button: "Contact Sales",
      },
    ].map((plan, i) => (
      <div
        key={i}
        className="bg-white rounded-2xl shadow-md p-8 text-left hover:shadow-xl hover:ring-2 hover:ring-blue-300 transition-all duration-300 flex flex-col justify-between"
      >
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.title}</h3>
          <p className="text-gray-600 mb-4">{plan.price}</p>
          <p className="text-sm text-gray-500 mb-6">{plan.desc}</p>
          <ul className="text-gray-700 space-y-2 mb-6">
            {plan.features.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </div>

        {/* ✅ Unified Capsule Buttons */}
        <button
          className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap mx-auto mt-auto"
        >
          {plan.button}
        </button>
      </div>
    ))}
  </div>
</section>



{/* 🧩 Section 3: Add-ons & Overages */}
<section className="py-10 bg-blue-100">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
    <h2 className="text-2xl font-bold text-gray-800">
      Customize Your Plan
    </h2>
    <p className="text-gray-600 mt-3">
      Add flexibility as you grow — only pay for what you need.
    </p>
  </div>

  <div className="max-w-5xl mx-auto overflow-x-auto">
    <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden mx-auto text-center">
      <thead className="bg-blue-600 text-white">
  <tr>
    <th className="py-4 px-6 text-lg font-semibold text-center">Add-on</th>
    <th className="py-4 px-6 text-lg font-semibold text-center">Cost / Rate</th>
    <th className="py-4 px-6 text-lg font-semibold text-center">Details</th>
  </tr>
</thead>

      <tbody className="text-gray-700">
        {[
          ["Extra AI Interview", "₹75 / interview", "Beyond included quota"],
          ["Extra Recruiter Seat", "₹1,499 / user / month", "Add more recruiters anytime"],
          ["Additional Storage", "₹125 / GB / month", "Expand cloud space instantly"],
          ["Premium Support", "+10–25% of plan", "Faster SLAs, priority queue"],
          ["Proctoring / Anti-Cheat", "Custom", "For verified, integrity-based assessments"],
          ["White-label Branding", "Custom", "Add your logo, domain, and theme"],
        ].map(([name, cost, details], i) => (
          <tr
            key={i}
            className={`border-t ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <td className="py-4 px-6 text-center">{name}</td>
            <td className="py-4 px-6 text-center">{cost}</td>
            <td className="py-4 px-6 text-center">{details}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="text-center mt-10">
    <button
  className="bg-blue-700 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full shadow-md transition min-w-[200px] text-center whitespace-nowrap"
>
  Talk to Sales for Custom Setup
</button>

  </div>
</section>


      {/* 🔁 Section 4: What’s Included in Every Plan */}
      <section className="py-10 px-8 md:px-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-2xl font-bold text-gray-800 mb-6">
            All Plans Include
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          {[
            "Job & Interview Management",
            "AI Video Interview Engine",
            "Candidate Ranking & Analytics",
            "Automated Scheduling",
            "Secure Cloud Storage",
            "ATS / HRMS Integration",
            "Team Collaboration Tools",
            "Standard Support",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
              <span className="text-green-600 text-xl"></span>
              <p className="text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

    {/* 📈 Section 5: ROI / Value Comparison */}
<section className="py-10 bg-blue-100">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4 sm:px-6 lg:px-8">
    <div className="flex-1">
      <h2 className="text-3xl md:text-2xl font-bold text-gray-800 mb-6 text-center">
        How DigiHire Pays for Itself
      </h2>

      <div className="max-w-4xl mx-auto overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden text-center border border-gray-200 mb-6">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-lg font-semibold text-center">Metric</th>
              <th className="py-3 px-4 text-lg font-semibold text-center">Traditional Hiring</th>
              <th className="py-3 px-4 text-lg font-semibold text-center">With DigiHire</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {[
              ["Time to Screen", "5–7 days", "Within hours"],
              ["Time-to-Hire", "30–40 days", "8–15 days"],
              ["Cost per Candidate", "High", "60–70% lower"],
              ["Bias & Errors", "Frequent", "Virtually eliminated"],
              ["Recruiter Effort", "100% manual", "70% automated"],
            ].map(([metric, oldVal, newVal], i) => (
              <tr
                key={i}
                className={`border-t ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
              >
                <td className="py-3 px-4 font-medium text-center">{metric}</td>
                <td className="py-3 px-4 text-center">{oldVal}</td>
                <td className="py-3 px-4 text-green-600 font-semibold text-center">
                  {newVal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-gray-600 mb-6 text-center max-w-2xl mx-auto">
        DigiHire reduces screening time and improves accuracy — saving
        hundreds of recruiter hours every month.
      </p>

      <div className="text-center">
       
      </div>
    </div>

    {/* Image (optional placeholder for future use)
    <div className="flex-1 flex justify-center">
      <Image
        src="/roi-chart.png"
        alt="ROI Chart"
        width={450}
        height={350}
        className="rounded-lg shadow-md"
      />
    </div> */}
  </div>
</section>

      {/* 🌎 Section 6: Global Plans */}
<section className="py-10 px-6 md:px-20 bg-gray-50 text-center">
  <div className="max-w-5xl mx-auto mb-10">
    <h2 className="text-3xl md:text-2xl font-bold text-gray-800 mb-4">
      Built for Global Scale
    </h2>
    <p className="text-gray-600 text-lg">
      Flexible plans designed for businesses of all sizes — from startups to global enterprises.
    </p>
  </div>

  <div className="overflow-x-auto max-w-4xl mx-auto rounded-2xl shadow-lg bg-white">
    <table className="min-w-full border-collapse text-center table-fixed">
      <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <tr>
          <th className="py-4 px-6 text-lg md:text-base font-semibold rounded-tl-2xl w-1/3">
            Tier
          </th>
          <th className="py-4 px-6 text-lg md:text-base font-semibold w-1/3">
            USD / month
          </th>
          <th className="py-4 px-6 text-lg md:text-base font-semibold rounded-tr-2xl w-1/3">
            Ideal For
          </th>
        </tr>
      </thead>

      <tbody className="text-gray-700">
        {[
          ["Basic", "$89", "Startups & small businesses"],
          ["Standard", "$249", "Growing companies"],
          ["Pro", "$599", "Large teams"],
          ["Enterprise", "Custom", "Global corporations"],
        ].map(([tier, price, ideal], i) => (
          <tr
            key={i}
            className={`border-b last:border-none hover:bg-blue-50 transition-colors duration-300 ${
              i % 2 === 0 ? "bg-gray-50" : "bg-white"
            }`}
          >
            <td className="py-4 px-6 font-medium text-gray-900 text-center align-middle">
              {tier}
            </td>
            <td className="py-4 px-6 text-gray-700 text-center align-middle">
              {price}
            </td>
            <td className="py-4 px-6 text-gray-600 text-center align-middle">
              {ideal}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <p className="text-center text-gray-600 mt-8 max-w-2xl mx-auto">
    All global plans include{" "}
    <span className="font-semibold text-blue-600">compliance</span>,{" "}
    <span className="font-semibold text-blue-600">localization</span>, and{" "}
    <span className="font-semibold text-blue-600">international data residency</span> support.
  </p>
</section>



      {/* 💬 Section 7: Testimonials */}
      <section className="py-10 px-8 md:px-20 bg-blue-100">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-2xl font-bold text-gray-800 mb-8">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            [
              "“DigiHire reduced our screening time by 80% while improving candidate quality.”",
              "HR Head, IT Services Company",
            ],
            [
              "“A game changer for our hiring process — fast, fair, and data-backed.”",
              "Talent Manager, Consulting Firm",
            ],
            [
              "“The collaboration tools alone saved us countless hours.”",
              "Recruitment Lead, Enterprise Client",
            ],
          ].map(([quote, name], i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl shadow-sm border hover:shadow-md transition"
            >
              <p className="text-gray-700 text-lg italic mb-4">{quote}</p>
              <p className="text-gray-900 font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 💡 Section 8: FAQ (Pricing-Specific) */}
      <section className="py-10 px-8 md:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-2xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {[
            "Do you offer a free trial?",
            "What happens if I exceed my interview limit?",
            "Can I switch plans anytime?",
            "Are payments monthly or annual?",
            "Do you offer refunds or pro-rated billing?",
            "Do you provide enterprise onboarding support?",
          ].map((question, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {question}
                </h3>
                <span className="text-blue-600 text-2xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-base leading-relaxed">
                  {
                    {
                      0: "Yes! We offer a 14-day free trial so you can explore all DigiHire features before committing.",
                      1: "If you exceed your quota, additional interviews will be billed as add-ons based on your plan.",
                      2: "Absolutely! You can upgrade, downgrade, or pause your plan at any time.",
                      3: "We support both monthly and annual billing options for maximum flexibility.",
                      4: "Refunds are not issued, but we can apply pro-rated credits for upgrades or renewals.",
                      5: "Yes, enterprise clients receive full onboarding, dedicated account managers, and training sessions.",
                      
                    }[index]
                  }
                </p>
              )}
            </div>
          ))}
        </div>

       <div className="text-center mt-10">
        <div className="flex justify-center">
 <button
  type="button"
  className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
>
  Talk to Our Sales Team
</button>

</div>
        </div>
      </section>

      {/* 📞 Section 9: Final CTA Banner */}
     <section className="bg-blue-100 text-black-900 py-20 px-8 text-center">
  <h2 className="text-3xl md:text-2xl font-bold mb-6">
    Start Hiring Smarter Today
  </h2>
  <p className="text-lg text-blue-800 max-w-2xl mx-auto mb-10 leading-relaxed">
    Simplify your recruitment process with AI-driven video interviews and
    automated analytics. Get started with a free trial or schedule a
    personalized demo.
  </p>

  <div className="flex flex-wrap justify-center gap-4 mt-6">
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