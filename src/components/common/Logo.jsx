import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <img
        src={logoImage}
        alt="TIRTA KENCANA ABADI"
        className="w-11 h-11 object-contain group-hover:scale-105 transition-transform duration-300"
      />
      <div className="flex flex-col leading-tight">
        <span className="font-heading font-bold text-lg tracking-wide text-gray-900 dark:text-white">
          TIRTA KENCANA
        </span>
        <span className="text-xs font-medium text-primary tracking-widest">
          ABADI
        </span>
      </div>
    </Link>
  );
}

export default Logo;