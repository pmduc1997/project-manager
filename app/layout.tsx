"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import Header from "@/app/components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gray-100 text-gray-900">
          <Header />
          <motion.main
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto px-4 py-10"
          >
            {children}
          </motion.main>
        </div>
      </body>
    </html>
  );
}
