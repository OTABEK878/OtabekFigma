import React, { useState } from "react";
import "./Locations.css";
import { FaMapMarkerAlt, FaClock, FaPaperclip } from "react-icons/fa";

const jobListings = [
  { location: "New York", type: "Full Time", title: "Heavy Equipment Operator" },
  { location: "San Francisco", type: "Full Time", title: "Financial Compliance Analyst" },
  { location: "New Jersey", type: "Full Time", title: "Project Manager - Buildings" },
  { location: "New York", type: "Part Time", title: "Environment Specialist" },
  { location: "New York", type: "Full Time", title: "Accountant" },
];

const Locations = () => {
  const [isSubscribeOpen, setSubscribeOpen] = useState(false);
  const [isCvOpen, setCvOpen] = useState(false);

  return (
    <div className="container">
      <div className="job-list">
        {jobListings.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-info">
              <p className="job-meta">
                <FaMapMarkerAlt className="icon" /> {job.location} | <FaClock className="icon" /> {job.type}
              </p>
              <h3 className="job-title">{job.title}</h3>
            </div>
            <button className="apply-button">APPLY NOW</button>
          </div>
        ))}
      </div>
      <div className="sidebar">
        <h3 className="sidebar-title">Didn't find what you were looking for?</h3>
        <p className="sidebar-text">
          Send your CV or subscribe to our newsletter to receive information about new vacancies.
        </p>
        <div className="sidebar-buttons">
          <button className="subscribe-button32" onClick={() => setSubscribeOpen(true)}>SUBSCRIBE</button>
          <button className="send-cv-button" onClick={() => setCvOpen(true)}>SEND CV</button>
        </div>
      </div>

      {isSubscribeOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={() => setSubscribeOpen(false)}>✖</button>
            <h2>Subscribe to our newsletter</h2>
            <form>
              <label>Name*</label>
              <input type="text" placeholder="Your name" />
              <label>Email*</label>
              <input type="email" placeholder="Your working email" />
              <button type="submit" className="send-button">SEND</button>
            </form>
          </div>
        </div>
      )}

      {isCvOpen && (
        <div className="modal-overlay">
          <div className="modal cv-modal">
            <button className="close-button" onClick={() => setCvOpen(false)}>✖</button>
            <h2>Send your CV</h2>
            <form>
              <label>Name*</label>
              <input type="text" placeholder="Your name" />
              <label>Location*</label>
              <select>
                <option>Choose your location</option>
                <option>New York</option>
                <option>San Francisco</option>
                <option>New Jersey</option>
              </select>
              <label>Phone*</label>
              <input type="tel" placeholder="Your phone number" />
              <label>Email*</label>
              <input type="email" placeholder="Your working email" />
              <label>Covering Letter</label>
              <textarea placeholder="Your covering letter"></textarea>
              <label className="file-upload">
                <FaPaperclip className="icon" /> Attach your CV*
                <input type="file" hidden />
              </label>
              <button type="submit" className="send-button">SEND</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Locations;
