import React from 'react';
import './team.css';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const teamMembers = [
  { name: 'Courtney Alexander', role: 'CEO, Co-Founder', image: './img/imagee9.jpg' },
  { name: 'Calvin Fox', role: 'CTO, Co-Founder', image: './img/imagee9.jpg' },
  { name: 'Johnny Lane', role: 'Commercial Manager', image: './img/imagee9.jpg' },
  { name: 'Diane Mccoy', role: 'Director of Human Resources', image: './img/imagee9.jpg', social: true },
  { name: 'Judith Warren', role: 'Lead Accountant', image: './img/imagee9.jpg' },
  { name: 'Floyd Simmons', role: 'Financial Director', image: './img/imagee9.jpg' },
  { name: 'Serenity Edwards', role: 'Director of Marketing', image: './img/imagee9.jpg' },
  { name: 'Shawn Edwards', role: 'Tech Lead', image: './img/imagee9.jpg' },
];

const Team = () => {
  return (
    <div className="team-container">
      <h2 className="team-title">Our team</h2>
      <p className="team-subtitle">People are at the heart of Createx Construction Bureau</p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="team-photo" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            {member.social && (
              <div className="social-icons">
                <FaLinkedin />
                <FaTwitter />
                <FaFacebook />
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="join-text">
        Become a part of the best team in the construction market of the USA.{' '}
        <a href="/careers" className="available-positions">Available Positions</a>
      </p>
    </div>
  );
};

export default Team;
