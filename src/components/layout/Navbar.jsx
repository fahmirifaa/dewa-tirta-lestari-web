import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../common/Logo";
import DarkModeToggle from "../common/DarkModeToggle";
import { navLinks } from "../../data/navLinks";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useDarkMode } from "../../hooks/useDarkMode";
import { companyInfo } from "../../data/companyInfo";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrollPosition(20);
  const [isDark, toggleDarkMode] = useDarkMode();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
        }`}
    >
      <nav className="container-custom flex items-center justify-between gap-2">
        <Logo isScrolled={isScrolled} />
        <ul className="hidden xl:flex items-center gap-0.5 2xl:gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `whitespace-nowrap px-2.5 2xl:px-3.5 py-2 rounded-lg text-[13px] 2xl:text-sm font-medium transition-colors duration-300 ${isActive
                    ? isScrolled
                      ? "text-primary bg-primary/10"
                      : "text-white bg-white/15"
                    : isScrolled
                      ? "text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-primary/5"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex items-center gap-3 shrink-0">
          <DarkModeToggle isDark={isDark} toggleDarkMode={toggleDarkMode} />

          <a href={`https://wa.me/${companyInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-5 py-2.5 whitespace-nowrap"
          >
            Pesan Sekarang
          </a>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <DarkModeToggle isDark={isDark} toggleDarkMode={toggleDarkMode} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Buka menu navigasi"
            className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-800"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-white dark:bg-gray-900 shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300 ${isActive
                        ? "text-primary bg-primary/10"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2">

                <a href={`https://wa.me/${companyInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-sm"
                >
                  Pesan Sekarang
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;