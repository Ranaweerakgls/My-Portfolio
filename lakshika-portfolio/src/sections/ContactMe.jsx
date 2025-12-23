import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";

export default function ContactMe() {
  const hoverGradient = "from-purple-600/40 to-pink-600/40";

  const socialLinks = [
    { icon: <FaLinkedinIn className="text-white" />, url: "https://linkedin.com/in/lakshika-ranaweera-905989296", bg: "bg-[#0A66C2]" }, // LinkedIn
    { icon: <FaGithub className="text-white" />, url: "https://github.com/Ranaweerakgls", bg: "bg-[#171515]" }, // GitHub
    { icon: <FaYoutube className="text-white" />, url: "https://youtube.com/@music_with_sandu?si=iEKqh2XAw8-euxKH", bg: "bg-[#FF0000]" }, // YouTube
    { icon: <FaWhatsapp className="text-white" />, url: "https://wa.me/0703745293", bg: "bg-[#25D366]" }, // WhatsApp
    { icon: <FaInstagram className="text-white" />, url: "https://www.instagram.com/sandu_.gurl", bg: "bg-[#E1306C]" }, // Instagram
    { icon: <FaFacebookF className="text-white" />, url: "https://www.facebook.com/lakshika.ranaweera.50", bg: "bg-[#1877F2]" }, // Facebook
  ];

  return (
    <section id="contact" className="py-28 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-gray-400 mb-4">
            Get In Touch
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Me
            </span>
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info + Social */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-left"
          >
            <InfoCard
              icon={<Mail size={28} />}
              title="Email"
              value="sadumgc123@gmail.com"
              hoverGradient={hoverGradient}
            />
            <InfoCard
              icon={<Phone size={28} />}
              title="Phone"
              value="+94 374 5293"
              hoverGradient={hoverGradient}
            />
            <InfoCard
              icon={<MapPin size={28} />}
              title="Location"
              value="Sri Lanka"
              hoverGradient={hoverGradient}
            />

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.bg} transition text-white text-xl p-3 rounded-full flex items-center justify-center border border-white/10 hover:opacity-90`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#0d0d12] border border-white/10 rounded-3xl p-8 space-y-6 overflow-hidden group"
          >
            {/* Gradient overlay for hover effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${hoverGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl`}
            />

            <div className="relative z-10 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50"
              />

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 resize-none"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white
                bg-gradient-to-r from-pink-500 to-purple-500
                hover:opacity-90 transition mt-2"
              >
                Send Message
              </button>
            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, value, hoverGradient }) {
  return (
    <div className="relative group">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${hoverGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}
      />
      <div className="relative flex items-center gap-4 bg-[#0d0d12] border border-white/10 rounded-2xl p-5">
        <div className="text-pink-400">{icon}</div>
        <div>
          <p className="text-sm text-gray-400">{title}</p>
          <p className="text-white font-medium">{value}</p>
        </div>
      </div>
    </div>
  );
}
