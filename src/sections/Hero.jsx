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
          >
            <img
              src={imageSrc}
              alt="Lakshika Ranaweera"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          {/* FULL-STACK CARD */}
          <motion.div
            className="absolute
              top-full mt-4 left-1/2 -translate-x-1/2
              md:-top-10 md:-left-10 md:translate-x-0
              flex"
            variants={container}
          >
            <motion.div
              className="px-4 py-2 bg-purple-700 text-white rounded-xl shadow-xl text-sm sm:text-base"
              variants={floatCard}
            >
              Full-Stack Developer
            </motion.div>
          </motion.div>

          {/* UI/UX CARD */}
          <motion.div
            className="absolute
              top-full mt-14 left-1/2 -translate-x-1/2
              md:-bottom-6 md:-right-6 md:translate-x-0
              flex"
            variants={container}
          >
            <motion.div
              className="px-4 py-2 bg-pink-600 text-white rounded-xl shadow-xl text-sm sm:text-base"
              variants={floatCard}
            >
              UI/UX Designer
            </motion.div>
          </motion.div>

          {/* Glow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-400 opacity-15 blur-3xl -z-10 animate-pulse-slow"></div>
        </motion.div>

        {/* TEXT SECTION (UNCHANGED) */}
        <motion.div className="flex flex-col items-start text-left space-y-4 sm:space-y-6 md:space-y-10 w-full sm:w-auto">
          {/* ... your text & buttons stay EXACTLY the same */}
        </motion.div>
      </motion.div>
    </section>
  );
}
