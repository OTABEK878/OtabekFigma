import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./leave.css";

const Leave = () => {
  const [formData, setFormData] = useState({ name: "", email: "", comment: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Comment:", formData);
    setFormData({ name: "", email: "", comment: "" });
  };

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="leave-container77" data-aos="fade-up">
      <h2 className="leave-title77" data-aos="fade-up">Leave your comment</h2>
      <form className="leave-form77" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="200">
        <div className="input-group77">
          <div className="input-field77" data-aos="fade-up" data-aos-delay="300">
            <label>Name*</label>
            <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="input-field77" data-aos="fade-up" data-aos-delay="400">
            <label>Email*</label>
            <input type="email" name="email" placeholder="Your working email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="input-field77" data-aos="fade-up" data-aos-delay="500">
          <label>Your comment*</label>
          <textarea name="comment" placeholder="Type comment here" value={formData.comment} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-btn77" data-aos="fade-up" data-aos-delay="600">POST COMMENT</button>
      </form>
    </div>
  );
};

export default Leave;
