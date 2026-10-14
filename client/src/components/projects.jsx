
import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Globe,
  ArrowUpRight,
  ExternalLink,
  Code2,
  Layers3,
} from "lucide-react";

const projects = [
  {
    title: "Calisthenics E-commerce Website",
    description:
      "An e-commerce platform for selling calisthenics workout equipment and accessories.",
    github: "https://github.com/Abhiinav-Choudhary/workout.git",
    live: "https://workout-mauve.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    number: "01",
    category: "E-commerce",
    accent: "from-blue-500/20 via-cyan-500/10 to-transparent",
  },
  // {
  //   title: "Movie Rating Website",
  //   description:
  //     "A full-stack movie rating system built using React and Node.js with score updates and MongoDB integration.",
  //   github:
  //     "https://github.com/Abhiinav-Choudhary/Movie-Rating-website.git",
  //   live: "https://movie-rating-website-r61v.vercel.app/",
  //   technologies: ["React", "Node.js", "MongoDB"],
  //   number: "02",
  //   category: "Full Stack",
  //   accent: "from-indigo-500/20 via-blue-500/10 to-transparent",
  // },
  {
    title: "ChatRoom App",
    description:
      "A real-time chat app built with React, Express, and Socket.io supporting user authentication and media sharing.",
    github: "https://github.com/Abhiinav-Choudhary/chatRoom.git",
    live: "https://chat-room-mu-umber.vercel.app/",
    technologies: ["React", "Express", "Socket.io"],
    number: "03",
    category: "Real-time Application",
    accent: "from-cyan-500/20 via-blue-500/10 to-transparent",
  },
    {
  title: "NewsFullStack",
  description:
    "A full-stack news website for browsing and exploring news articles.",
  github: "https://github.com/Abhiinav-Choudhary/News-fullstack.git",
  live: "https://news-fullstack-eight.vercel.app/",
  technologies: ["React", "Node.js", "Express", "MongoDB"],
  number: "04",
  category: "Full-Stack Web App",
  accent: "from-cyan-500/20 via-blue-500/10 to-transparent",
},
];

const Project = () => {
  return (
    <section
      id="projects"
      className="relative scroll-mt-20 overflow-hidden bg-slate-50 px-5 py-24 text-slate-900 transition-colors duration-500 dark:bg-slate-900 dark:text-white sm:px-8 sm:py-28 lg:px-16"
    >
      {/* Background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center sm:mb-16"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">
            <Code2 size={15} />
            Things I've built
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            A selection of applications I've built to explore ideas,
            solve problems, and put my development skills into practice.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-700/80 dark:bg-slate-800/70 dark:hover:border-blue-400/50"
            >
              {/* Decorative project header */}
              <div
                className={`relative flex h-36 items-center justify-between overflow-hidden border-b border-slate-200 bg-gradient-to-br ${project.accent} p-6 dark:border-slate-700/80 sm:h-40`}
              >
                <div className="absolute inset-0 bg-slate-100/50 dark:bg-slate-950/20" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-white/80 text-blue-500 shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 dark:border-blue-400/20 dark:bg-slate-900/70 dark:text-blue-400">
                  {index === 0 ? (
                    <Layers3 size={28} />
                  ) : index === 1 ? (
                    <Globe size={28} />
                  ) : (
                    <Code2 size={28} />
                  )}
                </div>

                <span className="relative font-mono text-4xl font-bold tracking-tight text-slate-300/80 dark:text-slate-600/80">
                  {project.number}
                </span>

                <span className="absolute bottom-4 left-6 rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-xs font-medium text-blue-700 backdrop-blur dark:border-blue-400/20 dark:bg-slate-900/70 dark:text-blue-300">
                  {project.category}
                </span>
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                  {project.description}
                </p>

                {/* Technology badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-5 dark:border-slate-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400/50 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                  >
                    <Github size={17} />
                    GitHub
                    <ExternalLink size={13} />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-500 px-3 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    Live Demo
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
