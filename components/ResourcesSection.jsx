"use client";

import Link from "next/link"; // ✅ Added for internal navigation


export default function ResourcesSection() {
  const resources = [
    {
      title: "How AI Interviews Transform Hiring Decisions",
      desc: "Discover how artificial intelligence reshapes the way organizations evaluate and select top talent.",
      link: "/blog/ai-interviews", // ✅ internal route
    },
    {
      title: "Building an Inclusive Workforce with AI",
      desc: "Learn how AI-driven recruitment can help create diverse and equitable workplaces.",
      link: "/blog/inclusive-workforce", // ✅ internal route
    },
    {
      title: "2025 Hiring Trends to Watch",
      desc: "Stay ahead with insights into the latest recruitment trends and technologies shaping the future.",
      link: "/blog/hiring-trends", // ✅ updated to new internal route
    },
  ];

  return (
    <section className="bg-white-100 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-2xl font-heading font-bold text-black-800 mb-10">
          Learn. Innovate. Hire Smarter.
        </h2>

        {/* Carousel */}
        <div className="flex overflow-x-auto space-x-6 pb-6 snap-x snap-mandatory justify-center">
          {resources.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[300px] bg-white rounded-3xl p-6 text-left snap-center transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* ✅ Use Link for internal blog pages */}
              {item.link.startsWith("/blog/") ? (
                <Link
                  href={item.link}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              ) : (
                <a
                  href={item.link}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center items-center w-full">
  <Link
    href="/Resources"
    className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-md transition flex items-center justify-center font-body w-[200px] h-[52px] text-center"
  >
    Explore Resources
  </Link>
</div>

      </div>
    </section>
  );
}
