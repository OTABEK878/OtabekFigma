import React from 'react'
import "./client.css"

const Client = () => {
  return (
    <div>
        <div style={{background: "#F4F5F6", paddingTop: "1px"}} className="clients-section">
        <div className="client-feedback">
          <div className="feedback-text">
            <h1 className="clients-title">What our clients are saying</h1>
            <img style={{marginTop: "40px"}} src="./img/profile-image.png" alt="Client" className="client-img" />
            <p className="client-comment">
              Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum
              consequat minim laboris cillum laboris voluptate minim proident exercitation ullamco.
            </p>
            <div className="client-top">
            <strong className="client-name">Shawn Edwards</strong>
            <p>Position, Company name</p>
            </div>
          </div>
          <img style={{position: "relative", top: "50px"}} src="./img/image (2).jpg" alt="Handshake" className="feedback-img" />
        </div>
      </div>
    </div>
  )
}

export default Client;