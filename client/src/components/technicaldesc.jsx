import React from "react";
import { motion } from "framer-motion";


export const TechnicalDesc = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center 
                 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6 sm:px-10 md:px-20 py-16 gap-8 md:gap-12 transition-colors duration-500"
    >
      {/* Description */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-xl text-center md:text-left"
      >
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500 dark:text-blue-400">Abhinav Chaudhary</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          A passionate <span className="text-blue-400 dark:text-blue-300 font-semibold">Full-Stack Developer</span> and{" "}
          <span className="text-blue-400 dark:text-blue-300 font-semibold">Data Science Engineer</span> skilled in building
          intelligent, scalable, and modern web applications. I love combining{" "}
          <span className="text-blue-400 dark:text-blue-300 font-semibold">React, Node.js, and Machine Learning</span>{" "}
          to create seamless user experiences powered by smart systems.
        </p>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="flex-shrink-0 mb-6 md:mb-0"
      >
        <img
  src="/avtar.avif"
  alt="Abhinav Chaudhary"
  className="w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-full shadow-[0_0_25px_rgba(59,130,246,0.6)] object-cover border-4 border-blue-500 dark:border-blue-400 transition-all duration-500"
/>
      </motion.div>
    </section>
  );
};
