"use client";

import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Wrench, 
  Cpu, 
  TestTube, 
  Users 
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "TypeScript", "JavaScript", "SQL"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Spring Boot", "Node.js", "Express", "NestJS", "REST APIs", "Microservices"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React.js", "Angular", "Next.js", "HTML/CSS", "Tailwind"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "Oracle", "MongoDB", "Redis"],
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: ["AWS (IAM, EC2, EKS, S3, RDS, Lambda)", "OpenShift"],
    color: "from-sky-500 to-blue-500",
  },
  {
    title: "DevOps",
    icon: Wrench,
    skills: ["Docker", "Kubernetes", "Jenkins", "Helm", "CI/CD", "Git"],
    color: "from-rose-500 to-red-500",
  },
  {
    title: "AI Tools",
    icon: Cpu,
    skills: ["GitHub Copilot", "Spring AI", "Jupyter Notebook"],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Testing",
    icon: TestTube,
    skills: ["Mockito", "Jest", "Vitest", "Jasmine", "React Testing Library"],
    color: "from-teal-500 to-cyan-500",
  },
];

const softSkills = [
  { name: "Creative Thinking", icon: "💡" },
  { name: "Leadership", icon: "🎯" },
  { name: "Public Speaking", icon: "🎤" },
  { name: "Team Collaboration", icon: "🤝" },
  { name: "Problem Solving", icon: "🧩" },
  { name: "Agile/Scrum", icon: "🔄" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="section-container relative">
        {/* Section Header */}
        <div className="mb-16">
          <p className="font-mono text-primary-500 text-sm mb-2">
            &lt;skills&gt;
          </p>
          <h2 className="section-title">
            Technical{" "}
            <span className="gradient-text">Arsenal</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive toolkit for building enterprise-grade applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card p-6 card-hover group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-dark-900 dark:text-dark-100">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium rounded-md bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 border border-dark-200 dark:border-dark-700 group-hover:border-primary-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-6 h-6 text-primary-500" />
            <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-100">
              Soft Skills
            </h3>
          </div>

          <div className="flex flex-wrap gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2 px-4 py-3 card card-hover"
              >
                <span className="text-xl">{skill.icon}</span>
                <span className="font-medium text-dark-700 dark:text-dark-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Proficiency Note */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/20">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary-500 text-white shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-dark-900 dark:text-dark-100 mb-2">
                AI-Augmented Development
              </h4>
              <p className="text-dark-600 dark:text-dark-400 text-sm">
                I actively leverage AI tools like GitHub Copilot and Spring AI to accelerate 
                development, improve code quality, and innovate solutions — boosting team 
                productivity and reducing time-to-market significantly.
              </p>
            </div>
          </div>
        </div>

        {/* Section Footer */}
        <p className="font-mono text-primary-500 text-sm mt-16">
          &lt;/skills&gt;
        </p>
      </div>
    </section>
  );
}
