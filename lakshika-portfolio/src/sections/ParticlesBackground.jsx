import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -20 },
        background: { color: { value: "#000000" } },
        fpsLimit: 60,
        particles: {
          number: { value: 40, density: { enable: true, area: 800 } },
          color: { value: ["#f472b6", "#a855f7", "#3b82f6"] },
          shape: { type: "circle" },
          opacity: { value: 0.2, random: true },
          size: { value: 3, random: true },
          move: { enable: true, speed: 0.7, direction: "none", random: true, straight: false, outModes: "out" },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: false },
          },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        detectRetina: true,
      }}
    />
  );
}
