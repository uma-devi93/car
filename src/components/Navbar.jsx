import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="nav-left">
        <img
          src="https://thumbs.dreamstime.com/b/minimalist-luxury-car-brand-logo-design-wings-shield-design-minimalist-logo-luxury-car-brand-exudes-321641349.jpg"
          alt="logo"
          className="nav-logo"
        />
        <span className="logo-text">Golden CarRental</span>
      </div>

      {/* NAV LINKS */}
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>Register</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/carbooking" className={({ isActive }) => isActive ? "active" : ""}>CarBooking</NavLink>
        </li>
        <li>
          <NavLink to="/adminlogin" className={({ isActive }) => isActive ? "active" : ""}>AdminLogin</NavLink>
        </li>
      </ul>

      {/* DARK MODE BUTTON */}
      <button className="dark-btn" onClick={toggleDarkMode}>
        {darkMode ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;
