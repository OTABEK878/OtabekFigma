import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
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

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="contactt" data-aos="fade-up">
      <h2 style={{ textAlign: "center" }} className="contact-title150" data-aos="fade-up">
        Contact us
      </h2>
      <p style={{ textAlign: "center" }} className="contact-subtitle150" data-aos="fade-up" data-aos-delay="200">
        Please complete the form. Detailed information will help us to make a tuned offer.
      </p>
      <div className="contact-container150">
        <div className="contact-left150" data-aos="fade-right">
          <img src="./img/image (11).jpg" alt="Contact" className="contact-image150" />
        </div>

        <div className="contact-right150" data-aos="fade-left">
          <form onSubmit={handleSubmit} className="contact-form150">
            <div className="form-group150">
              <input
                style={{ background: "#F4F5F6" }}
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <select
                style={{ background: "#F4F5F6" }}
                name="interest"
                value={formData.interest}
                onChange={handleChange}
              >
                <option>Interior Design</option>
                <option>Architecture</option>
                <option>Construction</option>
              </select>
            </div>

            <div className="form-group150">
              <input
                style={{ background: "#F4F5F6" }}
                type="text"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <select
                style={{ background: "#F4F5F6" }}
                name="location"
                value={formData.location}
                onChange={handleChange}
              >
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
              </select>
            </div>

            <div className="form-group150">
              <input
                style={{ background: "#F4F5F6" }}
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
                      style={{ background: "#F4F5F6" }}
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
                      style={{ background: "#F4F5F6" }}
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
                      style={{ background: "#F4F5F6" }}
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

            <div style={{ marginTop: "10px" }} className="form-group150">
              <textarea
                style={{ width: "450px", background: "#F4F5F6" }}
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="agreement150">
              <input
                style={{ background: "#F4F5F6" }}
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
              />
              <label>I agree to receive communications from Createx Construction Bureau.</label>
              <button type="submit" className="submit-btn150">
                SEND REQUEST
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact150;
