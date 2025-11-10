import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-500">
        <p>
          © {new Date().getFullYear()} Jayathi Jayoda. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Developed with React and Tailwind CSS for a modern, dynamic portfolio.
        </p>
      </div>
    </footer>
  );
};

export default Footer;