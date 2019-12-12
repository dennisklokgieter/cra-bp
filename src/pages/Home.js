import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home">
    <div className="jumbotron">
      <h1>HomePage</h1>
      <p>Home Content</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Switch
      </Link>
    </div>
  </div>
);

export default Home;
