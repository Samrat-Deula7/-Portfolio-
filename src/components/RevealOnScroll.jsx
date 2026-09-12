import { useEffect, useRef } from "react";

/**
 * Upgraded reveal wrapper:
 * - IntersectionObserver (fires once, then unobserves)
 * - blur + lift + slight scale for a premium feel
 * - `delay` prop for staggered cascades
 */
const RevealOnScroll = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
