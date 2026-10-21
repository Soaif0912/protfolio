import React from 'react';

const About = () => {
  return (
    <section id="about" className="animate-on-scroll">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content" style={{ display: 'flex', flexDirection: 'row', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="about-image glass-panel" style={{ flex: '1', minWidth: '280px', maxWidth: '360px', height: '360px', borderRadius: '20px', overflow: 'hidden' }}>
            <img
              src="/profile.jpg"
              alt="Soaif Ikbal Mondal"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="about-text" style={{ flex: '2', minWidth: '300px' }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Hello! I'm a passionate developer with a knack for creating intuitive,
              scalable, and visually engaging digital experiences. With a strong foundation
              in both frontend and backend technologies, I bridge the gap between design and engineering.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
              My journey started with building small scripts, and today I help businesses
              architect complex web and mobile applications from the ground up.
            </p>

            <div className="about-stats" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div className="stat-box glass-panel" style={{ padding: '1.25rem 1.5rem', borderRadius: '15px', flex: '1', minWidth: '140px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.2rem', color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>3+</h3>
                <p style={{ color: 'var(--text-secondary)', fontWeight: '500', fontSize: '0.92rem' }}>Years Experience</p>
              </div>
              <div className="stat-box glass-panel" style={{ padding: '1.25rem 1.5rem', borderRadius: '15px', flex: '1', minWidth: '140px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.2rem', color: 'var(--accent-primary)', marginBottom: '0.25rem' }}>20+</h3>
                <p style={{ color: 'var(--text-secondary)', fontWeight: '500', fontSize: '0.92rem' }}>Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
