import React from "react";
import { FaBuilding, FaCity, FaHome, FaStore, FaHouseUser } from "react-icons/fa";
import "./partner.css";

const partners = [
  { icon: <FaBuilding />, name: "InDepth Consulting" },
  { icon: <FaCity />, name: "HIGHER FIT" },
  { icon: <FaHome />, name: "SENTINAL CONSULTING" },
  { icon: <FaStore />, name: "HAPPY HOME" },
  { icon: <FaHouseUser />, name: "ForSale" },
  { icon: <FaHouseUser className="colored-icon" />, name: "Sunset Realty" },
];

const Partner = () => {
  return (
    <div className="testimonials-container">
      <h2 className="partners-title">Supported by 12+ partners</h2>
      <div className="partners-logos">
        {partners.map((partner, index) => (
          <div style={{fontSize: "12px"}} key={index} className="partner">
            {partner.icon}
            <p>{partner.name}</p>
          </div>
        ))}
      </div>

      <div className="clients-section">
        <div className="client-feedback">
          <div className="feedback-text">
            <h1 className="clients-title">What our clients are saying</h1>
            <img style={{marginTop: "40px"}} src="./img/profile-image.png" alt="Client" className="client-img" />
            <p className="client-comment">
              Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum
              consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco.
            </p>
            <div className="client-top">
            <strong className="client-name">Shawn Edwards</strong>
            <p>Position, Company name</p>
            </div>
          </div>
          <img style={{position: "relative", top: "100px"}} src="./img/image (2).jpg" alt="Handshake" className="feedback-img" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
