import React from 'react'
import { FaBuilding, FaCity, FaHome, FaStore, FaHouseUser } from "react-icons/fa";

const partners = [
  { icon: <FaBuilding />, name: "InDepth Consulting" },
  { icon: <FaCity />, name: "HIGHER FIT" },
  { icon: <FaHome />, name: "SENTINAL CONSULTING" },
  { icon: <FaStore />, name: "HAPPY HOME" },
  { icon: <FaHouseUser />, name: "ForSale" },
  { icon: <FaHouseUser className="colored-icon" />, name: "Sunset Realty" },
];

const Partners = () => {
  return (
    <div>
    <h2 style={{textAlign: "center"}} className="partners-title">Supported by 12+ partners</h2>
      <div className="partners-logos">
        {partners.map((partner, index) => (
          <div key={index} className="partner">
            {partner.icon}
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partners;