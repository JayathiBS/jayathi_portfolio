import React, { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState({ email: false, phone: false });

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(prev => ({ ...prev, [type]: true }));
      setTimeout(() => setCopied(prev => ({ ...prev, [type]: false })), 1200);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = encodeURIComponent(formData.get('name'));
    const email = encodeURIComponent(formData.get('email'));
    const message = encodeURIComponent(formData.get('message'));
    const subject = `Portfolio inquiry from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.location.href = `mailto:jayathibaddewatta@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="wrap">
      <h2 className="section-title reveal">Contact</h2>
      <div className="grid cols-2">
        <div className="card reveal">
          <h3>Let's work together</h3>
          <p>Reach out via email or phone. I'm keen on internships, freelance opportunities, and collaborative projects.</p>
          <div className="contact-row" style={{ marginTop: '8px' }}>
            <div className="contact-pill">
              <span className="i"></span>
              <a href="mailto:jayathibaddewatta@gmail.com">jayathibaddewatta@gmail.com</a>
            </div>
            <div className="contact-pill">
              <span className="i"></span>
              <a href="tel:+94703998213">+94 70 399 8213</a>
            </div>
          </div>
          <div style={{ marginTop: '12px', display: 'flex', gap: '10px' }}>
            <button 
              className="btn" 
              onClick={() => copyToClipboard('jayathibaddewatta@gmail.com', 'email')}
            >
              {copied.email ? 'Copied!' : 'Copy Email'}
            </button>
            <button 
              className="btn" 
              onClick={() => copyToClipboard('+94703998213', 'phone')}
            >
              {copied.phone ? 'Copied!' : 'Copy Phone'}
            </button>
          </div>
        </div>
        <div className="card reveal" style={{ transitionDelay: '.05s' }}>
          <h3>Quick message</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gap: '10px' }}>
              <input 
                type="text" 
                name="name" 
                placeholder="Your name" 
                required
                style={{ border: '1px solid var(--border)', background: 'rgba(255,255,255,0.05)', color: 'var(--text)', borderRadius: '10px', padding: '10px' }}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your email" 
                required
                style={{ border: '1px solid var(--border)', background: 'rgba(255,255,255,0.05)', color: 'var(--text)', borderRadius: '10px', padding: '10px' }}
              />
              <textarea 
                name="message" 
                placeholder="Your message" 
                rows="4" 
                required
                style={{ border: '1px solid var(--border)', background: 'rgba(255,255,255,0.05)', color: 'var(--text)', borderRadius: '10px', padding: '10px' }}
              ></textarea>
              <button className="btn primary" type="submit">Send</button>
              <small style={{ color: 'var(--muted)' }}>This uses your email client. For a backend, connect Formspree or your API.</small>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;