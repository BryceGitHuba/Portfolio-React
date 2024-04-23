import React from 'react';
import Project from '../components/Project/Project';

const projects = [
  {
    title: 'Project 1',
    imageUrl: 'path/to/image',
    deployedUrl: 'link-to-deployed-app',
    repoUrl: 'link-to-github-repo',
  },
  // ... other projects
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;