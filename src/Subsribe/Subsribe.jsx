import React from "react";

const Bannerimg = {
  backgroungImage: "url(${Banner})",
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
      className="mb-20 bg-gray-100 dark:bg-orange-400 text-white"
      style={Bannerimg}
    >
      <div className="contain backdrop-blur-sm py-10">
        <div>
          <h1 className="text-2xl text-white !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            type="text"
            placeholder="search"
            className="w-[300px] border-radius-10px sm:w-[200px] group-hover:w-[300px] transition-all
                duration-300 px-2 py-1 focus:outline-none focus:border-1 
text-black rounded-lg
                focus:border-primary dark:border-gray-500 dark:bg-white"
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
  className="w-full p-3 bg-amber-50"
/>;
