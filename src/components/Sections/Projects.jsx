import RevealOnScroll from "../../components/RevealOnScroll";
import Project1 from "../../assets/Projects/E-Kam.png"
import Porject2 from "../../assets/Projects/Team_Track.png"

const Projects = () => {
  return (
    <section
      id="projects"
      className=" min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 ">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          {/* Projects are below */}

          <div className="grid  grid-cols-1 md:grid-cols-2 gap-6">
            {/* {Project 2} */}
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]  transition-all">
              <div>
                <img src={Porject2} alt="Project1" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#3b82f6]">
                Team Track
              </h3>
              <p className="text-gray-400 mb-3">
                Team Track is a modern project management web app designed to
                help teams organize tasks, track progress, and collaborate
                efficiently with a clean, user‑friendly interface.
              </p>
              <div className="flex flex-wrap">
                {[
                  "React",
                  "Node.js",
                  "Postgresql",
                  "Express.js",
                  "TailwindCSS",
                  "TypeScript",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 mx-1 my-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]   transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                {/* Need to put link here */}
                <a
                  href="https://team-track-3v5z.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Live Demo ➜
                </a>
              </div>
            </div>

            {/* {Project 1} */}
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]  transition-all">
              <div>
                <img src={Project1} alt="Project1" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#3b82f6]">E-Kam</h3>
              <p className="text-gray-400 mb-3">
                Scalable note storing project with user authentication and user
                based data retrival
              </p>
              <div className="flex flex-wrap">
                {["React", "Node.js", "MongoDB", "Express.js"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 mx-1 my-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)]   transition-all"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              <div className="flex justify-between items-center">
                {/* Need to put link here */}
                <a
                  href="https://e-kam.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Live Demo ➜
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
