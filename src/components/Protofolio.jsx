import { useState } from "react";
import chat from "../../public/chat.png";
import airline from "../../public/airline.png";
import express from "../../public/express.png";
import java from "../../public/java.png";
import node from "../../public/node.png";

function Portfolio() {
  const [popupContent, setPopupContent] = useState(null);
  const [isAdmin, setIsAdmin] = useState(true); // Assume admin check for simplicity

  const cardItem = [
    {
      id: 1,
      logo: chat,
      name: "Django Chat Application",
    },
    {
      id: 2,
      logo: airline,
      name: "MERN Airline Booking",
    },
    {
      id: 3,
      logo: express,
      name: "Hotel Booking",
    },
    {
      id: 4,
      logo: java,
      name: "E-commerce",
    },
    {
      id: 5,
      logo: node,
      name: "Movie Recommendation",
    },
  ];

  const handleButtonClick = (content) => {
    if (isAdmin) {
      setPopupContent(content);
    } else {
      alert("Access restricted to admin only");
    }
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <div
      name="Protofolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <center>
          <h1 className="text-3xl font-bold mb-5" style={{ color: "#22d3ee" }}>
            Portfolio
          </h1>
        </center>
        <h2 className="text-2xl underline" style={{ color: "#ff007f" }}>
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="md:w[300px] md:h-[300px] border-[2px] p-1 rounded-lg shadow-lg cursor-pointer hover:scale-110 duration-300"
            >
              <img
                src={logo}
                alt={name}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
              />
              <div className="mt-4">
                <h3
                  className="text-xl font-bold mb-2 px-2"
                  style={{ color: "#ff007f" }}
                >
                  {name}
                </h3>
                <p className="mt-2 px-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleButtonClick("Video Content")}
                  className="bg-cyan-500 text-white py-2 px-4 rounded hover:bg-cyan-600 transition duration-300"
                >
                  Video
                </button>
                <button
                  onClick={() => handleButtonClick("Source Code Content")}
                  className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-300"
                >
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {popupContent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className=" p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Admin Access</h2>
            <p>{popupContent}</p>
            <button
              onClick={closePopup}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <br />
      <hr className="border-t-2 border-gray-300 my-6" />
    </div>
  );
}

export default Portfolio;
