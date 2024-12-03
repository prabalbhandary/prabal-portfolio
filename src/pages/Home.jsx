import React from "react";
import { IoMdDownload, IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const Home = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 px-8 flex flex-col md:flex-row items-center justify-between min-h-screen">
      <div className="flex flex-col items-start justify-center text-left w-full md:w-1/2 space-y-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center mb-4"
        >
          <img
            src="/images/me.png"
            alt="Avatar"
            className="w-14 h-14 rounded-full mr-4 shadow-lg bg-gradient-to-t from-gray-600 via-transparent to-transparent"
          />
          <span className="bg-green-500 w-3 h-3 rounded-full mr-4"></span>
          <p className="text-sm font-semibold text-white">Available for work</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold text-white max-w-lg"
        >
          Building Scalable Modern Websites for the Future
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-lg text-gray-400 max-w-lg"
        >
          I, Prabal Bhandary, am passionate about crafting responsive,
          user-friendly websites that stand the test of time. Let's work
          together and build something amazing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex space-x-4"
        >
          <a
            href="/cv.pdf"
            download="CV.pdf"
            className="flex items-center bg-blue-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <IoMdDownload className="mr-3" />
            Download CV
          </a>

          <button
            onClick={handleScrollDown}
            className="flex items-center bg-gray-800 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <IoIosArrowDown className="mr-3" />
            Scroll Down
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="w-full md:w-1/2 mt-12 md:mt-0"
      >
        <div className="relative">
          <img
            src="/images/me.png"
            alt="Hero Banner"
            className="w-3/5 md:w-2/5 h-auto mx-auto rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-600 via-transparent to-transparent opacity-50"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
