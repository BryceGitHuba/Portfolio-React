import React from 'react';
import profilePic from '../images/pfp.jpg';  // Importing the image

const About = () => {
  return (
    <section>
      <h2>About Me</h2>
      <p>I Make coding for fun</p>
      <img src={profilePic} alt=" Bryce W." /> </section>
  );
};

export default About;