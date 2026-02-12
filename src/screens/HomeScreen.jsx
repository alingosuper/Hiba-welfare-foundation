import React from 'react';
import MapView from '../components/MapView';
import '../styles/GlobalStyles.css';

const HomeScreen = () => {
  return (
    <div className="app-container">
      {/* ٹاپ ہیڈر اور پروفائل آئیکن */}
      <div className="header">
        <h1>AlinGo</h1>
        <div className="profile-icon">👤</div>
      </div>

      {/* لیف لیٹ میپ سیکشن */}
      <div className="map-wrapper">
        <MapView />
      </div>

      {/* فیچر کارڈز */}
      <div className="features-grid">
        <div className="feature-card neon-border">
          <span>☀️ 28°C</span>
          <p>Weather</p>
        </div>
        <div className="feature-card neon-border">
          <span>🏏 LIVE</span>
          <p>Sports</p>
        </div>
      </div>

      {/* مرکزی ایکشن بٹن */}
      <button className="ride-btn">START RIDE</button>

      {/* باٹم نیویگیشن */}
      <div className="bottom-nav">
        <button className="nav-item active">🏠 Home</button>
        <button className="nav-item">🚗 Rides</button>
        <button className="nav-item">🏆 Sports</button>
        <button className="nav-item">⚙️ Profile</button>
      </div>
    </div>
  );
};

export default HomeScreen;
