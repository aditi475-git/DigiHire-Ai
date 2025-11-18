"use client";

import Image from "next/image";
import Link from "next/link"; 

export default function TechnologySection() {
  return (
    <section className="h-[400px] py-10 flex justify-center items-center bg-blue-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center h-full">

        {/* ✅ Left Side — Existing Content */}
        <div className="text-center md:text-left flex flex-col justify-center h-full">

          <h2 className="text-2xl font-heading font-bold text-black mb-6">
            Intelligence That Understands People
          </h2>

          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Our platform combines advanced AI and human-centered design:
          </p>

          <ul className="text-gray-700 text-base md:text-lg space-y-2 mb-6 list-disc list-inside inline-block text-left">
            <li>NLP for understanding responses</li>
            <li>Voice analysis for confidence & tone</li>
            <li>Machine learning for skill-ranking</li>
            <li>Data dashboards for transparent insights</li>
          </ul>

          <div className="flex justify-center md:justify-start mt-4">
            <Link
              href="/how-it-works"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center font-body w-[200px] h-[52px] text-center whitespace-nowrap"
            >
              Discover How It Works
            </Link>
          </div>

        </div>

        {/* ✅ Right Side — Dashboard Animation Image */}
        <div className="flex justify-center md:justify-end h-full items-center">
          <Image
            src="/dashboard animation.png"
            alt="Dashboard Animation"
            width={500}
            height={400}
            className="rounded-2xl object-contain max-h-[300px]"
          />
        </div>

      </div>
    </section>
  );
}
