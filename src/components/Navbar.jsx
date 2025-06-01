import { useState } from "react";
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
  ];

  return (
    <div className="relative">
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
    </div>
  );
}

export default Navbar;
