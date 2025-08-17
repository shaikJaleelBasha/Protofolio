// src/components/Experience.jsx

import javascript from "../assets/javascript.png";
import css from "../assets/css.jpg";
import html from "../assets/html.png";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";
import mongodb from "../assets/mongodb.jpg";
import python from "../assets/python.webp";

function Experience() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: java, name: "Java" },
    { id: 5, logo: mysql, name: "MySQL" },
    { id: 6, logo: mongodb, name: "MongoDB" },
    { id: 7, logo: python, name: "Python" },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <center>
          <h1 className="text-3xl font-bold mb-5" style={{ color: "#22d3ee" }}>
            Experience
          </h1>
        </center>
        <p className="text-2xl" style={{ color: "#ff007f" }}>
          I am proficient in the below technologies
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-8 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center border-2 p-1 rounded-lg cursor-pointer hover:scale-110 duration-300"
            >
              <img
                src={logo}
                alt={name}
                className="w-[120px] p-1 rounded-full border-2"
              />
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2 px-2" style={{ color: "#ff007f" }}>
                  {name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
