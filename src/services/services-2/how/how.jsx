import React from 'react';
import "./how.css";

const How = () => {
  return (
    <div className="how-container">
      <h2>That's how we do it</h2>
      <div className="steps">
        <div className="step">
          <span className="step-number">01</span>
          <h3>Work Estimate</h3>
          <p>Culpa nostrud commodo ea consequat aliquip reprehenderit.</p>
        </div>
        <div className="step">
          <span className="step-number">02</span>
          <h3>Contract</h3>
          <p>Laoreet ultrices curabitur luctus quisque consequat.</p>
        </div>
        <div className="step active">
          <span className="step-number">03</span>
          <h3>Mobilization</h3>
          <p>Odio massa scelerisque purus arcu sed velit eleifend cursus leo.</p>
        </div>
        <div className="step">
          <span className="step-number">04</span>
          <h3>Construction Work</h3>
          <p>Adipisicing esse aliqua aliquip qui amet.</p>
        </div>
      </div>
    </div>
  );
};

export default How;