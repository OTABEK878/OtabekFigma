import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./benefits.css";

const Benefits = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const benefits = [
    {
      icon: "./services-img/Vector.png",
      title: "Fixed Terms & Cost",
      desc: "Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt."
    },
    {
      icon: "./services-img/Group.png",
      title: "Qualified Workers",
      desc: "Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea."
    },
    {
      icon: "./services-img/Groupp.png",
      title: "Supervision & Control",
      desc: "Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad."
    }
  ];

  return (
    <div className="benefits-container">
      <h2 data-aos="fade-down">Our benefits</h2>
      <p className="mission" data-aos="fade-up">
        Our mission is to set the highest standards for construction sphere.
      </p>
      <div className="benefits-list">
        {benefits.map((item, index) => (
          <React.Fragment key={index}>
            <div className="benefit-item" data-aos="zoom-in" data-aos-delay={`${index * 200}`}>
              <img src={item.icon} alt={item.title} className="benefit-icon" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            {index < benefits.length - 1 && (
              <div className="benefit-divider" data-aos="fade-left" data-aos-delay={`${index * 200 + 100}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <button className="benefit-button" data-aos="zoom-in-up" data-aos-delay="600">
        DISCUSS A PROJECT
      </button>
    </div>
  );
};

export default Benefits;
