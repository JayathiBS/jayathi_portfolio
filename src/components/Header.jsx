import React from 'react';

const Header = ({ theme, onThemeToggle, motionEnabled, onMotionToggle }) => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const header = document.querySelector('header.nav');
      const offset = header ? header.getBoundingClientRect().height : 64;
      const top = target.getBoundingClientRect().top + window.pageYOffset - (offset + 8);
      window.scrollTo({ top, behavior: motionEnabled ? 'smooth' : 'auto' });
    }
  };

  return (
    <header className="nav">
     
        <div className="nav-row">
           <div className="wrap">
          <div className="brand">
            <div className="logo">JJ</div>
            <div>
              <div style={{ fontSize: '15px', opacity: '.9' }}>Jayathi Jayoda</div>
              
            </div>
          </div>
          <nav aria-label="Primary">
            <ul>
              {['about', 'skills', 'projects', 'uiux', 'education', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={(e) => handleSmoothScroll(e, item)}>
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