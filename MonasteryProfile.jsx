import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/monasteries.json';
import nearbyData from '../data/nearby-attractions.json';

const MonasteryProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('about');
  const monastery = data.monasteries.find(m => m.id === id);

  if (!monastery) {
    return <div>Monastery not found.</div>;
  }

  const nearbyAttractions = nearbyData.attractions[monastery.id] || [];

  return (
    <div className="monastery-profile-page">
      <div className="profile-hero" style={{ backgroundImage: `url(${monastery.imageUrl})` }}>
        <div className="profile-hero-content">
          <h1>{monastery.name}</h1>
          <p>{monastery.location}</p>
        </div>
      </div>

      <div className="profile-content">
        <div className="tabs-container">
          <button className={`tab-btn ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>About</button>
          <button className={`tab-btn ${activeTab === 'nearby' ? 'active' : ''}`} onClick={() => setActiveTab('nearby')}>Things to Do Nearby</button>
          <button className={`tab-btn ${activeTab === 'logistics' ? 'active' : ''}`} onClick={() => setActiveTab('logistics')}>How to Get There</button>
        </div>

        <div className="tab-content">
          {activeTab === 'about' && (
            <div className="tab-section">
              <h3>History and Significance</h3>
              <p>{monastery.longDescription}</p>
              <div className="image-gallery">
                <img src="/assets/images/gallery/rumtek-interior.jpg" alt="Gallery Image 1" />
                <img src="/assets/images/gallery/rumtek-gardens.jpg" alt="Gallery Image 2" />
              </div>
            </div>
          )}
          {activeTab === 'nearby' && (
            <div className="tab-section">
              <h3>Nearby Attractions</h3>
              <ul>
                {nearbyAttractions.map((item, index) => (
                  <li key={index}>
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                    <p className="distance">Distance: {item.distance}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {activeTab === 'logistics' && (
            <div className="tab-section">
              <h3>Travel & Logistics</h3>
              <p>{monastery.travelInfo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonasteryProfile;