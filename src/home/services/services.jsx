import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./services.css";

const services = [
  {
    title: "Construction",
    icon: "./img/ic-construction.png",
    hoverImage: "./img/image.jpg",
  },
  {
    title: "Project Development",
    icon: "./img/ic-plan.svg",
    hoverImage: "./img/video.png",
  },
  {
    title: "Interior Design",
    icon: "./img/ic-painting.svg",
    hoverImage: "./img/bg-image.jpg",
  },
  {
    title: "Repairs",
    icon: "./img/ic-painting.svg",
    hoverImage: "./img/bg-image.jpg",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="services-container5" data-aos="fade-up">
      <h2 className="services-title5">Our Services</h2>
      <p className="services-subtitle5">
        Createx Construction Bureau is a construction giant with a full range of construction services.
      </p>

      <div className="services-grid5">
        {services.map((service, index) => (
          <div className="service-card5" key={index} data-aos="zoom-in">
            <div className="hover-image5" style={{ backgroundImage: `url(${service.hoverImage})` }}></div>
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
      <div className="btns5" data-aos="fade-up">
        <p className="learn-more5">Learn more about our services</p>
        <button className="view-services5">VIEW SERVICES</button>
      </div>
    </div>
  );
};

export default Services;
