import ParticlesBackground from "./ParticlesBackground";
import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/skills";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";

import LakshikaPhoto from "./assets/lakshika.jpg";

export default function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      
      {/* Navbar */}
      <Navbar />

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <section id="home">
          <Hero imageSrc={LakshikaPhoto} />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <ContactMe />
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
