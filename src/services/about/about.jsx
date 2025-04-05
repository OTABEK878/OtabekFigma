import React from 'react';
import "./about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="service-section">
        <div className="service">
          <img src="./services-img/image (4).jpg" alt="Construction" />
          <div className="service-info">
            <h2>Construction</h2>
            <p>
            Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies sed ut ut augue. Mattis habitant venenatis, gravida posuere massa ac interdum. Eget aliquam dignissim ut vestibulum. 
            </p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>

        <div className="service">
          <div className="service-info">
            <h2>Project Development</h2>
            <p>
            Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget. 
            </p>
            <button className="learn-more">Learn More</button>
          </div>
          <img src="./services-img/image (5).jpg" alt="Project Development" />
        </div>

        <div className="service">
          <img src="./services-img/image (6).jpg" alt="Interior Design" />
          <div className="service-info">
            <h2>Interior Design</h2>
            <p>
            Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. 
            </p>
            <button className="learn-more">Learn More</button>
          </div>
        </div>

        <div className="service">
          <div className="service-info">
            <h2>Repairs</h2>
            <p>
            Facilisis cursus feugiat sit pulvinar amet. Ac facilisi dictum commodo, tortor gravida pretium, orci. Nunc sit sollicitudin id egestas mattis. Turpis viverra nec urna ultrices urna. 
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