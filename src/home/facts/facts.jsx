import React from 'react';
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./facts.css";

const factsData = [
  { value: 98, text: "Totally satisfied clients", color: "#ff9800" },
  { value: 20, text: "Years of experience", color: "#e91e63" },
  { value: 9452, text: "Working hours spent", color: "#2196f3" },
  { value: 100, text: "Succeeded projects", color: "#00bfa5" },
];

const Facts = () => {
  return (
    <div className="facts-container">
      <h2 className="facts-title">Some facts and figures</h2>
      <div className="facts-grid">
        {factsData.map((fact, index) => (
          <div key={index} className="fact-card">
            <div className="fact-circle">
              <CircularProgressbar
                value={(fact.value / (fact.value > 100 ? 10000 : 100)) * 100}
                text={`${fact.value}`}
                styles={buildStyles({
                  textColor: "#222",
                  pathColor: fact.color,
                  trailColor: "#eee",
                  strokeLinecap: "round",
                })}
              />
            </div>
            <p className="fact-text">{fact.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facts;