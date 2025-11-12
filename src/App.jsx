import React, { useState, useEffect } from 'react';
import { useMousePosition } from './hooks/useMousePosition';
import { useScrollReveal } from './hooks/useScrollReveal';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import UIUX from './components/UIUX';
import Education from './components/Education';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { x, y } = useMousePosition();
  const [theme, setTheme] = useState('blue');
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [showToTop, setShowToTop] = useState(false);

  useScrollReveal();

  useEffect(() => {
    document.documentElement.style.setProperty('--mx', `${x}px`);
    document.documentElement.style.setProperty('--my', `${y}px`);
  }, [x, y]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-color') || 'blue';
    const savedMotion = localStorage.getItem('motion-enabled');
    
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
    
    if (savedMotion !== null) {
      const motion = savedMotion === 'true';
      setMotionEnabled(motion);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('scroll-behavior', motionEnabled ? 'smooth' : 'auto');
  }, [motionEnabled]);

  useEffect(() => {
    const handleScroll = () => {
      setShowToTop(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === 'green' ? 'blue' : 'green';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme-color', newTheme);
  };

  const handleMotionToggle = () => {
    const newMotionEnabled = !motionEnabled;
    setMotionEnabled(newMotionEnabled);
    localStorage.setItem('motion-enabled', newMotionEnabled.toString());
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: motionEnabled ? 'smooth' : 'auto' });
  };

  // Add structured data
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Jayathi (Jayoda) Baddewatta",
      "jobTitle": "Computer Science & Technology Undergraduate",
      "email": "mailto:jayathibaddewatta@gmail.com",
      "telephone": "+94703998213",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ahangama",
        "addressCountry": "Sri Lanka"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Uva Wellassa University of Sri Lanka"
      }
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <div className="bg-light" aria-hidden="true"></div>
      
      <Header 
        theme={theme}
        onThemeToggle={handleThemeToggle}
        motionEnabled={motionEnabled}
        onMotionToggle={handleMotionToggle}
      />
      
      <main>
        <Hero motionEnabled={motionEnabled} />
        <About />
        <Skills />
        <Projects />
        <UIUX />
  <Education />
  <Activities />
  <Contact />
      </main>
      
      <Footer />
      
      <button 
        className={`btn to-top ${showToTop ? 'show' : ''}`} 
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑ Top
      </button>
    </div>
  );
}

export default App;