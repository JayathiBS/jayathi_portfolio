import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'HomePoint Construction Management System',
      meta: 'MERN • Socket.IO • JavaScript • Next.js API • Tailwind',
      description: 'Web-based system for managing construction operations: bookings, projects, payroll, inventory, and communication.',
      contribution: 'Designed and implemented the real-time communication module, including project-based chat rooms, secure messaging, and in-chat file sharing for a responsive, collaborative UX.',
      chips: ['MERN', 'Socket.IO', 'Next.js API', 'Tailwind']
    },
    {
      title: 'PoultryPro – Poultry Farm Management',
      meta: 'HTML • CSS • JavaScript • Bootstrap • PHP • MySQL',
      description: 'Manages inventory, feed, medicines, suppliers, and sales with an online marketplace and reporting modules.',
      contribution: 'Built the Feed Management Module to add, update, delete, and track feed records; manage inventory, usage, and cost analysis.',
      chips: ['PHP', 'Bootstrap', 'MySQL']
    },
    {
      title: 'BestBid: Online Auction Platform',
      meta: 'React • Tailwind • Framer Motion • Django REST • PostgreSQL',
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
            <h3>{project.title}</h3>
            <div className="meta">{project.meta}</div>
            <p>{project.description}</p>
            <details>
              <summary>My contribution</summary>
              <p>{project.contribution}</p>
            </details>
            <div style={{ marginTop: '10px' }}>
              {project.chips.map(chip => (
                <span key={chip} className="chip">{chip}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;