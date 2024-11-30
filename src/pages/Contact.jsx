import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-20"
    >
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Contact me for collaboration
        </h1>
        <p className="text-lg text-white mb-6">
          Feel free to reach out to me for any collaboration opportunities or
          inquiries. I look forward to hearing from you!
        </p>
        <div className="flex justify-center md:justify-start space-x-6">
          <a
            href="https://www.facebook.com/prabal.bhandary.5"
            target="_blank"
            className="text-3xl text-white hover:text-blue-600"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/prabalbhandary"
            target="_blank"
            className="text-3xl text-white hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/prabal-bhandary-421811279/"
            target="_blank"
            className="text-3xl text-white hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/prabalb44/"
            target="_blank"
            className="text-3xl text-white hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/3 mt-8 md:mt-0 flex flex-col justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              placeholder="Enter your name"
              className="w-full max-w-xs p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Enter your email"
              className="w-full max-w-xs p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              className="w-full max-w-xs p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={() => navigate("/")}
            type="submit"
            className="w-64 py-3 text-white font-semibold rounded-md bg-blue-500 hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
