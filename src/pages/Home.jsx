import React from 'react';
import { Link } from 'react-router-dom';
import MonasteryCard from './MonasteryCard';
import data from '../data/monasteries.json';

const Home = () => {
  const featuredMonasteries = data.monasteries.slice(0, 4);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Monastery360: Explore the Spiritual Heart of Sikkim</h1>
          <p>
            A digital platform showcasing the rich history, spiritual significance, and stunning beauty of Sikkim's monasteries.
          </p>
          <Link to="/monastery/rumtek" className="btn btn-primary">Start Your Exploration</Link>
        </div>
      </section>

      <section className="themed-section">
        <h2>Sacred Sites: Monasteries of Spiritual Significance</h2>
        <div className="monastery-grid">
          {featuredMonasteries.map(monastery => (
            <MonasteryCard key={monastery.id} monastery={monastery} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;