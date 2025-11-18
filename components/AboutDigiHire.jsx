"use client";

import Image from "next/image";
import Link from "next/link"; // ✅ Import Link from Next.js

export default function AboutDigiHire() {
  return (
    <section className="bg-blue-100 h-[400px] py-10 flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 h-full items-center">

        {/* ✅ Left Side — Information */}
        <div className="text-center md:text-left flex flex-col justify-center items-center md:items-start h-full overflow-hidden">
          <h2 className="text-2xl font-heading font-bold text-black mb-2">
            About DigiHire
          </h2>

          <p className="text-gray-700 leading-relaxed mb-2 text-lg max-w-3xl">
            <strong>DigiHire</strong>, developed by{" "}
            <span className="font-medium">DigiHelic Solutions Pvt. Ltd.</span>, 
            is a global recruitment automation platform designed to simplify hiring 
            with AI-driven precision and transparency.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4 text-lg max-w-3xl">
            Headquartered in <strong>Pune, India,</strong> with offices in <strong>Dubai (UAE)</strong> 
            and the <strong>USA</strong>, DigiHire powers fast, fair, and data-backed recruitment 
            for clients across continents — transforming how companies discover, assess, 
            and hire talent.
          </p>

          <Link
            href="/about"
            className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center font-body w-[200px] h-[52px]"
          >
            Meet the Team
          </Link>
        </div>

        {/* ✅ Right Side — FIXED IMAGE SIZE */}
        <div className="flex justify-center md:justify-end h-full items-center">
          <div className="h-[320px] w-[450px] rounded-2xl overflow-hidden">
            <Image
              src="/About DigiHire image.png"
              alt="About DigiHire"
              width={450}
              height={320}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
