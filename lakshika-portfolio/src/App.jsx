import ParticlesBackground from "./ParticlesBackground";
import Hero from "./sections/Hero";
// Fixed: Using curly braces to match your 'export const SkillsSection' 
// and ensuring the path points to your Education.js file
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/skills"; 

import LakshikaPhoto from "./assets/lakshika.jpg"; // Path to your image

export default function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section with Photo */}
        <Hero imageSrc={LakshikaPhoto} />

        {/* Future Sections */}
        <AboutSection />
        
        {/* Added: This tag is required to actually display the skills on the page */}
        {/*<SkillsSection /> */}

        
        {/* <Projects /> */}
        {/* <Contact /> */}
      </div>
    </div>
  );
}