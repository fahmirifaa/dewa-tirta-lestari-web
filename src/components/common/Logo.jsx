import { Link } from "react-router-dom";
import { FaTint } from "react-icons/fa";

function Logo({ isScrolled }) {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
        <FaTint className="text-white text-xl" />
      </div>
      <div className="flex flex-col leading-tight">
        <span
          className={`font-heading font-bold text-lg tracking-wide transition-colors duration-300 ${
            isScrolled
              ? "text-gray-900 dark:text-white"
              : "text-gray-900 dark:text-white"
          }`}
        >
          DEWA TIRTA
        </span>
        <span className="text-xs font-medium text-primary tracking-widest">
          LESTARI
        </span>
      </div>
    </Link>
  );
}

export default Logo;