import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <Link to="/">Home</Link>
      <Link to="/analysis">Analysis</Link>
    </div>
  );
}

export default Navbar;
