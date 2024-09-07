import React from "react";
import "../images1.css";  // Updated path

const Subjects = () => {
  return (
    <section className="subjects">
      <div className="subjects-header">
        <h2>Explore top subjects</h2>
        <a href="#" className="view-all">View all subjects</a>
      </div>
      <div className="subject-icons">
        <div className="subject-icon">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjy6BPk74BXRwseFwbcBSf10axUaQ5mOVOw&s" alt="Business & Management" />
          <p>Business & Management</p>
        </div>
        <div className="subject-icon">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5hbGdAU-mYg17U-Lj6--k51-C7YZL7A8xLw&s" alt="Healthcare & Medicine" />
          <p>Healthcare & Medicine</p>
        </div>
        <div className="subject-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/2472/2472253.png" alt="Teaching" />
          <p>Teaching</p>
        </div>
        <div className="subject-icon">
          <img src="https://www.shutterstock.com/shutterstock/photos/284890019/display_1500/stock-vector-computer-technician-icons-vector-284890019.jpg" alt="Tech & IT" />
          <p>Tech & IT</p>
        </div>
        <div className="subject-icon">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1GdSytsOa82iCAP-xyDNBoSbz72NvNHxZg&s" alt="Psychology & Mental Health" />
          <p>Psychology & Mental Health</p>
        </div>
        <div className="subject-icon">
          <img src="https://cdn-icons-png.flaticon.com/512/6750/6750010.png" alt="Science, Engineering & Maths" />
          <p>Science, Engineering & Maths</p>
        </div>
      </div>
    </section>
  );
};

export default Subjects;
