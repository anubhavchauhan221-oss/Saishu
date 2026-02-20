import React, { useState, useRef } from 'react';
import LandingCake from './LandingCake';
import ShootingStarOverlay from './ShootingStarOverlay';
import BirthdayPage from './BirthdayPage';

// 1. Import your music file here (if it's in the src folder)
import birthdaySong from './sheetal_bday.mp3'; 

function App() {
  const [phase, setPhase] = useState('cake');
  const audioRef = useRef(null);

  const handleCakeFinished = () => {
    // 2. Play the music when the cake is clicked
    if (audioRef.current) {
      audioRef.current.play();
    }
    setPhase('star');
  };

  return (
    <div className="App">
      {/* 3. Use the imported song in the audio tag */}
      <audio ref={audioRef} loop>
        <source src={birthdaySong} type="audio/mpeg" />
      </audio>

      {phase === 'cake' && (
        <LandingCake onFinished={handleCakeFinished} />
      )}

      {phase === 'star' && (
        <ShootingStarOverlay onComplete={() => setPhase('galaxy')} />
      )}

      {phase === 'galaxy' && (
        <BirthdayPage />
      )}
    </div>
  );
}

export default App;