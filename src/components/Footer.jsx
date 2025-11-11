import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <div className="brand" style={{ marginBottom: '8px' }}>
            <div className="logo">JJ</div>
            <div>
              <div style={{ fontWeight: '800' }}>Jayathi Jayoda</div>
              <div style={{ color: 'var(--muted)' }}>Computer Science & Technology Undergraduate</div>
            </div>
          </div>
          <div>© {new Date().getFullYear()} Jayathi Baddewatta. All rights reserved.</div>
        </div>
        <div>
          <div><strong>Contact</strong></div>
          <div><a className="link" href="mailto:jayathibaddewatta@gmail.com">jayathibaddewatta@gmail.com</a></div>
          <div><a className="link" href="tel:+94703998213">+94 70 399 8213</a></div>
          <div>Keenaduwa, Ahangama, Sri Lanka</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;