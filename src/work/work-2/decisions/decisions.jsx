import React from "react";
import "./decisions.css";

const Decisions = () => {
  return (
    <div className="decisions-container">
      <div className="decisions-image">
        <img
          src="./img/image (10).jpg"
          alt="Construction Worker"
        />
      </div>

      <div className="decisions-content">
        <h2 className="decisions-title">Constructive decisions</h2>
        <ul className="decisions-list">
          <li className="decisions-item">
            <span className="decisions-item-icon">✔</span>
            Vitae ultrices ornare eu sed in est quisque duis id.
          </li>
          <li className="decisions-item">
            <span className="decisions-item-icon">✔</span>
            A fermentum in morbi pretium aliquam adipiscing donec tempus.
          </li>
          <li className="decisions-item">
            <span className="decisions-item-icon">✔</span>
            Mauris odio pellentesque commodo, diam.
          </li>
          <li className="decisions-item">
            <span className="decisions-item-icon">✔</span>
            Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.
          </li>
          <li className="decisions-item">
            <span className="decisions-item-icon">✔</span>
            At pharetra libero blandit risus, fringilla sed commodo diam.
          </li>
          <li className="decisions-item">
            <span className="decisions-item-icon">✔</span>
            Integer ultricies viverra ut enim viverra ut.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Decisions;
