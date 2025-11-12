import React from 'react';

const Contact = () => {

  const contactItems = [
    {
      id: 'email',
      title: 'Email',
      value: 'jayathibaddewatta@gmail.com',
      href: 'mailto:jayathibaddewatta@gmail.com',
      cta: 'Email',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="2" y="4" width="20" height="16" rx="2" fill="rgba(255,255,255,0.03)" />
          <path d="M3 6.5l9 6 9-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'phone',
      title: 'Phone',
      value: '+94 70 399 8213',
      href: 'tel:+94703998213',
      cta: 'Call',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 16.5v3a2.5 2.5 0 0 1-2.5 2.5 18.5 18.5 0 0 1-8.25-2.05A18.5 18.5 0 0 1 3.5 6.5 2.5 2.5 0 0 1 6 4h3a1 1 0 0 1 1 0.75l1 3a1 1 0 0 1-.25 1l-1.5 1.5a12 12 0 0 0 5.5 5.5L17 15a1 1 0 0 1 1-.25l3 1A1 1 0 0 1 21 16.5z" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 'address',
      title: 'Location',
      value: 'Keenaduwa, Ahangama, Sri Lanka',
      href: 'https://www.google.com/maps/search/?api=1&query=Keenaduwa%2C%20Ahangama%2C%20Sri%20Lanka',
      cta: ' Maps',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="9" r="2.1" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <section id="contact" className="wrap">
      <h2 className="section-title reveal">Contact</h2>

      <p className="muted reveal" style={{ marginTop: 6 }}>
        I'm open to internships, freelance work, and collaborations. Pick a method below or find me on LinkedIn/GitHub.
      </p>

      <div style={{ display: 'grid', gap: 18, marginTop: 18 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
          {contactItems.map(item => (
            <article
              key={item.id}
              className="card reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                padding: 18,
                alignItems: 'flex-start'
              }}
              aria-labelledby={`contact-${item.id}`}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, display: 'grid', placeItems: 'center', borderRadius: 10 }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 id={`contact-${item.id}`} style={{ margin: 0 }}>{item.title}</h4>
                    <div style={{ fontSize: 14, opacity: 0.9 }}>{item.value}</div>
                  </div>
                </div>

                <div style={{ marginLeft: 12 }}>
                  <a
                    className="btn"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    {item.cta}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="card reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: 14 }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ width: 52, height: 52, display: 'grid', placeItems: 'center', borderRadius: 10 }}>
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" fill="rgba(255,255,255,0.03)" />
                <path d="M8 12.5c0-1.5 1.1-2.8 2.5-2.8s2.5 1.2 2.5 2.8S12 15 10.5 15 8 14 8 12.5z" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <strong>Quick links</strong>
              <div className="muted" style={{ fontSize: 13 }}>Resume, GitHub and LinkedIn</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <a className="btn" href="/src/assets/Jayathi.pdf" target="_blank" rel="noreferrer" aria-label="Download CV">Resume</a>
            <a className="btn ghost" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
            <a className="btn ghost" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;