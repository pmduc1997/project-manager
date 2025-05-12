import { ReactNode } from "react";
import Header from "@/app/components/Header";
import "./globals.css";

export const metadata = {
  title: "Phạm Minh Đức | Portfolio",
  description: "Portfolio of Phạm Minh Đức - Vietnamese Full-stack Developer.",
  keywords: [
    "Phạm Minh Đức",
    "Portfolio",
    "Full-stack Developer",
    "Vietnamese Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
  ],
  creator: "Phạm Minh Đức",
  openGraph: {
    title: "Phạm Minh Đức | Portfolio",
    description:
      "Portfolio of Phạm Minh Đức - Vietnamese Full-stack Developer.",
    url: "https://your-portfolio-url.com",
    siteName: "Phạm Minh Đức Portfolio",
    locale: "en_US",
    type: "website",
  },
};
export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div
          className="
          min-h-screen text-gray-900
          bg-[radial-gradient(circle,_#e0e7ef_1px,_#f8fafc_1.5px)]
          bg-[size:18px_18px]
          bg-gradient-to-br from-white via-[#f8fafc] to-[#e0f2fe]
        "
        >
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
