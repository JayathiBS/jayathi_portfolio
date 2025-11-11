import React from 'react';

const About = () => {
  return (
    <section id="about" className="wrap">
      <h2 className="section-title reveal">About</h2>
      <p className="section-desc reveal">
        I'm an enthusiastic Computer Science & Technology undergraduate specializing in building scalable web applications and crafting thoughtful UI/UX. I enjoy working across the stack with a focus on reliability, real‑time experiences, and collaborative product development.
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