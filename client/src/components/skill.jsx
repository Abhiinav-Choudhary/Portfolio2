import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const skillVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const skills = [
    { icon: <FaReact className="text-sky-400" />, name: "React.js" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
    { icon: <FaDatabase className="text-orange-400" />, name: "SQL / MySQL" },
    { icon: <FaPython className="text-blue-400" />, name: "Python" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
    { icon: <FaGitAlt className="text-red-500" />, name: "Git & GitHub" },
  ];

  return (
    <section id="skills" className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center px-6 sm:px-10 md:px-20 py-20 transition-colors duration-500">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl sm:text-4xl md:text-4xl font-bold mb-12 text-center"
      >
        My <span className="text-blue-500 dark:text-blue-400">Skills</span>
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 max-w-5xl">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            custom={i}
            variants={skillVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800/80 p-4 sm:p-6 rounded-2xl shadow-md hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-shadow duration-300"
          >
            <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">{skill.icon}</div>
            <p className="text-sm sm:text-lg font-medium text-gray-700 dark:text-gray-200">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
