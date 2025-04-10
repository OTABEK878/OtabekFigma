import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="home-container50">
      <div style={{ paddingLeft: '90px' }} className="home-content50">
        <nav className="breadcrumb" data-aos="fade-up">
          <Link to="/news">Homepage</Link> / 
          <Link to="/news-2"> News</Link> / 
        </nav>
        <h1 className="home-title50" data-aos="fade-up">NEWS</h1>
        <p className="home-subtitle50" data-aos="fade-up" data-aos-delay="200">
          Stay tuned with our news, expert tips and articles.
        </p>
      </div>
    </div>
  );
};

export default Home;
