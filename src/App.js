import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Subjects from "./components/Subjects";
import CourseCards from "./components/CourseCards";
import ProgramGrid from "./components/ProgramGrid";
import "./styles.css"; // Import main styles
import "./images1.css"; // Import images styles
import "./point2.css"; // Import point2 styles

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1>
          <span className="accent">One Stop Solution</span><br />
          <span className="main">for your skills</span>
        </h1>
        {/* <div className="rating">4.00 average rating</div>
        <div className="stars">★★★★☆</div>
        <div className="reviews">186,235 learner reviews</div>
        <div className="powered-by">Powered by yotpo.</div> */}
        <p className="description">
        Prepare yourself for placements and the software industry! Master essential tech stacks, build in-demand skills across development, data science, cybersecurity, and more. Plus, get AI-assisted interview prep to help you stand out and land your dream role.
        </p>
        <div className="cta-container">
          <a href="#" className="cta cta-primary">Get Unlimited learning</a>
          <a href="#" className="cta cta-secondary">Explore courses</a>
        </div>
        <Subjects />
        <CourseCards />
      </div>
      <ProgramGrid />
      <Footer />
    </div>
  );
}

export default App;
