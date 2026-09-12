import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Skip on touch devices — native cursor/tap stays
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let ringX = x;
    let ringY = y;
    let rafId;

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };

    // Trailing ring with buttery lerp
    const loop = () => {
      ringX += (x - ringX) * 0.16;
      ringY += (y - ringY) * 0.16;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    const HOVERABLES = "a, button, input, textarea, .tilt, [data-cursor]";
    const onOver = (e) => {
      if (e.target.closest(HOVERABLES)) ring.classList.add("is-hover");
    };
    const onOut = (e) => {
      if (e.target.closest(HOVERABLES)) ring.classList.remove("is-hover");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
};

export default CustomCursor;
