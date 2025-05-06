"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 text-center"
    >
      <div className="flex justify-center">
        <Image
          src="/avatar.jpg" // Replace with your image path
          alt="My Avatar"
          width={120}
          height={120}
          className="rounded-full border-4 border-blue-500 shadow-md"
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          Hello! Im a passionate developer who enjoys building web applications
          using modern technologies like Next.js, TailwindCSS, and TypeScript. I
          love learning and creating clean, user-focused interfaces.
        </p>
      </div>
    </motion.section>
  );
}
