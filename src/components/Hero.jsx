import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  const icons = [
    'ai.png', 'android.png', 'database.png', 'firebase.png', 'flutter.png',
    'git.png', 'ios.jpg', 'node_js.png', 'react.png', 'supabase.png', 'wordpress.jpg'
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content" style={{ paddingBottom: '6rem' }}>
          <span className="hero-subtitle">Hello, I'm</span>
          <h1 className="hero-title">Soaif Ikbal Mondal</h1>
          <h2 className="hero-role">Full-Stack Developer & Freelancer</h2>
          <p className="hero-desc">
            I build modern, scalable, and visually stunning web and mobile applications.
            Let's turn your ideas into reality.
          </p>
          <div className="hero-btn-group">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Auto Slider for Tech Icons */}
      <div className="tech-slider">
        <div className="tech-slider-track">
          {[...icons, ...icons].map((icon, index) => (
            <div className="tech-slide" key={index}>
              <img src={`/icons/technology_icon/${icon}`} alt={icon.split('.')[0]} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
