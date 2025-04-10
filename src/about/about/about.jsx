import React, { useEffect } from "react";
import { FaThumbsUp, FaPaintRoller, FaHardHat } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import "./about.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="about-container91">
      <div className="stat91" data-aos="fade-up">
        <FaThumbsUp className="icon91" />
        <h2>60%</h2>
        <p>Clients on the recommendation of friends</p>
      </div>

      <div className="stat91" data-aos="fade-up" data-aos-delay="200">
        <FaPaintRoller className="icon91" />
        <h2>2400+</h2>
        <p>Apartments renovated</p>
      </div>

      <div className="stat91" data-aos="fade-up" data-aos-delay="400">
        <FaHardHat className="icon91" />
        <h2>670</h2>
        <p>Qualified specialists</p>
      </div>

      <div className="stat91" data-aos="fade-up" data-aos-delay="600">
        <MdSquareFoot className="icon91" />
        <h2>150000+ m²</h2>
        <p>Finishing work was carried out</p>
      </div>
    </div>
  );
};

export default About;
