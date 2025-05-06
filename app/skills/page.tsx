"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "Node.js",
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <h2 className="text-lg sm:text-xl font-bold">Tech Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-white p-2 rounded shadow text-center text-sm sm:text-base"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
