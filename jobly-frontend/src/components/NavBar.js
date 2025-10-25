// src/components/NavBar.js
import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ currentUser, logout }) {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        Jobly
      </NavLink>
      {currentUser ? (
        <ul>
          <li>
            <NavLink to="/companies">Companies</NavLink>
          </li>
          <li>
            <NavLink to="/jobs">Jobs</NavLink>
          </li>
          <li>
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
