import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeAnimation = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const steps = [
    { text: "Welcome", delay: 0 },
    { text: "to", delay: 0.5 },
    { text: "Sojib.dev", delay: 1 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        // Start exit animation after showing all text
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            onComplete();
          }, 800); // Wait for exit animation to complete
        }, 1000); // Show complete text for 1 second
      }
    }, 800); // Time between each word

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const textVariants = {
    initial: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.5,
      rotate: -180
    },
    animate: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  const circleVariants = {
    initial: { 
      scale: 0,
      opacity: 0
    },
    animate: { 
      scale: [0, 1.2, 1],
      opacity: [0, 0.8, 0.6],
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const particleVariants = {
    animate: {
      y: [-20, -40, -20],
      x: [0, 10, -10, 0],
      opacity: [0.4, 0.8, 0.4],
      scale: [0.8, 1.2, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-background-light via-background-light to-gray-50 dark:from-background-dark dark:via-background-dark dark:to-gray-900 flex items-center justify-center overflow-hidden"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Background Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                variants={particleVariants}
                animate="animate"
                transition={{ delay: Math.random() * 2 }}
              />
            ))}
          </div>

          {/* Background Circles */}
          <motion.div
            className="absolute w-96 h-96 border border-primary/20 rounded-full"
            variants={circleVariants}
            initial="initial"
            animate="animate"
          />
          <motion.div
            className="absolute w-80 h-80 border border-secondary/20 rounded-full"
            variants={circleVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.7 }}
          />
          <motion.div
            className="absolute w-64 h-64 border border-primary/10 rounded-full"
            variants={circleVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.9 }}
          />

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Logo */}
            <motion.div
              className="mb-8"
              variants={logoVariants}
              initial="initial"
              animate="animate"
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-2xl">S</span>
              </div>
            </motion.div>

            {/* Welcome Text */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className={`text-4xl md:text-6xl font-bold ${
                    index === 2 
                      ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent' 
                      : 'text-gray-900 dark:text-white'
                  }`}
                  variants={textVariants}
                  initial="initial"
                  animate={currentStep >= index ? "animate" : "initial"}
                >
                  {step.text}
                </motion.div>
              ))}
            </div>

            {/* Loading Indicator */}
            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-primary rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="mt-6 text-gray-600 dark:text-gray-300 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.6 }}
            >
              MERN Stack Developer
            </motion.p>
          </div>

          {/* Progress Bar */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation;