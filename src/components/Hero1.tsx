"use client";

import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 dark:opacity-10" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-600/20 rounded-full blur-[100px] animate-float animation-delay-400" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-4xl">
          {/* Code Comment */}
          <div className="font-mono text-dark-500 dark:text-dark-400 text-sm mb-4 animate-fade-in">
            <span className="text-primary-500">//</span> Hello, World! I am
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold font-mono mb-6 animate-slide-up">
            <span className="text-dark-900 dark:text-dark-50">Snehankita</span>
            <span className="gradient-text"> Channe</span>
            <span className="animate-pulse text-primary-500">_</span>
          </h1>

          {/* Title with code styling */}
          <div className="font-mono text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-8 animate-slide-up animation-delay-200">
            <span className="text-primary-500">const</span>{" "}
            <span className="text-dark-900 dark:text-dark-100">role</span>{" "}
            <span className="text-primary-500">=</span>{" "}
            <span className="text-amber-500 dark:text-amber-400">&quot;Lead Fullstack Engineer&quot;</span>
            <span className="text-dark-500">;</span>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-dark-600 dark:text-dark-400 max-w-2xl mb-10 leading-relaxed animate-slide-up animation-delay-400">
            7.5 years crafting scalable microservices, architecting cloud solutions, 
            and building high-performance applications. I have worked with {" "}
            <span className="text-primary-500 font-medium">CitiBank</span> , {" "}
            <span className="text-primary-500 font-medium">Yash Technologies</span>,  and {" "}
            <span className="text-primary-500 font-medium">John Deere</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-slide-up animation-delay-600">
            <a href="#contact" className="btn-primary">
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a
              href="https://github.com/cvsnehankita"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/snehankita-channe/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>

          {/* Tech Stack Preview */}
          <div className="animate-slide-up animation-delay-800">
            <p className="font-mono text-sm text-dark-500 dark:text-dark-500 mb-3">
              <span className="text-primary-500">//</span> Current Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {["Java", "TypeScript", "Spring Boot", "React", "Node.js", "AWS", "Kubernetes", "PostgreSQL"].map(
                (tech) => (
                  <span key={tech} className="skill-badge">
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to about section">
          <ChevronDown className="w-8 h-8 text-dark-400 dark:text-dark-500" />
        </a>
      </div>
    </section>
  );
}
