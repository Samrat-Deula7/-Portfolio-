import { useEffect } from "react"
import { useState } from "react"

export const StarBackground = ({ darkmode  }) => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
 
//  useEffect(() => {
//    const starElement = document.getElementById("star");
//    const meteorElement = document.getElementById("meteor");

//    if (darkmode) {
//      starElement.classList.add("bg-red-500");
//      meteorElement.classList.remove("bg-red-500");
//    } else {
//     meteorElement.classList.add("bg-blue-500");
//     starElement.classList.remove("bg-blue-500");
//    }
//  }, [darkmode]);


  useEffect(() => {
    generateStars();
    generateMeteors();

    //    const starElement = document.getElementById("star");
    //    const meteorElement = document.getElementById("meteor");

    //    if (!starElement || !meteorElement) return;
    window.bg="white"
       if (!darkmode) {
         window.bg = "blue-500";
         window.wid = "60px";
       } else {
         window.wid = "60px";
                }
  }, [darkmode]);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };
  const generateMeteors = () => {
    const numberOfMeteors = 100;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full   animate-pulse duration-[4000ms] ease-in-out ${
            darkmode ? "custom-glow" : "dark-glow"
          } ${darkmode ? "bg-white" : "bg-" + bg}   w-${wid}`}
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className={`absolute  rounded-full  animate-pulse  animate-meteor ${
            darkmode ? "custom-glow" : "dark-glow"
          } ${darkmode ? "bg-white" : "bg-" + bg}   w-${wid}`}
          style={{
            width: meteor.size + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};