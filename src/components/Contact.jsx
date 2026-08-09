import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! This is a dummy form, so no email was sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="animate-on-scroll">
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="section-title">Get In Touch</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
          Have a project in mind or just want to say hi? Feel free to drop a message!
        </p>

        <div className="glass-panel" style={{ padding: '3rem', borderRadius: '20px' }}>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: '1', minWidth: '200px' }}>
                <label htmlFor="name" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: '1', minWidth: '200px' }}>
                <label htmlFor="email" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
              <label htmlFor="message" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your message here..."
                style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none', resize: 'vertical' }}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );

};

export default Contact;
