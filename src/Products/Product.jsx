import React from "react";
import Img1 from "../assets/homeimg/image1.jpg";
import Img9 from "../assets/homeimg/image9.jpg";
import Img8 from "../assets/homeimg/image8.jpg";
import Img7 from "../assets/homeimg/image7.jpg";
import Img6 from "../assets/homeimg/image6.jpg";
import { FaStar } from "react-icons/fa";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "women ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "200",
  },
  {
    id: 2,
    img: Img9,
    title: "women western",
    rating: 4.5,
    color: "brown",
    aosDelay: "500",
  },
  {
    id: 3,
    img: Img8,
    title: "Goggles",
    rating: 4.7,
    color: "pink",
    aosDelay: "109",
  },
  {
    id: 4,
    img: Img7,
    title: "printed T-shirt",
    rating: 4 - 6,
    color: "blue",
    aosDelay: "500",
  },
  {
    id: 4,
    img: Img6,
    title: "Banner",
    rating: 5.0,
    color: "grey",
    aosDelay: "700",
  },
];

const Product = () => {
  return (
    <div className="mt-18 mb-12  bg-white-400">
      <div className="  pb-8 ">
        {/* Header Section */}
        <div className="text-center mb-18 max-w-[600px] mx-auto">
          {/* Product Section */}
          <p
            data-aos="fade-up"
            className="text-sm text-primary  text-orange-400 font-bold"
          >
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold">
            Product
          </h1>
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            minus!
          </p>
        </div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center mx-15 gap-5 mb-18">
            {/* card section*/}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3np "
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[250px] w-[250px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold mt-5">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-600" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/*View Button*/}
          <div className="flex items-center justify-center">
            <button className="text-center mt-5 cursor-pointer bg-orange-400 text-white font-bold py-2 px-8 rounded-md ">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
