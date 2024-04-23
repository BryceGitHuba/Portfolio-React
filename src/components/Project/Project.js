import React from 'react';
// Correct the relative paths
import projectPic from '../../images/Project1.jpg'; // Go up two levels in the directory

const Project = ({ title, repoUrl }) => {
    const deployedUrl = "https://ccarroll929.github.io/wellness-tracker-app/";
    
    return (
      <div className="project">
        <img src={projectPic} alt={`Screenshot of ${title}`} />
        <h3>{title}</h3>
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    );
  };

export default Project;