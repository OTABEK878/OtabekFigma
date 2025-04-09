import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./builder.css";

const projects = [
  {
    title: "Red Finger Building",
    category: "Business Centers",
    image: "./img/imagee.jpg",
  },
  {
    title: "Cubes Building",
    category: "Business Centers",
    image: "./img/image1.png",
  },
  {
    title: "The Pencil Building",
    category: "Stores & Malls",
    image: "./img/image2.png",
  },
];

const Builder = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="builder-container" data-aos="fade-up">
      <h2 className="builder-title">
        Browse our selected projects <br /> and learn more about our work
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index} data-aos="zoom-in">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
              <button className="view-project">VIEW PROJECT</button>
            </div>
          </div>
        ))}
      </div>

      <div className="portfolio-section" data-aos="fade-up">
        <p>Explore all our works</p>
        <button className="view-portfolio">VIEW PORTFOLIO</button>
      </div>
    </div>
  );
};

export default Builder;
