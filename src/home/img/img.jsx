import React from "react";
import "./img.css";

const Img = () => {
  return (
    <div className="img">
      <div className="img-text">
        <h1>We are Createx Construction Bureau</h1>
        <p>We are rightfully considered to be the best construction company in the USA.</p>
      </div>
      <div className="img-video">
  <iframe 
    className="video-content"
    src="https://www.youtube.com/embed/do7aB3efxiY"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

    </div>
  );
};

export default Img;
