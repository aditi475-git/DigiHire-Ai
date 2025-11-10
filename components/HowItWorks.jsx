"use client";

import { Edit, Video, Activity, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Edit className="w-8 h-8 text-white" />,
      title: "Create Role",
      desc: "Define questions, criteria, and AI templates.",
    },
    {
      icon: <Video className="w-8 h-8 text-white" />,
      title: "Engage Candidates",
      desc: "Candidates record video responses anytime.",
    },
    {
      icon: <Activity className="w-8 h-8 text-white" />,
      title: "AI Evaluation",
      desc: "Instant insights into skill, tone, and confidence.",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      title: "Shortlist & Decide",
      desc: "Compare analytics and finalize the best-fit candidates.",
    },
  ];

  return (
    <section className="py-16 bg-black-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-heading font-bold text-black-800 mb-10 -mt-6">
          From Role Creation to Hiring — Simplified.
        </h2>

        {/* Steps Flow with Line */}
        <div className="relative flex flex-col md:flex-row items-center justify-between">
          {/* Horizontal line behind the circles */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-300 z-0"></div>

          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col items-center relative z-10 w-full md:w-auto"
            >
              {/* Icon circle */}
              <div className="bg-gradient-to-br from-blue-600 to-violet-600 p-5 rounded-full shadow-xl flex items-center justify-center">
                {step.icon}
              </div>

              {/* Title */}
              <span className="mt-4 font-semibold text-lg">{step.title}</span>

              {/* Description */}
              <p className="mt-2 text-gray-600 text-sm max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16">
 <div className="flex justify-center items-center w-full">
  <a
    href="#demo"
    className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center font-body w-[200px] h-[52px] text-center"
  >
    Watch Demo Video
  </a>
</div>


</div>

      </div>
    </section>
  );
}
