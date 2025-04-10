import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="about-container33">
      <div className="about-content">
        <img 
          src="./services-img/image (8).jpg" 
          alt="Modern Kitchen Design" 
          className="about-image" 
          data-aos="zoom-in"
        />
        <div className="about-text" data-aos="fade-right">
          <h2>We offer</h2>
          <div className="offer-item" data-aos="fade-up">
            <span className="offer-icon">-</span>
            <div>
              <h3 style={{width: "200px"}}>Interior design of apartments</h3>
              <p style={{paddingTop: "20px"}}>
                Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus
                dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.
              </p>
            </div>
          </div>
          <div className="offer-item" data-aos="fade-up">
            <span className="offer-icon">+</span>
            <h3>Interior design of private houses</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
