"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/FooterSection";
import { useRouter } from "next/navigation";

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    designation: "",
    experience: "",
  });

  // ✅ Book Demo popup state
  const [showCalendly, setShowCalendly] = useState(false);

  const filters = [
    "All",
    "IT & Tech",
    "BFSI",
    "Healthcare",
    "Manufacturing",
    "Consulting",
    "Education",
    "Government / Public Sector",
  ];

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Form Submitted:", formData);

  try {
    const response = await fetch("/api/send-experience", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Thank you for sharing your experience!");
      setShowForm(false);

      // Reset fields (same as your original)
      setFormData({
        name: "",
        company: "",
        designation: "",
        experience: "",
      });
    } else {
      alert("Failed to send. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};


  // ✅ Open Calendly popup
  const handleBookDemo = (e) => {
    e.preventDefault();
    setShowCalendly(true);
  };

  // ✅ Close Calendly popup
  const closeCalendlyPopup = () => {
    setShowCalendly(false);
  };

   const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <Navbar />

      <main className="bg-white text-gray-800">

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




      {/* 🏠 Section 1: Hero Banner */}
{/* Desktop Section */}
<section className="hidden md:flex h-[400px] flex-row items-center justify-between px-16 py-6 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 relative overflow-hidden">
  {/* Background pattern */}
  <div className="absolute inset-0 opacity-10 bg-[url('/graph-pattern.svg')] bg-cover bg-center"></div>

  {/* Left Content */}
  <div className="z-10 max-w-2xl w-1/2 text-left flex flex-col justify-center">
    <h1 className="text-2xl font-bold mb-3 text-blue-900 leading-snug">
      See How DigiHire Transforms Hiring Across Industries.
    </h1>
    <p className="text-lg mb-6 text-gray-700 leading-relaxed">
      Real companies. Real results. Discover how HR teams and organizations globally have achieved measurable success using DigiHire’s AI-powered recruitment platform.
    </p>

    <div className="flex flex-wrap justify-start gap-3">
      <button className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-2.5 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap text-base">
        View All Case Studies
      </button>

      <button className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-6 py-2.5 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body focus:outline-none focus:ring-0 w-[200px] h-[52px] whitespace-nowrap text-base flex items-center justify-center">
        Share Your Success Story
      </button>
    </div>
  </div>

  {/* Right Image */}
  <div className="z-10 flex justify-end w-1/2">
    <img
      src="/Case Studies .png"
      alt="Case Studies"
      className="w-[380px] lg:w-[450px] object-contain drop-shadow-lg"
    />
  </div>
</section>

{/* Mobile Section */}
<section className="block md:hidden h-auto flex flex-col items-center justify-center px-6 py-6 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 relative overflow-hidden">
  {/* Background pattern */}
  <div className="absolute inset-0 opacity-10 bg-[url('/graph-pattern.svg')] bg-cover bg-center"></div>

  {/* Image First on Mobile */}
  <div className="z-10 flex justify-center w-full mb-6">
    <img
      src="/Case Studies .png"
      alt="Case Studies"
      className="w-[280px] md:w-[380px] lg:w-[450px] object-contain drop-shadow-lg"
    />
  </div>

  {/* Text Content Second */}
  <div className="z-10 max-w-md w-full text-center flex flex-col items-center justify-center">
    <h1 className="text-2xl font-bold mb-3 text-blue-900 leading-snug">
      See How DigiHire Transforms Hiring Across Industries.
    </h1>
    <p className="text-base mb-6 text-gray-700 leading-relaxed">
      Real companies. Real results. Discover how HR teams and organizations globally have achieved measurable success using DigiHire’s AI-powered recruitment platform.
    </p>

    <div className="flex flex-col gap-3 w-full items-center">
      <button className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-2.5 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap text-sm">
        View All Case Studies
      </button>

      <button className="bg-white border-2 border-blue-900 text-blue-900 font-bold px-6 py-2.5 rounded-full shadow-md hover:bg-blue-900 hover:text-white transition font-body focus:outline-none focus:ring-0 w-[200px] h-[52px] whitespace-nowrap text-sm flex items-center justify-center">
        Share Your Success Story
      </button>
    </div>
  </div>
</section>

        
        {/* 📊 Section 2: Highlighted Case Studies */}
       <section className="py-10 px-8 md:px-20 bg-white">
  <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">
    Our Most Impactful Transformations
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
    {/* 🏢 Case Study 1 */}
    <div className="bg-blue-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition flex flex-col justify-between h-full">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-blue-900">
            Global IT Services Company – India
          </h3>
        </div>

        <p className="text-gray-700 mb-2">
          <strong>Challenge:</strong> Recruitment delays and inconsistent interview quality across regions.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Solution:</strong> Deployed DigiHire’s AI Video Interview + Automated Shortlisting.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Results:</strong>
        </p>
        <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
          <li>70% faster hiring cycle</li>
          <li>60% recruiter time saved</li>
          <li>100% standardization of evaluations</li>
        </ul>
      </div>

      {/* <button
        className="relative mt-10 mx-auto bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
      >
        Read Full Story
      </button> */}
    </div>

    {/* 🏥 Case Study 2 */}
    <div className="bg-blue-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition flex flex-col justify-between h-full">
      <div>
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          Healthcare Startup – UAE
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Challenge:</strong> High candidate drop-off and slow response cycles in multi-location hiring.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Solution:</strong> AI interview scheduling + mobile-first candidate experience.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Results:</strong>
        </p>
        <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
          <li>40% increase in candidate completion rate</li>
          <li>2x faster screening</li>
          <li>Improved candidate satisfaction</li>
        </ul>
      </div>

      {/* <button
        className="relative mt-10 mx-auto bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
      >
        View Case Study
      </button> */}
    </div>

    {/* 💼 Case Study 3 */}
    <div className="bg-blue-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition flex flex-col justify-between h-full">
      <div>
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          Consulting Firm – Canada
        </h3>
        <p className="text-gray-700 mb-2">
          <strong>Challenge:</strong> Manual feedback collection and reporting across multiple recruiters.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Solution:</strong> DigiHire’s team collaboration + analytics dashboard.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Results:</strong>
        </p>
        <ul className="text-gray-700 list-disc list-inside space-y-1 mb-4">
          <li>50% faster decision cycles</li>
          <li>Centralized feedback tracking</li>
          <li>Enhanced data visibility for clients</li>
        </ul>
      </div>
{/* 
      <button
        className="relative mt-10 mx-auto bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
      >
        See How They Did It
      </button> */}
    </div>
  </div>
</section>

        {/* 📈 Section 3: Results Summary Grid */}
        <section className="py-10 bg-blue-100 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-10">
            Proven Results Across Our Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8 md:px-20">
            {[
              { icon: "⏱️", title: "Time-to-Hire", text: "Reduced by up to 68%" },
              { icon: "💰", title: "Recruitment Costs", text: "Saved an average of 55% annually" },
              { icon: "🎯", title: "Candidate Quality", text: "Improved by 40–50%" },
              { icon: "🌍", title: "Global Hiring Reach", text: "Used in 12+ countries and growing" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            DigiHire delivers measurable, data-driven outcomes — not just promises.
          </p>
        </section>

       {/* 🧠 Section 4: Case Study Library */}
<section className="py-10 px-8 md:px-20 bg-white text-center">
  <h2 className="text-2xl font-bold text-gray-800 mb-10">
    Explore All Success Stories
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[
      { icon: "💻", industry: "IT & Tech", desc: "Enhanced candidate matching accuracy using AI-driven analytics." },
      { icon: "🏦", industry: "BFSI", desc: "Strengthened fraud detection with AI-backed screening systems." },
      { icon: "🎓", industry: "Education", desc: "Empowered universities with smarter, faster student placement tools." },
      { icon: "🏥", industry: "Healthcare", desc: "Streamlined recruitment for clinical and non-clinical roles." },
      { icon: "🏭", industry: "Manufacturing", desc: "Reduced hiring turnaround by automating applicant tracking." },
      { icon: "💼", industry: "Consulting", desc: "Optimized talent acquisition through predictive candidate scoring." },
    ].map((card, i) => (
      <div
        key={i}
        className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
      >
        <div className="text-4xl mb-3">{card.icon}</div>
        <h3 className="text-lg font-semibold mb-2 text-blue-900">{card.industry}</h3>
        <p className="text-gray-700 mb-4">{card.desc}</p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm font-medium transition">
          Read More
        </button>
      </div>
    ))}
  </div>
</section>


        {/* 🎥 Section :5 Video Testimonials */}
        <section className="py-10 bg-blue-100 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 md:px-20">
            {[
              { title: "HR Head, Global IT Firm", quote: "“DigiHire saved us hundreds of hours and created a fair, data-driven process.”" },
              { title: "Talent Director, Manufacturing", quote: "“We saw measurable ROI within just one quarter.”" },
              { title: "Recruitment Partner, Consulting", quote: "“The AI scoring and analytics made shortlisting incredibly simple.”" },
            ].map((v, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                <div className="text-5xl mb-4">🎥</div>
                <h3 className="font-semibold text-blue-900 mb-2">{v.title}</h3>
                <p className="text-gray-700 italic">{v.quote}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 📘 Section 6: Downloadable Case Studies */}
        <section className="py-10 px-8 md:px-20 text-center bg-white">
          <h2 className="text-2xl font-bold text-gray-800 mb-10">
            Download Detailed Reports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Case Study: SaaS Firm Hired 200+ Roles in 90 Days",
              "Report: 60% Cost Savings for BFSI with AI Recruitment",
              "Whitepaper: Scalable Hiring for Global Teams",
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
                <div className="text-4xl mb-3">📘</div>
                <p className="text-gray-800 font-medium mb-4">{item}</p>
                <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full font-medium transition">
                  Download
                </button>
              </div>
            ))}
          </div>

        </section>

        {/* 💬 Section 7: Testimonials Carousel */}
        <section className="py-10 bg-blue-100 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-10">
          Voices of Our Clients
        </h2>

        <div className="space-y-8 max-w-3xl mx-auto text-gray-700">
          <p>
            “Fair, efficient, and data-rich — DigiHire is redefining how we
            hire.” — <strong>VP HR, IT Firm</strong>
          </p>
          <p>
            “A rare platform that blends technology with empathy.” —{" "}
            <strong>HR Head, Healthcare Company</strong>
          </p>
          <p>
            “Recruiters love the analytics; leadership loves the results.” —{" "}
            <strong>CEO, Consulting Group</strong>
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => setShowForm(true)}
            className="relative bg-blue-700 mt-10 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px] whitespace-nowrap"
          >
            Share Your Experience
          </button>
        </div>
      </section>

      {/* ======= Pop-up Form Modal ======= */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-11/12 max-w-md relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold mb-4 text-center text-blue-800">
              Share Your Experience
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company Name"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Designation"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Share your experience..."
                rows="4"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-lg shadow-md transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

        {/* 🌍 Section 8: Global Impact Map */}
        <section className="py-10 px-8 md:px-20 bg-white text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-10">
            Trusted Across the Globe
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Active clients in India, UAE, Canada, and Europe — with adoption across 12+ countries and industries like IT, BFSI, Healthcare, and Manufacturing.
          </p>
          
        </section>

        {/* 📞 Section 10: Final CTA */}
        <section className="py-10 bg-blue-100  text-black text-center">
          <h2 className="text-2xl font-bold mb-4">
            Your Success Story Starts with DigiHire.
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Join hundreds of organizations achieving faster, smarter, and fairer hiring through AI automation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
          <div className="relative flex flex-col items-center">
      {/* Book Demo Link styled as button */}
      <a
        href="https://calendly.com/hr-digihireai/30min"
        onClick={handleBookDemo} // Opens Calendly popup
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
              Contact Sales
            </button>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
