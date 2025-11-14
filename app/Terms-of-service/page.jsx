"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";

export default function TermsOfServicePage() {
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
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main className="bg-white text-gray-900 min-h-screen font-body">

        {/* Terms Content */}
        <section className="max-w-5xl mx-auto py-12 px-6 md:px-20 leading-relaxed text-justify text-black">
   <h1 className="text-2xl font-bold mb-4">
    Terms of Service
  </h1>

           <h2 className="font-semibold text-black mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="mb-8">
            By accessing DigiHireAI.com, you agree to comply with these Terms of
            Service. If you disagree, do not use the platform.
          </p>

           <h2 className="font-semibold text-black mb-2">
            2. Platform Description
          </h2>
          <ul className="list-disc ml-6 mb-8">
            <li>AI interview scheduling & evaluation</li>
            <li>Resume parsing & screening</li>
            <li>Candidate analytics & insights</li>
            <li>Recruitment automation workflows</li>
          </ul>

         <h2 className="font-semibold text-black mb-2">
            3. Account & User Responsibilities
          </h2>
          <ul className="list-disc ml-6 mb-8">
            <li> Provide accurate information</li>
            <li> Maintain confidentiality of login details</li>
            <li> Not misuse or reverse-engineer the platform</li>
            <li> Not upload harmful or illegal content</li>
          </ul>
          <p className="mb-8">
            Accounts may be suspended for violations of these terms.
          </p>

           <h2 className="font-semibold text-black mb-2">
            4. Subscription & Payments
          </h2>
          <ul className="list-disc ml-6 mb-8">
            <li>DigiHireAI may offer 14 free trials, subscriptions, and paid plans.</li>
            <li>Pricing may change with prior notice.</li>
          <li>
  Payments are <span className="text-black font-semibold">non-refundable</span> except where required by law.
</li>

          </ul>

           <h2 className="font-semibold text-black mb-2">
            5. AI Assessments Disclaimer
          </h2>
          <ul className="list-disc ml-6 mb-8">
            <li>AI results are  <span className="text-black font-semibold">recommendations</span>, not legal or hiring guarantees.</li>
            <li>The platform is not liable for recruitment decisions made using AI insights.</li>
          </ul>

           <h2 className="font-semibold text-black mb-2">
            6. Intellectual Property
          </h2>
          <p className="mb-8">
            All content, trademarks, code, UI, AI algorithms, and branding are
            owned by <span className="text-black font-semibold">DigiHelic Solutions Pvt. Ltd.</span> You may not copy, distribute,
            or replicate any part of the platform without written permission.
          </p>

           <h2 className="font-semibold text-black mb-2">
            7. Data & Content Usage
          </h2>
          <p className="mb-8">
            Users grant DigiHireAI a <span className="text-black font-semibold">limited license</span> to process uploaded resumes,
            interviews, and data for recruitment analytics. We do<span className="text-black font-semibold">not claim
            ownership</span> of your data.
          </p>

           <h2 className="font-semibold text-black mb-2">
            8. Prohibited Activities
          </h2>
          <ul className="list-disc ml-6 mb-8">
            <li> Upload viruses, malware, or harmful scripts</li>
            <li> Perform hacking, scraping, or unauthorized access</li>
            <li> Misuse AI for fraud, discrimination, or illegal hiring practices</li>
          </ul>

           <h2 className="font-semibold text-black mb-2">
            9. Limitation of Liability
          </h2>
          <p className="mb-8">
            DigiHireAI is not liable for:
            <br />• Hiring outcomes
            <br />• Data loss due to unauthorized access
            <br />• Business interruption or indirect damages
            <br />Maximum liability is limited to the amount paid by the user (if applicable).
          </p>

           <h2 className="font-semibold text-black mb-2">10. Termination</h2>
          <p className="mb-8">
            We may suspend or terminate accounts if terms are violated, without refund.
          </p>

           <h2 className="font-semibold text-black mb-2">11. Governing Law</h2>
          <p className="mb-8">
            These terms are governed by the laws of <span className="text-black font-semibold">India.</span> Jurisdiction lies in <span className="text-black font-semibold">Pune, Maharashtra.</span>
          </p>

           <h2 className="font-semibold text-black mb-2">12. Changes to Terms</h2>
          <p className="mb-8">
            We may update terms at any time. Continued usage confirms acceptance.
          </p>

           <h2 className="font-semibold text-black mb-2">13. Contact</h2>
          <p className="mb-8">
            info@digihelic.com <br />
            DigiHelic Solutions Pvt. Ltd., Pune, India <br />
          </p>
          <div>
            <h2 className="font-semibold text-black mb-2">13.Company Information</h2>

            <p>
              Website:{" "}
              <a href="https://DigiHireAI.com" className="text-blue-700 hover:text-blue-900">
                https://DigiHireAI.com
              </a>
            </p>

            <p>Owned By: DigiHelic Solutions Pvt. Ltd.</p>
            <p>CIN: U72900PN2019PTC183778</p>
            <p>GSTIN: 27AAHCD2149K1ZH</p>
            <p>Support Email: info@digihelic.com</p>
          </div>
          
        </section>

        

        {/* CTA Section */}
  <section className="max-w-4xl mx-auto py-12 border-t border-gray-300">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Empower Your Hiring with AI.
          </h2>
          <p className="text-base text-gray-700 mb-6">
            Discover how DigiHire transforms recruitment with data-driven
            insights and smart automation — built for modern HR teams.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body focus:outline-none focus:ring-0 w-[200px] h-[52px]">
              Start Free Trial
            </button>

            <div className="relative flex flex-col items-center">
              <a
                href="https://calendly.com/hr-digihireai/30min"
                onClick={handleBookDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
              >
                Book Demo
              </a>

              {/* Calendly Popup Modal */}
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
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterSection />
    </>
  );
}
