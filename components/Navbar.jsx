"use client";

import PropTypes from "prop-types";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({
  scrollToFeatures,
  scrollToPlatform,
  scrollToHowItWorks,
  scrollToPricing,
  scrollToResources,
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const getLinkClass = (path) => {
    return `cursor-pointer transition ${
      pathname === path
        ? "text-blue-600 font-semibold"
        : "text-gray-800 hover:text-blue-600"
    }`;
  };

  const goToLanding = (hash) => {
    setIsMobileOpen(false);
    if (pathname === "/") {
      if (hash === "#features") scrollToFeatures?.();
      if (hash === "#platform") scrollToPlatform?.();
      if (hash === "#howitworks") scrollToHowItWorks?.();
      if (hash === "#pricing") scrollToPricing?.();
      if (hash === "#resources") scrollToResources?.();
    } else {
      router.push(`/?scrollTo=${hash.replace("#", "")}`);
    }
  };

  const handleLogoClick = () => {
    setIsMobileOpen(false);
    if (pathname === "/") {
      window.location.reload();
    } else {
      router.push("/");
    }
  };

  return (
    <nav
      className="flex items-center justify-between px-8 py-3 bg-white border-b border-gray-200 shadow-lg sticky top-0 z-50"
      style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
    >
      {/* ✅ Logo */}
      <div
        className="flex items-center cursor-pointer"
        onClick={handleLogoClick}
      >
        <img
          src="/DigiHire%20Logo.png"
          alt="DigiHire Logo"
          className="h-9 w-auto"
        />
      </div>

      {/* ✅ Desktop Menu */}
      <ul className="hidden md:flex gap-8 justify-center flex-1 text-center font-medium">
        <li onClick={() => router.push("/")} className={getLinkClass("/")}>
          Home
        </li>

        <li
          onClick={() => {
            setIsMobileOpen(false);
            router.push("/Features");
          }}
          className={getLinkClass("/Features")}
        >
          Features
        </li>

        <li
          onClick={() => {
            setIsMobileOpen(false);
            router.push("/Platform");
          }}
          className={getLinkClass("/Platform")}
        >
          Platform
        </li>

        <li
          onClick={() => {
            setIsMobileOpen(false);
            router.push("/how-it-works");
          }}
          className={getLinkClass("/how-it-works")}
        >
          How It Works
        </li>

        <li
          onClick={() => {
            setIsMobileOpen(false);
            router.push("/Pricing");
          }}
          className={getLinkClass("/Pricing")}
        >
          Pricing
        </li>

        <li
          onClick={() => {
            setIsMobileOpen(false);
            router.push("/Resources");
          }}
          className={getLinkClass("/Resources")}
        >
          Resources
        </li>

        <li
          onClick={() => {
            setIsMobileOpen(false);
            router.push("/about");
          }}
          className={getLinkClass("/about")}
        >
          Company
        </li>

        <li
          onClick={() => {
            setIsMobileOpen(false);
            router.push("/Contact");
          }}
          className={getLinkClass("/Contact")}
        >
          Contact
        </li>
      </ul>

      {/* ✅ Capsule Log In Button */}
      <div className="hidden md:flex justify-end">
        <li>
  <Link href="/login">
    <span>
      <button
        type="button"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition"
      >
        Log In
      </button>
    </span>
  </Link>
</li>


      </div>

      {/* ✅ Mobile Menu Toggle */}
      <button
        className="md:hidden text-2xl text-blue-600"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* ✅ Mobile Menu */}
      {isMobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gray-200 md:hidden z-50">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium text-gray-800">
            <li onClick={() => router.push("/")} className={getLinkClass("/")}>
              Home
            </li>

            <li
              onClick={() => {
                setIsMobileOpen(false);
                router.push("/Features");
              }}
              className={getLinkClass("/Features")}
            >
              Features
            </li>

            <li
              onClick={() => {
                setIsMobileOpen(false);
                router.push("/Platform");
              }}
              className={getLinkClass("/Platform")}
            >
              Platform
            </li>

            <li
              onClick={() => {
                setIsMobileOpen(false);
                router.push("/how-it-works");
              }}
              className={getLinkClass("/how-it-works")}
            >
              How It Works
            </li>

            <li
              onClick={() => {
                setIsMobileOpen(false);
                router.push("/Pricing");
              }}
              className={getLinkClass("/Pricing")}
            >
              Pricing
            </li>

            <li
              onClick={() => {
                setIsMobileOpen(false);
                router.push("/Resources");
              }}
              className={getLinkClass("/Resources")}
            >
              Resources
            </li>

            <li
              onClick={() => {
                setIsMobileOpen(false);
                router.push("/about");
              }}
              className={getLinkClass("/about")}
            >
              Company
            </li>

            <li
              onClick={() => {
                setIsMobileOpen(false);
                router.push("/Contact");
              }}
              className={getLinkClass("/Contact")}
            >
              Contact
            </li>

            {/* ✅ Capsule Log In for mobile also */}
           <li>
  <Link href="/login">
    <span>
      <button
        type="button"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition"
      >
        Log In
      </button>
    </span>
  </Link>
</li>

          </ul>
        </div>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  scrollToFeatures: PropTypes.func,
  scrollToPlatform: PropTypes.func,
  scrollToHowItWorks: PropTypes.func,
  scrollToResources: PropTypes.func,
  scrollToPricing: PropTypes.func,
};
