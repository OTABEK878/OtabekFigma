import React, { useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="home-container77">
      <div className="home-container88"> 
        <nav className="breadcrumb77" data-aos="fade-up">
          <Link style={{textDecoration: 'none', color: 'black'}} to="/news">Homepage</Link> / 
          <Link style={{textDecoration: 'none', color: 'black'}}  to="/news-2"> News</Link> / 
        </nav>

        <h1 className="title77" data-aos="fade-up" data-aos-delay="200">
          How to Build Climate Change-Resilient Infrastructure
        </h1>

        <div className="meta77" data-aos="fade-up" data-aos-delay="400">
          <span className="category77">Industry News</span> 
          <span className="date77">June 24, 2020</span> 
          <span className="comments77">4 comments</span>
        </div>

        <img className="hero-image77" src="./img/imagee9.png" alt="Construction worker installing solar panels" data-aos="fade-up" data-aos-delay="600" />

        <div className="social-icons77" data-aos="fade-up" data-aos-delay="800">
          <FaFacebookF className="icon77" />
          <FaLinkedinIn className="icon77" />
          <FaTwitter className="icon77" />
        </div>
      </div>
    </div>
  );
};

export default Home;
