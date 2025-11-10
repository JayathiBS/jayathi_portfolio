import React from 'react';

const projectsData = [
  {
    title: "HomePoint Construction Management System",
    description:
      "HomePoint is a web-based system for managing construction site operations, including bookings, projects, payroll, inventory, and communication. I designed and implemented the real-time communication module for project-based chat rooms, secure messaging, and in-chat file sharing.",
    technologies: "MERN Stack, Socket.IO, JavaScript, Next.js API, Tailwind CSS",
  },
  {
    title: "Poultry Pro - Poultry Farm Management Platform",
    description:
      "A web-based platform enabling efficient handling of inventory, feed, medicines, suppliers, and sales, including an online marketplace. My contribution was creating the Feed Management Module to add, update, delete, and track feed records, helping manage inventory and analyze costs.",
    technologies: "HTML, CSS, JavaScript, Bootstrap, PHP, MySQL",
  },
  {
    title: "BestBid: Online Auction Platform",
    description:
      "Developed an online auction platform enabling real-time bidding and secure transactions. I focused on frontend development, designing and implementing a fully responsive and user-friendly interface.",
    technologies: "React, Tailwind CSS, Framer Motion, Django REST Framework, PostgreSQL",
  },
];

const uiUxProjects = [
  "Construction Site Web App UI Using Figma",
  "Villa Home Page UI Using Figma",
  "Restaurant Mobile App UI Using Figma",
  "Mobile App UI Using Figma",
  "Studio Website Home Page UI Using Figma",
];

const Projects = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">🛠️ Key Projects</h2>
      <p className="text-center text-lg mb-8 text-gray-400">Successfully completed multiple full-stack and UI/UX projects during my degree.</p>

      <div className="space-y-12">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-lg shadow-xl dynamic-hover-card border border-gray-700 hover:border-blue-400 transition-colors"
          >
            <h3 className="text-3xl font-bold mb-3 text-blue-300">{project.title}</h3>
            <p className="text-lg mb-4 text-gray-300">{project.description}</p>
            <p className="text-sm font-semibold text-blue-400">
              Technologies: <span className="text-gray-400 font-normal">{project.technologies}</span>
            </p>
          </div>
        ))}
      </div>

      <h3 className="text-3xl font-bold text-center mt-16 mb-8 text-blue-400">🎨 UI/UX Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {uiUxProjects.map((item, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow dynamic-hover-card border border-gray-700">
            <p className="text-lg text-gray-300 italic">{item}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Projects;