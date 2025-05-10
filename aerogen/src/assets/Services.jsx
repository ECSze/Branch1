import React from "react";
import "./Services.css";

function Services({ backgroundImage }) {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="hero-overlay3">
        <p className="hero-subtitle3">SERVICES</p>
        <h1 className="hero-title3">
          We create<br />
          flight<br />
          experiences<br />
          worldwide
        </h1>
        <hr className="divider3" />
        <p className="hero-description3">
          At Aerogen we provide aircraft leasing services 24 hours a day, 365 days a year and in all parts of the world to offer our clients an incomparable experience.
        </p>
      </div>
    </div>
  );
}

export default Services;
