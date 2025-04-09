import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./value.css";

const Value = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="value-container">
      <h2 className="value-title" data-aos="zoom-in">Our core values</h2>
      <p className="value-subtitle" data-aos="zoom-in">
        Our mission is to set the highest standards for construction sphere.
      </p>

      <div className="value-items">
        <div className="value-item" data-aos="zoom-in">
          <img src="./img/ic-like.svg" alt="" />
          <h3>Quality</h3>
          <p>
            Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit
            nostrud aliquip sunt.
          </p>
        </div>

        <div className="value-item" data-aos="zoom-in">
          <img src="./img/ic-hand.svg" alt="" />
          <h3>Safety</h3>
          <p>
            Anim reprehenderit sint voluptate exercitation adipisicing laborum 
            adipiscing. Minim empor est ea.
          </p>
        </div>

        <div className="value-item" data-aos="zoom-in">
          <img src="./img/ic-slippers.svg" alt="" />
          <h3>Comfort</h3>
          <p>
            Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate 
            ullamco proident ea ad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
