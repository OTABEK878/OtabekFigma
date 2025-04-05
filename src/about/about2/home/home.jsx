import React from "react";
import { Link } from 'react-router-dom';
import "./home.css";

const Home = () => {
  return (
    <div className="home-container42">
      <div className="breadcrumb42">
      <Link to="/about">Homepage</Link> / 
      <Link to="/about-2"> About Us</Link> / 
      </div>
      <div className="home-content42">
        <div className="text-section42">
          <h1>AVAILABLE <br /> POSITIONS</h1>
          <p>Build your career with Createx Construction Bureau.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
