import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "Samrat Deula";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(()=>{
            onComplete();
        },1000)
      }
    }, 100);
    return () => clearInterval(interval);
  },[onComplete]);

  return (
    <div className="fixed inset-0 max-w-screen z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4  font-mono font-bold text-3xl md:text-5xl lg:text-7xl  bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent ">
        {text} <span className="animate-blink ml-1 text-white">|</span>
      </div>
      <div className="w-[250px] h-[2px] md:w-[600px] md:h-[4px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;