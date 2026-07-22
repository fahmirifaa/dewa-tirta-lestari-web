import { motion } from "framer-motion";
import { FaArrowRight, FaPlay, FaCheckCircle, FaTint } from "react-icons/fa";
import { Link } from "react-router-dom";
import { stats } from "../../data/stats";
import { useCountUp } from "../../hooks/useCountUp";
import { companyInfo } from "../../data/companyInfo";
import armadaTangki1 from "../../assets/images/armada/armada-tangki-1.jpeg";
import AuroraBackground from "../common/AuroraBackground";

function StatItem({ stat }) {
    const [ref, count] = useCountUp(stat.value, 2000);

    return (
        <div ref={ref} className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-white">
                {stat.value % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
                <span className="text-primary-light">{stat.suffix}</span>
            </p>
            <p className="text-xs md:text-sm text-gray-300 mt-1">{stat.label}</p>
        </div>
    );
}

function HeroSection() {
    const trustPoints = [
        "Kualitas Air Teruji Laboratorium",
        "Pengiriman Cepat & Tepat Waktu",
        "Harga Bersaing untuk Semua Kalangan",
    ];

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-secondary-dark to-gray-900 pt-24 pb-16">
            <AuroraBackground className="opacity-30" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                            <FaTint className="text-primary-light" />
                            Supplier Air Bersih Terpercaya Sejak 2012
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                            Air Bersih Berkualitas,{" "}
                            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                                Kehidupan Lebih Sehat
                            </span>
                        </h1>

                        <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                            DEWA TIRTA LESTARI melayani distribusi air bersih untuk rumah
                            tangga, industri, hotel, sekolah, hingga rumah ibadah dengan
                            teknologi penyaringan modern dan armada pengiriman yang siap
                            menjangkau wilayah Anda kapan saja.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 mb-10">

                            <a href={`https://wa.me/${companyInfo.whatsapp}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                Pesan Air Sekarang
                                <FaArrowRight size={14} />
                            </a>
                            <Link
                                to="/layanan"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-lg border border-white/20 transition-all duration-300"
                            >
                                <FaPlay size={12} />
                                Lihat Layanan Kami
                            </Link>
                        </div>

                        <div className="flex flex-col gap-3">
                            {trustPoints.map((point) => (
                                <div key={point} className="flex items-center gap-3">
                                    <FaCheckCircle className="text-accent shrink-0" />
                                    <span className="text-gray-200 text-sm">{point}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={armadaTangki1}
                                alt="Armada tangki air bersih DEWA TIRTA LESTARI"
                                className="w-full h-[400px] md:h-[480px] object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="absolute -bottom-6 left-4 right-4 md:left-6 md:right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-5"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                {stats.slice(0, 2).map((stat) => (
                                    <div key={stat.id} className="text-center">
                                        <p className="text-2xl font-bold text-primary">
                                            {stat.value}
                                            {stat.suffix}
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/10"
                >
                    {stats.map((stat) => (
                        <StatItem key={stat.id} stat={stat} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;