import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./news.css";

const News = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="news-container" data-aos="fade-up">
      <h1 style={{ fontSize: "45px" }} className="news-title">
        Recent news
      </h1>
      <div className="news-grid">
        <div className="news-main" data-aos="zoom-in">
          <img src="./img/imageee.jpg" alt="Solar Panel Installation" className="news-image" />
          <div className="news-content">
            <h3>How to Build Climate Change-Resilient Infrastructure</h3>
            <p className="news-meta">Industry News | June 24, 2020 | 4 comments</p>
            <p className="news-summary">
              Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla...
            </p>
          </div>
        </div>
        <div className="news-side">
          <div className="news-item" data-aos="fade-right">
            <img src="./img/imagee1.jpg" alt="Construction Worker" className="news-thumb" />
            <div className="news-info">
              <h4 className="news-highlight">How Construction Can Help Itself</h4>
              <p className="news-meta">Innovation | June 12, 2020 | No comments</p>
            </div>
          </div>
          <div className="news-item" data-aos="fade-left">
            <img src="./img/imagee2.jpg" alt="Flooring Work" className="news-thumb" />
            <div className="news-info">
              <h4>Types of Flooring Materials</h4>
              <p className="news-meta">Company News | December 1, 2019 | No comments</p>
            </div>
          </div>
        </div>
      </div>
      <div className="news-footer" data-aos="fade-up">
        <h1>Explore all our news posts</h1>
        <button className="news-button">VIEW ALL NEWS</button>
      </div>
    </div>
  );
};

export default News;
