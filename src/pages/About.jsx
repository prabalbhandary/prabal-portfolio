import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 px-8 flex flex-col md:flex-row items-center justify-between min-h-screen w-full">
      <div className="flex flex-col items-start justify-center text-left w-full md:w-full space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-white max-w-full"
        >
          About Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-12 w-full"
        >
          <p className="text-lg text-white max-w-full">
            Welcome! I'm Prabal Bhandary, a passionate web developer with a knack for crafting visually stunning and user-friendly websites. My expertise lies in creating responsive and visually appealing web applications that deliver exceptional user experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building dynamic and interactive interfaces that engage users and leave a lasting impression. Let's collaborate and bring your vision to life!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-between items-center w-full"
        >
          <div className="text-center mb-6 w-full sm:w-1/3">
            <h1 className="text-4xl font-bold text-white">45+</h1>
            <p className="text-lg text-gray-400">Projects Completed</p>
          </div>
          <div className="text-center mb-6 w-full sm:w-1/3">
            <h1 className="text-4xl font-bold text-white">1+</h1>
            <p className="text-lg text-gray-400">Years Experience</p>
          </div>
          <div className="w-full sm:w-1/3 h-32 sm:h-32">
            <motion.img
              src="/images/logo.svg"
              alt=""
              className="w-full h-full object-contain mx-auto"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, type: 'spring' }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mb-12 w-full"
        >
          <h1 className="text-3xl font-bold text-white mb-4">Essential Tools I use</h1>
          <p className="text-lg text-gray-400">Discover the powerful tools I use to bring your web projects to life.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {[
            { src: 'images/html.svg', title: 'HTML', description: 'For giving structure' },
            { src: '/images/css3.svg', title: 'CSS 3', description: 'For styling' },
            { src: '/images/javascript.svg', title: 'JavaScript', description: 'For interactivity' },
            { src: '/images/react.svg', title: 'React', description: 'For building user interfaces' },
            { src: '/images/nodejs.svg', title: 'Node.js', description: 'For server-side development' },
            { src: '/images/expressjs.svg', title: 'Express', description: 'For building APIs' },
            { src: '/images/mongodb.svg', title: 'MongoDB', description: 'For storing data' },
            { src: '/images/tailwindcss.svg', title: 'Tailwind CSS', description: 'For styling' },
          ].map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 + 0.2 * index }}
              className="text-center w-full"
            >
              <img 
                src={tool.src} 
                alt={tool.title} 
                className={`mx-auto mb-4 ${tool.title === 'HTML' ? 'w-24' : 'w-32'}`}
              />
              <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
              <p className="text-gray-400">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
