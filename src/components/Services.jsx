import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Mobile App Development',
      iconSrc: '/icons/technology_icon/flutter.png',
      color: '#0288d1',
      bgGradient: 'linear-gradient(135deg, rgba(2, 136, 209, 0.22), rgba(1, 87, 155, 0.08))',
      boxShadow: '0 8px 28px rgba(2, 136, 209, 0.25)',
      borderColor: 'rgba(2, 136, 209, 0.35)',
      description: 'Building fluid, cross-platform mobile apps for iOS and Android with smooth 60fps animations and native hardware integration.',
      // tags: ['Flutter', 'iOS & Android', 'State Management', 'Dart']
    },
    {
      title: 'Web Development',
      iconSrc: '/icons/technology_icon/react.png',
      color: '#61dafb',
      bgGradient: 'linear-gradient(135deg, rgba(97, 218, 251, 0.22), rgba(14, 116, 144, 0.08))',
      boxShadow: '0 8px 28px rgba(97, 218, 251, 0.25)',
      borderColor: 'rgba(97, 218, 251, 0.35)',
      description: 'Crafting responsive, high-performance websites and SPAs with modern UI frameworks, fast load times, and SEO best practices.',
      //tags: ['React.js', 'Next.js', 'Responsive UI', 'JavaScript']
    },
    {
      title: 'Backend Architecture',
      iconSrc: '/icons/technology_icon/database.png',
      color: '#3b82f6',
      bgGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.22), rgba(249, 115, 22, 0.08))',
      boxShadow: '0 8px 28px rgba(59, 130, 246, 0.25)',
      borderColor: 'rgba(59, 130, 246, 0.35)',
      description: 'Designing scalable RESTful APIs, secure authentication flows, real-time Socket.IO events, and efficient database architectures.',
      // tags: ['Node.js', 'REST APIs', 'Firebase', 'SQL & NoSQL']
    },
    {
      title: 'AI & Smart Integration',
      iconSrc: '/icons/technology_icon/ai.png',
      color: '#ec4899',
      bgGradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.22), rgba(139, 92, 246, 0.08))',
      boxShadow: '0 8px 28px rgba(236, 72, 153, 0.25)',
      borderColor: 'rgba(236, 72, 153, 0.35)',
      description: 'Integrating AI/ML APIs into user-facing apps for intelligent chat, personalized recommendation systems, and automated workflows.',
      // tags: ['AI/ML APIs', 'Smart Matching', 'Socket.IO', 'Automations']
    }
  ];

  return (
    <section id="services" className="animate-on-scroll">
      <div className="container">
        <h2 className="section-title">What I Do</h2>
        <p className="services-subtitle">
          End-to-end engineering solutions spanning mobile apps, scalable web platforms, and intelligent backend services.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-panel service-card"
              style={{ '--service-color': service.color }}
            >
              <div
                className="service-icon-box"
                style={{
                  background: service.bgGradient,
                  border: `1px solid ${service.borderColor}`,
                  boxShadow: service.boxShadow
                }}
              >
                <img
                  src={service.iconSrc}
                  alt={`${service.title} icon`}
                  className="service-icon-img"
                  loading="lazy"
                />
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>

              {service.tag && (
                <div className="service-tags">
                  {service.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="service-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
