// src/components/Projects.jsx

const projectData = [
  {
    title: 'BestBid: Online Auction Platform',
    focus: 'Frontend Development & UI/UX',
    description: 'Designed and implemented a fully responsive and user-friendly interface using React, Tailwind CSS, and Framer Motion, enabling real-time bidding and secure transactions[cite: 28, 29, 30].',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'PostgreSQL'],
    link: '#', // Link to your specific project case study page
  },
  {
    title: 'HomePoint: Communication Module',
    focus: 'Full-Stack Development',
    description: 'Designed and implemented the real-time communication module (project-based chat rooms, secure messaging, file sharing) for a Construction Management System[cite: 18, 19].',
    tags: ['MERN Stack', 'Socket-IO', 'NextJs API', 'Tailwind'],
    link: '#', 
  },
  {
    title: 'Poultry Pro: Feed Management Module',
    focus: 'Backend & Inventory Logic',
    description: 'Created the Feed Management Module for a Poultry Farm Management system to track feed records, manage inventory, monitor usage, and analyze costs[cite: 24, 25].',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    link: '#', 
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10">
      <h2 className="text-4xl font-extrabold text-light-text mb-12 text-center inline-block pb-2">
        Selected Work
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div key={index} className="glass-card rounded-xl p-6 transition-transform transform hover:scale-[1.02] duration-300">
            <span className="text-sm font-medium accent uppercase">{project.focus}</span>
            <h3 className="text-2xl font-bold text-light-text mt-2 mb-4">{project.title}</h3>
            <p className="text-muted mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs bg-transparent text-light-text rounded-full border border-transparent">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className="inline-flex items-center accent font-semibold hover:underline"
            >
              View Project Details &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;