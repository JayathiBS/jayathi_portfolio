// src/components/About.jsx

const skills = [
  { area: 'Frontend Dev', tools: ['React', 'NextJs', 'JavaScript', 'Tailwind CSS', 'Bootstrap'] },
  { area: 'UI/UX Design', tools: ['Figma', 'Prototyping', 'User Research', 'Google UX Design Cert'] },
  { area: 'Quality Assurance', tools: ['Manual Testing', 'Test Case Design', 'Detail-Oriented Approach'] },
  { area: 'Backend & Tools', tools: ['Java/Spring Boot', 'NodeJS/ExpressJS', 'MongoDB/MySQL', 'GitHub', 'Postman'] },
];

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <h2 className="text-4xl font-extrabold text-light-text mb-12 text-center inline-block pb-2">
        My Focus & Expertise
      </h2>

      <div className="lg:flex gap-12">
        {/* Left Column: Summary & Education */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h3 className="text-2xl font-semibold text-light-text mb-4">Who I Am</h3>
          <p className="text-muted leading-relaxed">
            I'm a motivated and detail-oriented undergraduate from Uva Wellassa University of Sri Lanka. I am driven by the desire to build and assure high-quality software. My passion lies in crafting applications that are not only functional but also highly usable and bug-free.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            I combine strong Computer Science fundamentals with practical skills in Frontend development and design, backed by professional certifications in UX and hands-on project experience.
          </p>

          <h3 className="text-2xl font-semibold text-light-text mt-8 mb-4">Education</h3>
          <p className="text-light-text font-medium">BSc (Hons) in Computer Science and Technology (Reading)</p>
          <p className="text-muted">Uva Wellassa University of Sri Lanka | 2022 - Present</p>
        </div>

        {/* Right Column: Skills Grid */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-semibold text-light-text mb-4">Technical Stack</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.area} className="p-6 glass-card rounded-lg shadow-xl">
                <h4 className="text-xl font-bold accent mb-3">{skill.area}</h4>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-sm bg-transparent text-light-text rounded-full border border-transparent"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;