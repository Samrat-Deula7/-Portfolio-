import { useEffect } from "react";
import { useState } from "react";

export const StarBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    generateParticles();
  }, []);

  const generateParticles = () => {
    const numberOfParticles = Math.floor(
      (window.innerWidth * window.innerHeight) / 18000,
    );
    const newParticles = [];

    for (let i = 0; i < numberOfParticles; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.25 + 0.1,
        animationDuration: Math.random() * 6 + 4,
      });
    }
    setParticles(newParticles);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-[#E3CAA5] animate-pulse"
          style={{
            width: p.size + "px",
            height: p.size + "px",
            left: p.x + "%",
            top: p.y + "%",
            opacity: p.opacity,
            animationDuration: p.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
