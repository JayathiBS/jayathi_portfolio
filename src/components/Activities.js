import React from 'react';

const Activities = () => {
  return (
    <section id="activities" className="wrap">
      <h2 className="section-title reveal">Volunteering & Extracurricular</h2>
      <div className="card reveal">
        <h3>Design Team — IMPETUS (International Symposium on Computing, Engineering, and Technology)</h3>
        <div className="meta">IEEE Uva Wellassa University</div>
      </div>
      <h2 className="section-title reveal" style={{ marginTop: '28px' }}>Achievements</h2>
      <div className="card reveal" style={{ transitionDelay: '.05s' }}>
        <h3>4+ Full‑Stack Projects</h3>
        <p>Successfully completed four or more full‑stack software projects during the degree.</p>
      </div>
    </section>
  );
};

export default Activities;