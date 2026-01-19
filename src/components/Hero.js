import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.main
      id="home"
      className="pt-32 pb-12 px-5 max-w-7xl mx-auto md:px-8 md:flex md:items-center md:gap-16 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* LEFT CONTENT */}
      <div className="relative z-10 md:w-1/2 flex flex-col justify-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          Hey There,<br />
          I'm <span className="text-secondary">Sojib</span>
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-semibold text-gray-500 mt-4"
          variants={itemVariants}
        >
          MERN Stack Developer
        </motion.h2>

        <motion.p
          className="text-gray-600 dark:text-gray-300 mt-6 max-w-lg"
          variants={itemVariants}
        >
          Passionate web developer specializing in the MERN stack. I build
          scalable and high-performance web applications.
        </motion.p>

        <motion.div
          className="flex gap-6 mt-8"
          variants={itemVariants}
        >
          <motion.button
            className="bg-darkaccent text-white px-8 py-3 rounded-full font-semibold shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>

          <motion.a
            href="mailto:sojibhasan1888@gmail.com"
            className="border-b border-gray-800 font-medium"
            whileHover={{ x: 5 }}
          >
            sojibhasan1888@gmail.com
          </motion.a>
        </motion.div>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="relative mt-16 md:mt-0 md:w-1/2 flex justify-center"
        variants={imageVariants}
      >
        <motion.div
          className="w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-darkaccent overflow-hidden shadow-2xl"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://i.ibb.co.com/NgTdTqgM/IMG-20220304-003139-1.jpg"
            alt="Sojib Hasan"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.main>
  );
};

export default Hero;
