import React from 'react';
import "./img.css";

const Img = () => {
  return (
    <div className="img">
      <div className="img-text">
          <h1>We are Createx Construction Bureau</h1>
          <p>We are rightfully considered to be the best construction company in the USA.</p>
      </div>
      <div className="img-img">
          <img src="./img/video.png" alt="Construction Video" />
      </div>
    </div>
  );
}

export default Img;
