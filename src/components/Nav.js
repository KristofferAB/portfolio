import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
import logo from "../images/logo.png";

function Nav() {
  return (
    <div>
      <nav>
        <Link className="nav-style" to="/portfolio">
          <img src={logo} alt="logo" className="logo-1"></img>
        </Link>
        <ul className="nav-links">
          <a className="nav-style" href="#home">
            Home
          </a>
          <a className="nav-style" href="#projects">
            Projects
          </a>
          <a className="nav-style" href="#education">
            Education
          </a>
          <a className="nav-style" href="#aboutMe">
            About me
          </a>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
