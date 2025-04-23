import React from "react";
import image13 from "../assets/homeimg/image13.jpg";
import image9 from "../assets/homeimg/image9.jpg";
//import image4 from "../assets/homeimg/image4.jpg";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: image13,
    title: "Solar Battery",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiushod tempor ut labore et dolore magne aliqua.",
  },

  {
    id: 2,
    img: image9,
    title: "Solar Battery",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiushod tempor ut labore et dolore magne aliqua.",
  },

  {
    id: 3,
    img: image13,
    title: "Solar Battery",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiushod tempor ut labore et dolore magne aliqua.",
  },
];
const TopProduct = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="">
        {/*Header section */}
        <div className="text-center mb-24">
          <p
            data-aos="fade-up"
            className="text-sm text-primary text-orange-600 font-bold"
          >
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            minus!
          </p>
        </div>
        {/*Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-10 gap-12 md:gap-0 place-items-center mb-24">
          {ProductsData.map((data) => (
            <div
              className="
            rounded-2xl bg-white bg-white-800 hover:bg-black/80 hover:bg-orange
            hover:text-white relative shadow-xl duration-400 group z-10 max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[160px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* Details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-4">
                  {data.description}
                </p>
                <button
                  className="bg-orange-300 hover:scale-105 duration-300 text-black py-1 px-4 rounded-full mt-4 font-weight-800 group-hover:bg-white group-hover:text-orange "
                  onClick={() => handleOrderPopup()}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
