import React from "react";
import "./value.css";

const Value = () => {
  return (
    <div style={{background: "white", maxWidth: "100%"}} className="value-container">
      <h2 className="value-title">Employee benefits</h2>
      <p className="value-subtitle">
      There’s always room for talent.
      </p>

      <div className="value-items">
        <div className="value-item">
            <img src="./img/Vectorr.png" alt="" />
          <h3>Training</h3>
          <p>
          Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.
          </p>
        </div>

        <div className="value-item">
            <img src="./img/Vector.png" alt="" />
          <h3>Professional Growth</h3>
          <p>
            Anim reprehenderit sint voluptate exercitation adipisicing laborum 
            adipiscing. Minim empor est ea.
          </p>
        </div>

        <div className="value-item">
            <img src="./img/Group.png" alt="" />
          <h3>Growing Salary</h3>
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
