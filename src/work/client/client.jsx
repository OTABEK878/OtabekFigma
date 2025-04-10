import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./client.css";

const Client = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div>
      <div style={{background: "#F4F5F6", paddingTop: "1px"}} className="clients-section">
        <div className="client-feedback">
          <div className="feedback-text" data-aos="fade-up">
            <h1 className="clients-title" data-aos="fade-up">What our clients are saying</h1>
            <img
              style={{ marginTop: "40px" }}
              src="./img/profile-image.png"
              alt="Client"
              className="client-img"
              data-aos="zoom-in"
            />
            <p className="client-comment" data-aos="fade-up">
              Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum
              consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco.
            </p>
            <div className="client-top" data-aos="fade-up">
              <strong className="client-name">Shawn Edwards</strong>
              <p>Position, Company name</p>
            </div>
          </div>
          <img
            style={{ position: "relative", top: "50px" }}
            src="./img/image (2).jpg"
            alt="Handshake"
            className="feedback-img"
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Client;
