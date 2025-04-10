import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./how.css";

const How = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="how-container">
      <h2 data-aos="fade-down">That's how we do it</h2>
      <div className="steps">
        <div className="step" data-aos="zoom-in" data-aos-delay="100">
          <span className="step-number">01</span>
          <h3>Work Estimate</h3>
          <p>Culpa nostrud commodo ea consequat aliquip reprehenderit.</p>
        </div>
        <div className="step" data-aos="zoom-in" data-aos-delay="200">
          <span className="step-number">02</span>
          <h3>Contract</h3>
          <p>Laoreet ultrices curabitur luctus quisque consequat.</p>
        </div>
        <div className="step active" data-aos="zoom-in" data-aos-delay="300">
          <span className="step-number">03</span>
          <h3>Mobilization</h3>
          <p>Odio massa scelerisque purus arcu sed velit eleifend cursus leo.</p>
        </div>
        <div className="step" data-aos="zoom-in" data-aos-delay="400">
          <span className="step-number">04</span>
          <h3>Construction Work</h3>
          <p>Adipisicing esse aliqua aliquip qui amet.</p>
        </div>
      </div>
    </div>
  );
};

export default How;
