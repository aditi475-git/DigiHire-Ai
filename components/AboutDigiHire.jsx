"use client";

import Image from "next/image";
import Link from "next/link"; // ✅ Import Link from Next.js

export default function AboutDigiHire() {
  return (
    <section className="bg-blue-100 py-10 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* ✅ Left Side — Information */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-heading font-bold text-black mb-4">
            About DigiHire
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4 text-lg max-w-3xl">
            <strong>DigiHire</strong>, developed by{" "}
            <span className="font-medium">DigiHelic Solutions Pvt. Ltd.</span>, 
            is a global recruitment automation platform designed to simplify hiring 
            with AI-driven precision and transparency.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8 text-lg max-w-3xl">
            Headquartered in <strong>Pune, India,</strong> with offices in <strong> Dubai (UAE) </strong> and the <strong> USA</strong>, DigiHire powers fast, fair, and data-backed recruitment for clients across continents — transforming how companies discover, assess, and hire talent.
          </p>

          {/* Button */}
<Link
    href="/about"
    className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center font-body w-[200px] h-[52px] text-center"
  >
    Meet the Team
  </Link>
</div>

        {/* ✅ Right Side — Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/About DigiHire image.png"
            alt="About DigiHire"
            width={500}
            height={400}
            className="rounded-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
