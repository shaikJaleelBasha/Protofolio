import { ReactTyped } from "react-typed";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaDiscord } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";

import { SiGit,SiSpring } from "react-icons/si";

import { FaReact } from "react-icons/fa";

import pic1 from "../assets/myphoto.png";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 md:ml-10"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl"> Welcome to My Feed </span>
            <div className="flex space-x-1 md:text-4xl">
              <h1>HELLO IAM, </h1>
              <span>
                <ReactTyped
                  style={{ color: "#ff007f", fontWeight: "bold" }}
                  strings={[ "Full-Stack Web Developer", "React-Native Developer"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </span>
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              <h1>
                Highly motivated and adaptable professional with a combined
                skillset in web development and team leadership.
              </h1>

              As a highly skilled Full Stack Developer, I bring a diverse set of
              expertise across the MERN stack, Python Full Stack development,
              UX/UI design, and React-Native Developer. My robust background allows me to
              create dynamic, user-friendly applications and leverage
              data-driven insights to drive strategic decisions. Here is a brief
              overview of my core competencies:

              Aspiring Software Developer with expertise in full-stack development, scalable web applications, and React Native development
using JavaScript. Proficient in Java, React.js, and MongoDB. Passionate about building high-performance applications and
solving complex problems, with proven success in optimizing application speed and enhancing user experience.

            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col md:flex-row justify-between space-y-6 items-center">
              <div className="space-y-2">
                <h1 className="font-bold text-2xl text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.facebook.com/shaik.jaleel.39589149/"
                      target="_blank"
                    >
                      <FaFacebook className="text-2xl hover:scale-110 duration-200 rouded-full border-2pxcursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/shaik-jaleel-basha-232597286/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl hover:scale-110 duration-200 rouded-full border-2px cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/Jaleel_2200032076" target="_blank">
                      <FaTelegram className="text-2xl hover:scale-110 duration-200 rouded-full border-2px cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/9390902587" target="_blank">
                      <IoLogoWhatsapp className="text-2xl hover:scale-110 duration-200 rouded-full border-2px cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href=" https://discord.com/users/1110545363372359690"
                      target="_blank"
                    >
                      <FaDiscord className="text-2xl hover:scale-110 duration-200 rouded-full border-2px cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-2xl">Currently Working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rouded-full border-2px" />
                  <SiSpring className="text-xl md:text-3xl hover:scale-110 duration-200 rouded-full border-2px" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rouded-full border-2px" />
                  <SiGit className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-2" />

                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center md:ml-48 mt-10 order-1">
            <img
              className="rounded-full md:w-[400px] md:h-[400px] "
              src={pic1}
              alt=""
            />
          </div>
        </div>
      </div>
      <hr style={{ backgroundColor: "#ff007f" }} />
    </>
  );
}

export default Home;
