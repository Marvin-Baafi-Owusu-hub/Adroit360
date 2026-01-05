// src/components/CaseStudies.jsx
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";

const studies = [
  {
    id: 1,
    title: "E-Commerce Platform Rebuild",
    client: "Global Retail Co.",
    result:
      "Achieved 40% increase in conversion rates and 2x speed improvement.",
    tech: ["React.js", "Node.js", "AWS"],
    image:
      "https://images.unsplash.com/photo-1676116777245-1cc40079cd38?q=80&w=1048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "AI-Powered Data Dashboard",
    client: "FinTech Innovations",
    result:
      "Reduced manual reporting time by 85% with real-time analytics dashboards.",
    tech: ["Python", "TensorFlow", "PostgreSQL"],
    image:
      "https://media.istockphoto.com/id/2197955227/photo/humans-are-using-laptops-and-computers-to-interact-with-ai-helping-them-create-code-train-ai.jpg?s=1024x1024&w=is&k=20&c=dzNCjaBFsih39qc5jBxv4D0t4g5ncqmvpK88GgHCloo=",
  },
  {
    id: 3,
    title: "SaaS Product MVP Launch",
    client: "Startup Launchpad",
    result:
      "Developed and launched Minimum Viable Product in 12 weeks, securing Series A funding.",
    tech: ["Vue.js", "Tailwind CSS", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1619243142206-381c5aeda31c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="pb-9 md:pb-13 pt-10 bg-gray-100">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <ScrollReveal animation="slide-up">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            Our Success Stories
          </h2>
        </ScrollReveal>
        <ScrollReveal animation="slide-up" delay={150}>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            See how we've helped leading companies achieve measurable business
            results through technology.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studies.map((study) => (
            <ScrollReveal
              key={study.id}
              animation="slide-up"
              delay={study.id * 200 + 300}
            >
              <div
                key={study.id}
                className="relative h-96 rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition duration-500 group cursor-pointer"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${study.image}')` }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0  bg-black/90 opacity-60 group-hover:opacity-50 transition duration-500"></div>

                {/* Content Box */}
                <div className="relative p-6 h-full flex flex-col justify-end text-white">
                  <span className="text-sm font-medium text-blue-400 mb-1">
                    {study.client}
                  </span>
                  <h3 className="text-2xl font-bold mb-3">{study.title}</h3>

                  <p className="text-sm text-gray-200 mb-4">
                    Result: {study.result}
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs font-semibold">
                    {study.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-blue-600 bg-opacity-80 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={`#study-${study.id}`}
                    className="absolute top-4 right-4 p-2 rounded-full bg-blue-600 text-white opacity-0 group-hover:opacity-100 transition duration-300"
                    aria-label={`View case study: ${study.title}`}
                  >
                    <FiExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
