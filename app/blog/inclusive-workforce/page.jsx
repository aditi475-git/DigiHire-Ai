"use client";

import Image from "next/image";
import Navbar from "../../../components/Navbar"; // ✅ correct relative path

export default function BlogInclusiveWorkforce() {
  return (
    <>
      <Navbar />

      <section
        className="min-h-screen py-16 px-6 md:px-20 text-white flex flex-col items-center"
        style={{
           background: "linear-gradient(135deg, #8ba7cfff 100%)",
        }}
      >
        <div className="w-full max-w-6xl text-center">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-10 mb-16">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Building an Inclusive Workforce with AI
              </h1>
              <p className="text-lg leading-relaxed text-gray-100 max-w-4xl mx-auto">
                In today’s competitive and interconnected world, diversity and inclusion are more than just buzzwords — they are essential drivers of innovation, creativity, and business success. However, creating an inclusive workforce requires intentional effort and unbiased processes, especially in recruitment. 
                AI-driven recruitment technology is emerging as a powerful tool to help organizations build more diverse, equitable, and inclusive workplaces.
              </p>
            </div>

            <div className="flex-1 flex justify-center">
              {/* Optional image placeholder for later use */}
              {/* <Image
                src="/Blog2.png"
                alt="Inclusive Workforce Illustration"
                width={950}
                height={350}
                className="rounded-2xl shadow-lg object-cover"
              /> */}
            </div>
          </div>

          {/* Blog Content */}
          <div className="space-y-10 text-left md:text-center max-w-5xl mx-auto">
            <Section
              number="1"
              title="Removing Human Bias from Hiring"
              text="Human bias — whether conscious or unconscious — can subtly influence recruitment decisions. Traditional hiring processes often rely on subjective impressions, which can unintentionally favor certain demographics over others. AI recruitment tools, when designed responsibly, evaluate candidates based on data rather than personal assumptions. This objectivity ensures candidates are assessed fairly based on skills, competencies, and cultural fit rather than factors unrelated to job performance."
            />

            <Section
              number="2"
              title="Widening the Talent Pool"
              text="AI-driven recruitment platforms can scan and screen candidates from a much broader range of sources than traditional methods. This means organizations can discover talent beyond their existing networks and geographic boundaries. By removing location-based limitations and broadening candidate searches, AI helps organizations tap into a diverse talent pool, increasing the chances of creating a truly inclusive workplace"
            />

            <Section
              number="3"
              title="Ensuring Fair Screening"
              text="Screening resumes manually can inadvertently prioritize certain keywords, schools, or experiences. AI tools can be trained to focus on essential skills and performance indicators while ignoring irrelevant factors. This ensures all candidates are evaluated on equal footing. Additionally, AI-driven assessments can be structured to measure a candidate’s actual capabilities rather than relying on subjective interpretations"
            />

            <Section
              number="4"
              title="Consistent Evaluation Criteria"
              text="Consistency is crucial in fair recruitment. AI recruitment systems apply the same criteria to every candidate, ensuring uniform evaluation. This reduces inconsistencies that can arise from different interviewers’ interpretations or varying evaluation standards, making the hiring process fairer and more transparent."
            />

            <Section
              number="5"
              title="Enhancing Candidate Experience"
              text="An inclusive recruitment process benefits not only the company but also the candidate. AI-powered interviews allow candidates to engage with the process in their own way and at their convenience. Accessibility features — such as language options, flexible interview scheduling, and adaptive assessments — ensure candidates of different backgrounds and needs have an equal opportunity to showcase their abilities."
            />

            {/* Conclusion */}
            <div className="mt-12 text-center">
              <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
              <p className="text-gray-100 leading-relaxed text-lg max-w-4xl mx-auto">
                Building an inclusive workforce is a mission that requires intentionality,
                technology, and empathy. AI-driven recruitment offers powerful tools to
                reduce bias, expand talent reach, and create fairer evaluation systems.
                When combined with a strong commitment to inclusion from human
                decision-makers, AI can help organizations not only meet diversity goals
                but also foster richer, more innovative, and more successful workplaces.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ✅ Reusable section component */
function Section({ number, title, text }) {
  return (
    <div className="bg-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-sm text-left md:text-center">
      <h3 className="text-2xl font-semibold text-white mb-2">
        {number}. {title}
      </h3>
      <p className="text-gray-100 leading-relaxed">{text}</p>
    </div>
  );
}
