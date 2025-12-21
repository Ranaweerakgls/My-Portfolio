import { Briefcase, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-4 relative">
      <div className="max-w-7xl mx-auto text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400 mb-4">
            Get To Know More
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Me
            </span>
          </h2>

          <div className="mt-6 h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-70" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">

          <Card
            icon={<Briefcase size={38} />}
            title="Experience"
            description="Professional experience in building scalable digital products"
            points={[
              "Full-Stack Web Development (MERN Stack)",
              "Android Application Development",
              "Java & Kotlin Programming",
            ]}
            hoverGradient="from-purple-600/40 to-pink-600/40"
          />

          <Card
            icon={<GraduationCap size={38} />}
            title="Education"
            description="Strong academic foundation in computing and Information Technology"
            points={[
              "BSc (Hons) in Information Technology",
              "Specialized in Information Technology",
              "GPA: 3.2 (SLIIT)",
            ]}
            hoverGradient="from-blue-600/40 to-cyan-600/40"
          />

          <Card
            icon={<Award size={38} />}
            title="Certifications"
            description="Industry-recognized certifications validating technical expertise"
            points={[
              "Android Application Development Certification",
              "Web Technologies Certification",
              "Database Management Systems Certification",
            ]}
            hoverGradient="from-orange-500/40 to-pink-500/40"
          />

        </div>

        {/* About Me Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed space-y-6"
        >
          <p>
            I am a 3rd-year Information Technology undergraduate at SLIIT,
             passionate about creating engaging digital experiences. As a UI/UX designer,
              full-stack developer, and data analyst, I focus on building innovative
               web and mobile applications using technologies like MERN Stack, Java,
                Kotlin, and Android Studio, while designing intuitive, user-centered interfaces.
          </p>

          <p>
            I enjoy transforming ideas into real-world products, 
            analyzing data to provide actionable insights, and continuously 
            learning new technologies. My goal is to grow as a professional,
             contribute meaningfully, and deliver impactful digital solutions
              that seamlessly combine design, development, and analytics.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

function Card({ icon, title, description, points, hoverGradient }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 180, damping: 18 }}
      className="relative rounded-3xl p-10 text-left bg-[#0d0d12] border border-white/10 group overflow-hidden"
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

        <h3 className="text-2xl font-semibold mb-2 text-white text-center">
          {title}
        </h3>

        <p className="text-gray-300 mb-6 text-center">
          {description}
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-200 text-sm">
          {points.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
