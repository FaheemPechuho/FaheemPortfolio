import { motion } from "framer-motion";

export default function AuroraBackground() {
  const blobs = [
    {
      className: "w-72 h-72 md:w-96 md:h-96 bg-primary/30 blur-[120px]",
      animate: { x: [0, -30, 30, 0], y: [0, -20, 20, 0] },
    },
    {
      className: "w-64 h-64 md:w-80 md:h-80 bg-accent/20 blur-[140px]",
      animate: { x: [0, 40, -20, 0], y: [0, 20, -30, 0] },
    },
    {
      className: "w-56 h-56 md:w-72 md:h-72 bg-secondary/30 blur-[110px]",
      animate: { x: [0, -20, 10, 0], y: [0, 30, -10, 0] },
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full mix-blend-screen ${blob.className}`}
          style={{
            top: index === 0 ? "10%" : index === 1 ? "40%" : "20%",
            left: index === 0 ? "15%" : index === 1 ? "60%" : "35%",
          }}
          animate={blob.animate}
          transition={{
            duration: 12 + index * 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}
    </div>
  );
}

