import React from 'react';
import './styles.css';

const Counter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="galaxy-counter-container">
      <h2 className="galaxy-counter-title">✨ THE WORLD JUST GOT LUCKIER SINCE ✨</h2>
      
      <div className="galaxy-counter-grid">
        {/* Days */}
        <div className="galaxy-card">
          <div className="galaxy-number-box">
            <span className="galaxy-number" key={days}>{days}</span>
          </div>
          <span className="galaxy-label">Days</span>
        </div>
        
        {/* Hours */}
        <div className="galaxy-card">
          <div className="galaxy-number-box">
            <span className="galaxy-number" key={hours}>{hours}</span>
          </div>
          <span className="galaxy-label">Hours</span>
        </div>
        
        {/* Minutes */}
        <div className="galaxy-card">
          <div className="galaxy-number-box">
            <span className="galaxy-number" key={minutes}>{minutes}</span>
          </div>
          <span className="galaxy-label">Mins</span>
        </div>
        
        {/* Seconds - with a heartbeat pulse */}
        <div className="galaxy-card pulse-card">
          <div className="galaxy-number-box">
            <span className="galaxy-number" key={seconds}>{seconds}</span>
          </div>
          <span className="galaxy-label">Secs</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;