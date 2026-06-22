import { Title } from "@radix-ui/react-toast";
import TechspireBanner from "../../assets/TechspireBanner.jpg";
import PragyaBanner from "../../assets/PragyaBanner.png";
import { useEffect, useState } from "react";

const AboutPopTimeLine = ({ aboutPop, setAboutPop }) => {
  const timeLineData = [
    {
      title: "BSC.IT in Computer Science:",
      body: "At present, I am pursuing a Bachelor of Science in Information Technology (BSCIT), which is further enhancing my knowledge of backend systems, databases, and emerging web technologies. This ongoing program is allowing me to deepen my expertise in software development while gaining exposure to collaborative projects and industry‑oriented practices. By combining my completed coursework with my current studies, I am steadily advancing toward becoming a well‑rounded IT professional with strong capabilities in both theoretical and applied aspects of computing.",
      image: TechspireBanner,
    },
    {
      title: "Backend Internship at:",
      body: "I am currently working as a Backend Intern at Pragya Technologies, where I focus on designing and building backend APIs. My work involves leveraging PostgreSQL for database management and ensuring efficient, scalable backend solutions. This internship is helping me strengthen my skills in backend development, API design, and database optimization while contributing to real-world projects.",
      image: PragyaBanner,
    },
  ];

  let [Title, setTitle] = useState("");
  let [Body, setBody] = useState("");
  let [Image, setImage] = useState(null);
  let [underCompletion, setUnderCompletion] = useState(false);

  useEffect(() => {
    if (aboutPop.type === "2025-2028") {
      setTitle(timeLineData[0].title);
      setBody(timeLineData[0].body);
      setImage(timeLineData[0].image);
    } else if (aboutPop.type === "2026") {
      setTitle(timeLineData[1].title);
      setBody(timeLineData[1].body);
      setImage(timeLineData[1].image);
    }
  }, [aboutPop.type]);

  return (
    <div
      className={`fixed top-0 left-0 min-w-screen  bg-transparent z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        aboutPop.isOn
          ? "h-screen opacity-100 pointer-events-auto "
          : "h-0 opacity-0 pointer-events-none scale-0"
      }`}
    >
      <div
        className={`relative w-[700px] h-auto text-center bg-[#10172a] rounded-2xl py-3 px-2 ${
          aboutPop.isOn ? "animate-popup" : ""
        }`}
      >
        <button
          onClick={() => {
            setAboutPop({ ...aboutPop,type:"", isOn: false });
            setTitle("");
            setBody("");
            setImage(null);
          }}
          className="absolute top-4 right-6 text-xl lg:text-3xl  focus:outline-none cursor-pointer text-white"
          aria-label="Close button"
        >
          &times;
        </button>
        <div className="text-white">{aboutPop.type}</div>
        <div className="text-white">
          <h1 className="font-bold text-2xl text-purple-500">{Title}</h1>
          <br />
          <img src={Image} alt="" />
          <br />
          <p className="text-gray-600">{Body}</p>

          {/* if underCompletion is true */}
        </div>
      </div>
    </div>
  );
};

export default AboutPopTimeLine;
