import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";

const Home = () => {
  return (
    <div className="home-container34">
      <div className="abouttext">
      <div className="breadcrumb34">
      <Link style={{textDecoration: "none", color: "black"}} to="/about">Homepage</Link> / 
      <Link style={{textDecoration: "none", color: "black"}} to="/about-2"> About Us</Link> / 
      </div>

      <h1>ABOUT US</h1>

      <p className="description34">
        Createx Construction Bureau has been successfully operating in the USA construction market since 2000. 
        We are proud to offer you quality construction and exemplary service.
      </p>
      </div>

      <div className="background34">
        <div className="skyscrapers34"></div>
        <div className="clouds34"></div>
      </div>
    </div>
  );
};

export default Home;
