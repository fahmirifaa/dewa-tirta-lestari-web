import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="pt-24 container-custom section-padding text-center min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="section-subtitle">
        Halaman yang Anda cari tidak ditemukan.
      </p>
      <Link to="/" className="btn-primary">
        Kembali ke Beranda
      </Link>
    </div>
  );
}

export default NotFound;