import React from 'react';

const FloatingEmail = () => {
  return (
    <a 
      className="fixed bottom-6 right-6 md:hidden bg-primary text-white p-4 rounded-full shadow-lg z-50 hover:bg-orange-600 transition-colors" 
      href="mailto:sojibhasan1888@gmail.com"
    >
      <span className="material-icons-round">email</span>
    </a>
  );
};

export default FloatingEmail;