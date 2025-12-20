import { Briefcase, GraduationCap, Award } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 22 } },
  };

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden min-h-screen">
      
      {/* 3D Gradient Background Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-400 opacity-15 blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-2">Explore My</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Expertise
            </span>
          </h2>
        </motion.div>

        {/* 3 Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">

          {/* BOX 1: EXPERIENCE */}
          <motion.div 
            whileHover={{ y: -10, scale: 1.05 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-500 -z-10"></div>
            <div className="relative bg-[#0d0d12] border border-white/10 backdrop-blur-2xl p-10 rounded-3xl h-full flex flex-col items-center text-center shadow-2xl">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 mb-6">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Experience</h3>
              <div className="space-y-3">
                <p className="text-gray-300 text-lg font-medium">Web & Mobile Development</p>
                <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30">
                  <p className="text-purple-400 text-sm font-black uppercase tracking-widest drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
                    MERN | Kotlin | Java
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BOX 2: EDUCATION */}
          <motion.div 
            whileHover={{ y: -10, scale: 1.05 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-500 -z-10"></div>
            <div className="relative bg-[#0d0d12] border border-white/10 backdrop-blur-2xl p-10 rounded-3xl h-full flex flex-col items-center text-center shadow-2xl">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-pink-500/20 border border-white/10 mb-6">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Education</h3>
              <div className="space-y-3">
                <p className="text-gray-300 text-lg font-medium">BSc (Hons) Information Technology</p>
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30">
                  <p className="text-blue-400 text-sm font-black uppercase tracking-widest drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                    SLIIT | GPA: 3.2 / 4.0
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* BOX 3: CERTIFICATIONS */}
          <motion.div 
            whileHover={{ y: -10, scale: 1.05 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-500 -z-10"></div>
            <div className="relative bg-[#0d0d12] border border-white/10 backdrop-blur-2xl p-10 rounded-3xl h-full flex flex-col items-center text-center shadow-2xl">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-white/10 mb-6">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">Certifications</h3>
              <div className="flex flex-col gap-3">
                {["Android Development", "Web Technologies", "Database Management"].map((cert) => (
                  <div key={cert} className="px-4 py-1 rounded-lg bg-pink-500/5 border border-pink-500/20">
                    <p className="text-pink-400 text-sm font-bold tracking-wide uppercase">
                      {cert}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
