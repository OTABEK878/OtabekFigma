import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./cards.css";

const cardData = [
  {
    title: "How to Build Climate Change-Resilient Infrastructure",
    category: "Industry News",
    date: "June 24, 2020",
    comments: 4,
    image: "./img/imagee9.png",
  },
  {
    title: "How Construction Can Help Itself",
    category: "Innovation",
    date: "June 12, 2020",
    comments: 0,
    image: "./img/imagee9.png",
  },
  {
    title: "The Difference Between a Digger and an Excavator",
    category: "Expert Tips",
    date: "May 16, 2020",
    comments: 0,
    image: "./img/imagee9.png",
  },
  {
    title: "Building Construction Hand Tools",
    category: "Expert Tips",
    date: "February 25, 2020",
    comments: 1,
    image: "./img/imagee9.png",
  },
  {
    title: "Top 10 Construction Trends",
    category: "Industry News",
    date: "January 14, 2020",
    comments: 0,
    image: "./img/imagee9.png",
  },
  {
    title: "Types of Flooring Materials",
    category: "Company News",
    date: "December 7, 2019",
    comments: 0,
    image: "./img/imagee9.png",
  },
];

const Cards = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="container80">
      <h1 className="title80" data-aos="fade-up">Categories</h1>
      <div className="nav80" data-aos="fade-up" data-aos-delay="200">
        <button className="active80">All News</button>
        <button>Company News</button>
        <button>Innovation</button>
        <button>Industry News</button>
        <button>Expert Tips</button>
        <button>Marketing</button>
      </div>
      <div className="cards80">
        {cardData.map((card, index) => (
          <div key={index} className="card80" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
            <img src={card.image} alt={card.title} />
            <div className="card-content80">
              <h2>{card.title}</h2>
              <p className="meta80">
                {card.category} | {card.date} | {card.comments} comments
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination80" data-aos="fade-up" data-aos-delay="500">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>→</span>
      </div>
    </div>
  );
};

export default Cards;
