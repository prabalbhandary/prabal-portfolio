import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [isActive, setIsActive] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleActive = (index) => {
    setIsActive(index);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="py-4 fixed top-0 left-0 right-0 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <a href="/">
            <img src="/images/logo.svg" alt="Logo" className="w-12 h-12" />
          </a>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
        <nav className="hidden lg:flex flex-1">
          <ul className="flex justify-center space-x-8 text-white w-full">
            <li>
              <a
                href="/"
                className={
                  isActive === 0 ? "bg-white text-black px-4 py-2 rounded" : ""
                }
                onClick={() => handleActive(0)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={
                  isActive === 1 ? "bg-white text-black px-4 py-2 rounded" : ""
                }
                onClick={() => handleActive(1)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#work"
                className={
                  isActive === 2 ? "bg-white text-black px-4 py-2 rounded" : ""
                }
                onClick={() => handleActive(2)}
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#reviews"
                className={
                  isActive === 3 ? "bg-white text-black px-4 py-2 rounded" : ""
                }
                onClick={() => handleActive(3)}
              >
                Reviews
              </a>
            </li>
          </ul>
        </nav>
        <div className="ml-auto hidden lg:block">
          <a href="#contact" className="bg-white text-black px-4 py-2 rounded">
            Contact
          </a>
        </div>
      </div>
      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } p-4 absolute top-16 left-0 w-full`}
      >
        <ul className="space-y-4 text-white">
          <li>
            <a
              href="/"
              className={
                isActive === 0 ? "bg-white text-black px-4 py-2 rounded" : ""
              }
              onClick={() => {
                handleActive(0);
                setIsMobileMenuOpen(false);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={
                isActive === 1 ? "bg-white text-black px-4 py-2 rounded" : ""
              }
              onClick={() => {
                handleActive(1);
                setIsMobileMenuOpen(false);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work"
              className={
                isActive === 2 ? "bg-white text-black px-4 py-2 rounded" : ""
              }
              onClick={() => {
                handleActive(2);
                setIsMobileMenuOpen(false);
              }}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#reviews"
              className={
                isActive === 3 ? "bg-white text-black px-4 py-2 rounded" : ""
              }
              onClick={() => {
                handleActive(3);
                setIsMobileMenuOpen(false);
              }}
            >
              Reviews
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-white text-black px-4 py-2 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
