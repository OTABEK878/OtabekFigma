import React, { useState } from "react";
import "./history.css";

const timelineData = [
  { date: "Present", image: "./img/image (13).jpg", text: "Bcelerisque dapibus pharetra nibh semper iaculis duis viverra porttitor in. Eu nec vitae, malesuada vitae egestas integer et morbi. Maecenas sed quis diam posuere malesuada magnis. Bcelerisque dapibus.  Eu nec vitae, " },
  { date: "March 2019", image: "./img/image (13).jpg", text: "Project details from 2019." },
  { date: "November 2018", image: "./img/image (13).jpg", text: "Project details from 2018." },
  { date: "July 2015", image: "./img/image (13).jpg", text: "Project details from 2015." },
  { date: "August 2010", image: "./img/image (13).jpg", text: "Project details from 2010." },
  { date: "February 2007", image: "./img/image (13).jpg", text: "Project details from 2007." },
  { date: "May 2004", image: "./img/image (13).jpg", text: "Project details from 2004." },
  { date: "October 2001", image: "./img/image (13).jpg", text: "Project details from 2001." },
  { date: "June 2000", image: "./img/image (13).jpg", text: "Project details from 2000." }
];

const History = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex < timelineData.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };
  return (
    <div className="historyy">
    <div className="history-head">
     <h2 className="history-title">Our History</h2>

<div className="history-buttons">
<button className="history-button" onClick={handlePrev} disabled={selectedIndex === 0}>
←
</button>
<button className="history-button next" onClick={handleNext} disabled={selectedIndex === timelineData.length - 1}>
→
</button>
</div>
        </div>
    <div className="history-container">
      <div className="history-sidebar">
        <ul className="history-list">
          {timelineData.map((item, index) => (
            <li style={{paddingTop: "10px"}}
              key={index}
              className={`history-item ${index === selectedIndex ? "active" : ""}`}
              onClick={() => setSelectedIndex(index)}
            >
              {index === selectedIndex ? "• " : "○ "} {item.date}
            </li>
          ))}
        </ul>
      </div>
      <div className="history-content">
        <img
          src={timelineData[selectedIndex].image}
          alt="Project"
          className="history-image"
        />
        <p style={{width: "700px", fontSize: "15px"}} className="history-text">{timelineData[selectedIndex].text}</p>  
      </div>
    </div>
    </div>
  );
};

export default History;
