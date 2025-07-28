import { useState } from "react";

function Portfolio() {
  const [popupContent, setPopupContent] = useState(null);
  const [isAdmin] = useState(true); // Simplified for now

  const cardItem = [
    // {
    //   id: 1,
    //   logo: "/chat.png",
    //   name: "Django Chat Application",
    // },
    {
      id: 2,
      logo: "/airline.png",
      name: "E-commerce ",
      des: "this mern based ecom app"
    },
    {
      id: 3,
      logo: "/springBoot.jpg",
      name: "E-commerce (Spring Boot)",
      des:"this is backend app"
    },
    {
      id: 4,
      logo:"/react_native.png",
      name: "Food Receipe App",
      des:"this is food receipe app where user can find the recipe he wants"
    }
    // {
    //   id: 4,
    //   logo: "/node.png",
    //   name: "Movie Recommendation (Node.js)",
    // },
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
      name="portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <center>
          <h1 className="text-3xl font-bold mb-5 text-cyan-400">Portfolio</h1>
        </center>
        <h2 className="text-2xl underline text-pink-500">Featured Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8 my-5">
          {cardItem.map(({ id, logo, name, des }) => (
            <div
              key={id}
              className="md:w-[300px] md:h-[380px] border-[2px] p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 bg-[#0f0c29]"
            >
              <div className="flex justify-center">
                <img
                  src={logo}
                  alt={name}
                  className="w-[120px] h-[120px] p-1 rounded-full border-[2px] object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-pink-600 mb-2">{name}</h3>
                <p className="text-sm px-2">
                 {des}
                </p>
              </div>
              <div className="mt-6 flex justify-around">
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-4 text-cyan-600">
              Admin Access
            </h2>
            <p className="text-gray-700">{popupContent}</p>
            <button
              onClick={closePopup}
              className="mt-6 bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <hr className="border-t-2 border-gray-300 my-6" />
    </div>
  );
}

export default Portfolio;
