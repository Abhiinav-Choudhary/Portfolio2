import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () =>
      localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  // Apply dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Navbar background on scroll
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to sections
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "technicaldesc" },
    { name: "Skills", id: "skill" },
    { name: "Projects", id: "projects" },
    { name: "Work", id: "workexp" },
    { name: "Contact", id: "contactform" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-gray-800/90 shadow-lg backdrop-blur-md"
            : "bg-gray-50/90 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#technicaldesc"
          onClick={(e) => handleScrollTo(e, "technicaldesc")}
          className="text-xl font-bold text-blue-500 dark:text-blue-400 transition-colors"
        >
          Abhinav
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Resume Button */}
          <a
            href="/res.pdf"
            download
            className="ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white dark:text-white rounded-lg transition-colors"
          >
            Resume
          </a>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mr-4 text-gray-800 dark:text-gray-200"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-gray-200"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 dark:bg-gray-800 w-full px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-lg"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Resume Button */}
          <a
            href="/res.pdf"
            download
            className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 text-lg mt-2"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
