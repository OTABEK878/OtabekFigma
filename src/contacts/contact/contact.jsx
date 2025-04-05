import React, { useState } from "react";
import "./contact.css";

const Contact150 = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    interest: "Interior Design",
    location: "New York",
    contactMethod: "Phone",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (

    <div className="contactt">
  <h2 style={{textAlign: "center"}} className="contact-title150">Contact us</h2>
  <p style={{textAlign: "center"}} className="contact-subtitle150">
    Please complete the form. Detailed information will help us to make a tuned offer.
  </p>
            <div className="contact-container150">
      <div className="contact-left150">
        <img src="./img/image (11).jpg" alt="Contact" className="contact-image150" />
      </div>

      <div className="contact-right150">

        <form onSubmit={handleSubmit} className="contact-form150">
          <div className="form-group150">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <select name="interest" value={formData.interest} onChange={handleChange}>
              <option>Interior Design</option>
              <option>Architecture</option>
              <option>Construction</option>
            </select>
          </div>

          <div className="form-group150">
            <input
              type="text"
              name="phone"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <select name="location" value={formData.location} onChange={handleChange}>
              <option>New York</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
            </select>
          </div>

          <div className="form-group150">
            <input
              type="email"
              name="email"
              placeholder="Your working email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="contact-method150">
            <label>Preferred contact method:</label>
            <div className="contact-method-inputs">
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="Phone"
                checked={formData.contactMethod === "Phone"}
                onChange={handleChange}
              />
              Phone
            </label>
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="Email"
                checked={formData.contactMethod === "Email"}
                onChange={handleChange}
              />
              Email
            </label>
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="Viber"
                checked={formData.contactMethod === "Viber"}
                onChange={handleChange}
              />
              Viber
            </label>
            </div>
          </div>
          </div>

          <div style={{marginTop: "10px"}} className="form-group150">
            <textarea style={{width: "450px"}}
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

 

          <div className="agreement150">
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
            />
            <label>I agree to receive communications from Createx Construction Bureau.</label>
          <button type="submit" className="submit-btn150">SEND REQUEST</button>

          </div>

        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact150;