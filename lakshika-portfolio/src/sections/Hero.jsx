import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero({ imageSrc }) {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 22 } },
  };

  const hoverText = {
    whileHover: { scale: 1.05, color: "#f472b6", transition: { duration: 0.3 } },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-32 overflow-hidden gap-24">

      {/* NAME & DEGREE */}
      <motion.div className="text-center" variants={container} initial="hidden" animate="visible">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 leading-tight mb-8 cursor-pointer"
          variants={fadeUp}
          {...hoverText}
        >
          Lakshika <span className="text-white">Ranaweera</span>
        </motion.h1>

        <motion.span
          className="text-lg md:text-2xl text-gray-300 mb-20 cursor-pointer"
          variants={fadeUp}
          {...hoverText}
        >
          Undergraduate BSc(Hons) in Information Technology
        </motion.span>
      </motion.div>

      {/* PHOTO + ABOUT ME CENTERED */}
      <motion.div className="flex flex-col md:flex-row items-center justify-center gap-20 max-w-6xl w-full relative">

        {/* PHOTO WITH MODERN EFFECTS */}
        <motion.div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">

          <motion.div
            className="w-full h-full rounded-3xl overflow-hidden shadow-2xl p-1 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            whileHover={{ scale: 1.05, rotate: 1, boxShadow: "0 25px 60px rgba(244,114,182,0.25)" }}
          >
            <img
              src={imageSrc}
              alt="Lakshika Ranaweera"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 opacity-10 pointer-events-none"></div>
          </motion.div>

          {/* Floating Role Cards (modern positions) */}
          <motion.div className="absolute -top-10 -left-10 flex flex-col gap-4">
            <motion.div
              className="px-4 py-2 bg-purple-700 text-white rounded-xl shadow-xl cursor-default"
              whileHover={{ scale: 1.12, rotate: 5, boxShadow: "0 12px 30px rgba(244,114,182,0.5)" }}
            >
              Full-Stack Developer
            </motion.div>
          </motion.div>

          <motion.div className="absolute -bottom-6 -right-6 flex flex-col gap-4">
            <motion.div
              className="px-4 py-2 bg-pink-600 text-white rounded-xl shadow-xl cursor-default"
              whileHover={{ scale: 1.12, rotate: -5, boxShadow: "0 12px 30px rgba(168,85,247,0.5)" }}
            >
              UI/UX Designer
            </motion.div>
          </motion.div>

          {/* Soft glow behind photo */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-400 opacity-15 blur-3xl -z-10"></div>
        </motion.div>

        {/* ABOUT ME + BUTTONS */}
        <motion.div
          className="flex flex-col items-start text-left space-y-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-pink-400 cursor-pointer"
            variants={fadeUp}
            {...hoverText}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-gray-300 md:text-lg max-w-xl leading-relaxed cursor-pointer"
            variants={fadeUp}
            {...hoverText}
          >
            I’m an Information Technology undergraduate passionate about designing
            engaging and intuitive digital experiences. As a UI/UX designer, I create
            interfaces that combine functionality with aesthetics to deliver meaningful
            user experiences.
          </motion.p>

          <motion.div className="flex flex-wrap gap-6 mt-2" variants={fadeUp}>
            <a
              href="/Lakshika Ranaweera CV.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-pink-500 text-black font-semibold shadow-lg hover:scale-110 hover:shadow-2xl transition-transform duration-300"
            >
              <FaDownload /> Download CV
            </a>

            <a
              href="https://github.com/Lakshika"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-400 text-gray-300 hover:bg-gray-100 hover:text-black shadow-md hover:scale-105 transition-all duration-300"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/LakshikaRanaweera"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white shadow-md hover:scale-105 transition-all duration-300"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
