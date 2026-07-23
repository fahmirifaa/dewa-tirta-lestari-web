import { Link } from "react-router-dom";
import logoImage from "../../assets/images/logo.png";

function Logo() {
  return (
    <Link to="/" className="flex items-center shrink-0 group">
      <img
        src={logoImage}
        alt="TIRTA KENCANA ABADI"
        className="h-11 w-11 md:h-12 md:w-12 object-contain shrink-0 group-hover:scale-105 transition-transform duration-300"
      />
    </Link>
  );
}

export default Logo;