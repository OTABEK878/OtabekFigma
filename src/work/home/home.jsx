import React, { useEffect } from "react";
import { FaHome, FaDraftingCompass, FaPaintRoller, FaRulerCombined } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import "./home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="home-container72">
      <nav className="breadcrumb" data-aos="fade-down">
        <Link to="/work">Homepage</Link> / 
        <Link to="/work-2"> work</Link> / 
      </nav>
      <header className="header">
        <h1 style={{ fontSize: "72px" }} data-aos="fade-down">OUR WORK</h1>
        <p style={{ width: "600px", fontSize: "20px", color: "#787A80" }} data-aos="fade-up">
          Our portfolio represents 20 years of construction experience backed by a passion for
          perfect client service, quality, and innovations in the construction industry.
        </p>
      </header>
      <div style={{ position: "relative", top: "100px" }} className="categories">
        {[
          { icon: <FaHome className="icon" />, text: "All Projects" },
          { img: "./img/ic-construction.png", text: "Construction" },
          { icon: <FaDraftingCompass className="icon" />, text: "Project Development" },
          { icon: <FaRulerCombined className="icon" />, text: "Interior Design" },
          { icon: <FaPaintRoller className="icon" />, text: "Repairs" },
        ].map((item, index) => (
          <div key={index} className="category" data-aos="zoom-in" data-aos-delay={index * 200}>
            {item.icon ? item.icon : <img src={item.img} alt="" />}
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
