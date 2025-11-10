"use client";
import { forwardRef, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const DoubleLeftIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.4))" }}
  >
    <polyline points="11 17 6 12 11 7"></polyline>
    <polyline points="18 17 13 12 18 7"></polyline>
  </svg>
);

const DoubleRightIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.4))" }}
  >
    <polyline points="13 17 18 12 13 7"></polyline>
    <polyline points="6 17 11 12 6 7"></polyline>
  </svg>
);

const FeaturesSection = forwardRef((props, ref) => {
  const features = [
    { title: "AI Video Interviews", description: "On-demand interviews, available 24/7.AI analyzes responses, tone, confidence, and technical accuracy." },
    { title: "Smart Screening & Reports", description: "Instant candidate ranking with match percentages.Auto-generated reports with skill, behavioral & personality insights." },
    { title: "Easy Collaboration", description: "Share interview recordings & AI insights with hiring managers.Collect consolidated feedback in one place" },
    { title: "Flexible & Customizable", description: "Role-based interview templates (IT, Finance, Sales, HR, etc.).Supports scenario-based, competency-based, and technical Q&A." },
    { title: "Adaptive assessment flow", description: "Adjusts the complexity and direction of questions based on a candidate’s performance, creating a more personalized evaluation." },
    { title: "Video-based screening", description: "Enables candidates to complete video interviews anytime, reducing the need for initial human-led screening rounds." },
    { title: "Scalable hiring for large volumes", description: "Designed to process and evaluate multiple applicants simultaneously, making it ideal for bulk or campus hiring" },
    { title: "Automated scheduling tools", description: "Allows candidates to self-schedule interviews, minimizing back-and-forth co-ordination." },
    { title: "Actionable insights & reports", description: "Provides detailed analytics, interview recordings, and structured scoring to support fair and consistent hiring decisions." },
    { title: "Bias-aware evaluation", description: "Aims to minimize unconscious bias by standardizing assessments and focusing on skills and responses" },
    { title: "Flexible pricing & growth plans", description: "Offers pay-as-you-go, subscription, and enterprise solutions to fit organizations of any size." },
    { title: "Always-on global accessibility", description: "Candidates can complete interviews 24/7 across different time zones, ensuring flexibility and inclusivity." },
    { title: "Real-time proctoring", description: "Monitors candidates during video interviews to ensure authenticity and prevent malpractice." },
    { title: "ATS integration", description: "Seamlessly connects with Applicant Tracking Systems to sync candidate data and streamline recruitment workflows." },
    { title: "Role-specific question libraries", description: "Provides ready-made question sets for technical, behavioral, and industry-specific roles to speed up interview design." },
    { title: "Candidate feedback collection", description: "Captures feedback from applicants about their interview experience, helping companies improve the hiring process." }
  ];

  const loopFeatures = [...features];
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const autoScrollRef = useRef(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoScrollRef.current) {
        setCurrentIndex((prev) =>
          prev + itemsPerView >= loopFeatures.length ? 0 : prev + itemsPerView
        );
      }
    }, 16000);
    return () => clearInterval(interval);
  }, []);

  const pauseAutoScroll = () => {
    autoScrollRef.current = false;
    setTimeout(() => {
      autoScrollRef.current = true;
    }, 8000);
  };

  const scrollLeft = () => {
    pauseAutoScroll();
    setCurrentIndex((prev) =>
      prev === 0 ? loopFeatures.length - itemsPerView : prev - itemsPerView
    );
  };

  const scrollRight = () => {
    pauseAutoScroll();
    setCurrentIndex((prev) =>
      prev + itemsPerView >= loopFeatures.length ? 0 : prev + itemsPerView
    );
  };

  const slideVariants = {
    enter: { opacity: 0, y: 40, scale: 0.95 },
    center: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, scale: 0.95, transition: { duration: 0.6 } },
  };

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-6 py-10 relative bg-white-100 overflow-hidden">

      {/* Heading */}
      <h2 className="text-2xl font-heading font-bold text-center text-black-800 mb-9 -mt-3">
        Core Features Snapshot
      </h2>

      <div className="flex items-center justify-center gap-6 relative">
        <button onClick={scrollLeft}>
          <DoubleLeftIcon />
        </button>

        <div className="w-[85%] mx-auto overflow-hidden relative">
          <motion.div
            className="flex justify-center gap-[20px]"
            animate={{ x: `-${(currentIndex * 50) / itemsPerView}%` }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {loopFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                className="w-[23%] flex-shrink-0 flex flex-col items-center text-center border p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-500"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* ✅ Fixed height image wrapper for alignment */}
                <div className="h-[140px] flex items-center justify-center mb-4">
                  <img
                    src={`/${feature.title}.png`}
                    alt={feature.title}
                    className="max-h-[120px] object-contain"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>

                <h3 className="text-lg font-semibold mb-2 text-blue-700">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <button onClick={scrollRight}>
          <DoubleRightIcon />
        </button>
      </div>
<div className="mt-10 flex justify-center">
  <Link
    href="/Features"
    className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center font-body w-[200px] h-[52px] text-center whitespace-nowrap"
  >
    See Full Feature List
  </Link>
</div>

    </div>
  );
});

export default FeaturesSection;
