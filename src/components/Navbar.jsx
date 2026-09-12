import { useEffect } from "react";
import { useState } from "react";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFBE9]/85 backdrop-blur-xl border-b border-[#AD8B73]/15 shadow-[0_4px_20px_rgba(173,139,115,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="font-mono text-xl font-bold text-[#AD8B73]"
          >
            Samrat<span className="text-[#3E2F24]">Dev</span>.
          </a>

          {/* Mobile hamburger */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-[#AD8B73] text-2xl"
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
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#AD8B73] rounded transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="text-[#6B5847] hover:text-[#AD8B73] transition-colors font-medium relative group"
            >
              About
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#AD8B73] rounded transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#projects"
              className="text-[#6B5847] hover:text-[#AD8B73] transition-colors font-medium relative group"
            >
              Projects
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#AD8B73] rounded transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="bg-[#AD8B73] text-[#FFFBE9] px-5 py-2 rounded-full font-semibold hover:bg-[#96755f] hover:-translate-y-0.5 transition-all duration-200 shadow-[0_4px_15px_rgba(173,139,115,0.3)]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
