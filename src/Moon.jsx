import React from 'react';
import './styles.css'; // We'll put the styles here since you already have this file

const Moon = () => {
  return (
    <div className="moon-container">
      <div className="moon">
        <div className="texture"></div>
      </div>
      <div className="moon-glow"></div>
    </div>
  );
};

export default Moon;