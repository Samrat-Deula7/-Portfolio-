import RevealOnScroll from "../../components/RevealOnScroll";
import ReactImg from "../../assets/react.svg";
import TailwindCSSImg from "../../assets/tailwindcss.png";
import NodeImg from "../../assets/node.png";
import ExpressImg from "../../assets/express.png";
import MongoImg from "../../assets/mongo.png";
import Time from "../../assets/time.gif";
const About = () => {
  // const frontendSkills = ["React", "TailwindCSS"];
  // const backendSkills = ["Node.js", "Express.js", "MongoDB"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 md:w-3xl lg:w-5xl xl:w-7xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
            About me
          </h2>

          <div className="place-items-center rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6 text-xl font-bold ">
              Passionate developer with expertise in building scalable web
              application and creating innovative solutions.
            </p>
            <div className="grid place-items-center grid-cols-1 md:grid-cols-2   gap-6">
              <div className="w-80 md:2xl bg-blue-500/10 px-2 py-3 border rounded-xl  border-blue-500 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex  justify-around items-center">
                  {/* These are the frontend skills */}
                  <div className="w-20  flex flex-col justify-center items-center min-h-10 bg-blue-500/10 px-2 py-2  border rounded-xl  border-blue-500 hover:-translate-y-1 transition-all">
                    <img src={ReactImg} alt="react" className="w-10  h-10" />
                    <strong className="text-sm">React</strong>
                  </div>
                  <div className="w-20 flex flex-col justify-center items-center min-h-10 bg-blue-500/10 px-2 py-2  border rounded-xl  border-blue-500 hover:-translate-y-1 transition-all">
                    <img
                      src={TailwindCSSImg}
                      alt="tailwind"
                      className="w-20 h-10"
                    />
                    <strong className="text-sm">Tailwind</strong>
                  </div>
                </div>
              </div>
              <div className="w-80 md:2xl bg-blue-500/10 px-2 py-3 border rounded-xl border-blue-500 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex  justify-around items-center">
                  {/* These are the backend skills */}
                  <div className="w-20  flex flex-col justify-center items-center min-h-10 bg-blue-500/10 px-2 py-2  border rounded-xl  border-blue-500 hover:-translate-y-1 transition-all">
                    <img src={NodeImg} alt="react" className="w-10  h-10" />
                    <strong className="text-sm">Node</strong>
                  </div>
                  <div className="w-20 flex flex-col justify-center items-center min-h-10 bg-blue-500/10 px-2 py-2  border rounded-xl  border-blue-500 hover:-translate-y-1 transition-all">
                    <img
                      src={ExpressImg}
                      alt="tailwind"
                      className="w-20 h-10"
                    />
                    <strong className="text-sm">Express</strong>
                  </div>
                  <div className="w-20 flex flex-col justify-center items-center min-h-10 bg-blue-500/10 px-2 py-2  border rounded-xl  border-blue-500 hover:-translate-y-1 transition-all">
                    <img src={MongoImg} alt="tailwind" className="w-20 h-10" />
                    <strong className="text-sm">MongoDB</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* This only shows in small and middle size screen */}
          <div className="md:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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

          {/* This shows in large size screen */}
          <div className="hidden md:flex">
            <div className="w-full flex flex-col justify-center items-center py-10 ">
              <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
              <div className="w-[70%] flex items-start ">
                <div className="relative w-[300px] h-[150px] px-3 py-2 mb-7 rounded-2xl  bg-[linear-gradient(to_bottom_right,_#f0f4ff,_#2563eb)] cursor-pointer   text-black transform duration-100 hover:-translate-y-2">
                  <strong className="text-purple-900 font-extrabold text-[17px]">
                    BSC.IT in Computer Science:
                    <br />
                    <span className="text-[14px] text-black ">
                      Completed the course in APU with <br />
                      Relevant Coursework: Data Structures, Full web dev, DevOps
                      ...
                    </span>
                  </strong>{" "}
                  -APU University
                  <div
                    class="w-0 h-0 absolute left-6 -bottom-6  border-l-[10px] border-l-transparent  border-r-[10px] border-r-transparent border-t-[15px] border-t-[#2563eb] "
                  ></div>
                </div>
                <p className="mt-[140px] ml-[80px] font-extrabold text-purple-900 hover:text-blue-500 cursor-pointer hover:text-[20px]  transform duration-100 hover:-translate-y-2">
                  2028 +
                </p>
              </div>
              {/* this is line */}
              <div className="bg-gradient-to-r  from-blue-500 to-purple-600   w-[70%] h-1 transform duration-100 hover:-translate-y-2 hover:border-0 cursor-pointer"></div>
              <div className="w-[70%] flex items-end">
                <p className="mb-[140px] mr-[220px] ml-[30px] font-extrabold text-purple-900 hover:text-blue-500 cursor-pointer hover:text-[20px] transform duration-100 hover:translate-y-2">
                  (2025-2028)
                </p>
                <div className="flex items-center justify-center relative w-[300px] h-[150px] mt-7 rounded-2xl bg-[linear-gradient(to_bottom_right,_#f0f4ff,_#2563eb)] cursor-pointer   text-black transform duration-100 hover:translate-y-2">
                  <div className="relative w-60 h-20 bg-blue-500 font-bold text-purple-900 rounded-2xl transition-transform animate-bounce px-4 py-4">
                    Currently completing my bachelor's degree{" "}
                    <span className="font-extrabold">!!</span>{" "}
                    <img
                      src={Time}
                      alt="time_icon"
                      className="absolute left-40 -bottom-10 w-[80px] h-[80px] rounded-full"
                    />
                  </div>
                  <div
                    class="w-0 h-0 absolute -top-6 left-6 border-l-[10px] border-l-transparent  border-r-[10px] border-r-transparent  border-b-[15px] border-b-blue-500"
                  ></div>
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
