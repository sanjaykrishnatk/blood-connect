// src/components/Card.jsx
import React from "react";
import "./Card.css";

const Card = ({ logo, title, count }) => {
  return (
    <div className="card">
      <img src={logo} alt={`${title} logo`} className="card-logo" />
      <div className="card-info d-flex flex-column align-items-center justify-content-center">
        <h2 className="card-title">{title}</h2>
        <p className="card-count fw-bold">{count}</p>
      </div>
    </div>
  );
};

export default Card;
