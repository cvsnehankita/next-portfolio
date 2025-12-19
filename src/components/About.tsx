"use client";

import { Code2, Server, Cloud, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Excellence",
    description: "React, Angular, Next.js with modern TypeScript patterns",
  },
  {
    icon: Server,
    title: "Backend Mastery",
    description: "Spring Boot, Node.js, NestJS microservices architecture",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, Kubernetes, Docker, Jenkins CI/CD pipelines",
  },
  {
    icon: Cpu,
    title: "AI-Augmented",
    description: "GitHub Copilot, Spring AI for accelerated development",
  },
];

export default function About() {
  return (
    <section id="about" className="relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
      
      <div className="section-container relative">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-primary-500 text-sm mb-2">
            &lt;about&gt;
          </p>
          <h2 className="section-title">
            Building the Future,{" "}
            <span className="gradient-text">One Line at a Time</span>
          </h2>
          <p className="section-subtitle">
            A passionate engineer who transforms complex problems into elegant solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed text-lg">
              With over <span className="text-primary-500 font-semibold">7.5 years</span> of 
              experience in software development, I&apos;ve had the privilege of building 
              systems that power enterprise operations at scale.
            </p>
            
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
              At <span className="font-semibold text-dark-900 dark:text-dark-100">CitiBank</span>, 
              I led the migration to OpenShift, deploying 12+ high-availability microservices 
              and architecting CI/CD pipelines that reduced deployment time by 40%. I built 
              user analytics dashboards that increased satisfaction by 30% and reduced 
              onboarding time by 15%.
            </p>
            
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
              Previously at <span className="font-semibold text-dark-900 dark:text-dark-100">Yash Technologies</span>, 
              I developed scalable microservices for John Deere, improving response times by 25% 
              and delivering 10+ mission-critical features within Agile sprints.
            </p>

            <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
              I believe in writing clean, maintainable code that not only works today but 
              scales for tomorrow. My approach combines deep technical expertise with a 
              focus on business impact.
            </p>

            {/* Code Block */}
            <div className="code-block mt-8">
              <pre className="text-sm">
                <code>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">sneha</span>{" "}
                  <span className="text-white">=</span> {"{"}
                  {"\n"}
                  {"  "}<span className="text-green-300">experience</span>:{" "}
                  <span className="text-amber-300">&quot;8+ years&quot;</span>,
                  {"\n"}
                  {"  "}<span className="text-green-300">companies</span>:{" "}
                  <span className="text-white">[</span>
                  <span className="text-amber-300">&quot;CitiBank&quot;</span>,{" "}
                  <span className="text-amber-300">&quot;Yash Tech&quot;</span>,{" "}
                  <span className="text-amber-300">&quot;Vyom Labs&quot;</span>
                  <span className="text-white">]</span>,
                  {"\n"}
                  {"  "}<span className="text-green-300">passion</span>:{" "}
                  <span className="text-amber-300">&quot;Building at scale&quot;</span>
                  {"\n"}
                  {"}"};
                </code>
              </pre>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="card p-6 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary-500/10 text-primary-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-900 dark:text-dark-100 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-dark-500 dark:text-dark-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="text-center p-4 card">
                <div className="text-3xl font-bold gradient-text">7.5</div>
                <div className="text-sm text-dark-500 dark:text-dark-400">Years Exp</div>
              </div>
              <div className="text-center p-4 card">
                <div className="text-3xl font-bold gradient-text">25+</div>
                <div className="text-sm text-dark-500 dark:text-dark-400">Microservices</div>
              </div>
              <div className="text-center p-4 card">
                <div className="text-3xl font-bold gradient-text">40%</div>
                <div className="text-sm text-dark-500 dark:text-dark-400">Faster Deploy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section Footer */}
        <p className="font-mono text-primary-500 text-sm mt-16">
          &lt;/about&gt;
        </p>
      </div>
    </section>
  );
}
