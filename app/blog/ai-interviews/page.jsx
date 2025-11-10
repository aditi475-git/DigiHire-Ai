"use client";

import { Clock, BarChart3, Calendar, Users, Layers } from "lucide-react";
import Image from "next/image";
import Navbar from "../../../components/Navbar"; // ✅ Correct fixed path

export default function BlogAIInterviews() {
  return (
    <>
      {/* ✅ Navbar added */}
      <Navbar />

      <section
        className="min-h-screen py-16 px-6 md:px-20 flex flex-col justify-center items-center text-center"
        style={{
          // 🎨 Updated background — soft blue and white gradient
          background: "linear-gradient(135deg, #8ba7cfff 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center gap-10 mb-16">
            <div className="flex-1">
              <h1 className="text-4xl md:text-2xl font-bold mb-4 text-blue-900">
                How AI Interviews Transform Hiring Decisions
              </h1>
              <p className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
                Hiring the right talent has always been one of the biggest challenges for organizations.
                Traditional recruitment methods often rely on manual screening, subjective judgments, and lengthy interview processes.
                In recent years, AI interviews have emerged as a game-changing solution, transforming the way companies assess candidates.
                These intelligent systems not only streamline the hiring process but also bring greater fairness, consistency, and data-driven insights into recruitment.
              </p>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-center">
            <SectionCard
              icon={<Clock className="w-8 h-8 text-blue-700 mx-auto" />}
              title="Speed and Efficiency"
              text="One of the biggest advantages of AI interviews is the ability to dramatically accelerate recruitment. Traditional interviews require scheduling, coordination, and repeated follow-ups, which can take weeks or even months.
               With AI-driven interviews, candidates can record responses at their convenience, and AI algorithms can quickly analyze them for skills, tone, and fit. This means recruiters can process more candidates in less time without sacrificing quality."
            />

            <SectionCard
              icon={<BarChart3 className="w-8 h-8 text-blue-700 mx-auto" />}
              title="Objective Candidate Evaluation"
              text="Human bias is one of the greatest challenges in hiring. Factors such as unconscious bias, first impressions, or inconsistent criteria often affect recruitment decisions. AI interviews, powered by machine learning and natural language processing (NLP), can evaluate candidates based on consistent parameters. By analyzing responses for competencies, tone, and problem-solving ability, AI provides a more objective and standardized way to assess talent."
            />

            <SectionCard
              icon={<Calendar className="w-8 h-8 text-blue-700 mx-auto" />}
              title="Data-Driven Insights"
              text="AI interviews go beyond simply recording answers. They offer detailed analytics — breaking down speech patterns, sentiment, body language (if video interviews are involved), and skill levels. Recruiters receive actionable insights that help compare candidates fairly. This data-driven approach enables smarter decisions backed by measurable criteria rather than gut feeling."
            />

            <SectionCard
              icon={<Users className="w-8 h-8 text-blue-700 mx-auto" />}
              title="Enhanced Candidate Experience"
              text="AI interviews also improve the candidate experience. Candidates can interview on their own schedule, reducing stress and logistical challenges. For employers, this means access to a wider talent pool, as candidates from different time zones or backgrounds can participate without the limitations of fixed interview slots."
            />

            <SectionCard
              icon={<Layers className="w-8 h-8 text-blue-700 mx-auto" />}
              title="Scalable Recruitment"
              text="For growing organizations, AI interviews make scaling easier. Whether hiring five people or five hundred, AI systems can handle large volumes of interviews without increasing the recruitment workload. This scalability helps companies remain agile while maintaining hiring quality."
            />

            {/* Conclusion */}
            <div className="mt-12 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-blue-100">
              <h2 className="text-3xl font-semibold mb-4 text-blue-900">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                AI interviews are reshaping the recruitment landscape. They combine speed, objectivity, data-driven evaluation, and scalability to make hiring smarter and more efficient. While human intuition still plays a vital role in the final decision, AI provides recruiters with powerful tools to streamline the process and make better-informed choices.
                The future of recruitment lies in a collaboration between humans and AI — where technology enhances decision-making and ensures organizations hire not just faster, but better.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ✅ Reusable Section Card Component */
function SectionCard({ icon, title, text }) {
  return (
    <div className="flex flex-col items-center text-center gap-4 bg-white rounded-2xl p-8 shadow-md border border-blue-100">
      <div className="bg-blue-100 p-3 rounded-xl shadow-md">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-blue-900">{title}</h3>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          {text}
        </p>
      </div>
    </div>
  );
}
