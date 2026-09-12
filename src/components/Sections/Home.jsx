import RevealOnScroll from "../../components/RevealOnScroll";
import Pic from "../../assets/Pic.png";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      {/* Decorative blob background */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[#E3CAA5]/40 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[50px] left-[-80px] w-[300px] h-[300px] rounded-full bg-[#CEAB93]/30 blur-3xl pointer-events-none"></div>

      <RevealOnScroll>
        <div className="relative flex flex-col items-center justify-center min-h-screen min-w-screen text-center place-items-center z-10 px-4">
          {/* Blob-shaped photo */}
          <div className="animate-blob w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 mb-10 md:mb-8 warm-glow-lg overflow-hidden bg-gradient-to-br from-[#CEAB93] to-[#E3CAA5] flex items-center justify-center">
            <img
              src={Pic}
              alt="Samrat Deula"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Availability badge */}
          <div className="bg-[#E3CAA5] text-[#3E2F24] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#AD8B73] animate-pulse"></span>
            Available for work
          </div>

          <div className="rounded-full px-3 py-1 mb-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] bg-clip-text text-transparent">
              Samrat Deula
            </h1>
          </div>
          <div className="rounded-full px-3 py-2 mb-8">
            <p className="text-[#6B5847] text-lg max-w-lg mx-auto">
              Hello, There I'm a full-stack developer who loves to build
              intuitive, creative and scalable applications.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-[#AD8B73] text-[#FFFBE9] py-3 px-8 rounded-full font-semibold transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(173,139,115,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border-2 border-[#CEAB93] text-[#AD8B73] py-3 px-8 rounded-full font-semibold transition-all duration-200 hover:-translate-y-1 hover:bg-[#CEAB93] hover:text-[#3E2F24]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
