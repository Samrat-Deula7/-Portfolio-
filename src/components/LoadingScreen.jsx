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
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 max-w-screen z-50 bg-[#FFFBE9] text-[#3E2F24] flex flex-col items-center justify-center">
      <div className="mb-4 font-mono font-bold text-3xl md:text-5xl lg:text-7xl bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] bg-clip-text text-transparent">
        {text} <span className="animate-blink ml-1 text-[#AD8B73]">|</span>
      </div>
      <div className="w-[250px] h-[2px] md:w-[600px] md:h-[4px] bg-[#E3CAA5] rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-[#AD8B73] shadow-[0_0_15px_#AD8B73] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
