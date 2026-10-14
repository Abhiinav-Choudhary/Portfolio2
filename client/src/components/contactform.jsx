
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setSubmitted(false);
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // This form does not send an email yet.
    const subject = encodeURIComponent(
      `Portfolio contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href =
      `mailto:abhinavchaudhary30993@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400 sm:text-base";

  return (
    <section
      id="contactform"
      className="relative scroll-mt-20 overflow-hidden bg-slate-50 px-5 py-24 text-slate-900 transition-colors duration-500 dark:bg-slate-900 dark:text-white sm:px-8 sm:py-28 lg:px-16"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 dark:border-blue-400/20 dark:bg-blue-500/10 dark:text-blue-400">
            <FiMail size={15} />
            Get in touch
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            Have an opportunity, a project idea, or just want to talk
            technology? I'd be happy to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold sm:text-3xl">
              Let's build something
              <span className="block mt-1 text-blue-500 dark:text-blue-400">
                meaningful.
              </span>
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              I'm interested in software development, full-stack
              engineering, and AI-powered applications. Feel free to
              reach out about opportunities or collaborations.
            </p>

            <a
              href="mailto:abhinavchaudhary30993@gmail.com"
              className="mt-7 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 transition-all hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/5 dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-blue-400/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <FiMail size={21} />
              </span>

              <span className="min-w-0">
                <span className="block text-sm text-slate-500 dark:text-slate-400">
                  Email me at
                </span>
                <span className="mt-1 block break-all text-sm font-semibold text-slate-800 dark:text-slate-200">
                  abhinavchaudhary30993@gmail.com
                </span>
              </span>
            </a>

            <div className="mt-7">
              <p className="mb-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                Find me online
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/Abhiinav-Choudhary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="rounded-xl border border-slate-200 bg-white p-3 text-slate-600 transition-colors hover:border-blue-400 hover:text-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  <FiGithub size={20} />
                </a>

                <a
                  href="https://linkedin.com/in/abhinav-chaudhary"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="rounded-xl border border-slate-200 bg-white p-3 text-slate-600 transition-colors hover:border-blue-400 hover:text-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  <FiLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-slate-700/80 dark:bg-slate-800/70 sm:p-8 lg:p-9"
          >
            <h3 className="text-xl font-bold">Send me a message</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Fill in the details below to prepare an email.
            </p>

            <div className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Your name
                </label>
                <div className="relative">
                  <FiUser
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Email address
                </label>
                <div className="relative">
                  <FiMail
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    className={`${inputClass} pl-11`}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Your message
                </label>
                <div className="relative">
                  <FiMessageSquare
                    size={18}
                    className="pointer-events-none absolute left-4 top-4 text-slate-400"
                  />
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your idea or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={5000}
                    className={`${inputClass} resize-y pl-11`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-600 hover:to-cyan-500 hover:shadow-blue-500/30 focus:outline-none focus:ring-4 focus:ring-blue-500/20"
              >
                <FiSend
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
                Prepare Email
              </button>

              {submitted && (
                <p
                  role="status"
                  className="text-sm leading-6 text-blue-600 dark:text-blue-400"
                >
                  Your email app should open with your message. Review and
                  send it there to complete delivery.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
