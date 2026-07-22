import { motion } from "framer-motion";

/**
 * WaterDivider
 * A subtle animated wave divider (react-bits "Waves" style) used to
 * transition between sections with a water-themed motif.
 */
function WaterDivider({ flip = false, className = "" }) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 90"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-20"
      >
        <motion.path
          d="M0,45 C150,90 350,0 600,45 C850,90 1050,0 1200,45 L1200,90 L0,90 Z"
          className="fill-primary/10 dark:fill-primary/15"
          animate={{
            d: [
              "M0,45 C150,90 350,0 600,45 C850,90 1050,0 1200,45 L1200,90 L0,90 Z",
              "M0,55 C150,10 350,90 600,55 C850,20 1050,90 1200,55 L1200,90 L0,90 Z",
              "M0,45 C150,90 350,0 600,45 C850,90 1050,0 1200,45 L1200,90 L0,90 Z",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,60 C200,20 400,90 600,60 C800,30 1000,80 1200,60 L1200,90 L0,90 Z"
          className="fill-primary/20 dark:fill-primary/25"
          animate={{
            d: [
              "M0,60 C200,20 400,90 600,60 C800,30 1000,80 1200,60 L1200,90 L0,90 Z",
              "M0,50 C200,80 400,10 600,50 C800,80 1000,10 1200,50 L1200,90 L0,90 Z",
              "M0,60 C200,20 400,90 600,60 C800,30 1000,80 1200,60 L1200,90 L0,90 Z",
            ],
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </svg>
    </div>
  );
}

export default WaterDivider;
