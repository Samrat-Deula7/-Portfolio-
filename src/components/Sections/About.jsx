import RevealOnScroll from "../../components/RevealOnScroll";
import ReactImg from "../../assets/react.svg"

const About = () => {
  // const frontendSkills = ["React", "TailwindCSS"];
  // const backendSkills = ["Node.js", "Express.js", "MongoDB"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center "
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 md:w-3xl lg:w-7xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            About me
          </h2>

          <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              application and creating innovative solutions.
            </p>
            <div className="grid place-items-center grid-cols-1 md:grid-cols-2   gap-6">
              {/* Frontend skill displayed
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]  hover:-translate-y-1 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

               Backend skills displayed 
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]  hover:-translate-y-1 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div> */}

              <div className="w-80 md:2xl bg-blue-500/10 px-2 py-3 border rounded-xl  border-blue-500 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div>
                  <div className=" bg-blue-500/10 px-2 py-2  border rounded-xl  border-blue-500 hover:-translate-y-1 transition-all">
                    <img src={ReactImg} alt="" />
                    <strong>React</strong>
                  </div>
                </div>
              </div>
              <div className="w-80 md:2xl bg-blue-500/10 px-2 border rounded-xl border-blue-500 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>BSC.IT in Computer Science </strong> -APU University
                  (2025-2028).
                </li>
                <li>
                  Relevant Coursework: Data Structures, Full web dev, DevOps ...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">👩🏻‍💻 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    software Engineer at xyz company{" "}
                  </h4>
                  <p>😅 Haven't started working</p>
                </div>
                <div>
                  <h4 className="font-semibold">Intern at xyz company </h4>
                  <p>😅 Haven't started working</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
