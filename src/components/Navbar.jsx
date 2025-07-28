import { useState } from "react";
<<<<<<< HEAD
import pic from "../../public/photo.avif";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      item: "Home",
    },
    {
      id: 2,
      item: "About",
    },
    {
      id: 3,
      item: "Protofolio",
    },
    {
      id: 4,
      item: "Experience",
    },
    {
      id: 5,
      item: "Contact",
    },
=======
import { MdOutlineMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const navLinks = [
    { label: "Home", to: "home" },
    { label: "Education", to: "education" },
    { label: "Projects", to: "projects" },
    { label: "Experience", to: "experience" },
    { label: "Contact", to: "contact" },
>>>>>>> 16f971b ( all files updated)
  ];

  return (
    <div className="relative">
<<<<<<< HEAD
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center h-18">
          <div className="flex space-x-2 items-center">
            <img
              src={pic}
              alt=""
              className="h-12 w-12 rounded-full space-y-3"
            />
            <h1 className="text-xl cursor-pointer">
              JALEEL
              <span className="text-cyan-400 text-2xl"> SK</span>
              <p className="text-sm">Web&Mobile Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-10 cursor-pointer">
              {navItems.map(({ id, item }) => (
                <li className="hover:scale-105 duration-200 text-xl" key={id}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <RxCross1 size={24} /> : <MdOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* mobile navbar */}
        {menu && (
          <div>
            <ul className="md:hidden flex flex-col h-screen items-center justify-center cursor-pointer  space-y-4">
              {navItems.map(({ id, item }) => (
                <li key={id} className="hover:scale-105 duration-200 text-2xl">
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={item}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="mt-16">
        {" "}
        {/* Adjust the margin top to avoid overlapping */}
        {/* Content below the Navbar */}
      </div>
=======
      {/* Navbar Container */}
      <div className="w-full px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-[#0f0c29] text-white">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/photo.avif" alt="Profile" className="h-12 w-12 rounded-full" />
            <div>
              <h1 className="text-xl">
                JALEEL<span className="text-cyan-400 text-2xl"> SK</span>
              </h1>
              <p className="text-sm">Web & Mobile Developer</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <li key={link.to} className="text-xl capitalize cursor-pointer hover:text-cyan-400">
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
            {menu ? <RxCross1 size={24} className="text-white" /> : <MdOutlineMenu size={24} className="text-white" />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <ul className="md:hidden flex flex-col h-screen items-center justify-center bg-[#0f0c29] text-white fixed top-0 left-0 right-0 z-40 space-y-6">
            {navLinks.map((link) => (
              <li key={link.to} className="text-2xl capitalize cursor-pointer">
                <ScrollLink
                  onClick={() => setMenu(false)}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Offset for fixed navbar */}
      <div className="mt-16" />
>>>>>>> 16f971b ( all files updated)
    </div>
  );
}

export default Navbar;
