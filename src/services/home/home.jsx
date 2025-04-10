import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="homme-containerr">
      <div className="homme-container">
        <div className="home-container1">
          <div className="breadcrumb" data-aos="fade-up">
            <Link to="/services">Homepage</Link> /
            <Link to="/services-2"> Services</Link> /
            <span> Interior Design</span>
          </div>
          <div className="content" data-aos="fade-up">
            <h1>SERVICES</h1>
            <p>
              If you are looking for a full-service construction company, look to
              Createx Construction Bureau. We are doing our best to be a partner
              for all of your construction needs.
            </p>
          </div>
        </div>
        <div className="img" data-aos="zoom-in">
          <img style={{ width: "100%", height: "500px" }} src="./img/image.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
