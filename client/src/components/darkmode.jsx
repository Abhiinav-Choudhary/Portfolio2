import React, { useContext } from "react";
import { Sun, Moon } from "lucide-react";
import { DarkModeContext } from "../context/darkmodeprovider";

const DarkModeToggle = () => {
  const { isDark, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-5 right-5 z-50 w-12 h-12 rounded-full flex items-center justify-center
                 bg-gray-800 dark:bg-gray-200 text-yellow-400 shadow-lg hover:scale-110 transition-transform"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
};

export default DarkModeToggle;
