import React from "react";
import "../styles.css";  // Updated path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-category">
          <h2>Subjects</h2>
          <p>Courses grouped by subject</p>
          <h3>Discover our range of courses</h3>
          <ul>
            <li><a href="#">Online Courses</a></li>
            <li><a href="#">Online Certifications</a></li>
            <li><a href="#">Microcredentials</a></li>
            <li><a href="#">Online Bootcamps</a></li>
          </ul>
        </div>
        {/* Repeat other footer categories */}
      </div>
    </footer>
  );
};

export default Footer;
