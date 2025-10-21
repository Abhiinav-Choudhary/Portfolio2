import React from "react";
import { motion } from "framer-motion";

const workExperiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "ABC Tech Solutions",
    duration: "Jun 2025 - Aug 2025",
    description:
      "Worked on building a real-time leaderboard system using React, Node.js, and MongoDB. Implemented JWT authentication, live updates, and user dashboards.",
  },
  {
    role: "Machine Learning Intern",
    company: "XYZ AI Labs",
    duration: "Jan 2025 - May 2025",
    description:
      "Developed predictive models using Python, scikit-learn, and pandas. Worked on house price prediction and sentiment analysis projects.",
  },
];

const WorkExp = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6 sm:px-10 md:px-20 py-16 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-blue-500 dark:text-blue-400 mb-4">
          Work Experience
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          A snapshot of my professional journey and the roles I've taken on.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-1 lg:grid-cols-2">
        {workExperiences.map((exp, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-shadow duration-500"
          >
            <div className="mb-3">
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-500 dark:text-blue-400">{exp.role}</h3>
              <p className="text-gray-700 dark:text-gray-300 italic">{exp.company}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">{exp.duration}</p>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExp;
