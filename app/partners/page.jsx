"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";
import { useRouter } from "next/navigation";

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // clear specific error
  };

  // ✅ Updated Validation: show all messages at once + detailed rules + required star fields
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.company.trim()) newErrors.company = "Company name is required.";

    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Please enter a valid 10-digit phone number.";

    if (!formData.message.trim()) newErrors.message = "Message is required.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatusMessage("");
      return;
    }

    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage("✅ Application sent successfully!");
        setFormData({
          name: "",
          company: "",
          country: "",
          email: "",
          phone: "",
          partnershipType: "",
          message: "",
        });
        setErrors({});
      } else {
        setStatusMessage("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("Something went wrong. Please try again.");
    }
  };

  const router = useRouter();

const handleBack = () => {
  router.back();
};

  return (
    <>
      <Navbar />
      <main className="font-body text-gray-800">

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

        {/* 🌐 Section 1: Hero Banner */}
        <section className="relative bg-blue-100 py-20 px-8 md:px-20 flex flex-col items-center justify-center gap-12">
          <div className="flex-1 text-center">
            <h1 className="text-4xl md:text-2xl font-bold mb-4 text-blue-900">
              Grow with DigiHire. Empower the World of Intelligent Hiring.
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Join our global partner network and offer clients a cutting-edge
              AI recruitment solution — backed by DigiHelic’s proven technology,
              enterprise support, and global credibility.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#apply"
                className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 w-[220px] h-[52px]  whitespace-nowrap"
              >
                Apply to Become a Partner
              </Link>

              <Link
                href="#contact"
                className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition w-[220px] h-[52px] flex items-center justify-center"
              >
                Book a Discussion
              </Link>
            </div>
          </div>
        </section>

        {/* 💼 Section 2: Why Partner */}
       <section className="py-10 px-8 md:px-20 bg-white text-center">
  <h2 className="text-2xl font-bold text-blue-900 mb-12">
    Unlock Growth, Together.
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
    {[
      {
        icon: "💰",
        title: "Lucrative Partner Margins",
        desc: "Earn attractive commissions and recurring revenue with every new subscription.",
      },
      {
        icon: "🧠",
        title: "AI Innovation Advantage",
        desc: "Offer your clients one of the most advanced AI hiring tools in the market.",
      },
      {
        icon: "🌍",
        title: "Global Ecosystem Access",
        desc: "Collaborate with HR leaders, resellers, and consultants across industries.",
      },
      {
        icon: "⚙️",
        title: "Seamless Integration",
        desc: "Easily embed DigiHire into SAP, Oracle, Workday, and other HRMS systems.",
      },
      {
        icon: "🤝",
        title: "Dedicated Partner Support",
        desc: "Get access to training, sales tools, and co-marketing campaigns.",
      },
      {
        icon: "🔒",
        title: "Compliance & Security Assurance",
        desc: "Stay aligned with GDPR, PIPEDA, CCPA, and India's DPDP Act to ensure global data protection compliance.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="bg-blue-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition flex flex-col items-start"
      >
        <div className="text-4xl mb-4">{item.icon}</div>
        <h3 className="text-lg font-semibold mb-2 text-blue-900">
          {item.title}
        </h3>
        <p className="text-gray-700">{item.desc}</p>
      </div>
    ))}
  </div>

  <div className="flex justify-center mt-12">
    {/* <Link
      href="#benefits"
      className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
    >
      View Partner Benefits
    </Link> */}
  </div>
</section>

        {/* 🧩 Section 3: Partnership Models */}
       <section className="py-10 px-8 md:px-20 bg-blue-100 text-center">
  <h2 className="text-2xl font-bold text-blue-900 mb-12">
    Choose the Partnership That Fits You Best
  </h2>

  <div className="overflow-x-auto">
    <table className="min-w-full bg-white rounded-xl shadow-md table-auto text-left">
      <thead className="bg-blue-50">
        <tr>
          <th className="py-4 px-6 w-1/4 font-semibold text-gray-800">Model</th>
          <th className="py-4 px-6 w-1/2 font-semibold text-gray-800">Description</th>
          <th className="py-4 px-6 w-1/4 font-semibold text-gray-800">Ideal For</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {[
          {
            model: "Referral Partner",
            desc: "Refer potential clients and earn commission on every successful signup.",
            ideal: "Independent consultants, HR coaches",
          },
          {
            model: "Implementation Partner",
            desc: "Deliver configuration, training, and rollout services for DigiHire.",
            ideal: "IT firms, HR tech consultants",
          },
          {
            model: "Reseller Partner",
            desc: "Market, sell, and support DigiHire under your brand or co-branded version.",
            ideal: "Regional distributors, business resellers",
          },
          {
            model: "Strategic Alliance Partner",
            desc: "Co-develop solutions, integrations, or enterprise collaborations.",
            ideal: "Global tech firms, ERP integrators",
          },
        ].map((item, i) => (
          <tr
            key={i}
            className={`${i % 2 === 0 ? "bg-white" : "bg-blue-50"}`}
          >
            <td className="py-5 px-6 font-semibold">{item.model}</td>
            <td className="py-5 px-6">{item.desc}</td>
            <td className="py-5 px-6">{item.ideal}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="flex justify-center mt-12">
    <Link
      href="#apply"
      className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[220px] h-[52px] whitespace-nowrap"
  >
      Apply to Become a Partner
    </Link>
  </div>
</section>



        {/* 🌍 Section 4: Global Network */}
        <section className="py-10 px-8 md:px-20 bg-white text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">
            A Growing Network of Global Collaborators
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-8">
            From India to Canada, DigiHire’s partner ecosystem connects
            forward-thinking firms that share one mission — enabling smarter,
            fairer, and faster hiring across borders.
          </p>

          <ul className="text-gray-700 space-y-2 mb-10">
            <li>
              <strong>India</strong> – Core development & delivery hub
            </li>
            <li>
              <strong>UAE</strong> – Strategic regional collaborations
            </li>
            <li>
              <strong>Canada</strong> – North American partnerships
            </li>
            <li>
              <strong>Expanding</strong> – UK, USA, Europe & Southeast Asia
            </li>
          </ul>

          <div className="flex justify-center">
            <Link
              href="#network"
              className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
              Join Our Global Network
            </Link>
          </div>
        </section>

        {/* 🧠 Section 5: Partner Enablement */}
        <section className="py-10 px-8 md:px-20 bg-blue-100 text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-12">
            Empowering Our Partners for Success
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎓",
                title: "Training & Certification",
                desc: "Access structured training, demos, and knowledge sessions to master DigiHire.",
              },
              {
                icon: "📈",
                title: "Co-Marketing & Sales Kits",
                desc: "Get digital assets, brochures, and lead support for faster conversions.",
              },
              {
                icon: "🛠️",
                title: "Technical Assistance",
                desc: "24×7 partner support desk for integration and rollout assistance.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border-2 border-blue-200 rounded-2xl shadow-md p-8 hover:border-blue-500 hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="#portal"
className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
              Access Partner Portal
            </Link>
          </div>
        </section>

       
        
        {/* 🏆 Section 7: Featured Partners & Success Stories */}
        <section className="py-10 px-8 md:px-20 bg-white text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">
            Trusted by Industry Leaders
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 mb-8">
            <blockquote className="italic text-gray-700">
              “Partnering with DigiHire opened a new revenue stream for our
              consulting firm — with zero technical overhead.”
              <span className="block font-semibold mt-1">
                — CEO, HR Consultancy Partner (India)
              </span>
            </blockquote>
            <blockquote className="italic text-gray-700">
              “The DigiHire team’s co-marketing support helped us expand across
              GCC markets within months.”
              <span className="block font-semibold mt-1">
                — Regional Reseller, UAE
              </span>
            </blockquote>
          </div>
          
        </section>

       


        {/* 📞 Section 9: Partner Application Form */}
        <section className="py-10 px-8 md:px-20 bg-blue-50 text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-8">
          Become a DigiHire Partner Today
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg grid gap-4 text-left"
          >
            {/* Name */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={`border rounded-lg px-4 py-2 w-full ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className={`border rounded-lg px-4 py-2 w-full ${
                  errors.company ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.company && (
                <p className="text-red-500 text-sm mt-1">{errors.company}</p>
              )}
            </div>

            {/* Country */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Country
              </label>
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`border rounded-lg px-4 py-2 w-full ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Phone (10 digits)"
                value={formData.phone}
                onChange={handleChange}
                className={`border rounded-lg px-4 py-2 w-full ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Partnership Type */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Type of Partnership
              </label>
              <select
                name="partnershipType"
                value={formData.partnershipType}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              >
                <option value="">Select Partnership Type</option>
                <option value="referral">Referral</option>
                <option value="reseller">Reseller</option>
                <option value="strategic">Strategic Alliance</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                Message / Collaboration Idea <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Message / Collaboration Idea"
                value={formData.message}
                onChange={handleChange}
                className={`border rounded-lg px-4 py-2 w-full ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition mt-2"
            >
              Submit Partnership Application
            </button>

            <p className="text-gray-600 text-sm mt-2 text-center">
              Our partnership team will reach out within 48 business hours.
            </p>

            {statusMessage && (
              <p
                className={`text-center text-sm mt-2 ${
                  statusMessage.includes("✅")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </section>

        {/* 🌟 Section 10: Final CTA */}
        <section className="py-10 px-8 md:px-20 bg-blue-100 text-black text-center">
          <h2 className="text-2xl font-bold mb-4">
            Join the Global Network Driving the Future of Hiring.
          </h2>
          <p className="mb-8">
            Become part of a growing community of innovators transforming
            recruitment with AI, automation, and trust.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#apply"
              className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-8 py-3 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body focus:outline-none focus:ring-0 w-[200px] h-[52px]"
>
              Become a Partner
            </Link>
            <Link
              href="#contact"
              className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
  >
              Schedule Discussion
            </Link>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
