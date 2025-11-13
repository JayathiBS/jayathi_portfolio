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
      chips: ['MERN', 'Socket.IO', 'Next.js API', 'Tailwind'],
      linkedin: 'https://www.linkedin.com/posts/jayathi-baddewaththa-922081315_constructiontech-projectmanagement-fullstackdevelopment-activity-7392390444338307073-1Ot_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_sI-oBEUpR7LC_pvlT3FY-t9mdn6PDJAs'
    },
    {
      title: 'PoultryPro – Poultry Farm Management',
      image: poultryProImg,
      description: 'Manages inventory, feed, medicines, suppliers, and sales with an online marketplace and reporting modules.',
      contribution: 'Built the Feed Management Module to add, update, delete, and track feed records; manage inventory, usage, and cost analysis.',
      chips: ['PHP', 'Bootstrap', 'MySQL'],
      linkedin: 'https://www.linkedin.com/posts/jayathi-baddewaththa-922081315_projectcompletion-teamwork-poultrymanagement-activity-7331897354389790720-FEeH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_sI-oBEUpR7LC_pvlT3FY-t9mdn6PDJAs'
    },
    {
      title: 'BestBid: Online Auction Platform',
      image: bestBidImg,
      description: 'Real-time bidding platform enabling secure transactions and a seamless cross-device experience.',
      contribution: 'Focused on frontend development: responsive UI with React, Tailwind, and Framer Motion; collaborated to integrate Django REST and PostgreSQL.',
      chips: ['React', 'Tailwind', 'Framer Motion', 'Django REST', 'PostgreSQL'],
      linkedin: 'https://www.linkedin.com/posts/jayathi-baddewaththa-922081315_webdevelopment-react-django-activity-7352589426381778945-6qtI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE_sI-oBEUpR7LC_pvlT3FY-t9mdn6PDJAs'
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
            {/* Action buttons: GitHub and LinkedIn (open in new tab) */}
            <div style={{ marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <a
                className="btn"
                href="https://github.com/JayathiBS"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" style={{ marginRight: 8 }} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
             
              </a>
              <a
                className="btn ghost"
                href={project.linkedin || 'https://www.linkedin.com/in/jayathi-baddewaththa-922081315'}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on LinkedIn`}
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" style={{ marginRight: 8 }} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.146 0C.513 0 0 .513 0 1.146v13.708C0 15.487.513 16 1.146 16h13.708C15.487 16 16 15.487 16 14.854V1.146C16 .513 15.487 0 14.854 0H1.146zM4.943 13.5H2.542V6.75h2.401v6.75zM3.743 5.655c-.777 0-1.406-.63-1.406-1.407 0-.778.629-1.407 1.406-1.407.777 0 1.406.629 1.406 1.407 0 .777-.63 1.407-1.406 1.407zM13.458 13.5h-2.4v-3.375c0-.804-.015-1.838-1.12-1.838-1.12 0-1.292.874-1.292 1.775V13.5h-2.399V6.75h2.304v.94h.033c.321-.608 1.104-1.248 2.272-1.248 2.43 0 2.877 1.6 2.877 3.678V13.5z" />
                </svg>
                
              </a>
            </div>
            {/* chips displayed above (between title and description) */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;