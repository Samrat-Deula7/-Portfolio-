import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import GithubImg from "../../assets/github.png"
import FbImg from "../../assets/facebook.png"
import InstaImg from "../../assets/instagram.png"
import LinkedinImg from "../../assets/linkedin.png"
import FollowImg from "../../assets/follow.gif"
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });



  const handleSubmit = (e) => {
    const SERVICE_ID=import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID=import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY=import.meta.env.VITE_PUBLIC_KEY;
    
    e.preventDefault();
    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY      
      )
      .then((result) => {
        alert("Message send");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch("Oops! Something went wrong. Please try again");
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-5  lg:space-x-15 ">
          <div className="px-4 w-[300px]  2xl:w-[800px] ">
            <h2 className="text-4xl md:text-4xl 2xl:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
              Get In Touch
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Name...."
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="example@gmail.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  row={5}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                  placeholder="Your Message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center items-center bg-blue-50/10 px-4 py-6 w-[300px]  2xl:w-[350px] rounded-2xl duration-200 hover:-translate-y-1">
            <h2 className="flex items-center space-x-3 text-2xl md:text-3xl   mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center">
              <span>My Contacts</span>
              <img
                src={FollowImg}
                alt="contact me"
                className="w-15 rounded-xl"
              />
            </h2>
            <a
              href="https://github.com/Samrat-Deula7"
              className="flex justify-center items-center mb-2  p-3 w-65 rounded-xl bg-blue-500/10 border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]  transition-all"
            >
              <img src={GithubImg} alt="git hub" className="w-10" />
              <span className="ml-4">Github</span>
            </a>
            <a
              href="https://www.facebook.com/samrat.deula.52"
              className="flex justify-center  items-center mb-2  p-3 w-65 rounded-xl bg-blue-500/10 border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]  transition-all"
            >
              <img src={FbImg} alt="git hub" className="w-10" />
              <span className="ml-4">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/deula.samrat/"
              className="flex justify-center items-center mb-2  p-3 w-65 rounded-xl bg-blue-500/10 border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]  transition-all"
            >
              <img src={InstaImg} alt="git hub" className="w-10" />
              <span className="ml-4">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/samrat-deula-412531369/"
              className="flex justify-center items-center mb-2  p-3 rounded-xl w-65 bg-blue-500/10 border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]  transition-all"
            >
              <img src={LinkedinImg} alt="git hub" className="w-10" />
              <span className="ml-4">Linkedin</span>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
