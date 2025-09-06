import React from 'react';
import calendarData from '../data/events.json';

const CulturalCalendar = () => {
  return (
    <div className="calendar-page">
      <h2>Cultural Calendar: Festivals and Events</h2>
      <p>Stay updated on the vibrant festivals and monastic rituals of Sikkim.</p>
      <div className="calendar-list">
        {calendarData.festivals.map(festival => (
          <div key={festival.name} className="festival-card">
            <h3>{festival.name}</h3>
            <p className="festival-date">Month: {festival.month}</p>
            <p>{festival.significance}</p>
            <p><strong>Associated Monasteries:</strong> {festival.monasteries.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturalCalendar;