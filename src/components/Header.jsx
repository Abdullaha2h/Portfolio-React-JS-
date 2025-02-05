import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles.css";

const Header = () => {
  const location = useLocation();

  return (
    <header id="header" className={location.pathname === "/projects" ? "projects-active" : ""}>
      <nav id="nav-bar" className={location.pathname === "/projects" ? "projects-nav" : ""}>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
