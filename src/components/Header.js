import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";
import "../App.css";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/" exact>
        <img
          src={logo}
          className="d-inline-block align-top App-logo"
          width="30px"
          height="30px"
          alt="logo"
        ></img>
        React
      </NavLink>
      <NavLink
        className="nav-item nav-link"
        to="/"
        exact
        activeStyle={activeStyle}
      >
        Home
      </NavLink>
      <NavLink
        className="nav-item nav-link"
        to="/about"
        activeStyle={activeStyle}
      >
        About
      </NavLink>
    </nav>
  );
};

export default Header;
