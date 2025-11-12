import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <div style={{ textAlign: 'center' }}>
            © {new Date().getFullYear()} Jayathi Baddewatta. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;