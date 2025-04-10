import React, { useEffect } from 'react';
import { FaBuilding, FaCity, FaHome, FaStore, FaHouseUser } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './partners.css';

const partners = [
  { icon: <FaBuilding />, name: "InDepth Consulting" },
  { icon: <FaCity />, name: "HIGHER FIT" },
  { icon: <FaHome />, name: "SENTINAL CONSULTING" },
  { icon: <FaStore />, name: "HAPPY HOME" },
  { icon: <FaHouseUser />, name: "ForSale" },
  { icon: <FaHouseUser className="colored-icon" />, name: "Sunset Realty" },
];

const Partners = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }} className="partners-title" data-aos="fade-up">
        Our clients
      </h2>
      <div className="partners-logos">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="partner"
            data-aos="zoom-in"
            data-aos-delay={index * 200}
          >
            {partner.icon}
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
