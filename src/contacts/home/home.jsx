import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./home.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="home-container100" data-aos="fade-up">
      <div className="content100">
        <nav className="breadcrumb100" data-aos="fade-up">
          <span>Homepage</span> / <span className="active100">Contacts</span>
        </nav>
        <h1 className="title100" data-aos="fade-up">CONTACTS</h1>
        <p className="description100" data-aos="fade-up" data-aos-delay="200">
          Contact us for all your construction needs. We always welcome any questions and comments.
        </p>
      </div>
    </div>
  );
}

export default Home;
