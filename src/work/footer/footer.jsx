import React, { useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaFacebookMessenger } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./footer.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left" data-aos="zoom-in">
          <div className="footer-logo">
            <h2 style={{color: "White"}} className="logo">CREATE<span className="highlight">X</span></h2>
            <div className="footer-icons">
              <FaFacebookMessenger className="icon" />
              <FaFacebookF className="icon" />
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
            </div>
          </div>
          <p style={{color: "#787A80"}} className="footer-description">
            Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service. Our mission is to set the highest standards for the construction sphere.
          </p>
        </div>

        <div className="footer-right" data-aos="zoom-in">
          <h3>Let's stay in touch</h3>
          <div className="subscribe-box">
            <input type="email" placeholder="Your email address" />
            <button className="subscribe-button">SUBSCRIBE</button>
          </div>
          <p style={{color: "#787A80"}} className="subscribe-text">
            *Subscribe to our newsletter to receive communications and early updates from Createx Construction Bureau.
          </p>
        </div>
      </div>
      
      <div className="footer-bottom" data-aos="zoom-in">
        <div className="footer-info">
          <h4>HEAD OFFICE</h4>
          <p>Address: <label style={{color: "#787A80"}}>8502 Preston Rd. Inglewood, New York</label></p>
          <p>Call: <label style={{color: "#787A80"}}>ello@createx.com</label></p>
          <p>Email <label style={{color: "#787A80"}}>ello@createx.com</label></p>
        </div>
        <div className="footer-link">
          <div className="footer-links">
            <h4>WHO WE ARE</h4>
            <p>About Us</p>
            <p>Available Positions</p>
            <p>Contacts</p>
          </div>
          <div className="footer-links">
            <h4>OUR EXPERIENCE</h4>
            <p>Services</p>
            <p>Work</p>
            <p>News</p>
          </div>
        </div>
      </div>
      
      <div className="footer-end" data-aos="zoom-in">
        <p>© All rights reserved. Made with ❤️ by Createx Studio</p>
        <div className="go-top-wrapper">
          <p className="go-top-text">GO TO TOP</p>
          <button className="to-top-btn">↑</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
