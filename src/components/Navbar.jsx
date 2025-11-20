import { useEffect } from "react";
import { useState } from "react";
import Night from "../assets/night.png"
import Light from "../assets/sun.png"
const Navbar = ({ menuOpen, setMenuOpen, darkmode, setDarkmode }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 useEffect(() => {
   // Remove both possible classes first
   document.body.classList.remove("dark", "light");

   // Add the correct one based on darkmode
   if (darkmode) {
     document.body.classList.add("dark");
   } else {
     document.body.classList.add("light");
   }
 }, [darkmode]);

  return (
    // fixed top-0 left-0 right-0 z-50 transition-all duration-300
    <nav
      className={`fixed top-0 max-w-screen z-40 transition-all duration-300${
        scrolled
          ? " backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
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
          <div className="w-[100px] absolute bg-red-500">
            <img
              src={Night}
              alt="night-toggle"
              className={`w-[25px] relative top-0 left-120 transform duration-100 hover:-translate-y-1 cursor-pointer ${
                darkmode ? "flex" : "hidden"
              }`}
              onClick={() => setDarkmode((prev) => !prev)}
            />
            <img
              src={Light}
              alt="light-toggle"
              className={`w-[25px] relative top-0 left-120 transform duration-100 hover:-translate-y-1 cursor-pointer ${
                darkmode ? "hidden" : "flex"
              }`}
              onClick={() => setDarkmode((prev) => !prev)}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;