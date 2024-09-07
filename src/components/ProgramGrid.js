import React from "react";
import "../point2.css";  // Updated path

const ProgramGrid = () => {
  return (
    <div className="program-grid">
      <div className="program-card">
        <div className="card-image1" style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaKs-GfErywGvfFWaPePbORKDEwqMvIyRahw&s")' }}>
          <div className="card-logo">
            <img src="https://logo.clearbit.com/coventry.ac.uk" alt="Coventry University Logo" />
          </div>
        </div>
        <div className="card-content1">
          <div className="program-type">MBA</div>
          <h2 className="program-title">Master of Business Administration</h2>
          <p className="program-description">Explore a range of topics designed to enhance your global perspective and emphasise the importance to managerial practice of intercultural awareness.</p>
          <a href="#" className="degree-button">Degree Program</a>
        </div>
      </div>
      {/* Add more program cards */}
    </div>
  );
};

export default ProgramGrid;
