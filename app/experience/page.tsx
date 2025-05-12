"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      company: "CMC Global",
      logo: "/logos/cmc_global_company_limited_logo.jpeg",
      role: "Senior Full-stack Developer",
      duration: "March 2023 - Present",
      description:
        "Lead development of modern web applications using Next.js, React, and Tailwind. Collaborated with product managers to deliver scalable frontend and backend features, improved performance, and maintained code quality through code reviews and testing.",
    },
    {
      company: "VMO Holdings",
      logo: "/logos/vmogroup_logo.jpeg",
      role: "Full-stack Developer",
      duration: "July 2021 - March 2023",
      description:
        "Built and maintained client-facing web applications using React, Node.js, and Firebase. Worked in agile teams, implemented REST APIs, and contributed to UI/UX improvements across multiple projects.",
    },
    {
      company: "FPT Software",
      logo: "/logos/fpt_software_logo.jpeg",
      role: "Frontend Developer",
      duration: "Jan 2020 - July 2021",
      description:
        "Developed interactive UI components using React and TypeScript for enterprise clients. Collaborated with backend teams to integrate APIs and delivered consistent, responsive designs with modern CSS frameworks.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8 p-3"
    >
      <h2 className="text-lg sm:text-xl font-bold text-center mb-2">
        Experience
      </h2>
      <ul className="space-y-6 max-w-2xl w-full mx-auto">
        {experiences.map((exp) => (
          <li
            key={exp.company}
            className="bg-white/90 backdrop-blur-md border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition text-sm sm:text-base flex items-start gap-4"
          >
            <div className="w-12 h-12 relative flex-shrink-0 border border-gray-200 rounded-lg overflow-hidden bg-white">
              <Image
                src={exp.logo}
                alt={exp.company}
                fill
                className="object-contain p-1"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-base sm:text-lg">
                {exp.role}
                <span className="text-gray-600 font-normal">
                  {" "}
                  @ {exp.company}
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">{exp.duration}</p>
              <p className="mt-2 text-gray-700">{exp.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
