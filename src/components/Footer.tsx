"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/sneha",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sneha",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:sneha@example.com",
    icon: Mail,
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-200 dark:border-dark-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="font-mono text-xl font-bold text-dark-900 dark:text-dark-50"
            >
              <span className="text-primary-500">&lt;</span>
              Sneha
              <span className="text-primary-500">/&gt;</span>
            </a>
            <p className="mt-4 text-dark-500 dark:text-dark-400 text-sm">
              Lead Fullstack Engineer with 7.5 years of experience building 
              scalable applications and leading technical teams.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-dark-900 dark:text-dark-100 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-dark-500 dark:text-dark-400 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-dark-900 dark:text-dark-100 mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-2 rounded-lg bg-dark-100 dark:bg-dark-800 hover:bg-primary-500/10 hover:text-primary-500 text-dark-500 dark:text-dark-400 transition-all"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-200 dark:border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-500 dark:text-dark-400 text-sm">
              © {currentYear} Sneha Ramteke. All rights reserved.
            </p>
            <p className="text-dark-500 dark:text-dark-400 text-sm flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
