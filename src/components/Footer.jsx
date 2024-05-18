import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <>
      <hr />
      <div>
        <footer className="py-12">
          <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <div className="flex flex-col items-center justify-center">
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/shaik-jaleel-basha-232597286/"
                  target="_blank"
                >
                  <FaLinkedin className="text-2xl hover:scale-110 duration-200 rouded-full border-2px cursor-pointer" />
                </a>
                <a
                  href="https://www.facebook.com/shaik.jaleel.39589149/"
                  target="_blank"
                >
                  <FaFacebook className="text-2xl hover:scale-110 duration-200 rouded-full border-2pxcursor-pointer" />
                </a>
                <a href="https://t.me/Jaleel_2200032076" target="_blank">
                  <FaTelegram className="text-2xl hover:scale-110 duration-200 rouded-full border-2px cursor-pointer" />
                </a>
                <a href="https://wa.me/9390902587" target="_blank">
                  <IoLogoWhatsapp className="text-2xl hover:scale-110 duration-200 rouded-full border-2px cursor-pointer" />
                </a>
              </div>
              <div className="mt-8 border-t border-grey-700 pt-8 flex flex-col items-center">
                <p className="text-sm">
                  &copy; Your Company. All rights reserved.
                </p>
                <p className="text-sm"> Supportive Partner ❤️ Jaleel</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
