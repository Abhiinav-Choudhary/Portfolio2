
import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiHeart,
} from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50 text-slate-600 transition-colors duration-500 dark:border-slate-700/80 dark:bg-slate-900 dark:text-slate-400">
      {/* Subtle blue accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-blue-500/5 blur-[100px] dark:bg-blue-500/10"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#technicaldesc"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-2xl font-extrabold tracking-tight text-blue-500 transition-colors hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Abhi-nav<span className="text-slate-900 dark:text-white">.</span>
            </a>

            <p className="mt-2 max-w-sm text-sm leading-6">
              Building thoughtful digital experiences with code, creativity,
              and technology.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Abhiinav-Choudhary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-xl border border-slate-200 bg-white p-3 transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-500 hover:shadow-md hover:shadow-blue-500/10 dark:border-slate-700 dark:bg-slate-800/70 dark:hover:border-blue-400/50 dark:hover:text-blue-400"
            >
              <FiGithub size={19} />
            </a>

            <a
              href="https://www.linkedin.com/in/abhinav-chaudhary-502867241/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-xl border border-slate-200 bg-white p-3 transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-500 hover:shadow-md hover:shadow-blue-500/10 dark:border-slate-700 dark:bg-slate-800/70 dark:hover:border-blue-400/50 dark:hover:text-blue-400"
            >
              <FiLinkedin size={19} />
            </a>

            <a
              href="mailto:abhinavchaudhary30993@gmail.com"
              aria-label="Send email"
              className="rounded-xl border border-slate-200 bg-white p-3 transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-500 hover:shadow-md hover:shadow-blue-500/10 dark:border-slate-700 dark:bg-slate-800/70 dark:hover:border-blue-400/50 dark:hover:text-blue-400"
            >
              <FiMail size={19} />
            </a>

            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
              className="rounded-xl bg-blue-500 p-3 text-white shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-600"
            >
              <FiArrowUp size={19} />
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-slate-200 dark:bg-slate-700/80" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs sm:text-sm md:flex-row">
          <p>
            © {new Date().getFullYear()} Abhinav Chaudhary. All rights reserved.
          </p>

          <p className="inline-flex items-center gap-1.5">
            Crafted with <FiHeart className="text-blue-500" size={14} /> and
            code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
