import { motion } from "framer-motion";

/**
 * AuroraBackground
 * A lightweight react-bits style "Aurora" background: soft animated color
 * blobs that drift and pulse behind content. Pure CSS + framer-motion,
 * no extra dependencies required.
 */
function AuroraBackground({ className = "" }) {
  const blobs = [
    {
      className: "bg-primary/40 w-[32rem] h-[32rem] -top-40 -left-32",
      animate: { x: [0, 40, -20, 0], y: [0, 30, -10, 0], scale: [1, 1.08, 0.96, 1] },
      duration: 18,
    },
    {
      className: "bg-accent/30 w-[26rem] h-[26rem] top-1/3 -right-24",
      animate: { x: [0, -30, 20, 0], y: [0, -20, 20, 0], scale: [1, 0.94, 1.06, 1] },
      duration: 22,
    },
    {
      className: "bg-primary-light/30 w-[24rem] h-[24rem] -bottom-24 left-1/4",
      animate: { x: [0, 25, -25, 0], y: [0, -25, 15, 0], scale: [1, 1.05, 0.95, 1] },
      duration: 26,
    },
  ];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl opacity-70 ${blob.className}`}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[size:28px_28px]" />
    </div>
  );
}

export default AuroraBackground;
