import React from 'react';
import "./home.css";

const Home = () => {
  return (
    <div className="home-container100">
      <div className="content100">
        <nav className="breadcrumb100">
          <span>Homepage</span> / <span className="active100">Contacts</span>
        </nav>
        <h1 className="title100">CONTACTS</h1>
        <p className="description100">
          Contact us for all your construction needs. We always welcome any questions and comments.
        </p>
      </div>
    </div>
  );
}

export default Home;
