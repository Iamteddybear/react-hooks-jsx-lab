import React from 'react';
import { image } from '../data/data';

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a budding software engineer.</p>
      <img src={image} alt="I made this" />
    </div>
  );
};

export default About;
