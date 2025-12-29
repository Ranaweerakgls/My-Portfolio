import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function ContactMe() {
  const hoverGradient = "from-purple-600/40 to-pink-600/40";
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_v0gng7u",
        "template_4holl1t",
        formRef.current,
        "VedQxtsAtPPD-y2Th"
      );
      alert("Message sent successfully!");
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please check your keys and try again.");
    }
  };

  const socialLinks = [
    { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/lakshika-ranaweera-905989296", bg: "bg-[#0A66C2]" },
    { icon: <FaGithub />, url: "https://github.com/Ranaweerakgls", bg: "bg-[#171515]" },
    { icon: <FaYoutube />, url: "https://youtube.com/@music_with_sandu?si=iEKqh2XAw8-euxKH", bg: "bg-[#FF0000]" },
    { icon: <FaWhatsapp />, url: "https://wa.me/0703745293", bg: "bg-[#25D366]" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/sandu_.gurl", bg: "bg-[#E1306C]" },
    { icon: <FaFacebookF />, url: "https://www.facebook.com/lakshika.ranaweera.50", bg: "bg-[#1877F2]" },
  ];

  return (
    <section
      id="contact"
      className="
        py-20 md:py-28
        px-3 sm:px-4
        pb-[env(safe-area-inset-bottom)]
        relative
      "
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 sm:mb-14 md:mb-20"
        >
          <p className="text-[11px] sm:text-sm uppercase tracking-[0.28em] text-gray-400 mb-3">
            Get In Touch
          </p>
          <h2 className="text-[32px] sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">

          {/* Contact Info */}
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.18 } }, // mobile delay
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-5 md:space-y-6 text-left"
          >
            <InfoCard icon={<Mail size={24} />} title="Email" value="sadumgc123@gmail.com" hoverGradient={hoverGradient} />
            <InfoCard icon={<Phone size={24} />} title="Phone" value="(+94)70 374 5293" hoverGradient={hoverGradient} />
            <InfoCard icon={<MapPin size={24} />} title="Location" value="Sri Lanka" hoverGradient={hoverGradient} />

            <motion.div
              className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-5"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, scale: 0.6 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${social.bg} text-white text-base sm:text-xl p-3 rounded-full flex items-center justify-center border border-white/10`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }} // mobile delay
            className="
              relative bg-[#0d0d12]
              border border-white/10
              rounded-2xl md:rounded-3xl
              p-4 sm:p-6 md:p-8
              space-y-4 md:space-y-6
              overflow-hidden
              group
              pb-10
            "
          >
            {/* Ambient glow */}
            <motion.div
              animate={{ opacity: [0.04, 0.14, 0.04] }}
              transition={{ duration: 4, repeat: Infinity }}
              className={`absolute inset-0 bg-gradient-to-br ${hoverGradient} rounded-2xl md:rounded-3xl`}
            />

            <div className="relative z-10 space-y-3 sm:space-y-4">
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50"
              />

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50"
              />

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                name="message"
                rows="4"
                placeholder="Write your message..."
                required
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-pink-500/50 resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0px #000",
                    "0 0 16px #a855f7",
                    "0 0 0px #000",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                type="submit"
                className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, value, hoverGradient }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 14 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -4 }}
      className="relative group"
    >
      <motion.div
        animate={{ opacity: [0, 0.22, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className={`absolute inset-0 bg-gradient-to-br ${hoverGradient} rounded-2xl`}
      />
      <div className="relative flex items-center gap-3 sm:gap-4 bg-[#0d0d12] border border-white/10 rounded-2xl p-4 sm:p-5">
        <div className="text-pink-400">{icon}</div>
        <div>
          <p className="text-xs sm:text-sm text-gray-400">{title}</p>
          <p className="text-white font-medium text-sm sm:text-base break-all">
            {value}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
