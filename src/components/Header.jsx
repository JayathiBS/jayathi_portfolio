import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-sm shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
          Jayathi Jayoda
        </div>
        <div className="hidden md:flex space-x-6">
          {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-blue-400 transition-colors relative group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;