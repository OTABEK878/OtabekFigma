import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreed) {
      alert("Siz Createx Construction Bureau'dan xabar olishga rozilik bildirishingiz kerak!");
      return;
    }

    const response = await fetch("http://localhost:5000/send-sms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: `Ism: ${formData.name}\nTelefon: ${formData.phone}\nEmail: ${formData.email}\nXabar: ${formData.message}`,
      }),
    });

    const result = await response.json();
    if (result.success) {
      alert("SMS muvaffaqiyatli yuborildi!");
      setFormData({ name: "", phone: "", email: "", message: "", agreed: false });
    } else {
      alert("Xatolik yuz berdi: " + result.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-bg"></div>

      <div className="contact-form">
        <h2>A quick way to discuss details</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div>
              <label>Name*</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
            </div>
            <div>
              <label>Phone*</label>
              <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your phone number" required />
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your working email" />
            </div>
            <div>
              <label>Message*</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" required></textarea>
            </div>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" id="agree" name="agreed" checked={formData.agreed} onChange={handleChange} />
            <label htmlFor="agree">
              I agree to receive communications from Createx Construction Bureau.
            </label>
          </div>

          <div className="btn">
            <button type="submit" className="submit-btn">SEND REQUEST</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
