import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * RotatingText
 * Menampilkan satu kata/frasa dari `texts` secara bergantian dengan animasi
 * naik-turun ala reactbits.dev (https://reactbits.dev/text-animations/rotating-text).
 *
 * Props:
 * - texts: array of string, daftar kata yang akan berganti-ganti
 * - rotationInterval: jeda pergantian (ms), default 2300
 * - className: kelas tambahan untuk styling teks
 */
function RotatingText({ texts = [], rotationInterval = 2300, className = "" }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (texts.length <= 1) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, rotationInterval);
        return () => clearInterval(timer);
    }, [texts, rotationInterval]);

    return (
        <span
            className={`relative inline-flex overflow-hidden align-bottom ${className}`}
            style={{ verticalAlign: "bottom" }}
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={texts[index]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-120%", opacity: 0 }}
                    transition={{ type: "spring", damping: 22, stiffness: 260 }}
                    className="inline-block whitespace-nowrap"
                >
                    {texts[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

export default RotatingText;
