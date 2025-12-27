import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero({ imageSrc }) {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 22, delay },
    },
  });

  const floatCard = {
    hidden: { opacity: 0, y: -20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-20 sm:py-24 md:py-32 overflow-hidden">
      <motion.div
        className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 sm:gap-10 max-w-[1400px] w-full mx-auto relative"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* PHOTO SECTION */}
        <motion.div
          className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 flex-shrink-0"
          variants={{
            hidden: { opacity: 0, y: -20, rotate: -2 },
            visible: {
              opacity: 1,
              y: 0,
              rotate: 0,
              transition: { type: "spring", stiffness: 100, damping: 12 },
            },
          }}
          animate={{
            y: [0, -8, 0],
            transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          }}
        >
          {/* Profile Image */}
          <motion.div
            className="w-full h-full rounded-full overflow-hidden shadow-2xl p-1 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0 25px 60px rgba(244,114,182,0.35)",
            }}
          >
            <img
              src={imageSrc}
              alt="Lakshika Ranaweera"
              className="w-full h-full object-cover rounded-full"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 opacity-10 pointer-events-none animate-pulse-slow"></div>
          </motion.div>

          {/* Floating Role Cards (NOW visible on mobile too) */}
          <motion.div
            className="absolute -top-10 -left-10 flex flex-col gap-4"
            variants={container}
          >
            <motion.div
              className="px-4 py-2 bg-purple-700 text-white rounded-xl shadow-xl cursor-default"
              variants={floatCard}
            >
              Full-Stack Developer
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute -bottom-6 -right-6 flex flex-col gap-4"
            variants={container}
          >
            <motion.div
              className="px-4 py-2 bg-pink-600 text-white rounded-xl shadow-xl cursor-default"
              variants={floatCard}
            >
              UI/UX Designer
            </motion.div>
          </motion.div>

          {/* Background Glow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-400 opacity-15 blur-3xl -z-10 animate-pulse-slow"></div>
        </motion.div>

        {/* TEXT SECTION (UNCHANGED) */}
        <motion.div className="flex flex-col items-start text-left space-y-4 sm:space-y-6 md:space-y-10 w-full sm:w-auto">
          {/* your existing text & buttons stay exactly the same */}
        </motion.div>
      </motion.div>
    </section>
  );
}
