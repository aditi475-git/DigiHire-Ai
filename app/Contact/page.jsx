"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(
      "✅ Thank you for reaching out — our team will connect with you shortly!"
    );
    setFormData({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    });
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

      {/* 🏠 Section 1: Hero Banner */}
      <section className="bg-white py-10 px-8 md:px-20 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10">
        {/* Left: Text Section */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-center space-y-6 text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800 leading-tight">
            Let’s Build Your Smarter Hiring Future.
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            We’d love to help you simplify your hiring process with DigiHire’s AI-powered platform.
            Whether you’re a recruiter, partner, or enterprise, our team is ready to connect.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
           <div className="relative flex flex-col items-center">
      {/* Book Demo link */}
      <a
        href="https://calendly.com/hr-digihireai/30min"
        onClick={handleBookDemo} // ✅ opens popup
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

            <button className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body focus:outline-none focus:ring-0 w-[200px] h-[52px]"
>
              Start Free Trial
            </button>
          </div>
        </div>

        {/* Right: Image Section */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src="/Connect with Confidence.png"
            alt="Connect with Confidence"
            width={500}
            height={400}
            className="rounded-2xl drop-shadow-lg object-contain"
          />
        </div>
      </section>


      {/* 🤝 Section 2: Quick Contact Options */}
      <section className="py-10 px-8 md:px-20 bg-blue-100 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-10">Reach the Right Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "📞",
              title: "Sales & Partnerships",
              desc: "For demos, pricing, and partnership inquiries.",
              email: "sales@digihire.tech",
            },
            {
              icon: "🤝",
              title: "Customer Support",
              desc: "For technical help, login issues, or billing.",
              email: "support@digihire.tech",
            },
            {
              icon: "🧩",
              title: "Media & Collaborations",
              desc: "For PR, press, or academic collaborations.",
              email: "media@digihire.tech",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-3">{item.desc}</p>
              <p className="text-blue-600 font-medium">{item.email}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
            Send Message Now
          </button>
        </div>
      </section>

      {/* 🧾 Section 3: Contact Form */}
      <section className="py-10 px-8 md:px-20 bg-white flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl w-full bg-gray-50 rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="company"
              placeholder="Company / Organization"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number (optional)"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Inquiry Type</option>
              <option value="Demo">Demo</option>
              <option value="Support">Support</option>
              <option value="Partnership">Partnership</option>
              <option value="General">General</option>
            </select>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full transition shadow-md min-w-[200px]"
            >
              Submit Inquiry
            </button>
          </form>

          {successMessage && (
            <p className="mt-4 text-green-600 font-medium">{successMessage}</p>
          )}
          <p className="text-sm text-gray-500 mt-4">
            ✅ All inquiries receive a response within 24 business hours.
            <br />🔒 Data is protected by DigiHire’s secure cloud infrastructure.
          </p>
        </div>
      </section>


      {/* 🌐 Section 4: Office Locations */}
      <section className="py-10 px-8 md:px-20 bg-blue-100 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Our Offices Around the World
        </h2>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
            {[
              {
                country: "India (Headquarters)",
                address: "DigiHelic Solutions Pvt. Ltd., Pune, Maharashtra",
                details: "info-india@digihelic.com ",
                flag: "/India.png",
              },
              {
                country: "UAE",
                address: "Digi Helic Information Technology Consultants L.L.C  , Dubai - UAE",
                details: "info-uae@digihelic.com",
                flag: "/UAE.png",
              },
              {
                country: "USA",
                address: "DigiHelic LLC , WY, USA",
                details: "info-usa@digihelic.com",
                flag: "/USA.png",
              },
              {
                country: "Canada",
                address: "Partner Network, Toronto",
                details: "info-canada@digihelic.com",
                flag: "/Canada.png",
              },
            ].map((office, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition flex flex-col justify-between p-6 h-[250px] text-center"
              >
                {/* Country name */}
                <h3 className="text-md font-semibold text-gray-800 mb-3">
                  {office.country}
                </h3>

                {/* Flag image centered */}
                <div className="flex justify-center mb-3">
                  <img
                    src={office.flag}
                    alt={`${office.country} Flag`}
                    className="w-15 h-10 object-cover rounded shadow-sm"
                  />
                </div>

                {/* Address */}
                <p className="text-sm text-gray-600 leading-snug mb-2">
                  {office.address}
                </p>

                {/* Contact details */}
                <p className="text-blue-600 font-medium text-sm truncate">
                  {office.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 💬 Section 5: Book a Live Demo */}
      <section className="py-10 px-8 md:px-20 text-center bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Experience DigiHire in Action.
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Schedule a personalized walkthrough to see how our AI-driven platform can
          transform your hiring workflow.
        </p>
        <div className="flex justify-center gap-6">
           <div className="relative flex flex-col items-center">
      {/* Book a Demo Button */}
      <button
        className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px]"
        onClick={handleBookDemo} // Opens Calendly popup
      >
        Book a Demo
      </button>

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
          <button  className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body focus:outline-none focus:ring-0 w-[200px] h-[52px]"
>
            Contact Sales
          </button>
        </div>
      </section>


      {/* 📧 Section 6: Subscribe or Follow Us */}
      <section className="py-10 px-8 md:px-20 bg-blue-100">
  <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
    Stay Connected. Stay Informed.
  </h2>

  <div className="max-w-6xl mx-auto flex flex-col gap-6">
    {/* Top Row: Text + Follow Us */}
    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
      <p className="text-gray-700 text-center md:text-left">
        📩 Get monthly insights on AI, hiring trends, and product updates.
      </p>
      <div className="flex items-center gap-4">
        <p className="font-semibold text-gray-800 whitespace-nowrap">
          Follow us on:
        </p>
        <div className="flex items-center gap-4 text-lg md:text-xl">
          {/* ✅ Updated icons using your local image files */}
          <a href="#" className="hover:opacity-80 transition">
            <Image
              src="/LinkedIn_logo.png"
              alt="LinkedIn"
              width={28}
              height={28}
              className="object-contain"
            />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <Image
              src="/Youtube_logo.png"
              alt="YouTube"
              width={28}
              height={28}
              className="object-contain"
            />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <Image
              src="/Facebook_Logo.png"
              alt="Facebook"
              width={28}
              height={28}
              className="object-contain"
            />
          </a>
 {/*  Added Twitter logo */}
          <a href="#" className="hover:opacity-80 transition">
            <Image
              src="/Twitter logo.png"
              alt="Twitter"
              width={28}
              height={28}
              className="object-contain"
            />
          </a>
        </div>
      </div>
    </div>

    {/* Bottom Row: Input + Button */}
    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 min-w-[250px] md:min-w-[300px] p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
      <button className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
        Subscribe Now
      </button>
    </div>
  </div>
</section>



      {/* 🧠 Section 7: FAQ */}
      <section className="py-10 px-8 md:px-20 bg-white text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-10">
          Before You Message Us, You Might Find Answers Here
        </h2>
        <div className="max-w-3xl mx-auto text-left space-y-4">
          {[
            {
              question: "How long does it take to get a response?",
              answer:
                "We strive to respond to all inquiries within 24 business hours. For urgent matters (for example enterprise support or onboarding) we provide priority-ticketing and aim to respond even faster.",
            },
            {
              question: "Can I request a live demo before signing up?",
              answer:
                "Yes — you can absolutely request a live demo prior to signing up. Our team will walk you through the platform, answer your questions, and give you a tailored view of how DigiHire fits your needs.",
            },
            {
              question: "Do you offer support outside business hours?",
              answer:
                "Yes — for enterprise clients and global partners we offer 24×7 support via priority ticketing. Standard support is available during regional business hours, with after-hours support for global or partner engagements.",
            },
            {
              question: "Is support available in multiple languages?",
              answer:
                "Yes — we support multiple languages through our global partner network and regional offices. Our platform and help-desk are configured to serve clients across time-zones and languages.",
            },
            {
              question: "Can I partner with DigiHire as a reseller or affiliate?",
              answer:
                "Absolutely — we welcome reseller and affiliate partnerships. Please reach out through our partnerships channel for program details, commission structures and onboarding.",
            },
          ].map((item, index) => (
            <details
              key={index}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200"
            >
              <summary className="font-semibold text-gray-800 cursor-pointer">
                {item.question}
              </summary>
              <p className="text-gray-600 mt-2">{item.answer}</p>
            </details>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
            Go to Help Center
          </button>
        </div>
      </section>


      {/* 📍 Section 9: Map Embed (Google API Integration) */}
      {/* <section className="relative w-full h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.093162260322!2d73.85674307495142!3d18.56263066837621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06b4d0a33cf%3A0xc46a4a1ff6dcf95!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(100%)" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}

      {/* Overlay Text & Button */}
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40 text-white px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Visit Our Office</h2>
          <p className="text-lg mb-6">
            📍 DigiHelic Solutions Pvt. Ltd., Pune, Maharashtra, India
          </p>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Pune%2C+Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
          >
            Get Directions
          </a>
        </div>
      </section> */}

      {/* 📞 Section 10: Final CTA – Global Connection Banner */}
    <section className="py-10 px-8 md:px-20 text-center bg-blue-100 text-gray-800">
  <h2 className="text-2xl font-bold mb-4">
    Ready to Transform Your Hiring? Let’s Talk.
  </h2>
  <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
    Our team is ready to help you modernize your recruitment process using DigiHire’s intelligent platform.
  </p>

  <div className="flex justify-center flex-wrap gap-6">
    <a
  href="https://calendly.com/hr-digihireai/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
>
  Book Demo
</a>

    <button className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body focus:outline-none focus:ring-0 w-[200px] h-[52px]"
>
      Send Inquiry
    </button>
  </div>
</section>


      <FooterSection />
    </>
  );
}
