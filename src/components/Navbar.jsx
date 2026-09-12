import { useEffect } from "react";
import { useState } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? el.scrollTop / max : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left bg-gradient-to-r from-[#AD8B73] via-[#CEAB93] to-[#E3CAA5]"
        style={{ transform: `scaleX(${progress})` }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "glass" : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a
              href="#home"
              className="font-mono text-xl font-bold bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] bg-clip-text text-transparent animate-gradient-text"
            >
              Samrat<span className="text-[#3E2F24]">Dev</span>.
            </a>

            {/* Mobile hamburger */}
            <div
              className="w-7 h-5 relative z-40 md:hidden text-[#AD8B73] text-2xl"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-[#6B5847] hover:text-[#AD8B73] transition-colors font-medium relative group"
              >
                Home
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] rounded transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#about"
                className="text-[#6B5847] hover:text-[#AD8B73] transition-colors font-medium relative group"
              >
                About
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] rounded transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#projects"
                className="text-[#6B5847] hover:text-[#AD8B73] transition-colors font-medium relative group"
              >
                Projects
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] rounded transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="btn-sheen bg-gradient-to-r from-[#AD8B73] to-[#96755f] text-[#FFFBE9] px-5 py-2 rounded-full font-semibold hover:-translate-y-0.5 transition-all duration-200 shadow-[0_4px_15px_rgba(173,139,115,0.3)]"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
