import React, { useEffect } from 'react';
import './ShootingStar.css';

const ShootingStarOverlay = ({ onComplete }) => {
  useEffect(() => {
    // The animation takes about 4 seconds total
    const timer = setTimeout(() => {
      onComplete();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="star-overlay">
      <div className="shooting-star-container">
        <div className="the-star"></div>
      </div>
      
      <div className="wish-message-container">
        <h1 className="wish-text-main">Heres ur shooting star...</h1>
        <p className="wish-text-sub">may ur wish come true ✨</p>
      </div>

      {/* Flash effect when the star passes */}
      <div className="flash-overlay"></div>
    </div>
  );
};

export default ShootingStarOverlay;