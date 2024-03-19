import React from "react";
import { FaArrowDown, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import Quotes from "../Quote/Quote";
import avatar from "./assets/avater.jpg";
const Hero = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://facebook.com",
      icon: <FaFacebook />,
    },
    {
      id: 2,
      link: "https://linkedin.com",
      icon: <FaLinkedin />,
    },
    {
      id: 3,
      link: "https://github.com",
      icon: <FaGithub />,
    },
  ];

  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 60) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-teal-700 font-medium uppercase font-bold">
        Kaniz Fatema
      </h2>
      <h3 className="py-3 text-2xl">Software Engineer</h3>
      <p className="max-w-xl font-light text-gray-500">
        Hello <span className="animate-pulse text-4xl">👋</span>I am a
        passionate and dedicated web developer, creating exceptional websites
        and web applications.
      </p>
      {/* social icons */}
      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:1/3">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-teal-600"
          >
            {icon}
          </a>
        ))}
      </div>
      <div>
        <img
          src={avatar}
          className="w-60 h-60 md:w-72 md:h-72 object-cover object-top rounded-xl bg-gradient-to-b from-rose-600"
        ></img>
        <a
          href="./assets/Kaniz Fatema Resume.pdf"
          download={true}
          className="flex items-center justify-center mt-10 bg-gradient-to-r from-teal-600 to-blue-200 text-white py-2 rounded-lg"
        >
          Resume
        </a>
      </div>

      {/* arrow down animation */}
      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div>
      <Quotes />
    </section>
  );
};
export default Hero;
