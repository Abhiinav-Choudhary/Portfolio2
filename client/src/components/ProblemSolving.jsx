
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Trophy,
  ChartNoAxesCombined,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";

const profiles = [
  {
    name: "LeetCode",
    subtitle: "Coding & DSA Practice",
    description:
      "Practicing data structures and algorithms, improving problem-solving skills, and preparing for coding interviews.",
    url: "https://leetcode.com/u/abhinavchaudhary30993/",
    icon: Code2,
    accent: "text-amber-500",
    iconBg: "bg-amber-500/10",
    label: "Coding Practice",
  },
  {
    name: "Codolio",
    subtitle: "Problem-Solving Profile",
    description:
      "Explore my coding journey, problem-solving progress, and competitive programming profiles in one place.",
    url: "https://codolio.com/profile/Thinksoft",
    icon: ChartNoAxesCombined,
    accent: "text-blue-500 dark:text-blue-400",
    iconBg: "bg-blue-500/10",
    label: "Coding Progress",
  },
];

const ProblemSolving = () => {
  return (
    <section
      id="problem-solving"
      className="relative scroll-mt-20 overflow-hidden bg-slate-50 px-5 py-24 text-slate-900 transition-colors duration-500 dark:bg-slate-900 dark:text-white sm:px-8 sm:py-28 lg:px-16"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center sm:mb-16"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">
            <Trophy size={15} />
            DSA & Competitive Programming
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Problem{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Solving
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            Strengthening my fundamentals through consistent coding practice,
            algorithmic thinking, and challenging problems.
          </p>
        </motion.div>

        {/* Profile cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;
            const isConfigured =
              profile.url.startsWith("https://") &&
              !profile.url.includes("PASTE_YOUR_");

            return (
              <motion.article
                key={profile.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm transition-all duration-300 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-700/80 dark:bg-slate-800/70 dark:hover:border-blue-400/50 sm:p-8"
              >
                {/* Top accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-70 transition-opacity group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${profile.iconBg} ${profile.accent}`}
                  >
                    <Icon size={28} />
                  </div>

                  <span className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    {profile.label}
                  </span>
                </div>

                <div className="mt-6">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {profile.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">
                    {profile.subtitle}
                  </p>

                  <p className="mt-4 min-h-20 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                    {profile.description}
                  </p>
                </div>

                <div className="mt-7 border-t border-slate-200 pt-5 dark:border-slate-700">
                  {isConfigured ? (
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3.5 font-semibold text-white shadow-sm transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      View Profile
                      <ArrowUpRight size={18} />
                    </a>
                  ) : (
                    <p className="rounded-xl border border-dashed border-slate-300 px-4 py-3 text-center text-sm text-slate-500 dark:border-slate-600 dark:text-slate-400">
                      Add your profile URL to enable this link.
                    </p>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-slate-500 dark:text-slate-500">
          Profile links open in a new tab. Statistics can be added after
          verifying your actual profile data.
        </p>
      </div>
    </section>
  );
};

export default ProblemSolving;
