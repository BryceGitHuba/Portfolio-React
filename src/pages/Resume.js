import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a href="path/to/resume.pdf" download>Download My Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        {/* Add more proficiencies here */}
      </ul>
    </section>
  );
};

export default Resume;