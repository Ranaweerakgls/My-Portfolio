import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic"; // ✅ use basic, not slim

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadBasic(engine); // load default shapes/motion
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: "transparent" }, // allows project background to show
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: { repulse: { distance: 150, duration: 0.4 } },
    },
    particles: {
      number: { value: 80, density: { enable: true, area: 800 } },
      color: { value: "#ff00ff" },
      links: { enable: true, color: "#06b6d4", distance: 150, opacity: 0.4, width: 1 },
      move: { enable: true, speed: 1, outModes: "out" },
      opacity: { value: 0.6 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <Particles id="tsparticles" options={options} />
    </div>
  );
}
