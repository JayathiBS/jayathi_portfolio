// src/components/Footer.jsx

const Footer = () => {
  return (
    <footer id="contact" className="bg-theme mt-20 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold accent mb-4">Let's Connect</h2>
        <p className="text-muted mb-8">
          I'm actively seeking opportunities in Frontend Development, UI/UX Design, or Quality Assurance.
        </p>

        <div className="flex justify-center space-x-8 text-lg mb-8">
          <a href="mailto:jayathibaddewatta@gmail.com" className="hover:accent transition duration-300">
            Email
          </a>
          <a href="https://www.linkedin.com/in/jayathi-baddewaththa-922081315" target="_blank" rel="noopener noreferrer" className="hover:accent transition duration-300">
            LinkedIn
          </a>
          <a href="https://www.behance.net/jayathibaddewaththa" target="_blank" rel="noopener noreferrer" className="hover:accent transition duration-300">
            Behance
          </a>
        </div>

        <p className="text-sm text-muted mt-8">
          &copy; {new Date().getFullYear()} Jayathi Jayoda. Designed with ❤️ · Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;