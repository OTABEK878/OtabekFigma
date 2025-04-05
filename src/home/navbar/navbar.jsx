import React, { useState } from "react";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <h1 className="logo">
            <Link to="/"><img src="./img/logo.svg" alt="Logo" /></Link>
          </h1>
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </div>

        <div className="navbar-right">
          <div className="contact-info">
            <div className="contact-item">
              <FiPhone className="icon" />
              <div>
                <small>Call us</small>
                <p>(405) 555-0128</p>
              </div>
            </div>
            <div className="contact-item">
              <BsChatDots className="icon" />
              <div>
                <small>Talk to us</small>
                <p>hello@createx.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
