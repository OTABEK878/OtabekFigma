import React, { useEffect } from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./team.css";

const teamMembers = [
  { name: "Courtney Alexander", role: "CEO, Co-Founder", image: "./img/imagee9.jpg" },
  { name: "Calvin Fox", role: "CTO, Co-Founder", image: "./img/imagee9.jpg" },
  { name: "Johnny Lane", role: "Commercial Manager", image: "./img/imagee9.jpg" },
  { name: "Diane Mccoy", role: "Director of Human Resources", image: "./img/imagee9.jpg", social: true },
  { name: "Judith Warren", role: "Lead Accountant", image: "./img/imagee9.jpg" },
  { name: "Floyd Simmons", role: "Financial Director", image: "./img/imagee9.jpg" },
  { name: "Serenity Edwards", role: "Director of Marketing", image: "./img/imagee9.jpg" },
  { name: "Shawn Edwards", role: "Tech Lead", image: "./img/imagee9.jpg" },
];

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="team-container">
      <h2 className="team-title" data-aos="fade-up">Our team</h2>
      <p className="team-subtitle" data-aos="fade-up" data-aos-delay="200">
        People are at the heart of Createx Construction Bureau
      </p>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-member"
            data-aos="zoom-in"
            data-aos-delay={index * 100} // Har biri navbat bilan chiqishi uchun
          >
            <img src={member.image} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            {member.social && (
              <div className="social-icons" data-aos="fade" data-aos-delay="400">
                <FaLinkedin />
                <FaTwitter />
                <FaFacebook />
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="join-text" data-aos="fade-up" data-aos-delay="300">
        Become a part of the best team in the construction market of the USA.{" "}
        <a href="/careers" className="available-positions">Available Positions</a>
      </p>
    </div>
  );
};

export default Team;
