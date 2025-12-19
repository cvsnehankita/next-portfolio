import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Sneha Ramteke | Lead Fullstack Engineer",
  description:
    "Lead Fullstack Engineer with 8+ years of experience building scalable microservices, architecting cloud solutions, and delivering high-performance enterprise applications.",
  keywords: [
    "Fullstack Developer",
    "Lead Engineer",
    "Java",
    "Spring Boot",
    "React",
    "Node.js",
    "AWS",
    "Kubernetes",
    "Microservices",
    "Software Engineer",
  ],
  authors: [{ name: "Snehankita Channe" }],
  openGraph: {
    title: "Snehankita Channe | Lead Fullstack Engineer",
    description:
      "Lead Fullstack Engineer with 8+ years of experience building scalable microservices and enterprise applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sneha Ramteke | Lead Fullstack Engineer",
    description:
      "Lead Fullstack Engineer with 8+ years of experience building scalable microservices and enterprise applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
