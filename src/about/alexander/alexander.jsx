import React from "react";
import "./alexander.css";

const Alexander = () => {
  return (
    <div className="alexander-container">
      <div className="alexander-content">
        <img
          src="./img/image (12).jpg"
          alt="Courtney Alexander"
          className="alexander-image"
        />
        <div className="alexander-text">
          <span className="quote-mark">“</span>
          <p className="quote-text">
            Dapibus nec vitae ante mattis. Aliquam phasellus ac dui augue in.
            Sed aliquet in egestas hac at proin sed quam. Etiam aliquet sagittis
            non, massa cum pulvinar. Et in leo, tempus purus vestibulum ut
            blandit et mi. Odio massa purus vel praesent arcu enim elit felis
            viverra.
          </p>
          <p className="quote-text">
            Magna aliquam interdum mattis ipsum arcu. Elit odio elit viverra
            quis metus amet eleifend amet. Vet suspendisse faucibus tempor ipsum
            integer.
          </p>
          <h3 className="alexander-name">Courtney Alexander</h3>
          <p className="alexander-position">CEO - Createx Construction Bureau</p>
          <div className="signature">✍️</div>
        </div>
      </div>
    </div>
  );
};

export default Alexander;
