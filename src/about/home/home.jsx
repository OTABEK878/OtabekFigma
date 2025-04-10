import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home-container34">
      <div className="abouttext" data-aos="zoom-in">
        <div className="breadcrumb34">
          <Link style={{ textDecoration: "none", color: "black" }} to="/about">
            Homepage
          </Link> /{" "}
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/about-2"
          >
            About Us
          </Link>{" "}
          /
        </div>

        <h1>ABOUT US</h1>

        <p className="description34">
          Createx Construction Bureau has been successfully operating in the USA
          construction market since 2000. We are proud to offer you quality
          construction and exemplary service.
        </p>
      </div>

      <div className="background34">
        <div className="skyscrapers34" data-aos="zoom-in"></div>
        <div className="clouds34" data-aos="zoom-in"></div>
      </div>
    </div>
  );
};

export default Home;
