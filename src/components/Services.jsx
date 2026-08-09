import React from 'react';
import { Layout, Smartphone, Server } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      icon: <Layout size={40} className="text-accent-primary" />,
      description: 'Building responsive, fast, and SEO-friendly websites using modern frameworks.'
    },
    {
      title: 'Mobile App Development',
      icon: <Smartphone size={40} className="text-accent-primary" />,
      description: 'Creating cross-platform mobile applications for iOS and Android.'
    },
    {
      title: 'Backend Architecture',
      icon: <Server size={40} className="text-accent-primary" />,
      description: 'Designing scalable APIs, database schemas, and robust server logic.'
    }
  ];

  return (
    <section id="services" className="animate-on-scroll">
      <div className="container">
        <h2 className="section-title">What I Do</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {services.map((service, index) => (
            <div key={index} className="glass-panel" style={{ padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s ease' }}>
              <div style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
