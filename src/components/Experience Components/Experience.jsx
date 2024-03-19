import Section from "../Common/Section";
import aurora from "./assets/Aurora-Consulting.jpg";
import odyssey from "./assets/odyssey.jpg";

function Experience() {
  const experiences = [
    {
      id: 1,
      image: odyssey,
      company: "Odyssey Apps Ltd",
      jobTitle: "IT Management Executive",
      responsibilities:
        "Worked as IT Management Executive at Odyssey Apps Limited. (2019-2020)",
    },
    {
      id: 2,
      image: aurora,
      company: "Aurora Consulting",
      jobTitle: "Software Engineer",
      responsibilities:
        "Worked as Software Engineer at Aurora Consulting from November 3, 2022 to January 2023",
    },
  ];

  return (
    <>
      <Section
        title="Experience"
        subtitle="As a software engineer, I've cultivated a passion for crafting innovative digital solutions. My portfolio highlights my proficiency in diverse programming languages and frameworks, showcasing projects that demonstrate strategic problem-solving and attention to detail. Through collaboration and continuous learning, I aim to make a significant impact in the ever-evolving landscape of technology"
      ></Section>
      <div className="grid gap-10 lg:grid-cols-2">
        {experiences.map(
          ({ id, image, company, jobTitle, responsibilities }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110 "
            >
              <img
                src={image}
                alt={company}
                className="w-36 h-36 md:w-44 md:h-44 object-contain rounded-xl"
              ></img>
              <h3 className="mt-5 text-2xl">{company}</h3>
              <h5 className="mt-2 text-base">{jobTitle}</h5>
              <p className="mt-2 text-base text-center font-light dark:text-gray-500">
                {responsibilities}
              </p>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default Experience;
