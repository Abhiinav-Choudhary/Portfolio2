
import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, MapPin } from "lucide-react";


const workExperiences = [
  {
    role: "Data Science & Generative AI Intern",
    company: "Celebal Technologies",
    duration: "May 2026 - July 2026",
    description:
      "Worked on Data Science and Generative AI during the summer internship. Built a Visual Product Recommendation System using computer vision, pretrained CNN image embeddings, and cosine similarity to recommend visually similar products from uploaded images.",
    type: "Summer Internship",
  },
  {
    role: "MERN Stack Developer Trainee",
    company: "Cynbit Technology",
    location: "Jaipur",
    duration: "June 2025",
    description:
      "Developed a real-time chat application with one-to-one messaging and image sharing. Worked with React.js, Node.js, Express.js, MongoDB, and REST APIs.",
    type: "Summer Training",
  },
 
{
  role: "Web Development Trainee",
  company: "Kisstechnologies Pvt. Ltd.",
  location: "Jaipur",
  duration: "August 2024",
  description:
    "Completed college in-house training during the second semester, learning the fundamentals of web development using HTML, CSS, JavaScript, PHP, and MySQL. Gained introductory experience in setting up and managing a local development environment using XAMPP.",
  type: "College In-house Training",
},

  {
    role: "Full-Stack Developer (Project Experience)",
    company: "Self-Developed Projects",
    duration: "2024 - Present",
    description:
      "Built multiple full-stack applications using the MERN stack, including a facial recognition-based attendance system and an AI chatbot using the Gemini API. Implemented authentication, REST APIs, image processing, and real-time features.",
    type: "Project Experience",
  },
];

const WorkExp = () => {
  return (
    <section
      id="workexp"
      className="relative scroll-mt-20 overflow-hidden bg-slate-50 px-5 py-24 text-slate-900 transition-colors duration-500 dark:bg-slate-900 dark:text-white sm:px-8 sm:py-28 lg:px-16"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center sm:mb-16"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">
            <BriefcaseBusiness size={15} />
            My journey
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            My experience building applications, learning through projects,
            and developing practical software engineering skills.
          </p>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-8 left-[15px] top-8 w-px bg-gradient-to-b from-blue-500/70 via-blue-400/30 to-transparent sm:left-[19px]"
          />

          <div className="space-y-8">
            {workExperiences.map((exp, index) => (
              <motion.article
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative pl-10 sm:pl-12"
              >
                {/* Timeline marker */}
                <div className="absolute left-[7px] top-7 flex h-[17px] w-[17px] items-center justify-center rounded-full border-2 border-blue-500 bg-slate-50 shadow-[0_0_12px_rgba(59,130,246,0.25)] dark:bg-slate-900 sm:left-[11px]">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                </div>

                {/* Experience card */}
                <div className="group rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-700/80 dark:bg-slate-800/70 dark:hover:border-blue-400/50 sm:p-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400 dark:group-hover:bg-blue-500/20">
                        <BriefcaseBusiness size={22} />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:text-xl">
                          {exp.role}
                        </h3>

                        <p className="mt-1 font-medium text-blue-600 dark:text-blue-400">
                          {exp.company}
                        </p>

                        {exp.location && (
                          <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                            <MapPin size={14} />
                            {exp.location}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex shrink-0 items-center gap-2 self-start rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300">
                      <CalendarDays size={15} className="text-blue-500" />
                      {exp.duration}
                    </div>
                  </div>

                  <div className="ml-0 mt-5 sm:ml-16">
                    <span className="inline-block rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                      {exp.type}
                    </span>

                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExp;
