"use client";

import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    value: "vsnehankita@gmail.com",
    href: "mailto:cvsnehankita@gmail.com",
    icon: Mail,
    color: "hover:text-red-500",
  },
  {
    name: "LinkedIn",
    value: "https://www.linkedin.com/in/snehankita-channe/",
    href: "https://www.linkedin.com/in/snehankita-channe/",
    icon: Linkedin,
    color: "hover:text-blue-500",
  },
  {
    name: "GitHub",
    value: "https://github.com/cvsnehankita",
    href: "https://github.com/cvsnehankita",
    icon: Github,
    color: "hover:text-purple-500",
  },
  {
    name: "Location",
    value: "Pune, Maharashtra, India",
    href: null,
    icon: MapPin,
    color: "text-primary-500",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-dark-100/50 dark:bg-dark-900/50">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-primary-500 text-sm mb-2">
            &lt;contact&gt;
          </p>
          <h2 className="section-title">
            Let&apos;s{" "}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card p-8">
                <h3 className="text-xl font-bold text-dark-900 dark:text-dark-100 mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-4">
                  {contactLinks.map((link) => (
                    <div key={link.name}>
                      {link.href ? (
                        <a
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className={`flex items-center gap-4 p-3 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors group`}
                        >
                          <div className={`p-2 rounded-lg bg-dark-100 dark:bg-dark-800 group-hover:bg-primary-500/10 transition-colors`}>
                            <link.icon className={`w-5 h-5 text-dark-500 group-${link.color} transition-colors`} />
                          </div>
                          <div>
                            <p className="text-sm text-dark-500 dark:text-dark-400">
                              {link.name}
                            </p>
                            <p className="font-medium text-dark-900 dark:text-dark-100">
                              {link.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-3">
                          <div className="p-2 rounded-lg bg-primary-500/10">
                            <link.icon className="w-5 h-5 text-primary-500" />
                          </div>
                          <div>
                            <p className="text-sm text-dark-500 dark:text-dark-400">
                              {link.name}
                            </p>
                            <p className="font-medium text-dark-900 dark:text-dark-100">
                              {link.value}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="card p-6 border-primary-500/30 bg-primary-500/5">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="font-medium text-dark-900 dark:text-dark-100">
                    Currently open to new opportunities
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8">
              <h3 className="text-xl font-bold text-dark-900 dark:text-dark-100 mb-6">
                Send a Message
              </h3>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-900 dark:text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-900 dark:text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-dark-50 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 text-dark-900 dark:text-dark-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Section Footer */}
        <p className="font-mono text-primary-500 text-sm mt-16 text-center">
          &lt;/contact&gt;
        </p>
      </div>
    </section>
  );
}
