"use client";

import Link from "next/link"; // ✅ Import Link from Next.js
import Image from "next/image";


export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Company */}
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-blue-400">About us</Link>
            </li>
           
            <li>
              <Link href="/partners" className="hover:text-blue-400">Partners</Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Product */}
        <div>
          <h3 className="text-xl font-bold mb-4">Product</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/Features" className="hover:text-blue-400">Features</Link>
            </li>
            <li>
              <Link href="/Pricing" className="hover:text-blue-400">Pricing</Link>
            </li>
            <li>
              <Link href="/Resources" className="hover:text-blue-400">Resources</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/Support" className="hover:text-blue-400">Help Center</Link>
            </li>
            <li>
  <Link href="/privacy-policy" className="hover:text-blue-400">
    Privacy Policy
  </Link>
</li>
<li>
  <Link href="/Terms-of-service" className="hover:text-blue-400">
    Terms of Service
  </Link>
</li>

          </ul>
        </div>

        {/* Column 4: Contact */}
         <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="flex items-center gap-2">
                <img
                  src="/email inbox.png"
                  alt="Email Icon"
                  style={{ width: "25px", height: "15px" }}
                />
                <a
                  href="mailto:hr@digihireai.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  hr@digihireai.com
                </a>
              </span>
            </li>
          </ul>

          {/* ✅ SOCIAL MEDIA ICONS (Added exactly after Contact) */}
          <div className="flex items-center gap-4 mt-4">
            <p className="font-semibold text-gray-300 whitespace-nowrap">
              Follow us on:
            </p>

            <div className="flex items-center gap-4 text-lg md:text-xl">
              
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/digihireai.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <Image
                  src="/LinkedIn_logo.png"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="hover:opacity-80 transition"
              >
                <Image
                  src="/Youtube_logo.png"
                  alt="YouTube"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="hover:opacity-80 transition"
              >
                <Image
                  src="/Facebook_Logo.png"
                  alt="Facebook"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </a>

              {/* Twitter / X */}
              <a
                href="https://x.com/digihireai"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <Image
                  src="/Twitter Logo1.png"
                  alt="Twitter"
                  width={35}
                  height={35}
                  className="object-contain"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/digihireai?igsh=MW91dzdqZGRlM2Fvdg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition"
              >
                <Image
                  src="/Instagram.png"
                  alt="Instagram"
                  width={35}
                  height={35}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © 2025 DigiHelic Solutions Pvt. Ltd. | Built for smarter, fairer hiring.
      </div>
    </footer>
  );
}
