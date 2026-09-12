import RevealOnScroll from "../../components/RevealOnScroll";
import Project1 from "../../assets/Projects/E-Kam.png";
import Project2 from "../../assets/Projects/Team_Track.png";

const Projects = () => {
  const projects = [
    {
      img: Project2,
      title: "Team Track",
      desc: "Team Track is a modern project management web app designed to help teams organize tasks, track progress, and collaborate efficiently with a clean, user-friendly interface.",
      tech: [
        "React",
        "Node.js",
        "PostgreSQL",
        "Express.js",
        "TailwindCSS",
        "TypeScript",
      ],
      link: "https://team-track-3v5z.vercel.app/",
      gradient: "from-[#AD8B73] to-[#CEAB93]",
    },
    {
      img: Project1,
      title: "E-Kam",
      desc: "Scalable note storing project with user authentication and user based data retrieval.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      link: "https://e-kam.vercel.app/",
      gradient: "from-[#CEAB93] to-[#E3CAA5]",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-[#AD8B73] font-bold tracking-widest uppercase text-sm text-center mb-2">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-[#AD8B73]/15 bg-[#FFFBE9] hover:-translate-y-1 hover:border-[#AD8B73]/30 hover:shadow-[0_16px_40px_rgba(173,139,115,0.2)] transition-all"
              >
                <div className="rounded-xl overflow-hidden mb-4">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#AD8B73]">
                  {p.title}
                </h3>
                <p className="text-[#6B5847] mb-3">{p.desc}</p>
                <div className="flex flex-wrap">
                  {p.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-[#E3CAA5]/60 text-[#3E2F24] py-1 px-3 mx-1 my-1 rounded-full text-sm font-semibold hover:bg-[#E3CAA5] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#AD8B73] hover:text-[#96755f] transition-colors my-4 font-semibold"
                  >
                    Live Demo ➜
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
