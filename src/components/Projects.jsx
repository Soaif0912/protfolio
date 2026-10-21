import React from 'react';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Plugg: AI Social & Chat',
      category: 'AI-Powered Social App (Flutter)',
      iconSrc: '/icons/technology_icon/plugg_icon.webp',
      accentColor: 'linear-gradient(135deg, rgba(124, 58, 237, 0.8), rgba(79, 70, 229, 0.6))',
      description:
        'Developed an AI-powered social networking and chat application using Flutter, enabling personalized user matching based on interests, preferences, and responses.',
      features: [
        'AI-driven conversations using AI/ML APIs for matching & personalized recommendations',
        'Real-time one-to-one messaging using Socket.IO with backend event handling'
      ],
      //tags: ['Flutter', 'AI/ML APIs', 'Socket.IO', 'Real-Time Chat', 'State Management'],
      link: 'https://apps.apple.com/gb/app/plugg-your-ai-middleman/id6740482309',
      linkTag: 'View on App Store',
      badge: 'App Store'
    },
    {
      title: 'MySEDCO: Enterprise HRMS',
      category: 'Corporate HRMS Application (Flutter)',
      iconSrc: '/icons/technology_icon/mysedco_icon.webp',
      accentColor: 'linear-gradient(135deg, rgba(13, 148, 136, 0.8), rgba(217, 119, 6, 0.6))',
      description:
        'Built a production Flutter-based HRMS application to streamline employee workflows and internal business operations for enterprise staff.',
      features: [
        'Leave management, loan management, attendance tracking, and employee profiles',
        'Role-based access control (RBAC) and notification alert system'
      ],
      //tags: ['Flutter', 'Enterprise HRMS', 'REST APIs', 'RBAC', 'Push Notifications'],
      link: 'https://play.google.com/store/apps/details?id=sedco.injazmobile&hl=en_IN',
      linkTag: 'View on Play Store',
      badge: 'Google Play'
    },
    {
      title: 'Rent-Roll: Property Analytics',
      category: 'Property Management & Analytics (Flutter)',
      iconSrc: '/icons/technology_icon/rentroll_icon.webp',
      accentColor: 'linear-gradient(135deg, rgba(5, 150, 105, 0.8), rgba(13, 148, 136, 0.6))',
      description:
        'Developed an Australia-based property management analytics application for evaluating rent roll health and property acquisition opportunities.',
      features: [
        'Property-wise monthly rent tracking and comprehensive portfolio analytics',
        'State-level average earnings analysis for cross-state market comparison'
      ],
      //tags: ['Flutter', 'Property FinTech', 'Data Analytics', 'Dashboards', 'REST APIs'],
      link: 'https://play.google.com/store/apps/details?id=com.rentroll.rentroll&hl=en_IN',
      linkTag: 'View on Play Store',
      badge: 'Google Play'
    },
    {
      title: 'Soltopiah: Wellness & Social',
      category: 'Social Platform & Audio Streaming (Flutter)',
      iconSrc: '/icons/technology_icon/soltopiah_icon.webp',
      accentColor: 'linear-gradient(135deg, rgba(76, 29, 149, 0.85), rgba(30, 27, 75, 0.95))',
      description:
        'Developed a social platform combining wellness content with community-driven social interactions, live feeds, and in-app music streaming.',
      features: [
        'Social features including posts, likes, comments, sharing, and real-time chat',
        'Integrated music library and in-app audio player for mindfulness audio streaming'
      ],
      // tags: ['Flutter', 'Audio Streaming', 'Community Feed', 'Real-Time Chat', 'Media Player'],
      link: 'https://play.google.com/store/apps/details?id=iu.soltopiah.app&pli=1',
      linkTag: 'View on Play Store',
      badge: 'Google Play'
    },
    {
      title: 'Builder Brokers Australia',
      category: 'Construction & Home Remodeling Platform',
      iconSrc: '/icons/technology_icon/exl_icon.webp',
      accentColor: 'linear-gradient(135deg, rgba(217, 119, 6, 0.9), rgba(120, 53, 15, 0.95))',
      description:
        'A comprehensive web platform for Builder Brokers Australia (Extreme Line Construction), featuring custom home building, home renovations, and kitchen modifications.',
      features: [
        'Full service showcase for custom home builds, additions, kitchen & bathroom modifications',
        'Direct online consultation and project enquiry management for homeowner estimates'
      ],
      link: 'https://extremelineconstruction.com/',
      linkTag: 'Visit Live Website',
      badge: 'Live Website'
    },
    {
      title: 'Nanduji USA: Restaurant & Ordering',
      category: 'Restaurant & Food Delivery Platform (Web)',
      iconSrc: '/icons/technology_icon/nanduji_icon.png',
      accentColor: 'linear-gradient(135deg, rgba(234, 88, 12, 0.85), rgba(180, 83, 9, 0.75))',
      description:
        'A complete web and ordering platform for Nanduji, a family-run Indian street food restaurant chain in the USA, featuring online ordering and DoorDash delivery.',
      features: [
        'Categorized street food menu with live pricing, detailed items, and multi-location support',
        'Seamless online ordering workflow with integrated DoorDash delivery and pickup'
      ],
      link: 'https://nandujiusa.com/',
      linkTag: 'Visit Live Website',
      badge: 'Live Website'
    }
  ];

  return (
    <section id="projects" className="animate-on-scroll">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="projects-subtitle">
          Real-world, production-grade mobile applications and web platforms built with Flutter, React, and scalable backend integrations.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-panel">
              {/* Card Banner */}
              <div
                className="project-image-placeholder"
                style={{ background: project.accentColor }}
              >
                <div className="project-icon-wrapper">
                  {project.iconSrc ? (
                    <img
                      src={project.iconSrc}
                      alt={`${project.title} icon`}
                      className="project-app-icon"
                      loading="lazy"
                    />
                  ) : (
                    project.icon
                  )}
                </div>
                <span className="project-badge">{project.badge || 'Production App'}</span>
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

                {/* Tech Tags */ project.tag && (
                  <div className="project-tags">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="project-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* External Action Link */}
                {project.link && (
                  <div className="project-footer">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-playstore"
                    >
                      <span>{project.linkTag || 'View on Store'}</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
