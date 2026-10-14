
import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import NetBackground from "./NetBackground";

export const TechnicalDesc = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section
      id="technicaldesc"
      className="relative flex min-h-screen scroll-mt-20 items-center overflow-hidden bg-slate-50 px-5 pb-16 pt-28 text-slate-900 transition-colors duration-500 dark:bg-slate-900 dark:text-white sm:px-8 md:px-12 lg:px-16"
    >
      {/* Existing particle background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <NetBackground />
      </div>

      {/* Subtle blue ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/15"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 md:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        {/* Introduction */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="order-2 mx-auto max-w-2xl text-center md:order-1 md:mx-0 md:text-left"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              Full-Stack Developer & AI Enthusiast
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mb-3 mt-7 text-base font-medium text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Abhinav
            <span className="mt-1 block bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text pb-2 text-transparent">
              Chaudhary.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg md:mx-0"
          >
            I build intelligent, scalable web applications by combining{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              React, Node.js, and Machine Learning
            </span>
            . I enjoy turning complex ideas into useful digital experiences.
          </motion.p>

          {/* Call to action */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-start"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-blue-500/30 sm:px-6"
            >
              View Projects
              <FiArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-5 py-3.5 font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400 sm:px-6"
            >
              <FiDownload size={18} />
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center justify-center gap-4 md:justify-start"
          >
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Find me on
            </span>

            <a
              href="https://github.com/Abhiinav-Choudhary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-lg border border-slate-200 p-2.5 text-slate-600 transition-all hover:border-blue-400 hover:text-blue-500 dark:border-slate-700 dark:text-slate-300 dark:hover:text-blue-400"
            >
              <FiGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/abhinav-chaudhary-502867241/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-lg border border-slate-200 p-2.5 text-slate-600 transition-all hover:border-blue-400 hover:text-blue-500 dark:border-slate-700 dark:text-slate-300 dark:hover:text-blue-400"
            >
              <FiLinkedin size={19} />
            </a>
          </motion.div>
        </motion.div>

        {/* Original avatar — unchanged image source */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 18 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">
            {/* Decorative rings */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-full border border-blue-400/20"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-full border border-blue-400/10"
            />

            {/* Blue ambient glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 scale-90 rounded-full bg-blue-500/25 blur-3xl"
            />

            <div className="relative rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-400 p-1.5 shadow-[0_0_45px_rgba(59,130,246,0.25)] sm:p-2">
              <div className="rounded-full bg-white p-1 dark:bg-slate-950">
                <img
                  src="/avtar.avif"
                  alt="Abhinav Chaudhary"
                  className="h-44 w-44 rounded-full object-cover sm:h-56 sm:w-56 lg:h-72 lg:w-72"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <a
        href="#skill"
        aria-label="Scroll to skills"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium text-slate-500 transition-colors hover:text-blue-500 dark:text-slate-400 dark:hover:text-blue-400 sm:flex"
      >
        Scroll to explore
        <FiArrowDown className="animate-bounce" size={15} />
      </a>
    </section>
  );
};
