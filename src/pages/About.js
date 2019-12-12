import React from "react";
import { Link } from "react-router-dom";

const About = () => (
  <div className="jumbotron">
    <h1>AboutPage</h1>
    <p>About Content</p>
    <Link to="/" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default About;
