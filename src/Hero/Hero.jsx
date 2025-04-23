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
    title: "Where Every Print Tells a Story",
    description:
      "Bcean Media involves producing physical copies of digital or physical content such as Producing business materials, marketing materials and other commercial prints.Printing digital files directly onto paper or other materials and also creating unique prints,such as large-format prints,labels, or Packaging materials,banner, note pad, umbrella etc.",
  },
  {
    id: 2,
    img: image9,
    title: "Making Memories, One Home at a Time",
    description:
      "Bcean is a trusted real estate realtor dedicated to helping individual and families find their dream homes. With a pasion for delivering exception results and a commitment to building lasting relationships, we provide personalized real estate services that cater to the unique needs of our clients.Our expertise,local knowledge, and innovative approach ensure that every transaction is seamless and successful",
  },
  {
    id: 3,
    img: image13,
    title: "Reduce Your Energy Bills, Increase Your Saving",
    description:
      "Bcean is a leading provider of solar energy solution,partnering with GreatWall company,dedicated to helping homeowners and businesses harness the power of the sun. With a commitment to innovation,quality, and customer satisfaction. We sale,install and maintain solar panel systems that reduce energy costs and promote sustainability. Our expert team provides personalized service,ensuring a seamless experience from consultation to installation and beyond",
  },
];

const Hero = ({ handleOrderPopup }) => {
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
    <div className="relative min-h-[550px] sm:min-h-[650px] flex justify-center items-center dark:bg-white dark:text-white bg-white-200  duration-200 ">
      {/* background pattern*/}

      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section*/}
                <div className="flex flex-col justify-center gap-8  pt-8 sm:pt-0 text-center sm:text-left order-2  sm:order-1 relative  z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-6xl font-bold  text-black"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm text-black mb-3"
                  >
                    {data.description}
                  </p>
                  <div>
                    <button
                      className="bg-gradient-to-r from-orange-700 to-orange-400 hover:scale-105 duration-200 text-white py-2 px-8 rounded-full"
                      onClick={() => handleOrderPopup()}
                      data-aos="zoom-in"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
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
                      className="w-[350px] h-[300px] sm:h-[450px] sm:w-[500px] sm:scale-125  object-contain mx-auto rounded-md z-10"
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
