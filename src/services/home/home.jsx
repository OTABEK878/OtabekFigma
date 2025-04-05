import React from 'react';
import "./home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container1">
      <div className="breadcrumb">
        <Link to="/services">Homepage</Link> / 
        <Link to="/services-2"> Services</Link> / 
        <span> Interior Design</span>
      </div>
      <div className="content">
        <h1>SERVICES</h1>
        <p>
          If you are looking for a full-service construction company, look to
          Createx Construction Bureau. We are doing our best to be a partner
          for all of your construction needs.
        </p>
      </div>
    </div>
  );
};

export default Home;
