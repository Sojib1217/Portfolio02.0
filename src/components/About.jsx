import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      id="about"
      className="py-20 px-5 max-w-6xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Get to know more about who I am, what I do, and what skills I have
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Photo Side */}
        <motion.div
          className="relative flex justify-center"
          variants={imageVariants}
        >
          <div className="relative">
            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"
              animate={{
                rotate: -360,
                scale: [1, 0.9, 1]
              }}
              transition={{
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Main photo container */}
            <motion.div
              className="relative w-80 h-96 md:w-96 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-secondary/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/images/profile.jpg"
                alt="Sojib Hossain"
                className="w-full h-full object-cover object-center"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>

            {/* Floating skill badges */}
            <motion.div
              className="absolute -right-4 top-20 bg-white dark:bg-surface-dark px-4 py-2 rounded-full shadow-lg border border-gray-100 dark:border-gray-700"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm font-semibold text-primary">React.js</span>
            </motion.div>
            <motion.div
              className="absolute -left-4 bottom-32 bg-white dark:bg-surface-dark px-4 py-2 rounded-full shadow-lg border border-gray-100 dark:border-gray-700"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-sm font-semibold text-secondary">Node.js</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Info Side */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              I'm Sojib Hossain, a passionate MERN Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              With over 3+ years of experience in web development, I specialize in creating
              modern, scalable, and user-friendly web applications. I'm passionate about
              clean code, innovative solutions, and staying up-to-date with the latest
              technologies in the ever-evolving world of web development.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing my knowledge with the developer community.
              I believe in continuous learning and always strive to deliver exceptional
              digital experiences.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                {['JavaScript (ES6+)', 'React.js', 'Node.js', 'Express.js'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-3">
                {['MongoDB', 'Tailwind CSS', 'Git & GitHub', 'REST APIs'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: (index + 4) * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-secondary rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: (index + 4) * 0.2 }}
                    />
                    <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200 dark:border-gray-700"
            variants={itemVariants}
          >
            {[
              { number: '50+', label: 'Projects Completed', color: 'text-primary' },
              { number: '3+', label: 'Years Experience', color: 'text-secondary' },
              { number: '25+', label: 'Happy Clients', color: 'text-gray-800 dark:text-gray-200' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                variants={statsVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`text-2xl font-bold ${stat.color} mb-1`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-6"
            variants={itemVariants}
          >
            <motion.button
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                const contactElement = document.getElementById('contact');
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors text-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;