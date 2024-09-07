import React from "react";
import "../images1.css";  // Updated path

const CourseCards = () => {
  return (
    <div className="course-cards">
      <div className="course-card">
        <img src="https://cdn.prod.website-files.com/6509fe179d7033a278a05268/652771a2ad43d990a8837c07_Blog-feature-HR-Pillar.png" alt="Wellbeing and Resilience at Work" />
        <h4>Wellbeing and Resilience at Work</h4>
        <p>Increase your resilience and adaptability, and explore the value of good health and wellbeing in the workplace.</p>
        <span className="course-type">Short Course</span>
      </div>
      <div className="course-card">
        <img src="https://www.cdc.gov/childrensmentalhealth/features/images/kids-holding-notebooks-900px.jpg?_=73752" alt="Mental Health: Working with Children and Young People" />
        <h4>Mental Health: Working with Children and Young People</h4>
        <p>Gain critical knowledge and practical skills to identify and address mental health issues in children and young people.</p>
        <span className="course-type">Microcredential</span>
      </div>
    </div>
  );
};

export default CourseCards;
