import { useEffect } from "react";

const Navbar=({menuOpen,setMenuOpen})=>{


return (
  <nav className="fixed top-0 max-w-screen z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
    <div className="min-w-screen  max-w-5xl mx-auto px-4">
      <div className="flex justify-between sm:justify-around items-center h-16 ">
        <a href="#home" className="font-mono text-xl font-bold text-white">
          Samrat <span className="text-purple-900">Dev</span>
        </a>

        {/* This is the mobile menu */}
        <div
          className=" w-7 h-5 relative cursor-pointer z-40 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          &#9776;
        </div>

        {/* This is the desktop menu */}
        {/* In the class hidden sets display to hidden but md:flex sets display to flex from medium size to large */}
        <div className="hidden md:flex items-center space-x-8 ">
          <a
            href="#home"
            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            About
          </a>

          <a
            href="#projects"
            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
);
}
export default Navbar;