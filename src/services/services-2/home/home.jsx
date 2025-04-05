import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="breadcrumb4">
        <a style={{textDecoration: "none", color: "black"}} href="/services">Homepage</a> / <a style={{textDecoration: "none", color: "black"}} href="/services">Services</a> / <span>Interior Design</span>
      </div>
      <div className="content">
        <h1>INTERIOR DESIGN</h1>
        <p>
          Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. <br />
          Laoreet aenean vulputate elementum blandit amet.
        </p>
      </div>
    </div>
  );
};

export default Home;
