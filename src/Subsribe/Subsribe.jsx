import React from "react";

const Bannerimg = {
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const Subsribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 mt-10  bg-gray-100 dark:bg-orange-400 text-white"
      style={Bannerimg}
    >
      <div className=" backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-white !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            type="text"
            placeholder="search"
            className="w-full p-3 dark:bg-white outline-amber-50 text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Subsribe;
<input
  data-aos="fade-up"
  type="text"
  placeholder="Enter your Email"
  className="w-full p-3"
/>;
