import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./builder.css";

const projects = [
  {
    title: "Red Finger Building",
    category: "Business Centers",
    image: "./services-img/imagee4.jpg",
  },
  {
    title: "Cubes Building",
    category: "Business Centers",
    image: "./services-img/imagee3.jpg",
  },
  {
    title: "The Pencil Building",
    category: "Stores & Malls",
    image: "./services-img/imagee5.jpg",
  },
];

const Builder = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div style={{ textAlign: "center" }} className="builder-container">
      <div className="builder-title" data-aos="fade-down">
        <h2>Related projects</h2>
        <img src="./img/idle.png" alt="" data-aos="fade-up" />
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={`${index * 200}`}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
              <button className="view-project">VIEW PROJECT</button>
            </div>
          </div>
        ))}
      </div>

      <div className="portfolio-section" data-aos="fade-up" data-aos-delay="500">
        <p>Explore all our works</p>
        <button className="view-portfolio">VIEW PORTFOLIO</button>
      </div>
    </div>
  );
};

export default Builder;
