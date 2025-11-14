"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";
import Link from "next/link";


export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // ✅ Validation function (added)
  const validateForm = () => {
    const newErrors = {};

    // Full Name
    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required.";

    // Company
    if (!formData.company.trim())
      newErrors.company = "Company / Organization is required.";

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email))
      newErrors.email = "Please enter a valid email address.";

    // Phone (only numbers, 10 digits for India)
    if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Please enter a valid 10-digit phone number.";

    // Inquiry Type
    if (!formData.inquiryType)
      newErrors.inquiryType = "Please select an inquiry type.";

    // Message
    if (!formData.message.trim())
      newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Updated handleSubmit to include validation
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    // Run validation first
    if (!validateForm()) return;

    try {
      const response = await fetch("/api/sendInquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
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
        setErrors({});
      } else {
        setSuccessMessage("❌ Failed to send. Try again later.");
      }
    } catch (error) {
      console.error("Error sending inquiry:", error);
      setSuccessMessage("❌ Something went wrong. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

  // ✅ Stay Connected (Subscribe/Unsubscribe)
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, subscribed: !isSubscribed }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubscribed(!isSubscribed);
        setStatusMessage(
          !isSubscribed
            ? "Subscribed successfully! 🎉"
            : "You have unsubscribed."
        );
      } else {
        setStatusMessage("Failed to process request. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />

      {/* 🏠 Section 1: Hero Banner */}
      <section className=" h-[400px] bg-white py-10 px-8 md:px-20 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10">
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

    <form
      onSubmit={(e) => {
        e.preventDefault();

        // ✅ Always show all validation messages
        const isValid = validateForm();
        if (!isValid) {
          // Show all errors without blocking further logic
          setSuccessMessage(""); // clear any previous success
          return;
        }

        handleSubmit(e);

        const subject = `This is an inquiry: ${formData.inquiryType || "General"}`;
        const body = `
Full Name: ${formData.fullName}
Company / Organization: ${formData.company || "N/A"}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}
Inquiry Type: ${formData.inquiryType}
Message:
${formData.message || "N/A"}
        `;
        window.location.href = `mailto:hr@digihireai.com?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`;
      }}
      className="space-y-5 text-left"
    >
      {/* Full Name */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) => {
            const value = e.target.value.replace(/\b\w/g, (c) => c.toUpperCase());
            handleChange({ target: { name: "fullName", value } });
          }}
          className={`w-full p-3 rounded-lg border ${
            errors.fullName ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-500`}
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Company / Organization <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="company"
          placeholder="Company / Organization"
          value={formData.company}
          onChange={(e) => {
            const value = e.target.value.replace(/\b\w/g, (c) => c.toUpperCase());
            handleChange({ target: { name: "company", value } });
          }}
          className={`w-full p-3 rounded-lg border ${
            errors.company ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-500`}
        />
        {errors.company && (
          <p className="text-red-500 text-sm mt-1">{errors.company}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-3 rounded-lg border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-500`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full p-3 rounded-lg border ${
            errors.phone ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-500`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Inquiry Type */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Inquiry Type <span className="text-red-500">*</span>
        </label>
        <select
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          className={`w-full p-3 rounded-lg border ${
            errors.inquiryType ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-500`}
        >
          <option value="">Select Inquiry Type</option>
          <option value="Demo">Demo</option>
          <option value="Support">Support</option>
          <option value="Partnership">Partnership</option>
          <option value="General">General</option>
        </select>
        {errors.inquiryType && (
          <p className="text-red-500 text-sm mt-1">{errors.inquiryType}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Your Message <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className={`w-full p-3 rounded-lg border ${
            errors.message ? "border-red-500" : "border-gray-300"
          } focus:ring-2 focus:ring-blue-500`}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full transition shadow-md min-w-[200px]"
      >
        Submit Inquiry
      </button>
    </form>

    {successMessage && (
      <p className="mt-4 text-green-600 font-medium text-center">
        {successMessage}
      </p>
    )}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 min-w-[250px] md:min-w-[300px] p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSubscribe}
            className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
          >
            {isSubscribed ? "Unsubscribe" : "Subscribe Now"}
          </button>
        </div>

        {statusMessage && (
          <p className="text-center text-gray-700 font-medium mt-2">
            {statusMessage}
          </p>
        )}
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
         <Link href="/Support">
  <button className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap">
    Go to Help Center
  </button>
</Link>

        </div>
      </section>


      {/* 📞 Section 8: Final CTA – Global Connection Banner */}
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
      Start Free Trial
    </button>
  </div>
</section>


      <FooterSection />
    </>
  );
}
