import React from 'react';
import "./benefits.css";

const Benefits = () => {
  return (
    <div className="benefits-container">
      <h2>Our benefits</h2>
      <p className="mission">Our mission is to set the highest standards for construction sphere.</p>
      <div className="benefits-list">
        <div className="benefit-item">
          <img src="./services-img/Vector.png" alt="Fixed Terms & Cost" className="benefit-icon" />
          <h3>Fixed Terms & Cost</h3>
          <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
        </div>
        <div className="benefit-item">
          <img src="./services-img/Group.png" alt="Qualified Workers" className="benefit-icon" />
          <h3>Qualified Workers</h3>
          <p>Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.</p>
        </div>
        <div className="benefit-item">
          <img src="./services-img/Groupp.png" alt="Supervision & Control" className="benefit-icon" />
          <h3>Supervision & Control</h3>
          <p>Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.</p>
        </div>
      </div>
      <button className="benefit-button">DISCUSS A PROJECT</button>
    </div>
  );
};

export default Benefits;
