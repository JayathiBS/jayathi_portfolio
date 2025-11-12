import React, { useRef } from 'react';
import { useFloatingBubbles } from '../hooks/useFloatingBubbles';
import image from '../assets/Jayathi.png';
import heroImg from '../assets/hero.png';
// import portraitImg from '/images/jayathi-portrait.jpg';

const Hero = ({ motionEnabled }) => {
  const heroVisualRef = useRef(null);
  useFloatingBubbles(heroVisualRef, motionEnabled);

  const techBubbles = [
    { tech: 'Java', r: 150, s: 0.6 },
    { tech: 'JavaScript', r: 180, s: 0.5 },
    { tech: 'React', r: 140, s: 0.7 },
    { tech: 'Node.js', r: 200, s: 0.45 },
    { tech: 'Spring Boot', r: 170, s: 0.55 },
    { tech: 'MongoDB', r: 120, s: 0.8 },
    { tech: 'MySQL', r: 190, s: 0.5 },
    { tech: 'Tailwind', r: 130, s: 0.75 },
    { tech: 'Express', r: 160, s: 0.65 },
    { tech: 'PHP', r: 210, s: 0.45 },
    { tech: 'C/C++', r: 150, s: 0.6 },
    { tech: 'OpenAI API', r: 180, s: 0.5 },
    { tech: 'JWT', r: 125, s: 0.78 },
    { tech: 'GitHub', r: 155, s: 0.62 },
    { tech: 'Postman', r: 175, s: 0.58 },
  // removed 'Figma' bubble to avoid small overlapping artifact
  ];

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="wrap">
      <div>
        <h1 className="title reveal">JAYATHI JAYODA</h1>
        <p className="sub reveal">Jayathi Baddewatta • (BSc) in Computer Science and Technology (Undergraduate)</p>
        <p className="tagline reveal">
          A results-driven Computer Science undergraduate building delightful digital experiences through user-centric design and quality-assured frontend development.
        </p>
        <div className="cta reveal" style={{ transitionDelay: '.05s' }}>
          <a className="btn primary" href="#" title="Add your resume PDF URL" target="_blank" rel="noopener noreferrer">
            Download Résumé
          </a>
          <a className="btn" href="#projects">View Projects</a>
          <a className="btn" href="mailto:jayathibaddewatta@gmail.com">Contact Me</a>
        </div>
        <div className="contact-row reveal" style={{ transitionDelay: '.1s' }}>
          <div className="contact-pill">
            <span className="i"></span>
            <a href="tel:+94703998213">+94 70 399 8213</a>
          </div>
          <div className="contact-pill">
            <span className="i"></span>
            <a href="mailto:jayathibaddewatta@gmail.com">jayathibaddewatta@gmail.com</a>
          </div>
          <div className="contact-pill">
            <span className="i"></span>
            Keenaduwa, Ahangama, Sri Lanka
          </div>
        </div>
        
      </div>

      <div className="hero-visual" ref={heroVisualRef}>
        {/* Portrait Container */}
        <div className="portrait-container reveal" style={{ transitionDelay: '.05s' }}>
          <div className="portrait-wrapper">
            <img 
  src={image} 
  alt="Jayathi Jayoda - Computer Science Undergraduate"
  className="portrait-image"
/>
            <div className="portrait-glow"></div>
          </div>
        </div>

        {/* ID Card removed per request */}

        <div className="float-layer" aria-hidden="true">
          {techBubbles.map((bubble, index) => (
            <div
              key={index}
              className="tech-bubble"
              data-r={bubble.r}
              data-s={bubble.s}
            >
              {bubble.tech}
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;