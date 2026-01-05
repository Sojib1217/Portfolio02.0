import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Scholar-Stream",
      description: "A full-featured online Scholarship application platform, payment integration, and admin dashboard.",
      image: "https://i.ibb.co.com/m5Hfwj6w/Screenshot-2025-12-31-153105.png",
      technologies: ["React", "MongoDB", "Express", "Stripe"],
      liveUrl: "https://scholar-stream-a890b.web.app/",
      githubUrl: "https://github.com/Sojib1217/Scholar-Stream-Client.git",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Omega Learn",
      description: "An Online Platform for students to learn programming languages with interactive lessons and quizzes.",
      image: "https://i.ibb.co.com/BKnpmQqV/Screenshot-2025-12-31-153745.png",
      technologies: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://resplendent-kheer-60608a.netlify.app/",
      githubUrl: "https://github.com/Sojib1217/Omega-Learn-Client-Side.git",
      category: "Frontend"
    },
    {
      id: 3,
      title: "GreenNest",
      description: "An Online indoor Plant Selling platform and Home decoration with plants.",
      image: "https://i.ibb.co.com/ch82HxM7/Screenshot-2026-01-05-185619.png",
      technologies: ["React", "API", "Framer-Motion", "CSS5"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    }
  ];

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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
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
      id="projects" 
      className="py-20 px-5 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and experience in web development
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group relative bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-soft dark:shadow-soft-dark border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                whileHover={{ scale: 1.1 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Project Links */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.a
                  href={project.liveUrl}
                  className="bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white p-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="material-icons-round text-sm">launch</span>
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  className="bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white p-2 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="material-icons-round text-sm">code</span>
                </motion.a>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: techIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.a
                  href={project.liveUrl}
                  className="flex-1 bg-primary text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  className="flex-1 border border-primary text-primary text-center py-2 px-4 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Code
                </motion.a>
              </div>
            </div>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>

      {/* View All Projects Button */}
      <motion.div 
        className="text-center mt-12"
        variants={itemVariants}
      >
        <motion.button
          className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Projects
          <span className="material-icons-round text-sm ml-2 inline-block">arrow_forward</span>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Projects;