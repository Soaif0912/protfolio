import React from 'react';

const About = () => {
  return (
    <section id="about" className="animate-on-scroll">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content" style={{ display: 'flex', flexDirection: 'row', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="about-image glass-panel" style={{ flex: '1', minWidth: '300px', maxWidth: '400px', height: '400px', borderRadius: '20px', overflow: 'hidden' }}>
            <img 
              src="/profile.jpg" 
              alt="Soaif Ikbal Mondal" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div className="about-text" style={{ flex: '2', minWidth: '300px' }}>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Hello! I'm a passionate developer with a knack for creating intuitive, 
              scalable, and visually engaging digital experiences. With a strong foundation 
              in both frontend and backend technologies, I bridge the gap between design and engineering.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
              My journey started with building small scripts, and today I help businesses 
              architect complex web and mobile applications from the ground up.
            </p>
            
            <div className="about-stats" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              <div className="stat-box glass-panel" style={{ padding: '1.5rem', borderRadius: '15px', flex: '1', minWidth: '150px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>3+</h3>
                <p style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Years Experience</p>
              </div>
              <div className="stat-box glass-panel" style={{ padding: '1.5rem', borderRadius: '15px', flex: '1', minWidth: '150px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>20+</h3>
                <p style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Projects Completed</p>
              </div>
              <div className="stat-box glass-panel" style={{ padding: '1.5rem', borderRadius: '15px', flex: '1', minWidth: '150px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>15+</h3>
                <p style={{ color: 'var(--text-secondary)', fontWeight: '500' }}>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
