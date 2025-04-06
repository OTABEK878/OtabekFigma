import React from "react";
import "./questions.css";

const Questions = () => {
  return (
    <div className="questions-container">
      <h2 className="questions-title">
        Want to know more? Ask us a question:
      </h2>
      <div className="questions-form">
        <input style={{background: "#F4F5F6"}} type="text" placeholder="Your name" className="input-field" />
        <input style={{background: "#F4F5F6"}}  type="text" placeholder="Your phone" className="input-field" />
        <input style={{background: "#F4F5F6"}}  type="text" placeholder="Your message" className="input-field message-field" />
        <button className="send-button">SEND</button>
      </div>
    </div>
  );
};

export default Questions;
