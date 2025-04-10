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

const App = () => {
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
    <div className="App">
      <Navbar />
      <Hero />
      <Product />
      <TopProduct />
      <Banner />
      <Subsribe />
    </div>
  );
};

export default App;
