import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./pricing.css";

const Pricing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="pricing-container">
      <h2 data-aos="fade-down">Pricing</h2>
      <p data-aos="fade-down" data-aos-delay="200">
        We offer you three categories of construction.
      </p>

      <div className="pricing-table" data-aos="fade-up" data-aos-delay="400">
        <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>BASIC <br /><span>$20 per m²</span></th>
              <th>STANDARD <br /><span>$30 per m²</span></th>
              <th>BUSINESS <br /><span>$40 per m²</span></th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Installation plan</td><td>✔</td><td>✔</td><td>✔</td></tr>
            <tr><td>Planning solutions (2-3 options)</td><td>✔</td><td>✔</td><td>✔</td></tr>
            <tr><td>Lighting plan</td><td>✔</td><td>✔</td><td>✔</td></tr>
            <tr><td>Flooring plan</td><td>✔</td><td>✔</td><td>✔</td></tr>
            <tr><td>Heating floor laying scheme</td><td></td><td>✔</td><td>✔</td></tr>
            <tr><td>Air conditioner zones layout</td><td></td><td>✔</td><td>✔</td></tr>
            <tr><td>3D visualization of all rooms</td><td>Simplified</td><td>✔</td><td>✔</td></tr>
            <tr><td>Visualization of each room (3-4 angles)</td><td></td><td></td><td>✔</td></tr>
            <tr><td>Terms</td><td>10 days</td><td>20 days</td><td>30 days</td></tr>
          </tbody>
        </table>
      </div>

      <div className="pricing-buttons">
        <button data-aos="zoom-in" data-aos-delay="600">Send Request</button>
        <button data-aos="zoom-in" data-aos-delay="800">Send Request</button>
        <button data-aos="zoom-in" data-aos-delay="1000">Send Request</button>
      </div>
    </div>
  );
};

export default Pricing;
