import React, { useState, useEffect } from 'react';

const Header = ({ theme, onThemeToggle, motionEnabled, onMotionToggle }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const header = document.querySelector('header.nav');
      const offset = header ? header.getBoundingClientRect().height : 64;
      const top = target.getBoundingClientRect().top + window.pageYOffset - (offset + 8);
      window.scrollTo({ top, behavior: motionEnabled ? 'smooth' : 'auto' });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector('.hero');
      const headerEl = document.querySelector('header.nav');
      if (!hero || !headerEl) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      const headerHeight = headerEl.getBoundingClientRect().height;
      setScrolled(heroBottom <= headerHeight + 8);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [motionEnabled]);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav-row">
        <div className="wrap">
          <div className="brand">
            <div className="logo">JJ</div>
            <div>
              <div style={{ fontSize: '15px', opacity: '.9' }}>Jayathi Jayoda</div>
            </div>
          </div>

          <button
            className={`menu-btn ${menuOpen ? 'open' : ''}`}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(v => !v)}
          >
            <span className="hamburger" aria-hidden="true"></span>
          </button>

          <nav aria-label="Primary">
            <ul>
              {['about', 'skills', 'projects', 'uiux', 'education', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={(e) => handleSmoothScroll(e, item)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* actions removed per request */}
        </div>
      </div>
    </header>
  );
};

export default Header;
