import { useState, useEffect } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link as ScrollLink } from "react-scroll";
import pic1 from "../assets/myphoto.png";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [hoveredMobileNav, setHoveredMobileNav] = useState(null);

  const navLinks = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Portfolio", to: "portfolio" },
    { label: "Experience", to: "experience" },
    { label: "Contact", to: "contact" },
  ];

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) setMenu(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Styles
  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#0a0020",
    boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
    zIndex: 1000,
  };

  // Container centered, no side padding here to avoid side gap on mobile fullscreen menu
  const containerStyle = {
    maxWidth: "1440px",
    margin: "0 auto",
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "24px",
    paddingRight: "24px",
  };

  const leftSectionStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  };

  const profileImgStyle = {
    height: "48px",
    width: "48px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const nameWrapperStyle = {
    lineHeight: 1,
  };

  const nameStyle = {
    color: "white",
    fontSize: "1.25rem",
    fontWeight: "700",
    fontFamily: "'Brush Script MT', cursive",
    margin: 0,
  };

  const cyanTextStyle = {
    color: "#22d3ee",
  };

  const subtitleStyle = {
    color: "white",
    fontSize: "0.75rem",
    fontFamily: "'Brush Script MT', cursive",
    margin: 0,
  };

  const desktopNavStyle = {
    display: "flex",
    gap: "40px",
  };

  const desktopNavItemStyle = {
    color: "white",
    cursor: "pointer",
    fontFamily: "'Brush Script MT', cursive",
    fontSize: "1.125rem",
    transition: "color 0.3s",
    userSelect: "none",
  };

  const mobileToggleStyle = {
    color: "white",
    cursor: "pointer",
    display: "block",
  };

  const mobileMenuStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",       // FULL width of viewport
    height: "100vh",     // FULL height of viewport
    backgroundColor: "#0a0020",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    zIndex: 2000,
    padding: 0,          // NO padding to avoid gap
    margin: 0,           // NO margin to avoid gap
    overflow: "hidden",  // avoid scroll
  };

  const mobileNavItemStyle = {
    color: "white",
    cursor: "pointer",
    fontSize: "2rem",
    fontFamily: "'Brush Script MT', cursive",
    transition: "color 0.3s",
    userSelect: "none",
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={leftSectionStyle}>
          <img src={pic1} alt="Profile" style={profileImgStyle} />
          <div style={nameWrapperStyle}>
            <h1 style={nameStyle}>
              JALEEL <span style={cyanTextStyle}>SK</span>
            </h1>
            <p style={subtitleStyle}>Web & Mobile Developer</p>
          </div>
        </div>

        {windowWidth >= 768 && (
          <ul style={desktopNavStyle}>
            {navLinks.map(({ to, label }) => (
              <li
                key={to}
                style={{
                  ...desktopNavItemStyle,
                  color: hoveredNav === to ? "#22d3ee" : "white",
                }}
                onMouseEnter={() => setHoveredNav(to)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <ScrollLink to={to} smooth duration={500} offset={-64}>
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        )}

        {windowWidth < 768 && (
          <div
            onClick={() => setMenu(!menu)}
            style={mobileToggleStyle}
            aria-label="Toggle Menu"
          >
            {menu ? <RxCross1 size={28} /> : <MdOutlineMenu size={28} />}
          </div>
        )}
      </div>

      {menu && windowWidth < 768 && (
        <ul style={mobileMenuStyle}>
          {navLinks.map(({ to, label }) => (
            <li
              key={to}
              style={{
                ...mobileNavItemStyle,
                color: hoveredMobileNav === to ? "#22d3ee" : "white",
              }}
              onMouseEnter={() => setHoveredMobileNav(to)}
              onMouseLeave={() => setHoveredMobileNav(null)}
            >
              <ScrollLink
                to={to}
                smooth
                duration={500}
                offset={-64}
                onClick={() => setMenu(false)}
              >
                {label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
