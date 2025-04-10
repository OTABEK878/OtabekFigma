import React, { useEffect } from "react";
import { FaBuilding, FaCity, FaHome, FaStore, FaHouseUser, FaHospital, FaChartPie, FaHeart, FaLandmark, FaDumbbell } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./partner.css";

const partners = [
  { icon: <FaBuilding />, name: "InDepth Consulting" },
  { icon: <FaCity />, name: "HIGHER FIT" },
  { icon: <FaHome />, name: "SENTINAL CONSULTING" },
  { icon: <FaStore />, name: "HAPPY HOME" },
  { icon: <FaHouseUser />, name: "ForSale" },
  { icon: <FaHouseUser className="colored-icon" />, name: "Sunset Realty" },
  { icon: <FaHospital />, name: "Atlantis Health" },
  { icon: <FaChartPie />, name: "Del Mar Strategy" },
  { icon: <FaHeart />, name: "CompleteHealth" },
  { icon: <FaLandmark />, name: "NATIONAL" },
  { icon: <FaDumbbell />, name: "ULTIMATE GYM" },
  { icon: <FaBuilding />, name: "United Strategy" },
];

const Partner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ background: "white" }} className="testimonials-container" data-aos="fade-up">
      <h2 className="partners-title" data-aos="fade-down">Supported by 12+ partners</h2>
      <div className="partners-logos">
        {partners.map((partner, index) => (
          <div key={index} className="partner" data-aos="zoom-in">
            {partner.icon}
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
