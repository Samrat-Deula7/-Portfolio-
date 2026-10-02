import RevealOnScroll from "../../components/RevealOnScroll";
import ReactImg from "../../assets/react.svg";
import TailwindCSSImg from "../../assets/tailwindcss.png";
import NodeImg from "../../assets/node.png";
import ExpressImg from "../../assets/express.png";
import MongoImg from "../../assets/mongo.png";
import SQL from "../../assets/SQL_SERVER.png";
import PostSQL from "../../assets/PostgreSql.png";
import GitImg from "../../assets/git.png";
import AwsImg from "../../assets/aws.png";
import Time from "../../assets/time.gif";
import TsURL from "../../assets/typescript.svg";
import JsURL from "../../assets/js.png";
import Csharp from "../../assets/csharp.png";
import dotnet from "../../assets/.net.svg";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import PragyaLogo from "../../assets/pragya.png";
import NestJS from "../../assets/nestjs.png";
import Python from "../../assets/Python.png";
import { useEffect, useState } from "react";

import AboutPopTimeLine from "./AboutPopTimeLine";

const SkillCard = ({ img, alt, name, percent, scrolled, imgClass }) => (
  <div className="relative flex flex-col items-center cursor-pointer gap-y-1 mb-6 w-[140px] h-[200px] justify-center border border-[#AD8B73]/15 bg-[#FFFBE9] px-4 py-6 hover:border-[#AD8B73]/40 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(173,139,115,0.15)] transition-all rounded-2xl">
    <div className="h-18">
      <img src={img} alt={alt} className={`absolute ${imgClass}`} />
    </div>
    <h4 className="text-md text-[#3E2F24] font-semibold">{name}</h4>
    <div className="w-[100px] h-[6px] md:h-[7px] bg-[#E3CAA5]/50 rounded overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r from-[#CEAB93] to-[#AD8B73] rounded transition-all duration-700 ${
          scrolled ? "" : "w-0"
        }`}
        style={scrolled ? { width: percent + "%" } : {}}
      ></div>
    </div>
    <h4 className="duration-700 text-sm text-[#AD8B73] font-bold">
      {scrolled ? percent + "%" : "0%"}
    </h4>
  </div>
);

const About = ({ aboutPop, setAboutPop }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    {
      img: ReactImg,
      alt: "react",
      name: "React",
      percent: 80,
      imgClass: "top-6 left-7 w-20 h-20",
    },
    {
      img: TailwindCSSImg,
      alt: "tailwind",
      name: "Tailwind",
      percent: 70,
      imgClass: "top-12 left-7 w-20 h-10",
    },
    {
      img: NodeImg,
      alt: "node js",
      name: "Node JS",
      percent: 80,
      imgClass: "top-6 left-7 w-20 h-20",
    },
    {
      img: ExpressImg,
      alt: "express",
      name: "Express",
      percent: 80,
      imgClass: "top-6 left-0 w-48 h-20",
    },
    {
      img: MongoImg,
      alt: "mongo db",
      name: "MongoDB",
      percent: 80,
      imgClass: "top-8 left-0 w-50 h-20",
    },
    {
      img: SQL,
      alt: "SQL server",
      name: "SQL SERVER",
      percent: 60,
      imgClass: "top-6 left-7 w-20 h-20",
    },
    {
      img: PostSQL,
      alt: "PostgreSQL",
      name: "PostgreSQL",
      percent: 60,
      imgClass: "top-6 left-7 w-20 h-20",
    },
    {
      img: GitImg,
      alt: "Git",
      name: "Git",
      percent: 90,
      imgClass: "top-6 left-7 w-20 h-20",
    },
    {
      img: AwsImg,
      alt: "AWS",
      name: "AWS",
      percent: 10,
      imgClass: "top-6 left-2 w-30 h-20 rounded-2xl",
    },
    {
      img: Python,
      alt: "Python",
      name: "Python",
      percent: 60,
      imgClass: "top-6 left-6.5 w-20 h-20 rounded-2xl",
    },
    {
      img: TsURL,
      alt: "TypeScript",
      name: "TypeScript",
      percent: 90,
      imgClass: "top-6 left-2 w-30 h-20 rounded-2xl",
    },
    {
      img: JsURL,
      alt: "JavaScript",
      name: "JavaScript",
      percent: 90,
      imgClass: "top-6 left-7 w-20 h-20 rounded-2xl",
    },

    {
      img: html,
      alt: "HTML",
      name: "HTML",
      percent: 90,
      imgClass: "top-6 left-7 w-20 h-20 rounded-2xl",
    },
    {
      img: css,
      alt: "CSS",
      name: "CSS",
      percent: 90,
      imgClass: "top-6 left-7 w-20 h-20 rounded-2xl",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <AboutPopTimeLine aboutPop={aboutPop} setAboutPop={setAboutPop} />
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 md:w-3xl lg:w-5xl xl:w-7xl">
          <p className="text-[#AD8B73] font-bold tracking-widest uppercase text-sm text-center mb-2">
            About Me
          </p>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] bg-clip-text text-transparent text-center">
            Skills &amp; Journey
          </h2>

          {/* Skills grid */}
          <div className="rounded-2xl p-8 border border-[#AD8B73]/15 bg-[#FFFBE9] hover:border-[#AD8B73]/30 transition-all">
            <p className="text-[#6B5847] mb-6 text-xl font-bold">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>
            <div className="flex flex-wrap items-center justify-around place-items-center">
              {skills.map((s, i) => (
                <SkillCard key={i} {...s} scrolled={scrolled} />
              ))}
            </div>
          </div>

          {/* Mobile / tablet: Journey + Work Experience */}
          <div className="md:hidden grid grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-[#AD8B73]/15 bg-[#FFFBE9] hover:-translate-y-1 hover:border-[#AD8B73]/30 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[#AD8B73] xl:text-3xl">
                Journey
              </h3>
              <ul className="list-disc list-inside text-[#6B5847] space-y-2">
                <li>
                  <strong className="text-[#3E2F24]">
                    BSC.IT in Computer Science
                  </strong>{" "}
                  — APU University (2025-2028).
                </li>
                <li>
                  Relevant Coursework: Data Structures, Full web dev, DevOps ...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-[#AD8B73]/15 bg-[#FFFBE9] hover:-translate-y-1 hover:border-[#AD8B73]/30 transition-all">
              <h3 className="text-xl font-bold mb-4 text-[#3E2F24]">
                👩🏻‍💻 Work Experience
              </h3>
              <div className="space-y-4 text-[#6B5847]">
                <div>
                  <h4 className="font-bold text-2xl text-[#AD8B73]">
                    Backend Internship at:
                  </h4>
                  <br />
                  <p>
                    I am currently working as a Backend Intern at Pragya
                    Technologies, where I focus on designing and building
                    backend APIs. My work involves leveraging PostgreSQL for
                    database management and ensuring efficient, scalable backend
                    solutions. This internship is helping me strengthen my
                    skills in backend development, API design, and database
                    optimization while contributing to real-world projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop timeline */}
          <div className="hidden md:flex">
            <div className="w-full flex flex-col justify-center items-center py-10">
              <h3 className="text-xl font-bold mb-4 text-[#AD8B73] xl:text-3xl">
                Journey
              </h3>

              <div className="w-[70%] flex items-start">
                {/* Timeline block 1 */}
                <div
                  className="timeline-block relative w-[300px] h-[150px] px-3 py-2 mb-7 rounded-2xl cursor-pointer text-[#3E2F24] transform duration-100 hover:-translate-y-2 mr-3 border border-[#AD8B73]/20 shadow-[0_8px_20px_rgba(173,139,115,0.15)]"
                  onClick={() =>
                    setAboutPop({ ...aboutPop, type: "2025-2028", isOn: true })
                  }
                >
                  <strong className="text-[#AD8B73] font-extrabold text-[17px]">
                    BSC.IT in Computer Science:
                    <br />
                    <span className="text-[14px] text-[#6B5847]">
                      Completed the course in APU with <br />
                      Relevant Coursework: Data Structures, Full stack dev,
                      DevOps ...
                    </span>
                  </strong>{" "}
                  -APU University
                  <div className="w-0 h-0 absolute left-6 -bottom-6 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-[#E3CAA5]"></div>
                </div>

                {/* Timeline block 2 */}
                <div
                  className="timeline-block relative w-[300px] h-[150px] px-3 py-2 mb-7 rounded-2xl cursor-pointer text-[#3E2F24] transform duration-100 hover:-translate-y-2 mr-3 border border-[#AD8B73]/20 shadow-[0_8px_20px_rgba(173,139,115,0.15)]"
                  onClick={() =>
                    setAboutPop({ ...aboutPop, type: "2026", isOn: true })
                  }
                >
                  <strong className="text-[#AD8B73] font-extrabold text-[17px]">
                    Backend Internship at:
                    <span className="text-[14px] text-[#6B5847]">
                      <div className="flex items-center justify-start">
                        <img
                          src={PragyaLogo}
                          alt="Pragya Logo"
                          className="w-13"
                        />
                        Pragya Technologies.
                      </div>
                      <span className="text-[14px] text-[#6B5847]">
                        I am currently working as a Backend Intern at Pragya ...
                      </span>
                    </span>
                  </strong>
                  <div className="w-0 h-0 absolute left-6 -bottom-6 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-[#E3CAA5]"></div>
                </div>
                <p className="mt-[140px] ml-[80px] font-extrabold text-[#AD8B73] hover:text-[#96755f] cursor-pointer hover:text-[20px] transform duration-100 hover:-translate-y-2">
                  2028 +
                </p>
              </div>

              {/* Timeline line */}
              <div className="bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] w-[70%] h-1 transform duration-100 hover:-translate-y-2 hover:border-0 cursor-pointer rounded-full"></div>

              <div className="w-[80%] flex items-end">
                <p className="mb-[140px] mr-[220px] ml-[30px] font-extrabold text-[#AD8B73] hover:text-[#96755f] cursor-pointer hover:text-[20px] transform duration-100 hover:translate-y-2">
                  (2025-2028)
                </p>
                <p className="mb-[140px] mr-[220px] ml-[30px] font-extrabold text-[#AD8B73] hover:text-[#96755f] cursor-pointer hover:text-[20px] transform duration-100 hover:translate-y-2">
                  (2026)
                </p>
                <div className="flex items-center justify-center pointer-events-none cursor-not-allowed relative -right-25 w-[300px] h-[150px] mt-7 rounded-2xl timeline-block border border-[#AD8B73]/20 text-[#3E2F24] transform duration-100 hover:translate-y-2 shadow-[0_8px_20px_rgba(173,139,115,0.15)]">
                  <div className="relative w-60 h-20 bg-[#AD8B73] font-bold text-[#FFFBE9] rounded-2xl transition-transform animate-bounce px-4 py-4">
                    Currently completing my bachelor's degree{" "}
                    <span className="font-extrabold">!!</span>{" "}
                    <img
                      src={Time}
                      alt="time_icon"
                      className="absolute left-40 -bottom-10 w-[80px] h-[80px] rounded-full"
                    />
                  </div>
                  <div className="w-0 h-0 absolute -top-6 left-6 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[15px] border-b-[#AD8B73]"></div>
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
