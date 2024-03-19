import React from "react";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import Section from "../Common/Section";
import cine from "./assets/cine.jpg";
import tindog from "./assets/dog-img.jpg";
import newsletter from "./assets/newsletter.jpg";

const Assignments = () => {
  const projects = [
    {
      id: 1,
      title: "News Letter",
      image: newsletter,
      github: "https://github.com/kanizshapla/NewsLetter-Signup",
      demo: "https://tasty-frog-housecoat.cyclic.app",
    },
    {
      id: 2,
      title: "Tin Dog",
      image: tindog,
      github: "https://github.com/kanizshapla/Tindog",
      demo: "https://kanizshapla.github.io/Tindog/",
    },

    {
      id: 3,
      title: "Cine Critique",
      image: cine,
      github: "https://github.com/kanizshapla/cinecritique-web-app",
      demo: "https://cinecritique-web-app-inky.vercel.app/",
    },
  ];

  return (
    <Section
      title="Portfolio"
      subtitle=" These beginner-friendly projects not only
      provided valuable learning experiences but also laid the foundation for my
      growth as a software engineer."
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, title, image, github, demo }) => (
          <div
            key={id}
            className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
          >
            <img src={image} alt={title} className="w-2/3" />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>{title}</h2>
              <a
                className="text-2xl cursor-pointer duration-150 hover:scale-110"
                href={github}
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="text-2xl cursor-pointer duration-150 hover:scale-110"
                href={demo}
                rel="noopener noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Assignments;
