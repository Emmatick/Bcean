import React from "react";
import Banner from "../assets/homeimg/image5.jpg";
import FooterLogo from "../assets/homeimg/image5.jpg";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
//mport { FaFacebook, FaInstagram, FaLocationArrow } from "react-icons/fa6";
//import { FaLinkedin, FaMobileAlt } from "react-icons/fa";
import footer1 from "../assets/user/footer1.jpg";

const BannerImg = {
  backgroundImage: `url(${footer1})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Printing",
    link: "/#priniting",
  },
  {
    title: "Solar",
    link: "/#solar",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white  overflow-hidden">
      <div className="">
        <div className="grid md:grid-cols-3 pb-44 pt-10">
          {/*company details */}
          <div className="py-8 px-4 ml-10">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={FooterLogo} alt="" className="max-w-[50px]" />
              Bcean
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              repellendus alias eveniet a, laboriosam saepe autem quaerat.
              Dolorum, ipsa sapiente.
            </p>
          </div>
          {/*footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-orange-500 hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-orange-500 hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/*social link */}
            <div>
              <div className="flex items-center gap-5 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>61,Apata Lagos</p>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <FaMobileAlt />
                  <p>+234 8145030803</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
