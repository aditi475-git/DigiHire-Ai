"use client";

import { Zap, Brain, Scale } from "lucide-react";
import { Clock, BarChart2, Users, Shield } from "lucide-react";
import Link from "next/link";

export default function WhyDigiHire() {
  const benefits = [
    {
      icon: <Zap className="w-10 h-10 text-blue-600" />,
      title: "Speed",
      desc: "Reduce time-to-hire by up to 70%.",
    },
    {
      icon: <Brain className="w-10 h-10 text-purple-600" />,
      title: "Accuracy",
      desc: "AI-driven insights assess true skills and potential.",
    },
    {
      icon: <Scale className="w-10 h-10 text-teal-600" />,
      title: "Fairness",
      desc: "Objective scoring ensures bias-free decisions.",
    },
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: "24/7 AI Interviews",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-green-600" />,
      title: "Real-time Analytics",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-600" />,
      title: "Team Collaboration",
    },
    {
      icon: <Shield className="w-6 h-6 text-red-600" />,
      title: "Enterprise Security",
    },
  ];

  return (
    <section className="py-10 bg-blue-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-heading font-bold text-black-800 mb-4">
          Reinventing Hiring for the Modern World
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Traditional recruitment is slow, manual, and inconsistent. DigiHire brings intelligence, automation, and balance to every step.
        </p>

        {/* 3-column grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-gray-700 font-body">
          {features.map((f, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-base font-medium"
            >
              {f.icon}
              <span className="text-base font-medium">{f.title}</span>
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
  <div className="flex justify-center">
  <a
    href="/Features"
    className="relative bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center gap-2 overflow-hidden font-body w-[200px] h-[52px]"
  >
    Explore Features
  </a>
</div>

</div>

      </div>
    </section>
  );
}
