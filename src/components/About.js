import React from 'react';

const About = ({ image }) => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a web developer who loves to build things for the web.</p>
      <img src={image} alt="I made this" />
    </div>
  );
};

export default About;