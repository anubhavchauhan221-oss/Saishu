import React, { useState, useEffect } from 'react';
import './LandingCake.css';

const LandingCake = ({ onFinished }) => {
  const [step, setStep] = useState('countdown'); // countdown, cake, blown
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (step === 'countdown') {
      if (count > 0) {
        const timer = setTimeout(() => setCount(count - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        setStep('cake');
      }
    }
  }, [count, step]);

  const handleCakeClick = () => {
    setStep('blown');
    // Small delay to see the "smoke" before the main page loads
    setTimeout(() => {
      onFinished();
    }, 800);
  };

  return (
    <div className={`landing-container ${step === 'blown' ? 'fade-out' : ''}`}>
      {step === 'countdown' && (
        <div className="countdown-number" key={count}>
          {count}
        </div>
      )}

      {step === 'cake' || step === 'blown' ? (
        <div className="cake-wrapper" onClick={handleCakeClick}>
          <div className={`cake ${step === 'blown' ? 'is-blown' : ''}`}>
            <div className="candle">
              <div className="flame"></div>
              <div className="smoke"></div>
            </div>
            <div className="icing"></div>
            <div className="layer layer-top"></div>
            <div className="layer layer-bottom"></div>
          </div>
          <h2 className="wish-text">Make a wish and click the cake!</h2>
        </div>
      ) : null}
    </div>
  );
};

export default LandingCake;