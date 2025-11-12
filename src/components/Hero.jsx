import React, { useRef } from 'react';
import { useFloatingBubbles } from '../hooks/useFloatingBubbles';
import image from '../assets/Jayathi.png';
import heroImg from '../assets/hero.png';
import cv from '../assets/Jayathi.pdf';
// icons (lightweight SVGs)
import icJS from '../assets/icons/js.svg';
import icNode from '../assets/icons/nodejs.svg';
import icJava from '../assets/icons/java.svg';
import icHTML from '../assets/icons/html.svg';
import icCSS from '../assets/icons/css.svg';
import icTailwind from '../assets/icons/tailwind.svg';
import icMongo from '../assets/icons/mongodb.svg';
import icMySQL from '../assets/icons/mysql.svg';
import icGit from '../assets/icons/git.svg';
import icGitHub from '../assets/icons/github.svg';
import icPostman from '../assets/icons/postman.svg';
import icExpress from '../assets/icons/express.svg';
import icPHP from '../assets/icons/php.svg';
import icCPP from '../assets/icons/cpp.svg';
import icOpenAI from '../assets/icons/openai.svg';
import icJWT from '../assets/icons/jwt.svg';
import icSpring from '../assets/icons/spring.svg';
import icDefault from '../assets/icons/default.svg';
import icReact from '../assets/react.svg';
import icFigma from '../assets/icons/figma.svg';
import icCanva from '../assets/icons/canva.svg';
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

  // primary skills to show at the bottom of the hero
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Java', 'HTML', 'CSS', 'Tailwind', 'MongoDB', 'MySQL', 'Git', 'Figma', 'Canva'
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
        <h1 className="title reveal">JAYATHI  BADDEWATHTHA</h1>
        <p className="sub reveal">(BSc) in Computer Science and Technology (Undergraduate)</p>
        <p className="tagline reveal">
          A results-driven Computer Science undergraduate building delightful digital experiences through user-centric design and quality-assured frontend development.
        </p>
        <div className="cta reveal" style={{ transitionDelay: '.05s' }}>
          <a className="btn primary" href={cv} download="Jayathi.pdf" title="Download Jayathi's CV">
            Download CV
          </a>
          <a className="btn" href="#projects">View Projects</a>
        </div>
        <div className="hero-socials reveal" style={{ transitionDelay: '.1s' }}>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/jayathi-baddewaththa-922081315"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn - Jayathi Baddewaththa"
          >
            <span className="i" aria-hidden="true"></span>
            <span>LinkedIn</span>
          </a>

          <a
            className="social-link"
            href="https://www.behance.net/jayathibaddewaththa"
            target="_blank"
            rel="noopener noreferrer"
            title="Behance - Jayathi Baddewaththa"
          >
            <span className="i" aria-hidden="true"></span>
            <span>Behance</span>
          </a>

          <a
            className="social-link"
            href="https://github.com/JayathiBS"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub - JayathiBS"
          >
            <span className="i" aria-hidden="true"></span>
            <span>GitHub</span>
          </a>

          <a
            className="social-link"
            href="mailto:jayathibaddewatta@gmail.com"
            title="Email Jayathi"
          >
            <span className="i" aria-hidden="true"></span>
            <span>Email</span>
          </a>
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
      {/* Continuous horizontal marquee of all skills (right -> left) */}
        <div className="skill-marquee" aria-hidden="true">
          <div className="marquee-track">
            {(() => {
              const items = Array.from(new Set([...skills, ...techBubbles.map(b => b.tech)]));
              const iconsMap = {
                'JavaScript': icJS,
                'React': icReact,
                'Node.js': icNode,
                'Java': icJava,
                'HTML': icHTML,
                'CSS': icCSS,
                'Tailwind': icTailwind,
                'MongoDB': icMongo,
                'MySQL': icMySQL,
                'Git': icGit,
                'GitHub': icGitHub,
                'Postman': icPostman,
                'Express': icExpress,
                'PHP': icPHP,
                'C/C++': icCPP,
                'OpenAI API': icOpenAI,
                'JWT': icJWT,
                'Spring Boot': icSpring
              };
              iconsMap['Figma'] = icFigma;
              iconsMap['Canva'] = icCanva;

              return (
                <>
                  {items.map((s, idx) => (
                    <span key={`m-${idx}`} className="marquee-item">
                      {iconsMap[s]
                        ? <img src={iconsMap[s]} className="m-icon-img" alt={`${s} icon`} />
                        : <span className="m-icon" aria-hidden="true">{s.split(' ').map(p => p[0]).slice(0,2).join('').toUpperCase()}</span>
                      }
                      <span className="m-label">{s}</span>
                    </span>
                  ))}
                  {/* duplicate for smooth looping */}
                  {items.map((s, idx) => (
                    <span key={`m2-${idx}`} className="marquee-item">
                      {iconsMap[s]
                        ? <img src={iconsMap[s]} className="m-icon-img" alt={`${s} icon`} />
                        : <span className="m-icon" aria-hidden="true">{s.split(' ').map(p => p[0]).slice(0,2).join('').toUpperCase()}</span>
                      }
                      <span className="m-label">{s}</span>
                    </span>
                  ))}
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;