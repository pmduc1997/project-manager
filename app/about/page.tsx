"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AVATAR_SRC = "/avatar.jpg"; // Change this to your desired image path
const ABOUT_TEXT = `I’m a Vietnamese Full-stack Developer with strong English skills, looking to collaborate with clients on outsourcing projects.`;

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
          src={AVATAR_SRC}
          alt="My Photo"
          width={160}
          height={160}
          className="border border-gray-300 shadow-md object-cover"
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="text-gray-700 max-w-xl mx-auto">{ABOUT_TEXT}</p>
      </div>
    </motion.section>
  );
}
