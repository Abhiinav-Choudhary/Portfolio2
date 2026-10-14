
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React.js", color: "text-sky-400" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "text-slate-900 dark:text-white" },
  { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-400" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-green-500" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
  { icon: <FaDatabase />, name: "SQL / MySQL", color: "text-orange-400" },
  { icon: <FaPython />, name: "Python", color: "text-blue-400" },
  { icon: <FaGitAlt />, name: "Git & GitHub", color: "text-red-500" },
];

const Skills = () => {
  return (
    <section
      id="skill"
      className="relative scroll-mt-20 overflow-hidden bg-slate-50 px-5 py-24 text-slate-900 transition-colors duration-500 dark:bg-slate-900 dark:text-white sm:px-8 sm:py-28 lg:px-16"
    >
      {/* Subtle ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-500/10"
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
          <span className="mb-4 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">
            My technical toolkit
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            Technologies I use to build modern applications and solve
            real-world problems.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: (index % 5) * 0.07,
              }}
              whileHover={{ y: -6 }}
              className="group relative flex min-h-40 flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-5 text-center shadow-sm transition-all duration-300 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-700/80 dark:bg-slate-800/70 dark:hover:border-blue-400/50 dark:hover:bg-slate-800 sm:min-h-44 sm:p-6"
            >
              {/* Hover highlight */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-cyan-400/0 transition-all duration-300 group-hover:from-blue-500/[0.04] group-hover:to-cyan-400/[0.08] dark:group-hover:from-blue-500/[0.06] dark:group-hover:to-cyan-400/[0.08]" />

              <div className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-4xl transition-all duration-300 group-hover:scale-110 group-hover:border-blue-300/60 dark:border-slate-700 dark:bg-slate-900/80 sm:h-16 sm:w-16 sm:text-5xl">
                <span className={skill.color}>{skill.icon}</span>
              </div>

              <h3 className="relative text-sm font-semibold text-slate-700 transition-colors group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-blue-400 sm:text-base">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
