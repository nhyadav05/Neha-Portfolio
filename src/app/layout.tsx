import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Simple and stable metadata
export const metadata: Metadata = {
  title: "Neha Yadav | Frontend Developer",
  description:
    "Portfolio of Neha Yadav - Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Neha Yadav",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Developer",
    "JavaScript",
  ],
  authors: [{ name: "Neha Yadav" }],
  themeColor: "#4f46e5", // Matches your theme
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport = "width=device-width, initial-scale=1, maximum-scale=1";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
