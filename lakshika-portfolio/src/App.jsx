import ParticlesBackground from "./ParticlesBackground";
import Hero from "./sections/Hero";
import LakshikaPhoto from "./assets/lakshika.jpg"; // Make sure the image is in this path

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
        {/* <About /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
      </div>
    </div>
  );
}
