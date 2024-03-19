import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Section from "../Common/Section";
import contact from "./assets/contact.jpg";

const Contact = () => {
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
      link: "https://twitter.com",
      icon: <FaTwitter />,
    },
  ];

  const [showForm, setShowForm] = useState(false);

  return (
    <Section
      title="Contact"
      subtitle="If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us using the contact form below. Simply fill in your name, email address, subject, and message, and we'll get back to you as soon as possible."
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div className="">
          <img src={contact} alt="" className="w-32 h-32" />
        </div>
        <div>
          <p className="max-w-x5 md:max-w-lg font-extralight">
            I'm open to discussing potential projects, sharing insights, or
            exploring new opportunities. Let's start a conversation and see how
            we can work together to bring your ideas to life!
          </p>
        </div>
        {/* form */}
        {showForm && (
          <div className="p-8 text-left w-full flex justify-center items-center">
            <form action="https://getform.io/f/zazokpxb" method="POST">
              <div className="gap-4 w-full">
                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 font-extralight">
                    name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 font-extralight">
                    email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 font-extralight">
                    message
                  </label>
                  <textarea
                    name="message"
                    rows="10"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="my-8 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-md uppercase tracking-wider cursor-pointer hover:scale-110 duration-200">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        )}
        {/* button to toggle form */}
        <div className="flex items-center justify-center">
          <button
            className="my-8 bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-md uppercase tracking-wider cursor-pointer hover:scale-110 duration-200"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Hide Form" : "Show Form"}
          </button>
        </div>
        <div className="flex w-full items-center justify-evenly text-3xl">
          {SOCIAL.map(({ id, link, icon }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="duration-200 ease-in-out hover:text-teal-600"
              key={id}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
