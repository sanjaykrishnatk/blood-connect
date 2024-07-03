// src/components/Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ logo, title, count, month, year }) => {
  return (
    <div className="card">
      <img src={logo} alt={`${title} logo`} className="card-logo" />
      <div className="card-info">
        <h2 className="card-title">{title}</h2>
        <p className="card-count">Count: {count}</p>
        <p className="card-date">{month}, {year}</p>
      </div>
    </div>
  );
};

export default Card;
