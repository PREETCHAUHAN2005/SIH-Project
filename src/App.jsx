import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MonasteryProfile from './pages/MonasteryProfile';
import CulturalCalendar from './pages/CulturalCalendar';
import DigitalArchives from './pages/DigitalArchives';
// import InteractiveMap from './pages/InteractiveMap';
// import BestTimeToVisit from './pages/BestTimeToVisit';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/monastery/:id" element={<MonasteryProfile />} />
            <Route path="/calendar" element={<CulturalCalendar />} />
            <Route path="/archives" element={<DigitalArchives />} />
            {/* <Route path="/map" element={<InteractiveMap />} />
            <Route path="/best-time-to-visit" element={<BestTimeToVisit />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;