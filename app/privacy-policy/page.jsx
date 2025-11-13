"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";

export default function PrivacyPolicyPage() {
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

      <main className="bg-white text-gray-900 min-h-screen font-body">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-6 py-10">
          <h1 className="text-2xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-base mb-6">
            This Privacy Policy incorporates and uses the defined terms in the Company’s User Agreement.
          </p>
        </section>

        {/* Policy Content */}
        <section className="max-w-4xl mx-auto px-6 py-6 space-y-8">
          {/* 1. Introduction */}
          <div>
            <h2 className="font-semibold text-black mb-2">1. Introduction</h2>
            <p>
              DigiHireAI.com (“we”, “us”, “our”) is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, store, and protect personal data when you use our AI-powered recruitment platform.
            </p>
            <p>
              By accessing or using DigiHireAI.com, you agree to the terms of this Privacy Policy.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div>
            <h2 className="font-semibold text-black mb-2">2. Information We Collect</h2>

            <h3 className="font-semibold text-black mb-1">2.1 Personal Data (provided by users)</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>Name, email, phone number, designation, company name</li>
              <li>Resume/CV, employment details, qualifications, work history</li>
              <li>Video interview recordings, voice, facial expressions (AI assessment data)</li>
              <li>Payment and billing details (if applicable)</li>
              <li>Communication data (messages, feedback, support chats)</li>
            </ul>

            <h3 className="font-semibold text-black mt-4 mb-1">2.2 Automatically Collected Data</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li>IP address, browser type, device type</li>
              <li>Usage behavior, cookies, session data</li>
              <li>Geo-location (approximate), analytics tracking</li>
            </ul>

            <h3 className="font-semibold text-black mt-4 mb-1">2.3 Third-Party Data</h3>
            <p>Collected when integrated with:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Calendly, Zoom, Google Meet, Microsoft Teams</li>
              <li>Google Drive, Dropbox, email services</li>
              <li>Payment gateways, ATS systems, background verification tools</li>
            </ul>
          </div>

          {/* 3. How We Use Your Data */}
          <div>
            <h2 className="font-semibold text-black mb-2">3. How We Use Your Data</h2>
            <p>We use collected data to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>✔ Deliver AI hiring insights and interview analysis</li>
              <li>✔ Improve our platform, algorithms, and user experience</li>
              <li>✔ Schedule interviews and send notifications</li>
              <li>✔ Perform analytics, compliance, and security monitoring</li>
              <li>✔ Process payments and subscriptions</li>
              <li>✔ Support HR hiring, candidate screening, and recruitment activities</li>
            </ul>
          </div>

          {/* 4. AI & Automated Decision Making */}
          <div>
            <h2 className="font-semibold text-black mb-2">4. AI & Automated Decision Making</h2>
            <p>DigiHireAI.com uses AI analysis including:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Speech sentiment, tone, personality inference</li>
              <li>Resume parsing, skill extraction, experience scoring</li>
              <li>AI interview evaluation and recommendation engine</li>
            </ul>
            <p className="italic">⚠ AI results are assistive and do not guarantee hiring decisions. Final decisions lie with employers.</p>
          </div>

          {/* 5. Data Sharing & Disclosure */}
          <div>
            <h2 className="font-semibold text-black mb-2">5. Data Sharing & Disclosure</h2>
            <p>We may share data with:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Trusted third-party service providers</li>
              <li>Cloud storage and AI processing engines</li>
              <li>Legal authorities when required by law</li>
              <li>Employers reviewing candidate profiles and interviews</li>
            </ul>
            <p className="italic">We do not sell personal data to external advertisers.</p>
          </div>

          {/* 6. Data Storage & Security */}
          <div>
            <h2 className="font-semibold text-black mb-2">6. Data Storage & Security</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Data is stored using encrypted cloud servers</li>
              <li>Access is role-based and monitored</li>
              <li>Security protocols include SSL, firewall, and encrypted backups</li>
            </ul>
          </div>

          {/* 7. Cookies & Tracking */}
          <div>
            <h2 className="font-semibold text-black mb-2">7. Cookies & Tracking</h2>
            <p>We use cookies for:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Login/session management</li>
              <li>Personalized experience</li>
              <li>Analytics & performance tracking</li>
            </ul>
            <p className="italic">Users can disable cookies through browser settings.</p>
          </div>

          {/* 8. Your Rights */}
          <div>
            <h2 className="font-semibold text-black mb-2">8. Your Rights</h2>
            <p>Users can request to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>✔ Access, update or delete personal data</li>
              <li>✔ Withdraw consent</li>
              <li>✔ Download stored information</li>
              <li>✔ Restrict processing</li>
            </ul>
            <p className="italic">
              Requests can be sent to: <a href="mailto:info@digihelic.com" className="text-blue-700 hover:text-blue-900">info@digihelic.com</a>
            </p>
          </div>

          {/* 9. Data Retention */}
          <div>
            <h2 className="font-semibold text-black mb-2">9. Data Retention</h2>
            <p>Your data is retained as long as:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Your account is active</li>
              <li>Required for compliance, disputes, or legal obligations</li>
            </ul>
          </div>

          {/* 10. Third-Party Links */}
          <div>
            <h2 className="font-semibold text-black mb-2">10. Third-Party Links</h2>
            <p>We are not responsible for external websites linked through DigiHireAI.com.</p>
          </div>

          {/* 11. Updates to Policy */}
          <div>
            <h2 className="font-semibold text-black mb-2">11. Updates to Policy</h2>
            <p>We may update this policy periodically. Continued use implies consent to updated terms.</p>
          </div>

          {/* 12. Contact Us */}
          <div>
            <h2 className="font-semibold text-black mb-2">12. Contact Us</h2>
            <p>info@digihelic.com</p>
            <p>DigiHelic Solutions Pvt. Ltd., Pune, India</p>
            <p>Effective Date: 18th December 2025</p>
            <p>Website: <a href="https://DigiHireAI.com" className="text-blue-700 hover:text-blue-900">https://DigiHireAI.com</a></p>
            <p>Owned by: DigiHelic Solutions Pvt. Ltd.</p>
            <p>CIN: U72900PN2019PTC183778</p>
            <p>GSTIN: 27AAHCD2149K1ZH</p>
            <p>Support Email: info@digihelic.com</p>
          </div>

          {/* CTA Section */}
          <section className="max-w-4xl mx-auto py-12 border-t border-gray-300">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Empower Your Hiring with AI.
            </h2>
            <p className="text-base text-gray-700 mb-6">
              Discover how DigiHire transforms recruitment with data-driven insights
              and smart automation — built for modern HR teams.
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
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
                  className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
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
        </section>

        {/* Footer */}
        <FooterSection />
      </main>
    </>
  );
}
