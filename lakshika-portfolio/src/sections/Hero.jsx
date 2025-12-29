// Hero.jsx
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export default function Hero({ imageSrc }) {
  /* ================= DEVICE DETECTION ================= */

  const isMobile = useMemo(
    () => window.matchMedia("(max-width: 768px)").matches,
    []
  );

  const reduceMotion = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  /* ================= CURSOR / TOUCH GLOW ================= */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useSpring(mouseX, {
    stiffness: reduceMotion ? 60 : isMobile ? 90 : 150,
    damping: isMobile ? 26 : 22,
  });

  const glowY = useSpring(mouseY, {
    stiffness: reduceMotion ? 60 : isMobile ? 90 : 150,
    damping: isMobile ? 26 : 22,
  });

  const glowSize = isMobile ? 200 : 280;

  useEffect(() => {
    let rafId;

    const move = (e) => {
      const point = e.touches ? e.touches[0] : e;
      if (!point) return;

      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        mouseX.set(point.clientX - glowSize / 2);
        mouseY.set(point.clientY - glowSize / 2);
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY, glowSize]);

  /* ================= TYPING ANIMATION ================= */

  const roles = ["Full-Stack Developer", "UI / UX Designer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const typingSpeed = reduceMotion
      ? 120
      : isMobile
      ? isDeleting
        ? 55
        : 110
      : isDeleting
      ? 40
      : 90;

    const timeout = setTimeout(() => {
      setTypedText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && typedText === current) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex, isMobile, reduceMotion]);

  /* ================= VARIANTS ================= */

  const container = {
    visible: {
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: isMobile ? 90 : 110,
        damping: 22,
      },
    },
  };

  /* ================= JSX ================= */

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-12 lg:px-20 py-24 md:py-32 overflow-hidden">

      {/* Cursor / Touch Glow */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-pink-500/20 blur-3xl pointer-events-none z-0"
        style={{
          width: glowSize,
          height: glowSize,
          translateX: glowX,
          translateY: glowY,
        }}
      />

      <motion.div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 max-w-[1400px] w-full mx-auto relative z-10">

        {/* PHOTO */}
        <motion.div
          className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 flex-shrink-0"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        >
          <motion.div
            className="w-full h-full rounded-full overflow-hidden shadow-2xl p-1"
            whileHover={{ scale: isMobile ? 1.04 : 1.06, rotate: 2 }}
          >
            <img
              src={imageSrc}
              alt="Lakshika Ranaweera"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="flex flex-col items-start text-left space-y-6 md:space-y-10"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <motion.p className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
              HELLO, I'M
            </motion.p>

            <motion.h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
              Lakshika
            </motion.h1>

            <motion.h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold text-white">
              Ranaweera
            </motion.h1>

            {/* Typing Role */}
            <motion.p
              className="mt-4 text-lg md:text-xl font-semibold text-pink-400 h-7"
              variants={fadeUp}
            >
              {typedText}
              <span className="animate-pulse">|</span>
            </motion.p>
          </motion.div>

          <motion.p
            className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
            variants={fadeUp}
          >
            I’m passionate about creating engaging & intuitive digital experiences.
            As a UI/UX designer & full-stack developer, I design user-centered interfaces
            and build scalable web applications.
          </motion.p>

          {/* BUTTONS */}
          <motion.div className="flex flex-wrap gap-4 md:gap-6" variants={fadeUp}>
            <motion.a
              href="/Lakshika_Ranaweera_CV.pdf"
              download
              className="flex items-center gap-2 px-7 py-3 md:px-8 md:py-4 rounded-full bg-pink-500 text-black font-bold shadow-lg"
              whileHover={{ scale: isMobile ? 1.08 : 1.12 }}
            >
              <FaDownload /> Download CV
            </motion.a>

            <motion.a
              href="https://github.com/Ranaweerakgls"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 md:py-4 rounded-full border border-gray-400 text-gray-300"
              whileHover={{ scale: 1.08 }}
            >
              <FaGithub /> GitHub
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/lakshika-ranaweera-905989296"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 md:py-4 rounded-full border border-blue-400 text-blue-300"
              whileHover={{ scale: 1.08 }}
            >
              <FaLinkedin /> LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
