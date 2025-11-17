"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CandidateCard from "../components/CandidateCard";
import FeaturesSection from "../components/FeaturesSection";
import FooterSection from "../components/FooterSection";
import WhyDigiHire from "../components/WhyDigiHire";
import HowItWorks from "../components/HowItWorks";
import ResultsROISnapshot from "../components/ResultsROISnapshot";
import AboutDigiHire from "../components/AboutDigiHire";
import ContactCTA from "../components/ContactCTA";
import ResourcesSection from "../components/ResourcesSection";
import TechnologySection from "../components/TechnologySection";

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeProfile, setActiveProfile] = useState(0);

  const featuresRef = useRef(null);
  const platformRef = useRef(null);
  const howItWorksRef = useRef(null);
  const resourcesRef = useRef(null);
  const pricingRef = useRef(null);

  const profiles = [
    {
      name: "Emily Jacobs",
      role: "UX Designer",
      description:
        "Creative UX designer focused on user-centered design with a passion for modern, intuitive experiences.",
      location: "📍 Seattle, WA",
      phone: "📞 (206) 555-xxxx",
      email: "✉️ emily.carson@digihire.com",
      photo: "/photo.png",
      video: "/video/UX designer.mp4",
    },
    {
      name: "HR Manager",
      role: "Human Resources",
      description:
        "Experienced HR professional skilled in recruitment, talent management, and employee engagement.",
      location: "📍 New York, NY",
      phone: "📞 (212) 555-xxxx",
      email: "✉️ hr.manager@digihire.com",
      photo: "/HR Photo.png",
      video: "/video/HR.mp4",
    },
    {
      name: "Priya Sharma",
      role: "Backend Developer",
      description:
        "Experienced backend developer skilled in Node.js, Express, and Database",
      location: "📍 New York, NY",
      phone: "📞 (646) 555-xxxx",
      email: "✉️ priyasharma@digihire.com",
      photo: "/Backend Developer photo.png",
      video: "/video/Backend Developer.mp4",
    },
    {
      name: "John Doe",
      role: "IT Project Coordinator",
      description:
        "Supports IT teams by managing schedules, Resources, and Communication without requiring deep technical skills.",
      location: "📍Los Angeles, CA, USA",
      phone: "📞(310) 555-6xxx",
      email: "✉️ johndoe@digihire.com",
      photo: "/Digital Marketing.png",
      video: "/video/Digital Marketing.mp4",
    },
    {
      name: "Ananya Verma",
      role: "Data Scientist",
      description:
        "Data-driven professional with expertise in Python, Machine learning, and statistical modeling. Skilled at transforming raw data into actionable insights to support strategic business decisions.",
      location: "📍Bengaluru, India",
      phone: "📞 (91) 912xxxxxxx",
      email: "✉️ ananyaverma@digihire.com",
      photo: "/Data Scientist Photo.png",
      video: "/video/Data Scientist.mp4",
    },
  ];

  // ✅ Auto-rotate profiles every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProfile((prev) => (prev + 1) % profiles.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Safe browser-only logic for localStorage / window access
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      console.log("Token:", token);
      console.log("Current URL:", window.location.href);

      // Example: if you need to query an element
      // const element = document.querySelector("#some-id");
      // console.log(element);
    }
  }, []);

  // ✅ Scroll logic using searchParams
  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");
    if (scrollTo) {
      setTimeout(() => {
        if (scrollTo === "features") featuresRef.current?.scrollIntoView({ behavior: "smooth" });
        if (scrollTo === "platform") platformRef.current?.scrollIntoView({ behavior: "smooth" });
        if (scrollTo === "resources") resourcesRef.current?.scrollIntoView({ behavior: "smooth" });
        if (scrollTo === "howitworks") howItWorksRef.current?.scrollIntoView({ behavior: "smooth" });
        if (scrollTo === "pricing") pricingRef.current?.scrollIntoView({ behavior: "smooth" });

        router.replace("/");
      }, 500);
    }
  }, [searchParams, router]);

  const sectionStyle = {
    background: "white",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ✅ All sections use the same gradient background */}
      <div style={sectionStyle}>
        <Hero />
        {/* <CandidateCard current={profiles[activeProfile]} /> */}
        <WhyDigiHire />
        <HowItWorks />
        <TechnologySection />
        <FeaturesSection ref={featuresRef} />
        <ResultsROISnapshot />
        <ResourcesSection />
        <AboutDigiHire />
        <ContactCTA />
      </div>

      <FooterSection />
    </div>
  );
}

// ✅ Main component wrapped in Suspense (fixes useSearchParams prerender issue)
export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
