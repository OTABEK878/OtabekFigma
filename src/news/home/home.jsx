import React from "react";
import { Link } from 'react-router-dom';
import "./home.css";

const Home = () => {
  return (
    <div className="home-container50">
      <div className="home-content50">
      <nav className="breadcrumb">
        <Link to="/news">Homepage</Link> / 
        <Link to="/news-2"> News</Link> / 
      </nav>
        <h1 className="home-title50">NEWS</h1>
        <p className="home-subtitle50">
          Stay tuned with our news, expert tips and articles.
        </p>
      </div>
    </div>
  );
};

export default Home;
