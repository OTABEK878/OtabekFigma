import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <div className="home-container5">
      <div className="overlay">
        <div style={{marginRight: "400px"}} className="content4">
          <h1 className="title">
            CREATE<span className="highlight">X</span>
          </h1>
          <h2 className="subtitle4">CONSTRUCTION</h2>
          <p style={{color: "white"}} className="description">
            Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat,
            dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget
            pellentesque integer ipsum elementum felis.
          </p>
          <div className="buttons">
            <button className="learn-btn">LEARN MORE ABOUT US</button>
            <button className="request-btn">SUBMIT REQUEST</button>
          </div>
        </div>
        <div className="navigation">
          <button className="nav-btn left">
            <FaArrowLeft />
          </button>
          <button className="nav-btn right">
            <FaArrowRight />
          </button>
        </div>
        <div style={{marginRight: "450px"}} className="pagination">
          <span className="active">01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
        </div>
      </div>
    </div>
  );
};

export default Home;