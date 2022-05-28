import React from "react";
import { ToastContainer } from "react-toastify";
import bannarImg from "../../../src/img/cycle2.png";
import Contact from "../Contact/Contact";
import NewCycle from "../NewCycle/NewCycle";
import Products from "../Products/Products";
import Footer from "../Sheard/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="relative  lg:h-[85vh] md:h-[93vh] h-[85vh] overflow-hidden">
        {/* Bannar section */}
        <div className="w-full h-[80vh] md:h-full mx-auto  absolute left-0 top-0 to-transparent bg-opacity-60 bg-blue-50  text-2xl text-black backdrop-blur-lg ">
          <div className="container p-5 mt-20 max-w-7xl mx-auto block lg:flex items-center justify-between">
            <div className="text-xontainer">
              <h1 className="text-4xl md:text-6xl font-serif font-semibold text-blue-500  leading-12   md:mx-36 lg:mx-0">
                "We have the best platform to manage a store"
              </h1>
              <button className="mt-5 mb-5 md:mt-16 border-blue-400 border-2 text-blue-400 py-1 px-5 rounded  text-xl hover:bg-blue-500 hover:text-white">
                View More
              </button>
            </div>
            <img
              className="lg:w-[700px] md:w-[500px] md:mx-auto md:mt-8"
              src={bannarImg}
              alt="Bannar Image"
            />
          </div>
        </div>
        {/* Bannar section */}
      </div>
      <Products></Products>
      <NewCycle></NewCycle>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
