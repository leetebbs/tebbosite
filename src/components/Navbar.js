import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="linkText">
          Home
        </Link>
        <Link to="/about" className="linkText">
          About
        </Link>
        <Link to="/portfolio" className="linkText">
          Portfolio
        </Link>
      </div>
      {/* <div className="close">X</div> */}
      {/* <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
        </ul> */}
    </>
  );
}

export default Navbar;
