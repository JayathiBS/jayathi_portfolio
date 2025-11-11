import React from 'react';

const Certificates = () => {
  const certificates = [
    { title: 'Google UX Design Professional Certificate', meta: 'Coursera — 2025' },
    { title: 'Certificate course of UI/UX designing', meta: 'Sysflics — 2025' }
  ];

  return (
    <section id="certificates" className="wrap">
      <h2 className="section-title reveal">Certificates</h2>
      <div className="grid cols-2">
        {certificates.map((cert, index) => (
          <div key={cert.title} className="card reveal" style={{ transitionDelay: `${index * 0.05}s` }}>
            <h3>{cert.title}</h3>
            <div className="meta">{cert.meta}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;