import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./questions.css";

const Questions = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="questions-container" data-aos="zoom-in">
      <h2 className="questions-title">
        Want to know more? Ask us a question:
      </h2>
      <div className="questions-form">
        <input style={{background: "#F4F5F6"}} type="text" placeholder="Your name" className="input-field" />
        <input style={{background: "#F4F5F6"}} type="text" placeholder="Your phone" className="input-field" />
        <input style={{background: "#F4F5F6"}} type="text" placeholder="Your message" className="input-field message-field" />
        <button className="send-button">SEND</button>
      </div>
    </div>
  );
};

export default Questions;
