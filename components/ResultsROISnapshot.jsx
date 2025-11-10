"use client";

import { TrendingUp, Zap, Timer } from "lucide-react";

export default function ResultsSnapshot() {
  const metrics = [
    { metric: "Time to First Screening", traditional: "5–7 days", digihire: "Within hours" },
    { metric: "Screening Turnaround", traditional: "7–10 days", digihire: "24–48 hours" },
    { metric: "Hire Cycle", traditional: "25–40 days", digihire: "8–15 days" },
    { metric: "Recruiter Hours", traditional: "100% manual", digihire: "70% automated" },
  ];

  return (
<section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 py-14 bg-blue-100 to-white">

  {/* ✅ Added Header Text */}
  <div className="col-span-1 md:col-span-2 text-center mb-10">
    <h2 className="text-2xl font-bold text-gray-900 mb-3">
      Results & ROI Snapshot
    </h2>
    <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
      DigiHire’s automation delivers measurable ROI through speed, quality, and fairness.
    </p>
  </div>

  {/* Time to First Screening */}
  <div className="bg-white rounded-3xl p-8 shadow-md">
    <h3 className="text-lg font-semibold text-gray-900 mb-6">
      Time to First Screening
    </h3>
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center bg-gray-100 rounded-xl px-6 py-4 flex-1 min-w-[200px] whitespace-nowrap">
        <span className="text-red-500 text-xl mr-2">⏱</span>
        <p className="text-gray-700 font-medium">
          Traditional: <span className="font-bold">5–7 days</span>
        </p>
      </div>
      <div className="flex items-center bg-blue-50 rounded-xl px-6 py-4 flex-1 min-w-[200px] whitespace-nowrap">
        <span className="text-blue-600 text-xl mr-2">⚡</span>
        <p className="text-blue-700 font-medium">
          DigiHire: <span className="font-bold">Within hours</span>
        </p>
      </div>
    </div>
  </div>

  {/* Screening Turnaround */}
  <div className="bg-white rounded-3xl p-8 shadow-md">
    <h3 className="text-lg font-semibold text-gray-900 mb-6">
      Screening Turnaround
    </h3>
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center bg-gray-100 rounded-xl px-6 py-4 flex-1 min-w-[200px] whitespace-nowrap">
        <span className="text-red-500 text-xl mr-2">⏱</span>
        <p className="text-gray-700 font-medium">
          Traditional: <span className="font-bold">7–10 days</span>
        </p>
      </div>
      <div className="flex items-center bg-blue-50 rounded-xl px-6 py-4 flex-1 min-w-[200px] whitespace-nowrap">
        <span className="text-blue-600 text-xl mr-2">⚡</span>
        <p className="text-blue-700 font-medium">
          DigiHire: <span className="font-bold">24–48 hours</span>
        </p>
      </div>
    </div>
  </div>

  {/* Hire Cycle */}
  <div className="bg-white rounded-3xl p-8 shadow-md">
    <h3 className="text-lg font-semibold text-gray-900 mb-6">Hire Cycle</h3>
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center justify-center bg-gray-100 rounded-xl px-6 py-4 flex-1 min-w-[200px] whitespace-nowrap">
  <span className="text-red-500 text-xl mr-2">⏱</span>
  <p className="text-gray-700 font-medium text-center">
    Traditional: <span className="font-bold">25–40 days</span>
  </p>
</div>

     <div className="flex items-center justify-center bg-blue-50 rounded-xl px-6 py-4 flex-1 min-w-[200px] whitespace-nowrap">
  <span className="text-blue-600 text-xl mr-2">⚡</span>
  <p className="text-blue-700 font-medium text-center">
    DigiHire: <span className="font-bold">8–15 days</span>
  </p>
</div>

    </div>
  </div>

  {/* Recruiter Hours */}
  <div className="bg-white rounded-3xl p-8 shadow-md">
    <h3 className="text-lg font-semibold text-gray-900 mb-6">
      Recruiter Hours
    </h3>
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center justify-center bg-gray-100 rounded-xl px-6 py-4 flex-1 min-w-[200px] whitespace-nowrap">
  <span className="text-red-500 text-xl mr-2">⏱</span>
  <p className="text-gray-700 font-medium text-center">
    Traditional: <span className="font-bold">100% manual</span>
  </p>
</div>

<div className="flex items-center justify-center bg-blue-50 rounded-xl px-6 py-4 flex-1 min-w-[200px] whitespace-nowrap">
  <span className="text-blue-600 text-xl mr-2">⚡</span>
  <p className="text-blue-700 font-medium text-center">
    DigiHire: <span className="font-bold">70% automated</span>
  </p>


      </div>
    </div>
  </div>
</section>

  );
}
