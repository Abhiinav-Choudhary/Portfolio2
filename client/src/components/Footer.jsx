import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        
        {/* Left */}
        <p>
          © {new Date().getFullYear()} Abhinav Chaudhary. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-4 mt-3 sm:mt-0">
          <a
            href="https://github.com/Abhiinav-Choudhary"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/abhinav-chaudhary"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:abhinavchaudhary30993@gmail.com"
            className="hover:text-blue-500 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;