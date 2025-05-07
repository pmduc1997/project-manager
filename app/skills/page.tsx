"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Skill = {
  name: string;
  score: string;
  icon: string;
};
const SKILLS: Skill[] = [
  {
    name: "JavaScript",
    score: "9/10",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    score: "8/10",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    score: "9/10",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    score: "8/10",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TailwindCSS",
    score: "9/10",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node.js",
    score: "7/10",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
];

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-lg sm:text-xl font-bold text-center">Tech Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {SKILLS.map((skill) => (
          <li
            key={skill.name}
            className="bg-white p-4 rounded shadow text-center space-y-2"
          >
            <div className="flex justify-center">
              <Image
                src={skill.icon}
                alt={`${skill.name} logo`}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="text-sm sm:text-base font-semibold">
              {skill.name}
            </div>
            <div className="text-xs text-gray-500">
              Skill level: {skill.score}
            </div>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
