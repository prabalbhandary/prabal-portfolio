import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, title: 'Mak Movies Frontend', image: '/images/project-1.png', description: 'This is a movie app frontend build with Next JS.', link: 'https://movie-frontend-gray-phi.vercel.app/', link2: '#' },
  { id: 2, title: 'Mak Movies Backend', image: '/images/project-2.png', description: 'This is a movie app backend build with Next JS.', link: 'https://movie-frontend-gray-phi.vercel.app/', link2: '#' },
  { id: 3, title: 'Chat App', image: '/images/project-3.png', description: 'This is a chat app build with MERN stack.', link: 'https://chat-me-9912.onrender.com/', link2: '#' },
  { id: 4, title: 'Book Store App', image: '/images/project-4.png', description: 'This is a book store app build with MERN stack.', link: 'https://bookstore-client-two.vercel.app/', link2: '#' },
  { id: 5, title: 'Employee Management System', image: '/images/project-5.png', description: 'This is an Employee Management Syste App build with MERN stack.', link: 'https://employee-management-system-8n86.onrender.com/', link2: '#' },
  { id: 6, title: 'Institute Management System', image: '/images/project-6.png', description: 'This is an Institute Management System App build with MERN stack.', link: 'https://institute-management-system.onrender.com/', link2: '#' },
  { id: 7, title: 'JobPortal', image: '/images/project-7.png', description: 'This is a Job Portal build with MERN stack.', link: 'https://job-portal-v94q.onrender.com/', link2: '#' },
  { id: 8, title: 'Spotify', image: '/images/project-8.png', description: 'This is a Music Player build with MERN stack.', link: 'https://spotify2-ea47.onrender.com/', link2: '#' },
  { id: 9, title: 'Trauma Registry', image: '/images/project-9.png', description: 'This is a Trauma Registry build with React for Frontend & Laravel for Backend.', link: 'https://registry-service.netlify.app/', link2: '#' },
  { id: 10, title: 'Virtual Assistant', image: '/images/project-10.png', description: 'This is a Virtual Assistant build with MERN stack.', link: 'https://virtual-assistant-hjkq.onrender.com/', link2: '#' },
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
              <button className="mt-4 flex space-x-8">
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
  >
    View Project
  </a>
  <a
    href={project.link2}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
  >
    Buy Source Code
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
