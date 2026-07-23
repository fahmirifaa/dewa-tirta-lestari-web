import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaTint,
} from "react-icons/fa";
import { navLinks } from "../../data/navLinks";
import { companyInfo } from "../../data/companyInfo";

function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Supplier Air Bersih",
    "Air Tangki",
    "Air Industri",
    "Air Rumah Tangga",
    "Air Kantor",
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <FaTint className="text-white text-xl" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading font-bold text-lg text-white">
                  TIRTA KENCANA
                </span>
                <span className="text-xs font-medium text-primary tracking-widest">
                  ABADI
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Menyediakan air bersih berkualitas tinggi dengan proses
              penyaringan modern untuk kebutuhan rumah tangga, industri,
              hingga fasilitas umum di seluruh wilayah Tangerang dan
              sekitarnya.
            </p>
            <div className="flex items-center gap-3">
              
                <a href={companyInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-colors duration-300"
              >
                <FaFacebookF size={14} />
              </a>
              
                <a href={companyInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-colors duration-300"
              >
                <FaInstagram size={14} />
              </a>
              
                <a href={companyInfo.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-colors duration-300"
              >
                <FaYoutube size={14} />
              </a>
              
                <a href={companyInfo.socialMedia.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary transition-colors duration-300"
              >
                <FaTiktok size={14} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Tautan Cepat
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Layanan Kami
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/layanan"
                    className="text-sm text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Hubungi Kami
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 shrink-0" />
                <span className="text-sm text-gray-400">
                  {companyInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary shrink-0" />
                <span className="text-sm text-gray-400">
                  {companyInfo.phone} / {companyInfo.phoneSecondary}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary shrink-0" />
                <span className="text-sm text-gray-400">
                  {companyInfo.email}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaClock className="text-primary shrink-0" />
                <span className="text-sm text-gray-400">
                  {companyInfo.operationalHours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © {currentYear} {companyInfo.name}. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-sm text-gray-500">
            Air Bersih, Kualitas Terjamin, Pelayanan Terpercaya.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;