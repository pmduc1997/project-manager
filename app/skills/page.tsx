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

function getScorePercent(score: string) {
  const [num, denom] = score.split("/").map(Number);
  return Math.round((num / denom) * 100);
}

export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 p-3"
    >
      <h2 className="text-lg sm:text-xl font-bold text-center">Tech Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {SKILLS.map((skill) => (
          <li
            key={skill.name}
            className="bg-white p-4 rounded shadow text-center space-y-2 flex flex-col items-center"
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
            <div className="w-full">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Skill level</span>
                <span>{skill.score}</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 rounded-full bg-primary transition-all"
                  style={{ width: `${getScorePercent(skill.score)}%` }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
