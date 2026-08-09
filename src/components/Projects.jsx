import React from 'react';
import { Smartphone, Monitor, Database, PenTool, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Mobile App',
      category: 'Hybrid App (Flutter)',
      icon: <Smartphone size={64} className="project-icon" />,
      description: 'A full-featured cross-platform shopping application built with Flutter and Firebase.',
      link: '#'
    },
    {
      title: 'Corporate Website',
      category: 'Web (React.js)',
      icon: <Monitor size={64} className="project-icon" />,
      description: 'A modern, responsive company portfolio built with React and smooth animations.',
      link: '#'
    },
    {
      title: 'Booking API System',
      category: 'Backend (Node.js/SQL)',
      icon: <Database size={64} className="project-icon" />,
      description: 'A scalable RESTful API handling reservations, payments, and user management.',
      link: '#'
    },
    {
      title: 'Blogging Platform',
      category: 'CMS (WordPress)',
      icon: <PenTool size={64} className="project-icon" />,
      description: 'A customized WordPress theme with advanced plugins and optimized performance.',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="animate-on-scroll">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-panel">
              <div className="project-image-placeholder">
                {project.icon}
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <a href={project.link} className="project-link">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
