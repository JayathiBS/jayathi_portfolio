import React from 'react';

const About = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">👋 About Me</h2>
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl dynamic-hover-card">
        <p className="text-lg leading-relaxed mb-4">
          [cite_start]I am **Jayathi Jayoda**, an undergraduate pursuing a **BSc (Hons) in Computer Science and Technology** at Uva Wellassa University of Sri Lanka[cite: 4, 10].
        </p>
        <p className="text-lg leading-relaxed mb-4">
          My academic journey, combined with practical experience, has equipped me with a robust foundation in software development and a keen eye for detail. [cite_start]I'm driven by a passion for creating efficient, collaborative, and user-friendly systems, as demonstrated by my contributions to projects like the **HomePoint Construction Management System** and **PoultryPro - Poultry Farm Management Platform**[cite: 17, 21].
        </p>
        <p className="text-lg leading-relaxed">
          [cite_start]I pride myself on strong **teamwork** and **problem-solving** abilities [cite: 8][cite_start], constantly seeking opportunities to learn new technologies, including my recent certification in **Google UX Design Professional**[cite: 38]. I thrive in dynamic environments where I can leverage my full-stack capabilities to deliver innovative solutions.
        </p>
      </div>
    </div>
  );
};

export default About;