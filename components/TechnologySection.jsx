"use client";

import Image from "next/image";
import Link from "next/link"; 

export default function TechnologySection() {
  return (
    <section className="py-10 flex justify-center bg-blue-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* ✅ Left Side — Existing Content */}
        <div className="text-center md:text-left">
          {/* Heading */}
          <h2 className="text-2xl font-heading font-bold text-black mb-10">
            Intelligence That Understands People
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Our platform combines advanced AI and human-centered design:
          </p>

          {/* Bullet List */}
          <ul className="text-gray-700 text-base md:text-lg space-y-3 mb-10 list-disc list-inside inline-block text-left">
            <li>NLP for understanding responses</li>
            <li>Voice analysis for confidence & tone</li>
            <li>Machine learning for skill-ranking</li>
            <li>Data dashboards for transparent insights</li>
          </ul>

          {/* CTA Button */}
          <div className="flex justify-center md:justify-start mt-8">
   <Link
    href="/how-it-works"
    className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center font-body w-[200px] h-[52px] text-center  whitespace-nowrap"
  >
    Discover How It Works
  </Link>

</div>

        </div>

        {/* ✅ Right Side — Dashboard Animation Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/dashboard animation.png"
            alt="Dashboard Animation"
            width={500}
            height={400}
            className="rounded-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
