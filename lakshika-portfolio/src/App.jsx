import ParticlesBackground from "./ParticlesBackground";
import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/skills";
import Projects from "./sections/Projects";

import LakshikaPhoto from "./assets/lakshika.jpg";

export default function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      
      {/* Background */}
      <ParticlesBackground />

      {/* Content */}
      <div className="relative z-10">
        <Hero imageSrc={LakshikaPhoto} />
        <AboutSection />
        <SkillsSection />
        <Projects/>
      </div>

    </div>
  );
}
