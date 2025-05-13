"use client";
import { motion } from "framer-motion";

const personalProjects = [
  {
    name: "Wedding Invitation",
    url: "https://wedding-invitation-duc-trinh.vercel.app/",
    description:
      "A modern wedding invitation site with motion and clean layout.",
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
  },
];

const companyProjects = [
  {
    name: "Chatbot AI",
    url: "https://guru.fwd.com/customer/?chatbot=sg-svc",
    description:
      "AI-powered chatbot using ChatGPT that assists users in purchasing insurance across WhatsApp, Facebook, and Instagram.",
    tech: ["NextJS", "TailwindCSS", "AWS", "NodeJS", "ChatGPT"],
    client: "FWD (Hong Kong)",
    position: "Senior Full-stack Developer",
  },
  {
    name: "E-commerce Merchandise",
    url: "https://www.setel.com/PETRONAS-Shop",
    description:
      "An SSR-enabled e-commerce platform to sell official PETRONAS merchandise.",
    tech: ["NextJS", "TailwindCSS", "AWS", "NodeJS", "NestJS"],
    client: "Petronas (Malaysia)",
    position: "Team Lead Full-stack Developer",
  },
  {
    name: "Quadient Mailing and Shipping",
    url: "https://www.quadient.com/",
    description:
      "Cross-platform app for sending physical documents online without visiting the post office.",
    tech: ["ReactJS", "React Native", "Bootstrap", "AWS", "NodeJS"],
    client: "Quadient (France)",
    position: "Full-stack Developer",
  },
];
function ProjectSection({
  title,
  projects,
}: {
  title: string;
  projects: typeof personalProjects | typeof companyProjects;
}) {
  return (
    <div className="space-y-4 w-full max-w-full sm:max-w-4xl mx-auto px-2 sm:px-0">
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
        {title}
      </h3>
      <ul className="grid gap-y-4 gap-x-4 sm:grid-cols-2">
        {projects.map((proj) => (
          <li
            key={proj.name}
            className="bg-white/90 backdrop-blur-md border border-gray-100 p-5 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <a
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block space-y-2"
            >
              <h4 className="text-base sm:text-lg font-semibold text-blue-700 hover:underline">
                {proj.name}
              </h4>
              <p className="text-sm text-gray-600">{proj.description}</p>
              {"client" in proj && (
                <div className="text-sm text-gray-500 pt-1">
                  <strong>Client:</strong> {proj.client} <br />
                  <strong>Position:</strong> {proj.position}
                </div>
              )}
              <div className="flex flex-wrap gap-2 pt-2">
                {proj.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8 min-h-screen py-4"
    >
      <ProjectSection title="Company Projects" projects={companyProjects} />
      <ProjectSection title="Personal Projects" projects={personalProjects} />
    </motion.section>
  );
}
