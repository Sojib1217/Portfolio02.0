import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // SVG Icon Components (keeping the same as before)
  const ReactIcon = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
    </svg>
  );

  const NodeIcon = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46.85 0 1.31-.52 1.31-1.36v-8.1c0-.06-.05-.11-.11-.11H7.24c-.06 0-.11.05-.11.11v8.1c0 .44-.46.85-1.23.85-.19 0-.41-.05-.67-.15l-1.9-1.09c-.19-.11-.3-.3-.3-.52V6.41c0-.21.11-.41.3-.52l7.44-4.3c.19-.11.41-.11.6 0l7.44 4.3c.19.11.3.3.3.52v8.58c0 .21-.11.41-.3.52l-7.44 4.3c-.19.11-.41.11-.6 0l-1.89-1.09c-.13-.08-.29-.08-.39 0-.72.4-.86.4-1.92.85-.11.05-.29.13-.29.28 0 .09.08.18.2.24l2.49 1.43c.27.16.57.24.88.24s.61-.08.88-.24l7.44-4.3c.48-.28.78-.8.78-1.36V6.41c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.51-.2-.78-.2z"/>
    </svg>
  );

  const JSIcon = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.77l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z"/>
    </svg>
  );

  const HTMLIcon = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
    </svg>
  );

  const CSSIcon = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
    </svg>
  );

  const MongoIcon = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
    </svg>
  );

  const GitIcon = () => (
    <svg viewBox="0 0 24 24" className="w-full h-full" fill="currentColor">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
    </svg>
  );

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React.js", icon: <ReactIcon />, color: "text-blue-500", level: 95 },
        { name: "JavaScript", icon: <JSIcon />, color: "text-yellow-500", level: 90 },
        { name: "HTML5", icon: <HTMLIcon />, color: "text-orange-600", level: 95 },
        { name: "CSS3", icon: <CSSIcon />, color: "text-blue-500", level: 90 },
        { name: "Tailwind CSS", icon: <div className="w-full h-full bg-cyan-500 rounded flex items-center justify-center text-white font-bold text-xs">TW</div>, color: "text-cyan-500", level: 90 },
        { name: "Bootstrap", icon: <div className="w-full h-full bg-purple-600 rounded flex items-center justify-center text-white font-bold text-xs">BS</div>, color: "text-purple-600", level: 85 }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", icon: <NodeIcon />, color: "text-green-600", level: 90 },
        { name: "Express.js", icon: <div className="w-full h-full bg-gray-700 dark:bg-gray-600 rounded flex items-center justify-center text-white font-bold text-xs">EX</div>, color: "text-gray-700 dark:text-gray-300", level: 85 },
        { name: "MongoDB", icon: <MongoIcon />, color: "text-green-500", level: 85 },
        { name: "Firebase", icon: <div className="w-full h-full bg-yellow-500 rounded flex items-center justify-center text-white font-bold text-xs">FB</div>, color: "text-yellow-500", level: 80 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <GitIcon />, color: "text-orange-600", level: 90 },
        { name: "GitHub", icon: <div className="w-full h-full bg-gray-900 dark:bg-gray-600 rounded flex items-center justify-center text-white font-bold text-xs">GH</div>, color: "text-gray-900 dark:text-white", level: 90 },
        { name: "VS Code", icon: <div className="w-full h-full bg-blue-600 rounded flex items-center justify-center text-white font-bold text-xs">VS</div>, color: "text-blue-600", level: 95 },
        { name: "NPM", icon: <div className="w-full h-full bg-red-600 rounded flex items-center justify-center text-white font-bold text-xs">NPM</div>, color: "text-red-600", level: 85 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
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
      id="skills" 
      className="py-20 px-5 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Skills & <span className="text-primary">Technologies</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Here are the technologies and tools I work with to bring ideas to life
        </p>
      </motion.div>

      <div className="space-y-16">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div 
            key={categoryIndex} 
            className="relative"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {category.title}
            </motion.h3>
            
            <div className="flex flex-wrap justify-center gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div 
                  key={skillIndex}
                  className="group relative bg-white dark:bg-surface-dark rounded-2xl p-6 shadow-soft dark:shadow-soft-dark border border-gray-100 dark:border-gray-800 hover:shadow-lg hover:scale-105 transition-all duration-300 hover:border-primary/20 w-40 flex flex-col items-center"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: skillIndex * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Icon */}
                  <motion.div 
                    className={`w-12 h-12 ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                    animate={{ 
                      rotateY: [0, 360],
                    }}
                    transition={{ 
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  
                  {/* Skill Name */}
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm text-center">
                    {skill.name}
                  </h4>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  
                  {/* Percentage */}
                  <motion.div 
                    className="text-xs text-gray-500 dark:text-gray-400 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: skillIndex * 0.1 + 1 }}
                    viewport={{ once: true }}
                  >
                    {skill.level}%
                  </motion.div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info Section */}
      <motion.div 
        className="mt-20 text-center"
        variants={itemVariants}
      >
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Always Learning & Growing
          </motion.h3>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. 
            I regularly explore new frameworks, tools, and methodologies to deliver cutting-edge solutions that meet 
            modern web development standards.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {['Currently Learning: Next.js 14', 'Exploring: TypeScript', 'Interested in: Docker'].map((item, index) => (
              <motion.span 
                key={item}
                className="bg-white dark:bg-surface-dark px-4 py-2 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.6 }}
                viewport={{ once: true }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;