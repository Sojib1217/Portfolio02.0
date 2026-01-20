import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        throw new Error('Please fill in all required fields');
      }

      // Try to send via EmailJS or similar service first
      // For now, we'll use FormSubmit.co as a reliable free service
      const formSubmitData = new FormData();
      formSubmitData.append('name', formData.name);
      formSubmitData.append('email', formData.email);
      formSubmitData.append('phone', formData.phone || 'Not provided');
      formSubmitData.append('subject', formData.subject);
      formSubmitData.append('message', formData.message);
      formSubmitData.append('_next', window.location.href); // Redirect back to current page
      formSubmitData.append('_subject', `Portfolio Contact: ${formData.subject}`);
      formSubmitData.append('_captcha', 'false'); // Disable captcha for better UX

      // Submit to FormSubmit.co (free form submission service)
      const response = await fetch('https://formsubmit.co/sojibhasan1888@gmail.com', {
        method: 'POST',
        body: formSubmitData
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Fallback to mailto if form submission fails
      try {
        const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
        const body = encodeURIComponent(
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone || 'Not provided'}\n\n` +
          `Message:\n${formData.message}`
        );
        
        const mailtoLink = `mailto:sojibhasan1888@gmail.com?subject=${subject}&body=${body}`;
        window.open(mailtoLink, '_blank');
        
        setSubmitStatus('mailto');
      } catch (mailtoError) {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-20 px-5 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Form */}
        <motion.div variants={itemVariants}>
          <div className="mb-8">
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">● Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
              Get in touch with me
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Fill out the form below or email me directly at{' '}
              <a 
                href="mailto:sojibhasan1888@gmail.com" 
                className="text-primary hover:underline font-medium"
              >
                sojibhasan1888@gmail.com
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:outline-none transition-colors text-lg"
              />
            </motion.div>

            {/* Email and Phone Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:outline-none transition-colors text-lg"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:outline-none transition-colors text-lg"
                />
              </motion.div>
            </div>

            {/* Subject Field */}
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:outline-none transition-colors text-lg"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                rows="5"
                className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary focus:outline-none transition-colors text-lg resize-none"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="pt-4">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="material-icons-round text-lg">send</span>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Alternative Contact Methods */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Or reach me directly:</p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="mailto:sojibhasan1888@gmail.com"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <span className="material-icons-round text-sm">email</span>
                    sojibhasan1888@gmail.com
                  </a>
                  <a 
                    href="tel:+8801788874592"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    <span className="material-icons-round text-sm">call</span>
                    +880 1788-874-592
                  </a>
                </div>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.p 
                  className="text-green-600 dark:text-green-400 mt-3 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.p>
              )}
              {submitStatus === 'mailto' && (
                <motion.p 
                  className="text-blue-600 dark:text-blue-400 mt-3 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  📧 Email client opened. Please send the message from your email app.
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p 
                  className="text-red-600 dark:text-red-400 mt-3 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  ❌ Something went wrong. Please try again or email me directly.
                </motion.p>
              )}
            </motion.div>
          </form>
        </motion.div>

        {/* Right Side - Rotating World Map */}
        <motion.div 
          className="hidden lg:flex justify-center items-center"
          variants={itemVariants}
        >
          <div className="relative w-96 h-96">
            {/* Main Globe Container */}
            <motion.div 
              className="w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 shadow-2xl relative overflow-hidden border-4 border-gray-200 dark:border-gray-700"
              animate={{ 
                rotate: 360,
              }}
              transition={{ 
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* Ocean Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700"></div>
              
              {/* Continents */}
              {/* North America */}
              <div className="absolute top-[25%] left-[15%] w-16 h-20 bg-green-400 dark:bg-green-600 rounded-lg transform -rotate-12 opacity-80"></div>
              <div className="absolute top-[20%] left-[20%] w-12 h-8 bg-green-500 dark:bg-green-700 rounded-full opacity-70"></div>
              
              {/* South America */}
              <div className="absolute top-[45%] left-[25%] w-8 h-24 bg-green-400 dark:bg-green-600 rounded-lg transform rotate-12 opacity-80"></div>
              
              {/* Europe */}
              <div className="absolute top-[20%] left-[48%] w-8 h-6 bg-green-500 dark:bg-green-700 rounded opacity-75"></div>
              <div className="absolute top-[25%] left-[50%] w-6 h-8 bg-green-400 dark:bg-green-600 rounded opacity-70"></div>
              
              {/* Africa */}
              <div className="absolute top-[35%] left-[52%] w-12 h-20 bg-green-400 dark:bg-green-600 rounded-lg opacity-80"></div>
              <div className="absolute top-[30%] left-[48%] w-8 h-8 bg-green-500 dark:bg-green-700 rounded-full opacity-70"></div>
              
              {/* Asia */}
              <div className="absolute top-[15%] left-[65%] w-20 h-16 bg-green-400 dark:bg-green-600 rounded-lg transform rotate-6 opacity-80"></div>
              <div className="absolute top-[25%] left-[70%] w-14 h-12 bg-green-500 dark:bg-green-700 rounded opacity-75"></div>
              <div className="absolute top-[35%] left-[75%] w-10 h-14 bg-green-400 dark:bg-green-600 rounded-lg opacity-70"></div>
              
              {/* Australia */}
              <div className="absolute top-[65%] left-[80%] w-8 h-6 bg-green-500 dark:bg-green-700 rounded opacity-75"></div>
              
              {/* Antarctica */}
              <div className="absolute bottom-[5%] left-[30%] w-24 h-8 bg-white dark:bg-gray-300 rounded-full opacity-60"></div>
              
              {/* Mountain Ranges */}
              <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-brown-400 dark:bg-yellow-600 rounded-full"></div>
              <div className="absolute top-[25%] left-[70%] w-2 h-2 bg-brown-400 dark:bg-yellow-600 rounded-full"></div>
              <div className="absolute top-[40%] left-[25%] w-2 h-2 bg-brown-400 dark:bg-yellow-600 rounded-full"></div>
              
              {/* Cities/Points of Interest */}
              {[
                { top: '25%', left: '22%', color: 'bg-red-500' }, // New York
                { top: '30%', left: '52%', color: 'bg-yellow-500' }, // London
                { top: '35%', left: '77%', color: 'bg-blue-500' }, // Tokyo
                { top: '45%', left: '55%', color: 'bg-purple-500' }, // Cairo
                { top: '70%', left: '82%', color: 'bg-green-500' }, // Sydney
                { top: '50%', left: '28%', color: 'bg-pink-500' }, // São Paulo
                { top: '20%', left: '75%', color: 'bg-indigo-500' }, // Beijing
                { top: '40%', left: '45%', color: 'bg-orange-500' }, // Dubai
              ].map((city, i) => (
                <motion.div
                  key={`city-${i}`}
                  className={`absolute w-2 h-2 ${city.color} rounded-full shadow-lg`}
                  style={{ top: city.top, left: city.left }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                {/* Connection lines between major cities */}
                <motion.path
                  d="M 88 100 Q 150 80 200 120"
                  stroke="url(#connectionGradient)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.path
                  d="M 200 120 Q 250 100 300 140"
                  stroke="url(#connectionGradient)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                />
                <motion.path
                  d="M 88 100 Q 120 200 220 180"
                  stroke="url(#connectionGradient)"
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 2 }}
                />
              </svg>
              
              {/* Latitude/Longitude Grid */}
              <div className="absolute inset-0">
                {/* Latitude lines */}
                {[20, 35, 50, 65, 80].map((top, i) => (
                  <div
                    key={`lat-${i}`}
                    className="absolute w-full h-px bg-gray-300 dark:bg-gray-600 opacity-30"
                    style={{ top: `${top}%` }}
                  />
                ))}
                {/* Longitude lines */}
                {[20, 35, 50, 65, 80].map((left, i) => (
                  <div
                    key={`lng-${i}`}
                    className="absolute h-full w-px bg-gray-300 dark:bg-gray-600 opacity-30"
                    style={{ left: `${left}%` }}
                  />
                ))}
              </div>
              
              {/* Equator */}
              <div className="absolute top-1/2 w-full h-px bg-yellow-400 dark:bg-yellow-500 opacity-50 transform -translate-y-1/2"></div>
            </motion.div>

            {/* Floating Satellites */}
            <motion.div
              className="absolute -top-8 right-8 w-6 h-6 bg-gray-400 dark:bg-gray-300 rounded-sm shadow-lg"
              animate={{ 
                rotate: 360,
                x: [0, 20, 0, -20, 0],
                y: [0, -10, 0, 10, 0]
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                x: { duration: 6, repeat: Infinity },
                y: { duration: 4, repeat: Infinity }
              }}
            >
              <div className="w-1 h-4 bg-gray-600 dark:bg-gray-800 absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-1 h-4 bg-gray-600 dark:bg-gray-800 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
            </motion.div>

            <motion.div
              className="absolute -bottom-8 left-8 w-6 h-6 bg-gray-400 dark:bg-gray-300 rounded-sm shadow-lg"
              animate={{ 
                rotate: -360,
                x: [0, -15, 0, 15, 0],
                y: [0, 15, 0, -15, 0]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                x: { duration: 7, repeat: Infinity },
                y: { duration: 5, repeat: Infinity }
              }}
            >
              <div className="w-1 h-4 bg-gray-600 dark:bg-gray-800 absolute -top-2 left-1/2 transform -translate-x-1/2"></div>
              <div className="w-1 h-4 bg-gray-600 dark:bg-gray-800 absolute -bottom-2 left-1/2 transform -translate-x-1/2"></div>
            </motion.div>

            {/* Communication Signals */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`signal-${i}`}
                className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 1,
                }}
              />
            ))}

            {/* Corner Decorations */}
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm shadow-lg"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="material-icons-round text-sm">public</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white text-sm shadow-lg"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <span className="material-icons-round text-sm">language</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;