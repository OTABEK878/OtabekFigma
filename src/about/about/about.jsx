import React from 'react';
import { FaThumbsUp, FaPaintRoller, FaHardHat } from "react-icons/fa";
import { MdSquareFoot } from "react-icons/md";
import "./about.css";

const About = () => {
  return (
    <div className="about-container91">
      <div className="stat91">
        <FaThumbsUp className="icon91" />
        <h2>60%</h2>
        <p>Clients on the recommendation of friends</p>
      </div>

      <div className="stat91">
        <FaPaintRoller className="icon91" />
        <h2>2400+</h2>
        <p>Apartments renovated</p>
      </div>

      <div className="stat91">
        <FaHardHat className="icon91" />
        <h2>670</h2>
        <p>Qualified specialists</p>
      </div>

      <div className="stat91">
        <MdSquareFoot className="icon91" />
        <h2>150000+ m²</h2>
        <p>Finishing work was carried out</p>
      </div>
    </div>
  );
};

export default About;
