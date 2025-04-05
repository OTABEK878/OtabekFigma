import React from "react";
import "./project.css";

const Project = () => {
  return (
    <div className="project-container">
      {/* Chap tomonda matn */}
      <div className="project-goal">
        <h2>Project goal</h2>
        <p>
          Build a private house 840 sq. feet with a large living room, three
          bedrooms, two bathrooms, a terrace, a pool and a garage for two cars.
        </p>
        <p>
          Modern design and care for each family member to feel as comfortable
          as possible in the new home.
        </p>
      </div>

      {/* O'ng tomonda tafsilotlar */}
      <div className="project-details">
        <div className="detail-item">
          <div className="detail-title">LOCATION</div>
          <div className="detail-value">2464 Royal Ln. Mesa, New Jersey</div>
        </div>
        <div className="detail-item">
          <div className="detail-title">CLIENT</div>
          <div className="detail-value">Darlene Robertson</div>
        </div>
        <div className="detail-item">
          <div className="detail-title">ARCHITECT</div>
          <div className="detail-value">HIK Architecture</div>
        </div>
        <div className="detail-item">
          <div className="detail-title">SIZE</div>
          <div className="detail-value">840 sq. feet</div>
        </div>
        <div className="detail-item">
          <div className="detail-title">VALUE</div>
          <div className="detail-value">$2 million</div>
        </div>
        <div className="detail-item">
          <div className="detail-title">COMPLETED</div>
          <div className="detail-value">May 2020</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
