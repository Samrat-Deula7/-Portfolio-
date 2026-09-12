import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import GithubImg from "../../assets/github.png";
import FbImg from "../../assets/facebook.png";
import InstaImg from "../../assets/instagram.png";
import LinkedinImg from "../../assets/linkedin.png";
import FollowImg from "../../assets/follow.gif";
import YT from "../../assets/YT.png";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again"));
  };

  const socials = [
    {
      href: "https://github.com/Samrat-Deula7",
      img: GithubImg,
      label: "GitHub",
    },
    {
      href: "https://www.youtube.com/@SamratDeula-c4x3o",
      img: YT,
      label: "YouTube",
    },
    {
      href: "https://www.facebook.com/samrat.deula.52",
      img: FbImg,
      label: "Facebook",
    },
    {
      href: "https://www.instagram.com/deula.samrat/",
      img: InstaImg,
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/in/samrat-deula-412531369/",
      img: LinkedinImg,
      label: "LinkedIn",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-5 lg:space-x-15">
          {/* Form */}
          <div className="px-4 w-[300px] 2xl:w-[800px]">
            <p className="text-[#AD8B73] font-bold tracking-widest uppercase text-sm text-center mb-2">
              Let's Talk
            </p>
            <h2 className="text-4xl md:text-4xl 2xl:text-5xl font-bold mb-8 bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] bg-clip-text text-transparent text-center">
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
                  className="warm-input w-full bg-[#FFFBE9] border border-[#AD8B73]/20 rounded-xl px-4 py-3 text-[#3E2F24] placeholder-[#6B5847]/50 transition"
                  placeholder="Your name..."
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
                  className="warm-input w-full bg-[#FFFBE9] border border-[#AD8B73]/20 rounded-xl px-4 py-3 text-[#3E2F24] placeholder-[#6B5847]/50 transition"
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
                  rows={5}
                  className="warm-input w-full bg-[#FFFBE9] border border-[#AD8B73]/20 rounded-xl px-4 py-3 text-[#3E2F24] placeholder-[#6B5847]/50 transition resize-vertical"
                  placeholder="Your message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#AD8B73] text-[#FFFBE9] py-3 px-6 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(173,139,115,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Socials */}
          <div className="flex flex-col justify-center items-center bg-[#E3CAA5]/30 px-4 py-6 w-[300px] 2xl:w-[350px] rounded-2xl duration-200 hover:-translate-y-1 border border-[#AD8B73]/15">
            <h2 className="flex items-center space-x-3 text-2xl md:text-3xl mb-8 bg-gradient-to-r from-[#AD8B73] to-[#CEAB93] bg-clip-text text-transparent text-center font-bold">
              <span>My Contacts</span>
              <img
                src={FollowImg}
                alt="contact me"
                className="w-15 rounded-xl"
              />
            </h2>
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center mb-2 p-3 w-65 rounded-xl bg-[#FFFBE9] border border-[#AD8B73]/20 hover:-translate-y-1 hover:border-[#AD8B73]/40 hover:shadow-[0_8px_20px_rgba(173,139,115,0.2)] transition-all"
              >
                <img src={s.img} alt={s.label} className="w-10" />
                <span className="ml-4 text-[#3E2F24] font-semibold">
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
