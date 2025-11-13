import React from 'react';
import greenyvila from '../assets/greenyvila.png';
import photography from '../assets/Photo graphy .png';

const UIUX = () => {
  const projects = [
    { title: 'Studio Website Home Page UI', description: 'Clean, minimal homepage with visual emphasis on portfolio work.', image: photography },
    { title: 'Villa Home Page UI', description: 'Modern landing page concept with premium villa booking flow.', image: greenyvila },
    { title: 'Construction Site Web App UI', description: 'High-fidelity Figma prototype for a construction site management UI.' },
    { title: 'Mobile App UI', description: 'Interactive mobile UI flows and components.' },
    { title: 'Restaurant Mobile App UI', description: 'Food ordering UI with intuitive navigation and ordering flow.' }
  ];

  return (
    <section id="uiux" className="wrap">
      <h2 className="section-title reveal">UI/UX Projects</h2>
      <div className="grid cols-2">
        {projects.map((project, index) => (
          <div key={project.title} className="card reveal" style={{ transitionDelay: `${index * 0.05}s` }}>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 8, marginBottom: 12 }}
              />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a className="btn" href="#" target="_blank" rel="noopener noreferrer">View Figma</a>
          </div>
        ))}
      </div>
      <p className="section-desc" style={{ marginTop: '14px' }}>Tip: Replace "View Figma" links with your actual Figma URLs.</p>
    </section>
  );
};

export default UIUX;