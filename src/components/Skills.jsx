import React from 'react';

// static icon imports (falls back to default.svg when missing)
import icJS from '../assets/icons/js.svg';
import icJava from '../assets/icons/java.svg';
import icPHP from '../assets/icons/php.svg';
import icCPP from '../assets/icons/cpp.svg';
import icHTML from '../assets/icons/html.svg';
import icCSS from '../assets/icons/css.svg';
import icNode from '../assets/icons/nodejs.svg';
import icExpress from '../assets/icons/express.svg';
import icReact from '../assets/react.svg';
import icBootstrap from '../assets/icons/default.svg';
import icTailwind from '../assets/icons/tailwind.svg';
import icSpring from '../assets/icons/spring.svg';
import icMongo from '../assets/icons/mongodb.svg';
import icMySQL from '../assets/icons/mysql.svg';
import icGitHub from '../assets/icons/github.svg';
import icPostman from '../assets/icons/postman.svg';
import icJWT from '../assets/icons/jwt.svg';
import icFigma from '../assets/icons/figma.svg';
import icCanva from '../assets/icons/canva.svg';
import icOpenAI from '../assets/icons/openai.svg';
import icDefault from '../assets/icons/default.svg';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      meta: 'Core languages & basics',
      skills: [
        { name: 'JavaScript', icon: icJS },
        { name: 'Java', icon: icJava },
        { name: 'PHP', icon: icPHP },
        { name: 'C/C++', icon: icCPP },
        { name: 'HTML/CSS', icon: null }
      ]
    },
    {
      title: 'Frameworks & Libs',
      meta: 'Frontend & backend stacks',
      skills: [
        { name: 'React', icon: icReact },
        { name: 'Node.js', icon: icNode },
        { name: 'Express', icon: icExpress },
        { name: 'Spring Boot', icon: icSpring },
        { name: 'Tailwind CSS', icon: icTailwind },
        { name: 'Bootstrap', icon: icBootstrap }
      ]
    },
    {
      title: 'Databases',
      meta: 'Storage & querying',
      skills: [
        { name: 'MongoDB', icon: icMongo },
        { name: 'MySQL', icon: icMySQL }
      ]
    },
    {
      title: 'Tools & Design',
      meta: 'Dev tools & UI design',
      skills: [
        { name: 'GitHub', icon: icGitHub },
        { name: 'Postman', icon: icPostman },
        { name: 'JWT', icon: icJWT },
        { name: 'Figma', icon: icFigma },
        { name: 'Canva', icon: icCanva }
      ]
    },
    {
      title: 'AI & APIs',
      meta: 'ML & integration',
      skills: [
        { name: 'OpenAI API', icon: icOpenAI }
      ]
    }
  ];

  return (
    <section id="skills" className="wrap">
      <h2 className="section-title reveal">Key Skills</h2>
     
      <div className="grid cols-3">
        {skillCategories.map((category, index) => (
          <div key={category.title} className="card reveal" style={{ transitionDelay: `${index * 0.06}s` }}>
            <h3>{category.title}</h3>
            <div className="meta">{category.meta}</div>
            <div className="skills-grid">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-tile" title={skill.name}>
                  {skill.icon
                    ? <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
                    : <img src={icDefault} alt="icon" className="skill-icon" />
                  }
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;