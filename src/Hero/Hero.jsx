import React from "react";
import image13 from "../assets/homeimg/image13.jpg";
import image9 from "../assets/homeimg/image9.jpg";
import image4 from "../assets/homeimg/image4.jpg";
//import image4 from "../assets/homeimg/image4.jpg";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: image4,
    description: "tyui",
  },
  {
    id: 2,
    img: image9,
    description: "jhuik",
  },
  {
    id: 3,
    img: image13,
    description: "hjj",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center dark:bg-gray-200 dark:text-white bg-white-200  duration-200 ">
      {/* background pattern*/}
      <div className="h-[700px] w-[700px] dark:bg-orange-500/20 absolute -top-1/1 right-0 rounded-3xl rotate-45 z-10"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section*/}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold  text-black"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm text-black"
                  >
                    {data.description}
                  </p>
                  <div>
                    <button className="bg-gradient-to-r from-orange-700 to-orange-400 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image content section*/}
                <div className="order-1 sm:order-2 ">
                  <div
                    data-aos:string
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto rounded-md z-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
