import React from 'react';

const About = () => {
  return (
    <section id="about" className="wrap">
      <h2 className="section-title reveal">About</h2>
      <p className="section-desc reveal">
        I am a motivated and detail-oriented Computer Science and Technology undergraduate at Uva Wellassa University, with a strong foundation in full-stack development and a certified passion for UI/UX design. My technical skills span multiple programming languages and frameworks, including Java and JavaScript complemented by expertise in modern design tools. A collaborative team player with proven leadership in tech communities, I thrive on turning complex problems into elegant solutions and am eager to apply my abilities in a professional environment where I can continue to learn and contribute to innovative projects.
      </p>
      <div className="grid cols-3">
        <div className="card reveal">
          <h3>What I'm good at</h3>
          <p>Team collaboration, problem‑solving, quick learning, and turning user needs into tangible product features.</p>
        </div>
        <div className="card reveal" style={{ transitionDelay: '.05s' }}>
          <h3>What I'm exploring</h3>
          <p>Advanced real‑time systems, design systems, and intelligent assistants using modern AI tooling.</p>
        </div>
        <div className="card reveal" style={{ transitionDelay: '.1s' }}>
          <h3>What I value</h3>
          <p>Clarity, accessibility, performance, and shipping high‑quality features with an eye for detail.</p>
        </div>
      </div>
    </section>
  );
};

export default About;