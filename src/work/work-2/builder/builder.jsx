import React from "react";
import "./builder.css";

const projects = [
  {
    title: "Red Finger Building",
    category: "Business Centers",
    image: "./img/imagee5.png",
  },
  {
    title: "Cubes Building",
    category: "Business Centers",
    image: "./img/imagee4.png",
  },
  {
    title: "The Pencil Building",
    category: "Stores & Malls",
    image: "./img/imagee3.png",
  },
];

const Builder = () => {
  return (
    <div className="builder-container">
      <h2 className="builder-title">
      Similar projects
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
              <button className="view-project">VIEW PROJECT</button>
            </div>
          </div>
        ))}
      </div>

      <div className="portfolio-section">
        <p>Explore all our works</p>
        <button className="view-portfolio">VIEW PORTFOLIO</button>
      </div>
    </div>
  );
};

export default Builder;
