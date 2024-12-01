import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  }
  return (
    <footer className="text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col justify-center items-start space-y-4">
            <h1 className="text-2xl font-semibold">
              Let's work together today!
            </h1>
            <button onClick={handleClick} className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 flex items-center">
              Start Project
              <span className="ml-2">
                <FaAngleRight />
              </span>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center sm:items-start">
            <p className="text-xl font-medium mb-4">Sitemap</p>
            <ul className="space-y-2 text-center sm:text-left">
              <li>
                <a href="/" className="text-white hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-white hover:text-gray-400">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#work" className="text-white hover:text-gray-400">
                  Works
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center sm:items-end">
            <p className="text-xl font-medium mb-4">Social</p>
            <ul className="space-y-2 text-center sm:text-right">
              <li>
                <a href="" className="text-white hover:text-gray-400">
                  Github
                </a>
              </li>
              <li>
                <a href="" className="text-white hover:text-gray-400">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="" className="text-white hover:text-gray-400">
                  Twitter X
                </a>
              </li>
              <li>
                <a href="" className="text-white hover:text-gray-400">
                  Instagram
                </a>
              </li>
              <li>
                <a href="" className="text-white hover:text-gray-400">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
