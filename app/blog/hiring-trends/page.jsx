"use client";

import Navbar from "../../../components/Navbar"; // ✅ correct relative path

export default function BlogHiringTrends() {
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
                2025 Hiring Trends to Watch
              </h1>
              <p className="text-lg leading-relaxed text-gray-100 max-w-4xl mx-auto">
                The hiring landscape is changing faster than ever. After years of
                digital transformation and global workforce shifts, 2025 is shaping
                up to be a defining year for recruitment. Companies are now rethinking
                how they attract, evaluate, and retain talent in an era where AI,
                flexibility, and candidate experience dominate the conversation. If your
                organization wants to stay ahead of the curve, understanding the latest
                hiring trends isn’t optional — it’s essential.
              </p>
            </div>
          </div>

          {/* Blog Content */}
          <div className="space-y-10 text-left md:text-center max-w-5xl mx-auto">
            <Section
              number="1"
              title="AI Becomes Every Recruiter’s Co-Pilot"
              text="Artificial Intelligence is no longer a futuristic concept — it’s the backbone of modern hiring. In 2025, recruiters are using AI not just for resume screening, but for predictive hiring, personality mapping, and bias-free evaluations. AI tools now analyze tone, communication style, and even confidence levels in interviews, helping companies identify candidates who truly fit their culture and growth needs. The key shift? AI isn’t replacing recruiters — it’s augmenting them, freeing up time for human connection and strategic thinking."
            />

            <Section
              number="2"
              title="Skills Over Degrees"
              text="Employers are moving away from traditional degree-based qualifications and focusing instead on real-world skills. The rise of online certifications, project portfolios, and skill-assessment tools means recruiters now care more about what a candidate can do than where they studied. In 2025, 'skills-first hiring' is the new normal — and companies that embrace this mindset will access deeper, more diverse talent pools."
            />

            <Section
              number="3"
              title="Flexible and Hybrid Work is Here to Stay"
              text="The debate about returning to the office is over — flexibility has won. While some organizations are reintroducing structured office time, most are opting for hybrid models that blend collaboration and independence. Candidates today expect control over when and where they work. Employers offering flexible arrangements — including four-day workweeks and remote-first cultures — are seeing a measurable edge in attracting top talent."
            />

            <Section
              number="4"
              title="Candidate Experience Becomes a Competitive Advantage"
              text="In 2025, candidates evaluate companies as much as companies evaluate them. A clunky application process or impersonal interview can turn away top talent instantly. Organizations are now investing in AI-powered chatbots, video interview platforms, and personalized follow-ups to create smoother, more engaging candidate journeys. The new standard: Every touchpoint — from job posting to offer letter — must reflect respect, clarity, and professionalism."
            />

            <Section
              number="5"
              title="Data-Driven Diversity and Inclusion"
              text="Diversity hiring isn’t just a checkbox anymore — it’s a measurable business strategy. AI-driven analytics now help organizations track and improve diversity metrics across every hiring stage. By identifying hidden biases and expanding outreach channels, companies are building more balanced, innovative teams. Expect to see a surge in data-backed DEI initiatives, where success is defined by transparency and accountability."
            />

            <Section
              number="6"
              title="Continuous Learning and Upskilling"
              text="As technology evolves, so do job roles. The best organizations of 2025 are creating ecosystems of continuous learning — offering micro-courses, mentorship programs, and digital certifications to keep their workforce future-ready. Hiring now goes hand in hand with upskilling. Employers are no longer just looking for the 'perfect fit' — they’re investing in potential."
            />

            <Section
              number="7"
              title="Employer Branding Takes Center Stage"
              text="In a talent-short market, perception is power. A strong employer brand — backed by authentic stories, employee advocacy, and transparent culture — is what attracts high-performing candidates. Companies that share their values openly and showcase employee success stories online will have a distinct edge over those who don’t."
            />

            {/* Conclusion */}
            <div className="mt-12 text-center">
              <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
              <p className="text-gray-100 leading-relaxed text-lg max-w-4xl mx-auto">
                The future of hiring in 2025 is not about technology versus humanity —
                it’s about technology empowering humanity. AI, data, and automation are
                helping recruiters focus on what truly matters: people. Organizations that
                embrace these trends with authenticity and agility will not only hire
                better but also build workplaces that inspire loyalty, innovation, and
                long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ✅ Reusable Section Component */
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
