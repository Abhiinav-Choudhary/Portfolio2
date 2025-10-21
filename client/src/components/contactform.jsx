import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for reaching out!");
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6 sm:px-10 md:px-20 py-24 relative flex flex-col items-center justify-center transition-colors duration-500 overflow-hidden">

      {/* Background blobs */}
      <div className="hidden sm:block absolute top-[-5rem] left-[-10rem] w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/20 dark:bg-blue-500/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-[-5rem] right-[-10rem] w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 dark:bg-purple-500/10 blur-[120px] rounded-full animate-pulse"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-500 dark:text-blue-400 mb-4">
          Contact Me
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Drop me a message!
        </p>
      </motion.div>

      {/* Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ rotateX: 2, rotateY: -2 }}
        transition={{ type: "spring", stiffness: 50 }}
        className="relative z-10 w-full max-w-lg bg-white/10 dark:bg-gray-800/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col gap-4 sm:gap-6 transition-colors duration-500"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-gray-100/50 dark:bg-gray-900/70 text-gray-900 dark:text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 placeholder-gray-400 dark:placeholder-gray-400 transition text-sm sm:text-base"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-gray-100/50 dark:bg-gray-900/70 text-gray-900 dark:text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 placeholder-gray-400 dark:placeholder-gray-400 transition text-sm sm:text-base"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-gray-100/50 dark:bg-gray-900/70 text-gray-900 dark:text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 placeholder-gray-400 dark:placeholder-gray-400 transition resize-none text-sm sm:text-base"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative overflow-hidden px-6 py-3 rounded-xl text-white font-semibold shadow-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:via-blue-500 hover:to-purple-500 transition-all duration-500 text-sm sm:text-base"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default ContactForm;
