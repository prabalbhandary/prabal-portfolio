import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Mak Movies Frontend', image: '/images/project-1.png', description: 'This is a movie app frontend build with Next JS.', link: 'https://movie-frontend-gray-phi.vercel.app/' },
  { id: 2, title: 'Mak Movies Backend', image: '/images/project-2.png', description: 'This is a movie app backend build with Next JS.', link: 'https://movie-frontend-gray-phi.vercel.app/' },
  { id: 3, title: 'Chat App', image: '/images/project-3.png', description: 'This is a chat app build with MERN stack.', link: 'https://chat-me-9912.onrender.com/' },
  { id: 4, title: 'Book Store App', image: '/images/project-4.png', description: 'This is a book store app build with MERN stack.', link: 'https://bookstore-client-two.vercel.app/' },
];

const Work = () => {
  return (
    <section id="work" className="py-16">
      <h1 className="text-4xl font-bold text-center text-white mb-12">My Portfolio Highlights</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: project.id * 0.1 }}
            whileHover={{ translateY: -10 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              <p className="text-white mt-2">{project.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
