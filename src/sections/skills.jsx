import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaFigma,
  FaMobileAlt,
  FaChartBar,
  FaJava,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiKotlin,
  SiBootstrap,
  SiTailwindcss,
  SiAndroid,
  SiReact,
  SiPython,
  SiCplusplus,
  SiJupyter,
} from "react-icons/si";

export default function SkillsSection() {
  const skillsData = [
    {
      title: "Frontend Development",
      icon: <FaReact />,
      gradient: "from-cyan-400 to-blue-500",
      skills: [
        { name: "HTML", level: 5, icon: <FaHtml5 /> },
        { name: "CSS", level: 5, icon: <FaCss3Alt /> },
        { name: "JavaScript", level: 4, icon: <SiJavascript /> },
        { name: "React", level: 4, icon: <FaReact /> },
        { name: "Bootstrap", level: 4, icon: <SiBootstrap /> },
        { name: "Tailwind CSS", level: 4, icon: <SiTailwindcss /> },
      ],
    },
    {
      title: "Backend Development",
      icon: <FaNodeJs />,
      gradient: "from-green-400 to-emerald-600",
      skills: [
        { name: "Node.js", level: 4, icon: <FaNodeJs /> },
        { name: "Python", level: 2, icon: <SiPython /> },
        { name: "Java", level: 5, icon: <FaJava /> },
        { name: "C++", level: 5, icon: <SiCplusplus /> },
        { name: "MongoDB", level: 4, icon: <SiMongodb /> },
        { name: "SQL / SQLite", level: 4, icon: <SiMysql /> },
      ],
    },
    {
      title: "Mobile Development",
      icon: <FaMobileAlt />,
      gradient: "from-purple-400 to-pink-500",
      skills: [
        { name: "Kotlin", level: 4, icon: <SiKotlin /> },
        { name: "Android Studio", level: 4, icon: <SiAndroid /> },
        { name: "XML UI", level: 4, icon: <FaMobileAlt /> },
        { name: "React Native", level: 3, icon: <SiReact /> },
        { name: "Firebase", level: 2, icon: <FaDatabase /> },
      ],
    },
    {
      title: "Data & BI Tools",
      icon: <FaChartBar />,
      gradient: "from-yellow-400 to-orange-500",
      skills: [
        { name: "Power BI", level: 5, icon: <FaChartBar /> },
        { name: "Jupyter", level: 4, icon: <SiJupyter /> },
        { name: "SQL", level: 4, icon: <FaDatabase /> },
        { name: "Data Analytics", level: 4, icon: <FaChartBar /> },
        { name: "Dashboard Design", level: 5, icon: <FaChartBar /> },
      ],
    },
    {
      title: "UI / UX & Design",
      icon: <FaFigma />,
      gradient: "from-pink-400 to-rose-500",
      skills: [
        { name: "Figma", level: 4, icon: <FaFigma /> },
        { name: "Wireframing", level: 5, icon: <FaFigma /> },
        { name: "Prototyping", level: 5, icon: <FaFigma /> },
        { name: "Usability Testing", level: 3, icon: <FaFigma /> },
        { name: "Interaction Design", level: 4, icon: <FaFigma /> },
      ],
    },
  ];

  // Variants
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } },
  };

  const headerVariant = {
    hidden: { opacity: 0, y: -20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 18 } },
  };

  const skillRowVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ opacity: 1, x: 0, transition: { delay: i * 0.1, type: "spring", stiffness: 120, damping: 14 } }),
  };

  return (
    <section id="skills" className="py-28 px-4 relative text-white">
      {/* Title */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.p
          className="text-sm uppercase tracking-[0.35em] text-gray-400 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Dive Into My Work
        </motion.p>
        <motion.h2
          className="text-5xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Skills &{" "}
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Technologies
          </motion.span>
        </motion.h2>
      </motion.div>

      {/* Skills Cards */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6 px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillsData.map((card, index) => (
          <motion.div
            key={index}
            className="skill-card"
            variants={cardVariant}
            whileHover={{ y: -12, scale: 1.03, boxShadow: "0 8px 25px rgba(130, 50, 255, 0.3)" }}
          >
            <motion.div className="card-header-box mb-6" variants={headerVariant}>
              <div className={`icon-box bg-gradient-to-r ${card.gradient}`}>{card.icon}</div>
              <h3 className="skill-title">{card.title}</h3>
            </motion.div>

            <div className="skills-container">
              {card.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="skill-row"
                  custom={i}
                  variants={skillRowVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -3, scale: 1.02 }}
                >
                  <div className="skill-name">
                    <span className="skill-icon">{skill.icon}</span>
                    {skill.name}
                  </div>
                  <div className="dots">
                    {[...Array(5)].map((_, dotIndex) => (
                      <span key={dotIndex} className={`dot ${dotIndex < skill.level ? "filled" : ""}`} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Styles */}
      <style>{`
        .skill-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(14px);
          padding: 24px;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 6px 15px rgba(0, 10, 30, 0.5);
        }

        .skill-card:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .card-header-box {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 16px;
        }

        .icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 12px;
          color: #020617;
        }

        .skill-title {
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #fff;
        }

        .skill-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .skill-name {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .skill-icon {
          font-size: 1.1rem;
          opacity: 0.7;
          display: flex;
          align-items: center;
        }

        .dots {
          display: flex;
          gap: 5px;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
        }

        .dot.filled {
          background: #fff;
        }

        /* MOBILE OPTIMIZATION */
        @media (max-width: 640px) {
          .skill-card {
            padding: 16px;
            border-radius: 16px;
          }

          .skill-title {
            font-size: 1.1rem;
          }

          .skill-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            font-size: 0.85rem;
          }

          .dots {
            justify-content: flex-start;
          }

          .icon-box {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }

          h2 {
            font-size: 2.5rem; /* title scales for small devices */
          }

          p {
            font-size: 0.75rem; /* subtitle smaller */
          }

          .grid {
            gap: 6px; /* reduce spacing for smaller screens */
          }
        }
      `}</style>
    </section>
  );
}
