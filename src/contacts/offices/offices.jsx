import React from "react";
import { FaWhatsapp, FaFacebookF, FaTwitter, FaYoutube, FaFacebookMessenger } from "react-icons/fa";
import "./offices.css";

const Offices = () => {
  return (
    <div className="offices-container">
      <h2 className="offices-title">Our offices</h2>
      <p className="offices-subtitle">
        Give us a call, send us a note or visit our office. We can’t wait to hear from you!
      </p>

      <div className="offices-list">
        <div className="office">
          <h3>New York, USA</h3>
          <p style={{paddingTop: "20px"}}>8502 Preston Rd. Inglewood, New York 98380</p>
          <a href="#" className="map-link">See on the map</a>
          <p style={{paddingTop: "20px"}}><strong>Call:</strong> (405) 555-0128</p>
          <p><strong>Email:</strong> hello@createx.com</p>
          <p><strong>Schedule:</strong> Mon - Fri 9:00 - 18:00</p>
        </div>

        <div className="office">
          <h3>New Jersey, USA</h3>
          <p style={{paddingTop: "20px"}}>2464 Royal Ln. Mesa, New Jersey 45463</p>
          <a href="#" className="map-link">See on the map</a>
          <p style={{paddingTop: "20px"}}><strong>Call:</strong> (808) 555-0111</p>
          <p><strong>Email:</strong> hello@createx.com</p>
          <p><strong>Schedule:</strong> Mon - Fri 9:00 - 18:00</p>
        </div>

        <div className="office">
          <h3>San Francisco, USA</h3>
          <p style={{paddingTop: "20px"}}>8502 Preston Rd. Inglewood, San Francisco 98380</p>
          <a href="#" className="map-link">See on the map</a>
          <p style={{paddingTop: "20px"}}><strong>Call:</strong> (505) 555-0125</p>
          <p><strong>Email:</strong> hello@createx.com</p>
          <p><strong>Schedule:</strong> Mon - Fri 10:00 - 19:00</p>
        </div>
      </div>

      <div className="find-us7">
        <h3>Find us at</h3>
        <div className="social-icons7">
          <a style={{color: "black"}} href="#"><FaWhatsapp className="icon whatsapp7" /></a>
          <a href="#"><FaFacebookMessenger className="icon messenger7" /></a>
          <a href="#"><FaFacebookF className="icon facebook7" /></a>
          <a href="#"><FaTwitter className="icon twitter7" /></a>
          <a href="#"><FaYoutube className="icon youtube7" /></a>
        </div>
      </div>
    </div>
  );
};

export default Offices;
