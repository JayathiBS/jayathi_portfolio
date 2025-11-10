import React from 'react';

const skillsData = [
  {
    category: 'Programming Languages',
    items: ['Java', 'JavaScript', 'PHP', 'C/C++', 'HTML/CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Spring Boot', 'Node.js', 'Express.js', 'React', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    category: 'Tools & Other',
    items: ['GitHub', 'Postman', 'JWT Authentication', 'Figma', 'Canva', 'OpenAI API'],
  },
];

const Skills = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">💻 Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-xl dynamic-hover-card border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-blue-300 border-b border-blue-400/50 pb-2">
              {skill.category}
            </h3>
            <ul className="space-y-2">
              {skill.items.map((item, i) => (
                <li key={i} className="text-gray-300">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-blue-400">Certifications</h3>
        <ul className="space-y-2 text-lg">
          <li className="text-gray-300">Google UX Design Professional Certificate - Coursera (2025) [cite: 38]</li>
          <li className="text-gray-300">Certificate course of UI/UX designing - Sysflics (2025) [cite: 39]</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;