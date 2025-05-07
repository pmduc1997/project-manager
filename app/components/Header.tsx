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
    <header className="sticky top-0 bg-white shadow z-10">
      <nav className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 gap-4">
        {/* Left: Profile */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl font-bold">{HEADER.title}</h1>
            <Image
              src="/logos/vietnam.png"
              alt="Vietnam"
              width={24}
              height={16}
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <a
              href={`mailto:${HEADER.email}`}
              className="hover:text-blue-500 transition"
            >
              {HEADER.email}
            </a>
            |
            <a
              href="/PhamMinhDuc_CV.pdf"
              download
              className="hover:text-blue-500 transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right: Navigation */}
        <ul className="flex flex-wrap gap-2 sm:gap-4">
          {sections.map((section) => (
            <li key={section.path}>
              <button
                onClick={() => router.push(section.path)}
                className={`${
                  pathname === section.path
                    ? "text-blue-600 font-semibold bg-blue-100"
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
