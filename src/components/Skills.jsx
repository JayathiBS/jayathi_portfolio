import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      meta: 'Java, JavaScript, PHP, C/C++, HTML/CSS',
      skills: ['Java', 'JavaScript', 'PHP', 'C/C++', 'HTML/CSS']
    },
    {
      title: 'Frameworks',
      meta: 'Spring Boot, NodeJS, ExpressJS, React, Bootstrap, Tailwind CSS',
      skills: ['Spring Boot', 'Node.js', 'Express', 'React', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'Databases',
      meta: 'MongoDB, MySQL',
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Tools',
      meta: 'GitHub, Postman, JWT Authentication, Figma, Canva',
      skills: ['GitHub', 'Postman', 'JWT', 'Figma', 'Canva']
    },
    {
      title: 'AI Tools',
      meta: 'OpenAI API',
      skills: ['OpenAI API']
    }
  ];

  return (
    <section id="skills" className="wrap">
      <h2 className="section-title reveal">Key Skills</h2>
      <div className="grid cols-3">
        {skillCategories.map((category, index) => (
          <div 
            key={category.title} 
            className="card reveal" 
            style={{ transitionDelay: `${index * 0.05}s` }}
          >
            <h3>{category.title}</h3>
            <div className="meta">{category.meta}</div>
            <div>
              {category.skills.map(skill => (
                <span key={skill} className="chip">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;