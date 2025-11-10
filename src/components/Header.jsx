// src/components/Header.jsx

const Header = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="flex justify-between items-center py-6 relative z-10">
      <div className="text-2xl font-bold tracking-widest cursor-pointer flex items-center gap-3">
        <div className="w-10 h-10 rounded-md accent-bg flex items-center justify-center text-sm font-extrabold">JJ</div>
        <div>
          <div className="leading-tight">Jayathi <span className="text-muted block text-sm">Frontend & UI/UX</span></div>
        </div>
      </div>

      <nav className="hidden md:flex space-x-8 items-center">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-muted hover:accent transition duration-300 font-medium"
          >
            {link.name}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="btn-primary"
      >
        Hire Me
      </a>
    </header>
  );
};

export default Header;