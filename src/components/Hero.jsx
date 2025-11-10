// src/components/Hero.jsx

import React from 'react';
// Assuming your professional image is saved in src/assets/jayathi-pro.jpg
// For this code, we'll use a placeholder structure.
// You'll need to manually import the image: import ProImage from '../assets/Gemini_Generated_Image_78ntev78ntev78nt.jpg';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jayathi-baddewaththa-922081315', icon: 'RiLinkedinFill' }, // Use actual icons in development (e.g., react-icons)
  { name: 'GitHub', url: 'https://github.com/your-github-username', icon: 'RiGithubFill' },
  { name: 'Behance', url: 'https://www.behance.net/jayathibaddewaththa', icon: 'RiBehanceFill' },
];

const Hero = () => {
  return (
    <section className="pt-20 pb-32 flex flex-col items-center text-center relative z-10">
      {/* decorative orbs inside hero (subtle) */}
      <div className="absolute left-0 top-0 opacity-0" aria-hidden="true"></div>

      {/* Photo (replace with your actual image path) */}
      <img
        // Replace with your actual image path in src/assets and import for production
        src="/path/to/Gemini_Generated_Image_78ntev78ntev78nt.jpg"
        alt="Jayathi Jayoda Professional Portrait"
        className="w-44 h-44 rounded-full object-cover border-4 border-transparent accent-bg p-1 mb-8 float-up"
      />

      <p className="text-xl text-muted font-medium mb-3">Hi, I'm <span className="text-light-text">Jayathi Jayoda</span></p>

      <h1 className="text-5xl sm:text-6xl font-extrabold max-w-4xl leading-tight text-light-text">
        Building <span className="accent">User-Centric</span> and Quality-Assured Digital Experiences.
      </h1>

      <p className="mt-6 text-lg max-w-2xl text-muted">
        A final-year Computer Science undergraduate blending frontend development with UI/UX design and a focus on quality assurance to deliver robust, delightful products.
      </p>

      <div className="mt-10 flex space-x-6">
        <a
          href="#projects"
          className="btn-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
        >
          View My Projects
        </a>
        <a
          href="#contact"
          className="btn-ghost"
        >
          Get In Touch
        </a>
      </div>

      {/* Social Links */}
      <div className="mt-16 flex space-x-6 text-lg text-muted">
        {socialLinks.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:accent transition duration-300">
                {link.name}
            </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;