import { Briefcase, GraduationCap, Award } from "lucide-react"; 
import { motion } from "framer-motion";

export default function AboutSection() {
  // Variants for container to stagger cards
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Fade-up variant for cards
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  // Variant for list items
  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 120, damping: 14 },
    }),
  };

  // Intro paragraphs
  const introParagraphs = [
    `I am a 3rd-year Information Technology undergraduate at SLIIT,
     passionate about creating engaging digital experiences. As a UI/UX designer,
     full-stack developer, and data analyst, I focus on building innovative
     web and mobile applications using technologies like MERN Stack, Java,
     Kotlin, and Android Studio, while designing intuitive, user-centered interfaces.`,
     
    `I enjoy transforming ideas into real-world products, 
     analyzing data to provide actionable insights, and continuously 
     learning new technologies. My goal is to grow as a professional,
     contribute meaningfully, and deliver impactful digital solutions
     that seamlessly combine design, development, and analytics.`
  ];

  return (
    <section id="about" className="py-20 md:py-28 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">

        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120, damping: 20 }}
          className="mb-14 md:mb-20"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-gray-400 mb-4">
            Get To Know More
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white inline-block"
          >
            About{" "}
            <motion.span
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500"
            >
              Me
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-14 md:mb-20"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card
            icon={<Briefcase size={38} />}
            title="Experience"
            description="Hands-on experience gained through academic and personal projects"
            points={[
              "Full-Stack Web Development (MERN, PHP, MySQL)",
              "Android Application Development (Kotlin, SQLite)",
              "UI/UX Design & Prototyping (Figma)",
              "Data Analytics & Dashboards (Power BI, DAX)",
              "GitHub Version Control & Team Collaboration",
            ]}
            hoverGradient="from-purple-600/40 to-pink-600/40"
            index={0}
          />

          <Card
            icon={<GraduationCap size={38} />}
            title="Education"
            description="Strong academic foundation in computing and Information Technology"
            points={[
              "BSc (Hons) in Information Technology – SLIIT (2023 – Present)",
              "Specialized in Information Technology",
              "GCE Advanced Level – Arts Stream",
              "Mahamaya Girls’ College, Kandy (2008 – 2021)",
            ]}
            hoverGradient="from-blue-600/40 to-cyan-600/40"
            index={1}
          />

          <Card
            icon={<Award size={38} />}
            title="Certifications"
            description="Skill validation through academic coursework and practical projects"
            points={[
              "Android Application Development (Kotlin)",
              "Web Technologies (MERN Stack, PHP, MySQL)",
              "UI/UX Design Fundamentals (Figma)",
              "Database Management Systems",
              "Data Visualization & Analytics (Power BI)",
            ]}
            hoverGradient="from-orange-500/40 to-pink-500/40"
            index={2}
          />
        </motion.div>

        {/* About Me Description */}
        <motion.div
          className="max-w-4xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          {introParagraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              whileHover={{
                scale: 1.02,
                color: "#f472b6",
                transition: { duration: 0.3 },
              }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Card({ icon, title, description, points, hoverGradient, index }) {
  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, type: "spring", stiffness: 120, damping: 14 },
    }),
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.2,
            type: "spring",
            stiffness: 120,
            damping: 18,
          },
        },
      }}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="relative rounded-3xl p-6 sm:p-8 md:p-10 text-left bg-[#0d0d12] border border-white/10 group overflow-hidden"
    >
      {/* Hover Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${hoverGradient}
        opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      <div className="relative z-10">
        <div className="mb-6 flex justify-center text-white">
          {icon}
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-white text-center">
          {title}
        </h3>

        <p className="text-gray-300 mb-6 text-center text-sm sm:text-base">
          {description}
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm">
          {points.map((item, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={listItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
