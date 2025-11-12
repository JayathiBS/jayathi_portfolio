import React from 'react';
import homePointImg from '../assets/homepoint.jpeg';
import poultryProImg from '../assets/poltrypro.jpeg';
import bestBidImg from '../assets/bestbid.jpeg';

const Projects = () => {
  const projects = [
    {
      title: 'HomePoint Construction Management System',
      image: homePointImg,
      description: 'Web-based system for managing construction operations: bookings, projects, payroll, inventory, and communication.',
      contribution: 'Designed and implemented the real-time communication module, including project-based chat rooms, secure messaging, and in-chat file sharing for a responsive, collaborative UX.',
      chips: ['MERN', 'Socket.IO', 'Next.js API', 'Tailwind']
    },
    {
      title: 'PoultryPro – Poultry Farm Management',
      image: poultryProImg,
      description: 'Manages inventory, feed, medicines, suppliers, and sales with an online marketplace and reporting modules.',
      contribution: 'Built the Feed Management Module to add, update, delete, and track feed records; manage inventory, usage, and cost analysis.',
      chips: ['PHP', 'Bootstrap', 'MySQL']
    },
    {
      title: 'BestBid: Online Auction Platform',
      image: bestBidImg,
      description: 'Real-time bidding platform enabling secure transactions and a seamless cross-device experience.',
      contribution: 'Focused on frontend development: responsive UI with React, Tailwind, and Framer Motion; collaborated to integrate Django REST and PostgreSQL.',
      chips: ['React', 'Tailwind', 'Framer Motion', 'Django REST', 'PostgreSQL']
    }
  ];

  return (
    <section id="projects" className="wrap">
      <h2 className="section-title reveal">Project Experience</h2>
      <div className="grid cols-3">
        {projects.map((project, index) => (
          <div key={project.title} className="card reveal" style={{ transitionDelay: `${index * 0.05}s` }}>
            {project.image && (
              <img src={project.image} alt={`${project.title} screenshot`} className="project-image" />
            )}
            <h3>{project.title}</h3>
            <div style={{ marginTop: '8px', marginBottom: '10px' }}>
              {project.chips && project.chips.map(chip => (
                <span key={chip} className="chip" style={{ marginRight: 6 }}>{chip}</span>
              ))}
            </div>
            <div className="meta">{project.meta}</div>
            <p>{project.description}</p>
            <details>
              <summary>My contribution</summary>
              <p>{project.contribution}</p>
            </details>
            {/* chips displayed above (between title and description) */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;