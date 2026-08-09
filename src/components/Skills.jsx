import React from 'react';
import { Code2, Server, Database, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} className="text-accent-primary" />,
      skills: ['Dart', 'JavaScript', 'PHP', 'TypeScript']
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Layers size={24} className="text-accent-primary" />,
      skills: ['Flutter', 'React.js', 'Node.js', 'Next.js']
    },
    {
      title: 'Databases',
      icon: <Database size={24} className="text-accent-primary" />,
      skills: ['SQL', 'NoSQL', 'Firebase', 'Supabase']
    },
    {
      title: 'Tools & CMS',
      icon: <Server size={24} className="text-accent-primary" />,
      skills: ['WordPress', 'Git', 'Figma', 'Docker']
    }
  ];

  return (
    <section id="skills" className="animate-on-scroll">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category glass-panel">
              <h3 className="skill-title">
                {category.icon}
                {category.title}
              </h3>
              <div className="skills-tags">
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
