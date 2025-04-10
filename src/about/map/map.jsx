import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./map.css";

const Map = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="map-container">
      <h2 className="map-title" data-aos="fade-up">We work worldwide</h2>
      <iframe
        title="World Map"
        className="map-frame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31540362.126055203!2d-124.7844072274842!3d37.42200729836902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDI1JzE5LjIiTiAxMjTCsDI4JzI4LjAiVw!5e0!3m2!1sen!2sus!4v1617042922954!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        data-aos="zoom-in" // Zoom animatsiya qo‘shildi
      ></iframe>
    </div>
  );
};

export default Map;
