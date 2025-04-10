import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="home-container42">
      <div className="breadcrumb42" data-aos="fade-up">
        <Link to="/about">Homepage</Link> / 
        <Link to="/about-2"> About Us</Link> / 
      </div>
      <div className="home-content42">
        <div className="text-section42" data-aos="fade-up">
          <h1>AVAILABLE <br /> POSITIONS</h1>
          <p>Build your career with Createx Construction Bureau.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
