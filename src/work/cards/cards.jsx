import React from 'react'
import './cards.css'

const projects = [
    {
      title: "Red Finger Building",
      category: "Business Centers",
      image: "./img/imagee8.png",
    },
    {
      title: "Cubes Building",
      category: "Business Centers",
      image: "./img/imagee7.png",
    },
    {
      title: "The Pencil Building",
      category: "Stores & Malls",
      image: "./img/imagee6.png",
    },
    {
        title: "Red Finger Building",
        category: "Business Centers",
        image: "./img/imagee8.png",
      },
      {
        title: "Cubes Building",
        category: "Business Centers",
        image: "./img/imagee7.png",
      },
      {
        title: "The Pencil Building",
        category: "Stores & Malls",
        image: "./img/imagee6.png",
      },
      {
        title: "Red Finger Building",
        category: "Business Centers",
        image: "./img/imagee8.png",
      },
      {
        title: "Cubes Building",
        category: "Business Centers",
        image: "./img/imagee7.png",
      },
      {
        title: "The Pencil Building",
        category: "Stores & Malls",
        image: "./img/imagee6.png",
      },
  ];

const Cards = () => {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '50px', marginTop: "100px" }} className="projects-grid">
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
    </div>
  )
}

export default Cards;
