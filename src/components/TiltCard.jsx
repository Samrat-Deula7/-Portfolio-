import { useRef } from "react";

/**
 * 3D tilt card with cursor-tracking spotlight.
 * - Rotates toward the mouse (maxTilt degrees)
 * - Sets --mx / --my CSS vars for the .spotlight glow
 * - .tilt-inner children get translateZ depth (pop-out effect)
 */
const TiltCard = ({ children, className = "", maxTilt = 8 }) => {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);

    const rotateX = (py - 0.5) * -maxTilt * 2;
    const rotateY = (px - 0.5) * maxTilt * 2;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt spotlight ${className}`}
    >
      <div className="tilt-inner h-full">{children}</div>
    </div>
  );
};

export default TiltCard;
