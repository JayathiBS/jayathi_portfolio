import React from 'react';
import greenyvila from '../assets/greenyvila.png';
import photography from '../assets/Photo graphy .png';

const UIUX = () => {
  const projects = [
  { title: 'Studio Website Home Page UI', description: 'PhotoGallery is a sleek and responsive photography portfolio website showcasing weddings, portraits, events, and pre-shoots. With warm tones and cinematic design, it transforms beautiful moments into timeless visual art.', image: photography, behance: 'https://www.behance.net/gallery/238205673/PhotoGallery-Photography-Website-UI-Design' },
    { title: 'Villa Home Page UI', description: 'Greeny Villa, a high-end eco-friendly retreat in Sri Lanka. Designed to blend natural serenity with luxurious comfort, our responsive website offers immersive visuals, seamless booking, and inspiring stories that invite travelers to experience an unforgettable escape in harmony with nature.', image: greenyvila, behance: 'https://www.behance.net/gallery/238226417/Greeny-Vila-A-Luxury-Nature-Retreat-Website-UI' },
    { title: 'Construction Site Web App UI', description: 'High-fidelity Figma prototype for a construction site management UI.', behance: 'https://www.behance.net/jayathibaddewaththa' },
    { title: 'Mobile App UI', description: 'Interactive mobile UI flows and components.', behance: 'https://www.behance.net/jayathibaddewaththa' },
    { title: 'Restaurant Mobile App UI', description: 'Food ordering UI with intuitive navigation and ordering flow.', behance: 'https://www.behance.net/jayathibaddewaththa' }
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
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 8 }}>
              <a
                href={project.behance || 'https://www.behance.net/'}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.title} on Behance`}
                title="Behance"
                style={{
                  display: 'inline-grid',
                  placeItems: 'center',
                  color: '#ffffff',
                  width: 64,
                  height: 64,
                  border: 'none',
                  background: 'transparent',
                  padding: 0,
                  boxShadow: 'none',
                  outline: 'none'
                }}
              >
                <div style={{ width: 52, height: 52, display: 'grid', placeItems: 'center', borderRadius: 10, background: 'rgba(255,255,255,0.08)' }}>
                  <span style={{ color: '#fff', fontWeight: 800, fontSize: 18, lineHeight: 1 }}>Be</span>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    
    </section>
  );
};

export default UIUX;