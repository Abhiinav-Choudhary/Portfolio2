
import React, { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiDownload,
} from "react-icons/fi";

const navLinks = [
  { name: "Home", id: "technicaldesc" },
  { name: "Skills", id: "skill" },
  { name: "Problem Solving", id: "problem-solving" },
  { name: "Projects", id: "projects" },
  { name: "Work", id: "workexp" },
  { name: "Contact", id: "contactform" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;

    const savedTheme = localStorage.getItem("theme");

    return savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsOpen(false);
  };

  const linkClass =
    "text-sm lg:text-base font-medium text-slate-600 dark:text-slate-300 " +
    "hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200";

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/70 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-xl " +
            "dark:border-slate-700/60 dark:bg-slate-900/90 dark:shadow-black/10"
          : "border-transparent bg-white/70 backdrop-blur-md dark:bg-slate-900/70"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#technicaldesc"
          onClick={(e) => handleScrollTo(e, "technicaldesc")}
          className="text-2xl font-extrabold tracking-tight text-blue-500 transition-transform duration-200 hover:scale-[1.03] dark:text-blue-400"
        >
          Abhinav<span className="text-slate-800 dark:text-white">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className={linkClass}
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-blue-500/30"
          >
            <FiDownload size={16} />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-700 transition-colors hover:border-blue-400 hover:text-blue-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-400 dark:hover:text-blue-400"
          >
            {darkMode ? <FiSun size={19} /> : <FiMoon size={19} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-700 dark:border-slate-700 dark:text-slate-200"
          >
            {darkMode ? <FiSun size={19} /> : <FiMoon size={19} />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="rounded-xl border border-slate-200 p-2.5 text-slate-700 dark:border-slate-700 dark:text-slate-200"
          >
            {isOpen ? <FiX size={21} /> : <FiMenu size={21} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-5 pb-5 pt-3 backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/95 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
            >
              <FiDownload size={17} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
