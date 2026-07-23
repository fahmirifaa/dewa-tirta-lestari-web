import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import armadaTangki2 from "../../assets/images/galeri/galeri-2.jpg";
import armadaTangki3 from "../../assets/images/galeri/galeri-3.jpg";

function AboutSection() {
    const highlights = [
        "Berdiri sejak tahun 2012 dan terus berkembang",
        "Melayani lebih dari 850 klien aktif",
        "Memiliki fasilitas penyaringan air modern",
        "Tim profesional dan berpengalaman",
    ];

    return (
        <section className="section-padding bg-white dark:bg-gray-900">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src={armadaTangki2}
                                alt="Fasilitas penyaringan air TIRTA KENCANA ABADI"
                                className="rounded-2xl w-full h-64 object-cover mt-8"
                                loading="lazy"
                            />
                            <img
                                src={armadaTangki3}
                                alt="Armada pengiriman air bersih"
                                className="rounded-2xl w-full h-64 object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl px-8 py-6 text-center border-4 border-white dark:border-gray-900">
                            <p className="text-3xl font-bold text-primary">12+</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                Tahun Pengalaman
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <span className="inline-block bg-primary/10 dark:bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                            Tentang Perusahaan
                        </span>
                        <h2 className="section-title text-left">
                            Berkomitmen Menyediakan Air Bersih untuk Kehidupan yang Lebih
                            Baik
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                            TIRTA KENCANA ABADI adalah perusahaan supplier air bersih yang
                            berdiri sejak tahun 2012 di Tangerang, Banten. Kami hadir untuk
                            menjawab kebutuhan akan air bersih berkualitas bagi rumah
                            tangga, industri, hotel, restoran, sekolah, hingga rumah
                            ibadah. Dengan dukungan teknologi penyaringan modern dan tim
                            profesional, kami berkomitmen menghadirkan air yang aman
                            dikonsumsi dan digunakan sehari-hari.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {highlights.map((item) => (
                                <div key={item} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-accent mt-1 shrink-0" size={16} />
                                    <span className="text-sm text-gray-600 dark:text-gray-300">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <Link to="/tentang-kami" className="btn-primary">
                            Selengkapnya Tentang Kami
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;