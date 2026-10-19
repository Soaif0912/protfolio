import React from 'react';
import { Bot, Building2, TrendingUp, Sparkles, ExternalLink, CheckCircle2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Plugg: AI Social & Chat',
      category: 'AI-Powered Social App (Flutter)',
      icon: <Bot size={48} className="project-card-icon" />,
      accentColor: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      description:
        'Developed an AI-powered social networking and chat application using Flutter, enabling personalized user matching based on interests, preferences, and responses.',
      features: [
        'AI-driven conversations using AI/ML APIs for matching & personalized recommendations',
        'Real-time one-to-one messaging using Socket.IO with backend event handling',
        'Responsive UI, state management, authentication, notifications, and interaction workflows'
      ],
      tags: ['Flutter', 'AI/ML APIs', 'Socket.IO', 'Real-Time Chat', 'State Management'],
      link: 'https://play.google.com/store/apps/details?id=app.plugg.social&hl=en'
    },
    {
      title: 'MySEDCO: Enterprise HRMS',
      category: 'Corporate HRMS Application (Flutter)',
      icon: <Building2 size={48} className="project-card-icon" />,
      accentColor: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      description:
        'Built a production Flutter-based HRMS application to streamline employee workflows and internal business operations for enterprise staff.',
      features: [
        'Leave management, loan management, attendance tracking, and employee profiles',
        'Role-based access control (RBAC) and notification alert system',
        'Integrated REST APIs, secure authentication, and push notifications'
      ],
      tags: ['Flutter', 'Enterprise HRMS', 'REST APIs', 'RBAC', 'Push Notifications'],
      link: 'https://play.google.com/store/apps/details?id=sedco.injazmobile&hl=en_IN'
    },
    {
      title: 'Rent-Roll: Property Analytics',
      category: 'Property Management & Analytics (Flutter)',
      icon: <TrendingUp size={48} className="project-card-icon" />,
      accentColor: 'linear-gradient(135deg, #10b981, #06b6d4)',
      description:
        'Developed an Australia-based property management analytics application for evaluating rent roll health and property acquisition opportunities.',
      features: [
        'Property-wise monthly rent tracking and comprehensive portfolio analytics',
        'State-level average earnings analysis for cross-state market comparison',
        'Data-driven dashboards presenting property and financial insights efficiently'
      ],
      tags: ['Flutter', 'Property FinTech', 'Data Analytics', 'Dashboards', 'REST APIs'],
      link: 'https://play.google.com/store/apps/details?id=com.rentroll.rentroll&hl=en_IN'
    },
    {
      title: 'Soltopiah: Wellness & Social',
      category: 'Social Platform & Audio Streaming (Flutter)',
      icon: <Sparkles size={48} className="project-card-icon" />,
      accentColor: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      description:
        'Developed a social platform combining wellness content with community-driven social interactions, live feeds, and in-app music streaming.',
      features: [
        'Social features including posts, likes, comments, sharing, and real-time chat',
        'Integrated music library and in-app audio player for mindfulness audio streaming',
        'Custom audio state management, user interactions, and multimedia synchronization'
      ],
      tags: ['Flutter', 'Audio Streaming', 'Community Feed', 'Real-Time Chat', 'Media Player'],
      link: 'https://play.google.com/store/apps/details?id=iu.soltopiah.app&pli=1'
    }
  ];

  return (
    <section id="projects" className="animate-on-scroll">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="projects-subtitle">
          Real-world, production-grade applications built with Flutter, AI, and scalable backend integrations.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-panel">
              {/* Card Banner */}
              <div
                className="project-image-placeholder"
                style={{ background: project.accentColor }}
              >
                <div className="project-icon-wrapper">{project.icon}</div>
                <span className="project-badge">Google Play</span>
              </div>

              {/* Card Content */}
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Key Features List */}
                <div className="project-features">
                  {project.features.map((feature, fIndex) => (
                    <div key={fIndex} className="project-feature-item">
                      <CheckCircle2 size={16} className="project-feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* External Action Link */}
                <div className="project-footer">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-playstore"
                  >
                    <span>View on Play Store</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
