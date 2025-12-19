"use client";

import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    title: "Lead Application Development Analyst",
    company: "Citicorp Services Ltd (CitiBank)",
    location: "Pune, Maharashtra, India",
    period: "May 2021 - August 2024",
    type: "Full-time",
    highlights: [
      "Led migration to OpenShift, deploying 12+ high-availability microservices with enhanced scalability and reduced downtime",
      "Developed and maintained Helm charts for standardized, automated Kubernetes deployments",
      "Architected CI/CD pipelines using Jenkins and Docker, reducing deployment time by 40%",
      "Built user analytics dashboards using Java, Node.js, and React — increased user satisfaction by 30%, reduced onboarding time by 15%",
      "Ensured code quality through comprehensive testing with Mockito, Jest, and React Testing Library",
      "Leveraged AI tools (GitHub Copilot) to accelerate development and boost team productivity",
    ],
    technologies: ["Java", "Node.js", "React", "OpenShift", "Kubernetes", "Docker", "Jenkins", "Helm", "PostgreSQL"],
  },
  {
    title: "Fullstack Developer",
    company: "Yash Technologies",
    location: "Pune, Maharashtra, India",
    period: "August 2019 - April 2021",
    type: "Full-time",
    highlights: [
      "Developed scalable microservices for John Deere Services using Node.js, Express, and Angular — improved response times by 25%",
      "Integrated responsive UI components with high-performance RESTful APIs, reducing data processing latency by 30%",
      "Architected full-stack solutions using MongoDB and TypeScript for faster data retrieval and improved uptime",
      "Implemented Git branching strategies and code reviews, cutting merge conflicts by 30%",
      "Delivered 10+ mission-critical features within Agile sprints through effective cross-functional collaboration",
    ],
    technologies: ["Node.js", "Express", "Angular", "MongoDB", "TypeScript", "Git", "REST APIs"],
  },
  {
    title: "Backend Software Engineer",
    company: "Vyom Labs Private Limited",
    location: "Pune, Maharashtra, India",
    period: "December 2016 - June 2019",
    type: "Full-time",
    highlights: [
      "Developed RESTful Java plugins using Spring Boot and Maven to extend the AutomationEdge platform",
      "Built scalable solutions leveraging ETL workflows and Pentaho Data Integration (PDI)",
      "Designed APIs using Spring Boot and Hibernate — achieved 25% faster data retrieval under high-load conditions",
      "Integrated ActiveMQ messaging queues for async microservice communication, reducing inter-service latency by 20%",
      "Increased customer satisfaction by 7% through timely delivery of high-impact automation tools",
    ],
    technologies: ["Java", "Spring Boot", "Hibernate", "Maven", "ActiveMQ", "SQL", "Pentaho", "ETL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-dark-100/50 dark:bg-dark-900/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-primary-500 text-sm mb-2">
            &lt;experience&gt;
          </p>
          <h2 className="section-title">
            Where I&apos;ve{" "}
            <span className="gradient-text">Made Impact</span>
          </h2>
          <p className="section-subtitle">
            A journey through enterprise software development at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-500/50 to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:ml-auto"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-50 dark:border-dark-950 shadow-lg shadow-primary-500/30 ${
                  index % 2 === 0
                    ? "left-0 md:left-1/2 md:-translate-x-1/2"
                    : "left-0 md:left-1/2 md:-translate-x-1/2"
                }`}
              />

              {/* Content Card */}
              <div
                className={`ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
              >
                <div className="card p-6 card-hover">
                  {/* Header */}
                  <div className={`mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <h3 className="text-xl font-bold text-dark-900 dark:text-dark-100 mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary-500 font-medium mb-2 flex-wrap justify-start md:justify-start">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className={`flex flex-wrap gap-4 text-sm text-dark-500 dark:text-dark-400 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className={`space-y-2 mb-4 text-left`}>
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-dark-600 dark:text-dark-300 text-sm"
                      >
                        <ChevronRight className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Footer */}
        <p className="font-mono text-primary-500 text-sm mt-16">
          &lt;/experience&gt;
        </p>
      </div>
    </section>
  );
}
