"use client";

import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const sections = [
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
];

const HEADER = {
  title: "Phạm Minh Đức",
  email: "pmduc1997@gmail.com",
};

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="sticky top-0 bg-white z-10 border border-b-1 border-gray-200 shadow-sm">
      <nav className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 gap-4">
        {/* Left: Profile */}
        <div className="flex items-center gap-2 mb-1">
          <h1 className="text-2xl font-bold">{HEADER.title}</h1>
          <Image
            src="/logos/vietnam.png"
            alt="Vietnam"
            width={24}
            height={16}
          />
        </div>

        {/* Right: Navigation */}
        <ul className="flex flex-wrap gap-2 sm:gap-4">
          {sections.map((section) => (
            <li key={section.path}>
              <button
                onClick={() => router.push(section.path)}
                className={`${
                  pathname === section.path
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-gray-700"
                } hover:text-blue-500 rounded px-3 py-2 text-sm sm:text-base transition whitespace-nowrap cursor-pointer`}
              >
                {section.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
