import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Work from "./pages/Work";
import { FaArrowUp } from "react-icons/fa6";

const App = () => {
  return (
    <>
      <Header />
      <div className="mt-1">
        <Home />
        <About />
        <Work />
        <Reviews />
        <Contact />
      </div>
      <Footer />
      <div className="flex justify-end items-end">
        <FaArrowUp
          className="fixed bottom-4 right-4 text-3xl cursor-pointer p-3 rounded-full border-4 border-white text-white bg-black flex items-center justify-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      </div>
    </>
  );
};

export default App;
