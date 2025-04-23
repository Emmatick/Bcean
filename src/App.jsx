import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import Hero from "./Hero/Hero";
import Product from "./Products/Product";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProduct from "./TopProduct/TopProduct";
import Banner from "./Banner/Banner";
import Subsribe from "./Subsribe/Subsribe";
import Testimony from "./Testimony/Testimony";
import Footer from "./Footer/Footer";
import PopUp from "./PopUp/PopUp";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Product />
      <TopProduct handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subsribe />
      <Product />
      <Testimony />
      <Footer />
      <PopUp orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
