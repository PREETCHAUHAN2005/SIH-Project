import React from 'react';
import { Link } from 'react-router-dom';

const MonasteryCard = ({ monastery }) => {
  return (
    <div className="monastery-card">
      <Link to={`/monastery/${monastery.id}`}>
        <img src={monastery.imageUrl} alt={monastery.name} />
      </Link>
      <div className="card-info">
        <h3>{monastery.name}</h3>
        <p className="card-location"><i className="fas fa-map-marker-alt"></i> {monastery.location}</p>
        <p className="card-description">{monastery.description.substring(0, 100)}...</p>
        <Link to={`/monastery/${monastery.id}`} className="btn btn-primary btn-small">Explore</Link>
      </div>
    </div>
  );
};

export default MonasteryCard;