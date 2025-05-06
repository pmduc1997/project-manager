"use client";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      company: "Tech Co.",
      role: "Frontend Developer",
      duration: "2022 - Present",
      description:
        "Built and maintained modern web apps using React and Next.js.",
    },
    {
      company: "Startup Inc.",
      role: "Web Intern",
      duration: "2021",
      description: "Assisted in developing landing pages and fixing bugs.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <h2 className="text-lg sm:text-xl font-bold">Experience</h2>
      <ul className="space-y-4">
        {experiences.map((exp) => (
          <li
            key={exp.company}
            className="bg-white p-4 rounded shadow text-sm sm:text-base"
          >
            <h3 className="font-semibold text-base sm:text-lg">
              {exp.role} @ {exp.company}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500">{exp.duration}</p>
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
