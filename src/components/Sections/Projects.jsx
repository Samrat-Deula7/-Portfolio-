import RevealOnScroll from "../../components/RevealOnScroll";
import TiltCard from "../../components/TiltCard";
import Project1 from "../../assets/Projects/E-Kam.png";
import Project2 from "../../assets/Projects/Team_Track.png";
import Project3 from "../../assets/Projects/ChillByHour.png";
import Project3Client from "../../assets/Projects/ChillByHourClient.png";
import Project3Video from "../../assets/Projects/ChillByHourAppVideo.mp4";

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
    {
      img: Project3,
      images: [
        { src: Project3, alt: "Chill By Hour admin dashboard" },
        { src: Project3Client, alt: "Chill By Hour client website" },
      ],
      video: Project3Video,
      wide: true,
      title: "Chill By Hour",
      desc:
        "Chill by Hour is a booking platform for private-room lounges (rooms rented by the hour think karaoke/hangout spaces). Customers pick a room, see live hourly availability, book and pay online (via eSewa checkout or manual transfer with screenshot verification), then get a confirmation email with a code that doubles as a key to order food and message staff from their phone during their booking window. It started as a single venue (Chill Ghar, in Bhaktapur) but is now built as a small multi-tenant SaaS: one shared backend and one shared admin dashboard run bookings, menu, pricing, customers and reports for multiple venues, each with its own public website with a super-admin layer on top for onboarding new venues and managing billing/plans. Use the following credentials to interact with the project Email: " +
        "\n" +
        " owner@demolounge.example" +
        "\n" +
        " Password: ownerLounge2026!",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "PostgreSQL",
        "Drizzle ORM",
        "Tailwind CSS",
        "Zod",
      ],
      link: "https://chillbyhour.com/",
      gradient: "from-[#CEAB93] to-[#E3CAA5]",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <RevealOnScroll>
          <p className="text-[#AD8B73] font-bold tracking-widest uppercase text-sm text-center mb-2">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#AD8B73] via-[#CEAB93] to-[#AD8B73] bg-clip-text text-transparent text-center animate-gradient-text">
            Featured Projects
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <RevealOnScroll
              key={i}
              delay={i * 150}
              className={p.wide ? "md:col-span-2" : ""}
            >
              <TiltCard className="glass-strong gradient-border p-6 rounded-2xl hover:shadow-[0_24px_60px_rgba(173,139,115,0.3)]">
                {p.wide ? (
                  /* Wide card: two screenshots stacked + phone video */
                  <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 mb-4">
                    <div className="flex flex-col gap-4">
                      {p.images.map((im, k) => (
                        <div
                          key={k}
                          className="relative rounded-xl overflow-hidden group"
                        >
                          <img
                            src={im.src}
                            alt={im.alt}
                            className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-t ${p.gradient} opacity-0 group-hover:opacity-25 transition-opacity duration-500`}
                          ></div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center items-center">
                      <video
                        src={p.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        className="rounded-xl w-full max-w-[260px] sm:w-[220px] lg:w-[250px] h-auto shadow-lg"
                      />
                    </div>
                  </div>
                ) : (
                  /* Screenshot with zoom + gradient overlay on hover */
                  <div className="relative rounded-xl overflow-hidden mb-4 group">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${p.gradient} opacity-0 group-hover:opacity-25 transition-opacity duration-500`}
                    ></div>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] bg-clip-text text-transparent">
                  {p.title}
                </h3>
                <p className="text-[#6B5847] mb-3">{p.desc}</p>

                <div className="flex flex-wrap">
                  {p.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="glass text-[#3E2F24] py-1 px-3 mx-1 my-1 rounded-full text-xs font-semibold transition-all hover:-translate-y-0.5"
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
                    className="group inline-flex items-center gap-1 text-[#AD8B73] hover:text-[#96755f] transition-colors my-4 font-semibold"
                  >
                    Live Demo
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
                      ➜
                    </span>
                  </a>
                </div>
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
