import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div style={{ paddingLeft: "150px" }} className="home-container">
      <div className="breadcrumb4" data-aos="fade-up">
        <a style={{ textDecoration: "none", color: "black" }} href="/services">Homepage</a> / 
        <a style={{ textDecoration: "none", color: "black" }} href="/services">Services</a> / 
        <span>Interior Design</span>
      </div>
      <div className="content">
        <h1 data-aos="fade-up">INTERIOR DESIGN</h1>
        <p data-aos="fade-up">
          Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. <br />
          Laoreet aenean vulputate elementum blandit amet.
        </p>
      </div>
    </div>
  );
};

export default Home;
