import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./home.css";

const Home = () => {
  return (
    <div className="home-container77">
      <nav className="breadcrumb77">
        <Link to="/news">Homepage</Link> / 
        <Link to="/news-2"> News</Link> / 
      </nav>

      <h1 className="title77">How to Build Climate Change-Resilient Infrastructure</h1>

      <div className="meta77">
        <span className="category77">Industry News</span> 
        <span className="date77">June 24, 2020</span> 
        <span className="comments77">4 comments</span>
      </div>

      <img className="hero-image77" src="./img/imagee9.png" alt="Construction worker installing solar panels" />

      <div className="social-icons77">
        <FaFacebookF className="icon77" />
        <FaLinkedinIn className="icon77" />
        <FaTwitter className="icon77" />
      </div>
    </div>
  );
};

export default Home;
