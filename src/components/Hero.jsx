import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  const techStack = [
    { name: 'WordPress', icon: 'wordpress.png' },
    { name: 'React', icon: 'react.png' },
    { name: 'Node.js', icon: 'node_js.png' },
    { name: 'Flutter', icon: 'flutter.png' },
    { name: 'Android', icon: 'android.png' },
    { name: 'iOS', icon: 'ios.png' },
    { name: 'Firebase', icon: 'firebase.png' },
    { name: 'Supabase', icon: 'supabase.png' },
    { name: 'Git', icon: 'git.png' },
    { name: 'Database / SQL', icon: 'database.png' },
    { name: 'AI & ML', icon: 'ai.png' },

  ];

  return (
    <section id="home" className="hero-section">
      {/* Background Image & Gradient Overlay */}
      <div className="hero-bg-wrapper" aria-hidden="true">
        <img src="/hero-bg.jpg" alt="" className="hero-bg-img" />
        <div className="hero-bg-overlay" />
      </div>

      <div className="container hero-container">
        <div className="hero-content">
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

      {/* Modern Glassmorphic Tech Stack Marquee */}
      <div className="tech-slider">
        <div className="tech-slider-viewport">
          <div className="tech-slider-track">
            {[...techStack, ...techStack].map((tech, index) => (
              <div className="tech-pill" key={index}>
                <div className="tech-pill-icon">
                  <img src={`/icons/technology_icon/${tech.icon}`} alt={tech.name} />
                </div>
                <span className="tech-pill-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
