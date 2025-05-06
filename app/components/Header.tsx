import { usePathname, useRouter } from "next/navigation";

const sections = [
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Experience", path: "/experience" },
  { name: "Projects", path: "/projects" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="sticky top-0 bg-white shadow z-10">
      <nav className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 space-y-2 sm:space-y-0">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex flex-wrap gap-2 sm:gap-4">
          {sections.map((section) => (
            <li key={section.path}>
              <button
                onClick={() => router.push(section.path)}
                className={`${
                  pathname === section.path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                } hover:text-blue-400 transition text-sm sm:text-base`}
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
