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
    <div className="builder-container177">
      <h2 className="builder-title177">Similar projects</h2>

      <div className="projects-grid177">
        {projects.map((project, index) => (
          <div className="project-card177" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info177">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
              <button className="view-project177">VIEW PROJECT</button>
            </div>
          </div>
        ))}
      </div>

      <div className="portfolio-section177">
        <p>Explore all our works</p>
        <button className="view-portfolio177">VIEW PORTFOLIO</button>
      </div>
    </div>
  );
};

export default Builder;
