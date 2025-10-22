import RevealOnScroll from "../../components/RevealOnScroll";
import Pic from "../../assets/pic.png"

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center place-items-center z-10 px-4">
          <div className="w-43 h-43 lg:w-83 lg:h-83 md:w-53 md:h-53 rounded-full bg-amber-600 mb-20">
            <div className="w-full h-full flex justify-center items-center ">
              <img
                src={Pic}
                alt="User"
                className="w-40 h-40 lg:w-80 lg:h-80 md:w-50 md:h-50  bg-cover bg-center rounded-full overflow-clip"
              />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ">
            Samrat Deula
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            Hello, There I'm an full-stack developer who loves to build
            intuative , creative and scalable applications.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 py-3 px-6 rounded font-medium tracking-all duration-200 text-blue-500 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
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
