import React from "react";
import "../styles.css";  // Updated path

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-text">One</span><span className="logo-text bold">Stop</span>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="#">Subjects</a><span className="arrow">▼</span></li>
          <li><a href="#">Courses</a><span className="arrow">▼</span></li>
          <li><a href="#">OneStop for Skills</a><span className="arrow">▼</span></li>
        </ul>
      </nav>
      <div className="search-container">
        <input type="text" placeholder="Search online courses" />
        <button><img src="https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png" alt="Search" /></button>
      </div>
      <div className="auth-buttons">
        <a href="#" className="sign-in">Sign in</a>
        <a href="#" className="register">Register</a>
      </div>
    </header>
  );
};

export default Header;
