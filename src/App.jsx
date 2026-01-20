import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingEmail from './components/FloatingEmail';
import WelcomeAnimation from './components/WelcomeAnimation';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <div className={`bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-100 font-display transition-colors duration-300 overflow-x-hidden min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {showWelcome && <WelcomeAnimation onComplete={handleWelcomeComplete} />}
      
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <FloatingEmail />
    </div>
  );
}

export default App;