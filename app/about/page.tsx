"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const AVATAR_SRC = "/avatar.jpeg";
const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/duc-pham-591850196/",
    icon: (
      <svg
        width="24"
        height="24"
        fill="currentColor"
        className="text-primary"
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/pmduc1997",
    icon: (
      <svg
        width="24"
        height="24"
        fill="currentColor"
        className="text-gray-800"
        viewBox="0 0 24 24"
      >
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576 4.765-1.589 8.2-6.086 8.2-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex justify-center items-center min-h-[70vh]"
    >
      <div className="p-6 sm:p-10 max-w-lg w-full space-y-8 flex flex-col items-center">
        <div className="rounded-full ring-4 ring-primary/40 p-2 bg-white">
          <Image
            src={AVATAR_SRC}
            alt="My Photo"
            width={160}
            height={160}
            className="w-[160px] h-[160px] rounded-full object-cover object-top"
            priority
          />
        </div>
        <div className="space-y-1 text-center">
          <p className="text-gray-700 text-base sm:text-lg italic flex items-center justify-center gap-2">
            <span
              className="inline-block animate-wave origin-[70%_70%]"
              role="img"
              aria-label="waving hand"
            >
              👋
            </span>
            Hi, I&apos;m Đức from{" "}
            <span className="font-semibold text-primary">Vietnam</span>
          </p>
          <TypeAnimation
            sequence={[
              "Full-stack Developer",
              1500,
              "React Enjoyer",
              1500,
              "UI/UX Aware Engineer",
              1500,
              "Code, Chill, Repeat",
              1500,
            ]}
            wrapper="p"
            speed={40}
            className="text-primary text-2xl sm:text-3xl font-extrabold font-montserrat tracking-wide drop-shadow-sm bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent"
            repeat={Infinity}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs justify-center pt-2">
          <a
            href="/PhamMinhDuc_CV.pdf"
            download
            className="flex-1 px-4 py-2.5 bg-primary rounded-lg hover:bg-primary/80 transition text-center font-semibold text-white shadow-sm"
          >
            Download CV
          </a>
          <a
            href="mailto:pmduc1997@gmail.com"
            className="flex-1 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-white/80 transition text-center font-semibold bg-white"
          >
            Contact Me
          </a>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="flex justify-center gap-10">
            {SOCIALS.map((social) => (
              // ...inside your social icons map...
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="hover:scale-125 transition-transform"
              >
                {React.cloneElement(social.icon, {
                  className: "w-8 h-8 " + (social.icon.props.className || ""),
                })}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
