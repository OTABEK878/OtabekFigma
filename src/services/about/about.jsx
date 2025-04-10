import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./about.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="about-container">
      <div className="service-section">
        <div className="service" data-aos="fade-right">
          <img src="./services-img/image (4).jpg" alt="Construction" />
          <div className="service-info">
            <h2>Construction</h2>
            <p>
              Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh.
            </p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>

        <div className="service" data-aos="fade-left">
          <div className="service-info">
            <h2>Project Development</h2>
            <p>
              Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in.
            </p>
            <button className="learn-more">Learn More</button>
          </div>
          <img src="./services-img/image (5).jpg" alt="Project Development" />
        </div>

        <div className="service" data-aos="fade-right">
          <img src="./services-img/image (6).jpg" alt="Interior Design" />
          <div className="service-info">
            <h2>Interior Design</h2>
            <p>
              Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida.
            </p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>

        <div className="service" data-aos="fade-left">
          <div className="service-info">
            <h2>Repairs</h2>
            <p>
              Facilisis cursus feugiat sit pulvinar amet. Ac facilisi dictum commodo, tortor gravida pretium, orci.
            </p>
            <button className="learn-more">Learn More</button>
          </div>
          <img src="./services-img/image (7).jpg" alt="Repairs" />
        </div>
      </div>
    </div>
  );
};

export default About;
