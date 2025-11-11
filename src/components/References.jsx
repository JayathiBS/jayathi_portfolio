import React from 'react';

const References = () => {
  const references = [
    {
      name: 'Dr. Nayanthara Samarasinghe (PhD)',
      position: 'Senior Lecturer, Department of Computer Science and Informatics, Faculty of Applied Sciences, Uva Wellassa University, Badulla, Sri Lanka',
      email: 'nayanathara@uwu.ac.lk'
    },
    {
      name: 'Dr. Vihara Jayakody (PhD)',
      position: 'Lecturer, Department of Computer Science and Informatics, Faculty of Applied Sciences, Uva Wellassa University, Badulla, Sri Lanka',
      phone: '+94719580948',
      email: 'vihara@uwu.ac.lk'
    }
  ];

  return (
    <section id="references" className="wrap">
      <h2 className="section-title reveal">References</h2>
      <div className="grid cols-2">
        {references.map((ref, index) => (
          <div key={ref.name} className="card reveal" style={{ transitionDelay: `${index * 0.05}s` }}>
            <h3>{ref.name}</h3>
            <div className="meta">{ref.position}</div>
            <p>
              <strong>Email:</strong> <a className="link" href={`mailto:${ref.email}`}>{ref.email}</a>
              {ref.phone && (
                <>
                  <br/>
                  <strong>Phone:</strong> <a className="link" href={`tel:${ref.phone}`}>{ref.phone}</a>
                </>
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default References;