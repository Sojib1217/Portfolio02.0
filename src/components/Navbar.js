import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const phoneRef = useRef(null);

  // Close phone popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (phoneRef.current && !phoneRef.current.contains(event.target)) {
        setShowPhoneNumber(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Smooth scroll function using CSS smooth scrolling
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Use native smooth scrolling with CSS
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      // Close mobile menu after clicking
      setIsMobileMenuOpen(false);
    }
  };

  const handlePhoneClick = (e) => {
    e.preventDefault();
    setShowPhoneNumber(!showPhoneNumber);
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="bg-surface-light dark:bg-surface-dark rounded-full px-5 py-3 shadow-soft dark:shadow-soft-dark flex justify-between items-center border border-gray-100 dark:border-gray-800">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {/* Logo Icon */}
          <motion.div 
            className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-md"
            whileHover={{ 
              rotate: 360,
              scale: 1.1,
              boxShadow: "0 4px 20px rgba(31, 41, 55, 0.3)"
            }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white font-bold text-sm">S</span>
          </motion.div>
          
          {/* Logo Text */}
          <div className="flex items-center">
            <motion.span 
              className="text-primary font-bold text-xl relative"
              whileHover={{ 
                textShadow: "0 0 8px rgba(31, 41, 55, 0.5)",
                scale: 1.05 
              }}
              transition={{ duration: 0.2 }}
            >
              Sojib
              <motion.div 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
            <motion.span 
              className="text-gray-800 dark:text-gray-100 font-bold text-xl ml-0.5"
              whileHover={{ 
                color: "#FFC247",
                scale: 1.05 
              }}
              transition={{ duration: 0.2 }}
            >
              .dev
            </motion.span>
          </div>
        </motion.div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          <a className="hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a>
          <a className="hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleSmoothScroll(e, 'about')}>About Me</a>
          <a className="hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleSmoothScroll(e, 'skills')}>Skills</a>
          <a className="hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</a>
          <a className="hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Phone Section */}
          <div className="hidden sm:flex items-center gap-2 relative" ref={phoneRef}>
            <motion.button 
              className="bg-darkaccent text-white rounded-full p-1.5 flex items-center justify-center hover:bg-darkaccent/90 transition-colors" 
              onClick={handlePhoneClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="material-icons-round text-sm">call</span>
            </motion.button>
            
            {/* Phone Number Popup */}
            <motion.div
              className={`absolute top-full left-0 mt-2 bg-white dark:bg-surface-dark px-3 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 whitespace-nowrap z-50 ${
                showPhoneNumber ? 'block' : 'hidden'
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: showPhoneNumber ? 1 : 0, 
                y: showPhoneNumber ? 0 : -10 
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  +880 1788-874-592
                </span>
                <a 
                  href="tel:+8801788874592"
                  className="text-primary hover:text-primary/80 transition-colors"
                  title="Call now"
                >
                  <span className="material-icons-round text-sm">call</span>
                </a>
              </div>
              {/* Arrow pointing up */}
              <div className="absolute -top-1 left-3 w-2 h-2 bg-white dark:bg-surface-dark border-l border-t border-gray-200 dark:border-gray-700 transform rotate-45"></div>
            </motion.div>
          </div>
          
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <span className="material-icons-round text-lg">light_mode</span>
            ) : (
              <span className="material-icons-round text-lg">dark_mode</span>
            )}
          </button>
          
          <button 
            className="md:hidden text-gray-800 dark:text-gray-100 p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-icons-round">menu</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 bg-surface-light dark:bg-surface-dark rounded-2xl p-4 shadow-soft dark:shadow-soft-dark border border-gray-100 dark:border-gray-800">
          <div className="flex flex-col gap-4 text-sm font-medium text-gray-600 dark:text-gray-300">
            <a className="hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a>
            <a className="hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleSmoothScroll(e, 'about')}>About Me</a>
            <a className="hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleSmoothScroll(e, 'skills')}>Skills</a>
            <a className="hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleSmoothScroll(e, 'projects')}>Projects</a>
            <a className="hover:text-primary transition-colors cursor-pointer" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a>
            
            {/* Mobile Dark Mode Toggle */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
              <span className="text-sm">Dark Mode</span>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <span className="material-icons-round text-lg">light_mode</span>
                ) : (
                  <span className="material-icons-round text-lg">dark_mode</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;