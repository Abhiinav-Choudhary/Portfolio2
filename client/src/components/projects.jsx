import React from "react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

const projects = [
  {
    title: "Callisthenics E-commerce Website",
    description:
      "An e-commerce platform for selling calisthenics workout equipment and accessories.",
    github: "https://github.com/Abhiinav-Choudhary/workout.git",
    live: "https://workout-mauve.vercel.app/",
  },
  {
    title: "Movie Ratting Website",
    description:
      "A full-stack movie rating system built using React and Node.js with real-time score updates and MongoDB integration.",
    github: "https://github.com/Abhiinav-Choudhary/Movie-Rating-website.git",
    live: "https://movie-rating-website-r61v.vercel.app/",
  },
  {
    title: "ChatRoom App",
    description:
      "A real-time chat app built with React, Express, and Socket.io supporting user authentication and media sharing.",
    github: "https://github.com/Abhiinav-Choudhary/chatRoom.git",
    live: "https://chat-room-mu-umber.vercel.app/",
  },
];

const Project = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6 sm:px-10 md:px-20 py-16 relative overflow-hidden transition-colors duration-500">
      {/* Floating background glows */}
      <div className="hidden sm:block absolute top-20 left-10 w-60 sm:w-72 h-60 sm:h-72 bg-blue-500/20 dark:bg-blue-500/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-60 sm:w-72 h-60 sm:h-72 bg-indigo-500/20 dark:bg-indigo-500/10 blur-[120px] rounded-full animate-pulse"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14 relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 dark:text-blue-400 mb-4">
          My Projects 💻
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          A showcase of intelligent and scalable apps I've built using modern stacks.
        </p>
      </motion.div>

      {/* Project Grid */}
      <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
            className="bg-gray-100/50 dark:bg-gray-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-500 relative overflow-hidden"
          >
            {/* Gradient hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            {/* Floating subtle animation */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-blue-400 mb-2 sm:mb-3">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                {project.description}
              </p>
            </motion.div>

            {/* Links */}
            <div className="flex justify-between items-center mt-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base"
              >
                <Github size={18} />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-sm sm:text-base"
              >
                <Globe size={18} />
                <span>Live</span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
