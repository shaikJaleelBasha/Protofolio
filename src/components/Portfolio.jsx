import { useState } from "react";
import airline from "../assets/airline.png";
import springBoot from "../assets/springBoot.jpg";
import reactNative from "../assets/react_native.png";

function Portfolio() {
  const [popupContent, setPopupContent] = useState(null);
  const [isAdmin] = useState(true); // Simplified for now

  // For managing hover on buttons and cards
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  const cardItem = [
    {
      id: 2,
      logo: airline,
      name: "E-commerce",
      des: "This MERN based e-commerce app.",
    },
    {
      id: 3,
      logo: springBoot,
      name: "E-commerce (Spring Boot)",
      des: "This is backend app.",
    },
    {
      id: 4,
      logo: reactNative,
      name: "Food Recipe App",
      des: "User can find the recipe they want.",
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

  // Styles
  const containerStyle = {
    maxWidth: "1440px",
    margin: "10px auto",
    padding: "0 16px",
  };

  const centerStyle = {
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "1.875rem", // text-3xl
    fontWeight: "700",
    marginBottom: "20px",
    color: "#22d3ee", // cyan-400
  };

  const subtitleStyle = {
    fontSize: "1.5rem", // text-2xl
    textDecoration: "underline",
    color: "#ec4899", // pink-500
    marginBottom: "32px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "32px",
    marginTop: "32px",
    marginBottom: "20px",
  };

  const cardStyle = (isHovered) => ({
    width: "300px",
    height: "380px",
    border: "2px solid transparent",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 10px 15px rgba(0,0,0,0.1)",
    backgroundColor: "#0f0c29",
    cursor: "pointer",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "transform 0.3s",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  });

  const imgWrapperStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const imgStyle = {
    width: "120px",
    height: "120px",
    padding: "4px",
    borderRadius: "50%",
    border: "2px solid #d4d4d8", // gray-300 border color
    objectFit: "cover",
    backgroundColor: "white",
  };

  const cardTextWrapperStyle = {
    marginTop: "16px",
    textAlign: "center",
  };

  const cardTitleStyle = {
    fontSize: "1.25rem", // text-xl
    fontWeight: "700",
    color: "#db2777", // pink-600
    marginBottom: "8px",
  };

  const cardDescriptionStyle = {
    fontSize: "0.875rem",
    padding: "0 8px",
    color: "#e5e7eb", // gray-200 for better contrast on dark bg
  };

  const buttonGroupStyle = {
    marginTop: "24px",
    display: "flex",
    justifyContent: "space-around",
  };

  const buttonBaseStyle = {
    color: "white",
    padding: "8px 16px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background-color 0.3s",
    minWidth: "100px",
  };

  const videoButtonStyle = (isHovered) => ({
    ...buttonBaseStyle,
    backgroundColor: isHovered ? "#0e7490" : "#06b6d4", // cyan-600 / cyan-500
  });

  const sourceButtonStyle = (isHovered) => ({
    ...buttonBaseStyle,
    backgroundColor: isHovered ? "#be185d" : "#db2777", // pink-600 / pink-500
  });

  const popupOverlayStyle = {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
  };

  const popupContentStyle = {
    backgroundColor: "#09032b",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 10px 15px rgba(0,0,0,0.25)",
    maxWidth: "400px",
    width: "90%",
    textAlign: "center",
  };

  const popupTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "16px",
    color: "#22d3ee",
  };

  const popupTextStyle = {
    fontSize: "1rem",
    color: "#374151",
  };

  const popupButtonStyle = (isHovered) => ({
    marginTop: "24px",
    padding: "8px 24px",
    backgroundColor: isHovered ? "#b91c1c" : "#ef4444", // red-600 / red-500
    color: "white",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background-color 0.3s",
  });

  const hrStyle = {
    borderTop: "2px solid #d1d5db", // gray-300
    margin: "24px 0",
  };

  return (
    <div style={containerStyle} name="portfolio">
      <div>
        <center>
          <h1 style={titleStyle}>Portfolio</h1>
        </center>
        <h2 style={subtitleStyle}>Featured Projects</h2>

        <div style={gridStyle}>
          {cardItem.map(({ id, logo, name, des }) => (
            <div
              key={id}
              style={cardStyle(hoveredCard === id)}
              onMouseEnter={() => setHoveredCard(id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={imgWrapperStyle}>
                <img
                  src={logo}
                  alt={`${name} project logo`}
                  style={imgStyle}
                />
              </div>
              <div style={cardTextWrapperStyle}>
                <h3 style={cardTitleStyle}>{name}</h3>
                <p style={cardDescriptionStyle}>{des}</p>
              </div>
              <div style={buttonGroupStyle}>
                <button
                  onClick={() =>
                    handleButtonClick(`Video for ${name} coming soon!`)
                  }
                  style={videoButtonStyle(
                    hoveredButton === `${id}-video`
                  )}
                  onMouseEnter={() => setHoveredButton(`${id}-video`)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Video
                </button>
                <button
                  onClick={() =>
                    handleButtonClick(`Source code for ${name} coming soon!`)
                  }
                  style={sourceButtonStyle(
                    hoveredButton === `${id}-source`
                  )}
                  onMouseEnter={() => setHoveredButton(`${id}-source`)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Source Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {popupContent && (
        <div style={popupOverlayStyle}>
          <div style={popupContentStyle}>
            <h2 style={popupTitleStyle}>Admin Access</h2>
            <p style={popupTextStyle}>{popupContent}</p>
            <button
              onClick={closePopup}
              style={popupButtonStyle(false)}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b91c1c")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ef4444")}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <hr style={hrStyle} />
    </div>
  );
}

export default Portfolio;
