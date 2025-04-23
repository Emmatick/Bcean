import React from "react";
import Slider from "react-slick";
import user1 from "../assets/user/user1.jpg";
import user2 from "../assets/user/user2.jpg";
import user3 from "../assets/user/user3.jpg";
import user4 from "../assets/user/user4.jpg";
import user5 from "../assets/user/user5.jpg";
import user6 from "../assets/user/user6.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Eage reiciendis inventore iste ratione ex alias quis magni at mahu opeej ksl etium optio",
    img: user1,
  },
  {
    id: 2,
    name: "Emmanuel",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Eage reiciendis inventore iste ratione ex alias quis magni at consectetur adipisicing elit. Eage reiciendis inventore iste ratione ex alias quis magni at optio",
    img: user2,
  },
  {
    id: 3,
    name: "Chibuike",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Eage reiciendis inventore iste ratione ex alias quis magni at consectetur adipisicing elit. Eage reiciendis inventore iste ratione ex alias quis magni at optio",
    img: user3,
  },
  {
    id: 4,
    name: "Amaka",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Eage reiciendis inventore iste ratione ex alias quis magni at consectetur adipisicing elit. Eage reiciendis inventore iste ratione ex alias quis magni at optio",
    img: user4,
  },
  {
    id: 5,
    name: "Chidi",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Eage reiciendis inventore iste ratione ex alias quis magni at consectetur adipisicing elit. Eage reiciendis inventore iste ratione ex alias quis magni at optio",
    img: user5,
  },
  {
    id: 6,
    name: "Uche",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Eage reiciendis inventore iste ratione ex alias quis magni at consectetur adipisicing elit. Eage reiciendis inventore iste ratione ex alias quis magni at optio",
    img: user6,
  },
];

const Testimony = () => {
  var setting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className=" items-center">
        {/* header section*/}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          {/* Product Section */}
          <p
            data-aos="fade-up"
            className="text-sm text-primary  text-orange-600 font-bold"
          >
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimony
          </h1>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            minus!
          </p>
        </div>
        {/*Card*/}
        <div data-aos="zoom-in">
          <Slider {...setting}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg shadow-gray-900 py-8 px-6 mx-4 rounded-xl relative bg-white"
                >
                  <div className="mb-4 w-3xl ">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-400">{data.text}</p>
                      <h1 className="text-xl font-bold text-orange-400 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/60 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
