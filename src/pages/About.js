import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <div className="about">
    <div className="jumbotron">
      <h1>AboutPage</h1>
      <p>About Content</p>
      <Link to="/" className="btn btn-primary btn-lg">
        Switch
      </Link>
    </div>
  </div>
);

export default About;
