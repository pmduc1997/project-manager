"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    { name: "Portfolio Website", url: "https://yourportfolio.com" },
    { name: "Task Tracker App", url: "https://taskapp.com" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <h2 className="text-lg sm:text-xl font-bold">Projects</h2>
      <ul className="space-y-2">
        {projects.map((proj) => (
          <li key={proj.name}>
            <a
              href={proj.url}
              className="text-blue-600 hover:underline text-sm sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              {proj.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
