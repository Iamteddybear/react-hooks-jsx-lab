import React from 'react';
import { name, city } from "../data/data";

const Home = () => (
  <div id="home">
    <h1 style={{ color: "firebrick" }}>
      {`${name} is a Web Developer from ${city}`}
    </h1>
  </div>
);

export default Home;
