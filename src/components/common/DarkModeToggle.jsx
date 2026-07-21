import { FaSun, FaMoon } from "react-icons/fa";

function DarkModeToggle({ isDark, toggleDarkMode }) {
  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Ganti tema tampilan"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
    >
      {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
    </button>
  );
}

export default DarkModeToggle;