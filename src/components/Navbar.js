// src/components/NavBar.js
import React from "react"; // Import React
import { NavLink } from "react-router-dom";
import "./NavBar.css"; // We'll create this next

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        className="nav-link"
      >
        Login
      </NavLink>
    </nav>
  );
}

export default NavBar;
