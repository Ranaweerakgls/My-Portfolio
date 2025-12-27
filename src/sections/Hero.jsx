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
            visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", stiffness: 100, damping: 12 } },
          }}
          animate={{
            y: [0, -8, 0], // subtle float
            transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
          }}
        >
          {/* Profile Image with Glow */}
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

          {/* Floating Role Cards (hidden on mobile) */}
          <motion.div className="absolute -top-10 -left-10 hidden md:flex flex-col gap-4" variants={container}>
            <motion.div
              className="px-4 py-2 bg-purple-700 text-white rounded-xl shadow-xl cursor-default"
              variants={floatCard}
              whileHover={{ scale: 1.12, rotate: 5, boxShadow: "0 12px 30px rgba(244,114,182,0.5)" }}
            >
              Full-Stack Developer
            </motion.div>
          </motion.div>

          <motion.div className="absolute -bottom-6 -right-6 hidden md:flex flex-col gap-4" variants={container}>
            <motion.div
              className="px-4 py-2 bg-pink-600 text-white rounded-xl shadow-xl cursor-default"
              variants={floatCard}
              whileHover={{ scale: 1.12, rotate: -5, boxShadow: "0 12px 30px rgba(168,85,247,0.5)" }}
            >
              UI/UX Designer
            </motion.div>
          </motion.div>

          {/* Background Glow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-400 opacity-15 blur-3xl -z-10 animate-pulse-slow"></div>
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div className="flex flex-col items-start text-left space-y-4 sm:space-y-6 md:space-y-10 w-full sm:w-auto">
          <motion.div variants={fadeUp(0)}>
            <motion.p
              className="text-base sm:text-lg md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 leading-tight cursor-pointer animate-gradient"
              variants={fadeUp(0)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, rotate: 2, color: "#f472b6", transition: { duration: 0.3 } }}
            >
              HELLO, I'M
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 leading-tight cursor-pointer animate-gradient"
              variants={fadeUp(0.1)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, rotate: 1, color: "#f472b6", transition: { duration: 0.3 } }}
            >
              Lakshika
            </motion.h1>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-8xl font-extrabold text-white leading-tight cursor-pointer"
              variants={fadeUp(0.2)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, rotate: -1, color: "#f472b6", transition: { duration: 0.3 } }}
            >
              Ranaweera
            </motion.h1>

            <motion.p
              className="text-gray-300 text-xs sm:text-sm md:text-xl mt-2 font-medium tracking-wide cursor-pointer"
              variants={fadeUp(0.3)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              Undergraduate BSc(Hons) in Information Technology
            </motion.p>
          </motion.div>

          <motion.p
            className="text-gray-300 text-xs sm:text-sm md:text-lg max-w-full sm:max-w-2xl leading-relaxed cursor-pointer"
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.03, color: "#f472b6", transition: { duration: 0.3 } }}
          >
            I’m passionate about creating engaging & intuitive digital experiences.
            As a UI/UX designer & full-stack developer, I design user-centered interfaces
            & build functional, scalable web applications. I also have experience in data
            analysis & visualization, transforming data into clear insights that support
            informed decision-making.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-2 w-full sm:w-auto" variants={fadeUp(0.5)} initial="hidden" animate="visible">
            <motion.a
              href="/Lakshika Ranaweera CV.pdf"
              download
              className="flex items-center justify-center gap-2 px-5 py-2 sm:px-8 sm:py-4 rounded-full bg-pink-500 text-black font-bold shadow-lg text-sm sm:text-base"
              whileHover={{
                scale: 1.12,
                rotate: 1,
                boxShadow: "0 12px 30px rgba(244,114,182,0.5)",
                transition: { type: "spring" },
              }}
            >
              <FaDownload /> Download CV
            </motion.a>

            <motion.a
              href="https://github.com/Ranaweerakgls"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2 sm:px-6 sm:py-4 rounded-full border border-gray-400 text-gray-300 shadow-md text-sm sm:text-base"
              whileHover={{
                scale: 1.08,
                rotate: -1,
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                transition: { type: "spring" },
              }}
            >
              <FaGithub /> GitHub
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/lakshika-ranaweera-905989296"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-2 sm:px-6 sm:py-4 rounded-full border border-blue-400 text-blue-300 shadow-md text-sm sm:text-base"
              whileHover={{
                scale: 1.08,
                rotate: 1,
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
                transition: { type: "spring" },
              }}
            >
              <FaLinkedin /> LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
