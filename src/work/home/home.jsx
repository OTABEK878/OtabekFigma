import React from "react";
import { FaHome, FaDraftingCompass, FaPaintRoller, FaRulerCombined } from "react-icons/fa";
import "./home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container7">
      <nav className="breadcrumb">
        <Link to="/work">Homepage</Link> / 
        <Link to="/work-2"> work</Link> / 
      </nav>
      <header className="header">
        <h1>OUR WORK</h1>
        <p>
          Our portfolio represents 20 years of construction experience backed by a passion for
          perfect client service, quality, and innovations in the construction industry.
        </p>
      </header>
      <div className="categories">
        <div className="category active">
          <FaHome className="icon" />
          <span>All Projects</span>
        </div>
        <div className="category">
          <img src="./img/ic-construction.png" alt="" />
          <span>Construction</span>
        </div>
        <div className="category">
          <FaDraftingCompass className="icon" />
          <span>Project Development</span>
        </div>
        <div className="category">
          <FaRulerCombined className="icon" />
          <span>Interior Design</span>
        </div>
        <div className="category">
          <FaPaintRoller className="icon" />
          <span>Repairs</span>
        </div>
      </div>
    </div>
  );
};

export default Home;