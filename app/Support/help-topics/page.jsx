"use client";

import Navbar from "../../../components/Navbar";
import FooterSection from "../../../components/FooterSection";
import { Headphones, User, Settings, Link2, Brain, GraduationCap } from "lucide-react"; // ✅ Added modern icons

export default function MoreHelpTopicsPage() {
  const categories = [
    {
      icon: <User className="w-10 h-10 text-blue-700" />,
      title: "Candidate Experience",
      desc: "Help for candidates taking interviews or using DigiHire links.",
      subtopics: [
        "How to join an interview as a candidate",
        "Supported browsers and devices",
        "Troubleshooting camera/mic issues",
        "How to retake or continue an interrupted test",
        "Candidate data privacy and result sharing",
      ],
    },
    {
      icon: <Settings className="w-10 h-10 text-blue-700" />,
      title: "Platform Settings & Customization",
      desc: "Tailor DigiHire to match your organization’s workflow and branding.",
      subtopics: [
        "Customizing branding and company logo",
        "Email templates for candidate communication",
        "Setting up automated reminders",
        "Configuring time zones and default languages",
      ],
    },
    {
      icon: <Link2 className="w-10 h-10 text-blue-700" />,
      title: "Integrations & APIs",
      desc: "Connect DigiHire with your favorite tools and automate workflows.",
      subtopics: [
        "How to integrate with your ATS (e.g., Greenhouse, Lever)",
        "Webhook setup for real-time updates",
        "Using DigiHire’s REST API",
        "Connecting Slack or Microsoft Teams for alerts",
      ],
    },
    {
      icon: <Brain className="w-10 h-10 text-blue-700" />,
      title: "Technical Troubleshooting",
      desc: "Step-by-step guides for resolving common technical issues.",
      subtopics: [
        "Login or password reset issues",
        "Page not loading or network errors",
        "Browser permissions for camera/mic",
        "Clearing cache or cookies for better performance",
      ],
    },
    {
      icon: <Headphones className="w-10 h-10 text-blue-700" />, // 🎧 Updated icon for Contact & Support
      title: "Contact & Support",
      desc: "Find ways to connect with DigiHire’s support and success teams.",
      subtopics: [
        "How to reach customer support",
        "Reporting a bug or feedback",
        "Expected response times",
        "Accessing help from within the DigiHire dashboard",
      ],
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-blue-700" />,
      title: "Product Updates & Release Notes",
      desc: "Stay informed about new DigiHire features and improvements.",
      subtopics: [
        "Latest DigiHire version highlights",
        "New AI scoring model updates",
        "Platform UI/UX changes",
        "Upcoming roadmap previews",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-blue-50 to-blue-100 text-center">
        <h1 className="text-3xl md:text-2xl font-bold text-blue-900 mb-4">
          More Help Topics
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Explore deeper insights into DigiHire AI — from candidate experience
          and integrations to troubleshooting and product updates.
        </p>
      </section>

      {/* Help Categories Grid */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 shadow-md hover:shadow-lg transition bg-blue-50 hover:bg-blue-100"
            >
              <div className="mb-4">{cat.icon}</div>
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                {cat.title}
              </h2>
              <p className="text-gray-700 mb-4">{cat.desc}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {cat.subtopics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-20 bg-blue-50 text-center">
        <h2 className="text-2xl md:text-2xl font-bold text-blue-900 mb-4">
          Still Need Help?
        </h2>
        <p className="text-gray-700 mb-6">
          Can’t find the answer you’re looking for? Our support team is here to
          help you with personalized assistance.
        </p>
        <a
          href="mailto:hr@digihireai.com"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
        >
          Contact Support at hr@digihireai.com
        </a>
      </section>

      <FooterSection />
    </>
  );
}
