import React, { useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="home-container5">
      <div className="overlay">
        <div className="content4" data-aos="zoom-in">
          <h1 className="title">
            CREATE<span className="highlight">X</span>
          </h1>
          <h2 className="subtitle4">CONSTRUCTION</h2>
          <p style={{ color: "white" }} className="description">
            Cras ultrices leo vitae non viverra...
          </p>
          <div className="buttons">
            <button className="learn-btn" data-aos="zoom-in">LEARN MORE ABOUT US</button>
            <button className="request-btn" data-aos="zoom-in">SUBMIT REQUEST</button>
          </div>
        </div>
        <div style={{ marginRight: "450px" }} className="pagination" data-aos="zoom-in">
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
