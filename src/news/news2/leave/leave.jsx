import React, { useState } from 'react';
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

  return (
    <div className="leave-container77">
      <h2 className="leave-title77">Leave your comment</h2>
      <form className="leave-form77" onSubmit={handleSubmit}>
        <div className="input-group77">
          <div className="input-field77">
            <label>Name*</label>
            <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="input-field77">
            <label>Email*</label>
            <input type="email" name="email" placeholder="Your working email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>
        <div className="input-field77">
          <label>Your comment*</label>
          <textarea name="comment" placeholder="Type comment here" value={formData.comment} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-btn77">POST COMMENT</button>
      </form>
    </div>
  );
};

export default Leave;