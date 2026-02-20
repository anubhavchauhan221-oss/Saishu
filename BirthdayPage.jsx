import React, { useState, useEffect } from "react";
import Moon from "./Moon";
import Counter from "./Counter";
import imgLeft from './img1.jpg'; // Replace with your file name
import imgRight from './img2.jpg'; // Replace with your file name
import bdayMusic from './sheetal_bday.mp3'; // Replace with your file name

const BirthdayPage = () => {
  const [opened, setOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [hoverTime, setHoverTime] = useState(0);
  // Logic for Secret Hold
  const [holdTimer, setHoldTimer] = useState(null);
  const [isHolding, setIsHolding] = useState(false);
const handleOpenJourney = () => {
    setOpened(true);
    const audio = new Audio(bdayMusic);
    audio.loop = true; // Optional: keeps the music playing
    audio.play().catch(e => console.log("Audio play blocked by browser:", e));
  };
  const startHold = () => {
    setIsHolding(true);
    const timer = setTimeout(() => {
      setShowEasterEgg(true);
      setIsHolding(false);
    }, 1500); 
    setHoldTimer(timer);
  };

  const stopHold = () => {
    setIsHolding(false);
    clearTimeout(holdTimer);
  };

  // Logic for Moon Clicks
  const [moonClicks, setMoonClicks] = useState(0);
  const handleMoonClick = () => {
    const newClicks = moonClicks + 1;
    setMoonClicks(newClicks);
    if (newClicks === 5) {
      setShowEasterEgg(true);
      setTimeout(() => {
        setShowEasterEgg(false);
        setMoonClicks(0);
      }, 8000);
    }
  };

  useEffect(() => {
    const birthDate = new Date("2006-02-13T00:00:00"); 
    const timer = setInterval(() => {
      const now = new Date();
      const difference = now - birthDate;
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
<div 
  className="secret-star"
  onMouseEnter={() => {
    const timer = setInterval(() => {
      setHoverTime(prev => {
        if (prev >= 100) {
          setShowEasterEgg(true);
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
    window.starTimer = timer;
  }}
  onMouseLeave={() => {
    clearInterval(window.starTimer);
    setHoverTime(0);
  }}
>
  <div className="star-core">✨</div>
  {/* Progress ring that shows up only when hovering */}
  <svg className="star-loader">
    <circle cx="20" cy="20" r="18" style={{ strokeDashoffset: 113 - (113 * hoverTime) / 100 }} />
  </svg>
</div>
  return (
    
    <div className={`birthday-container ${opened ? "opened" : ""}`}>
      <div className="ambient-background">
        <div className="nebula"></div>
        <div className="stars"></div>
        <div className="floating-elements">
          <span>❤️</span>
          <span>✨</span>
          <span>🫂</span>
          
          <span>💖</span>
          <span>🎉</span>
          <span>🧡</span>
          <span>💛</span>
          <span>🤍</span>
          <span>💚</span>
          <span>🩵</span>
          <span>💖</span>
          <span>🩷</span>
          <span>🎉</span>
          <span>🎈</span>
          <span>💝</span>
          

        </div>
      </div>
        <Moon />
      {!opened && (
  <div className="heart-section">
    <div 
      className={`heart-wrapper ${isHolding ? "charging" : ""}`} 
      onMouseDown={startHold} 
      onMouseUp={stopHold}
      onMouseLeave={stopHold}
      onTouchStart={startHold}
      onTouchEnd={stopHold}
      onClick={() => {
          setOpened(true);
          setTimeout(() => setShowLetter(true), 1200);
      }}
    >
      <div className="heart">❤️</div>
      <svg className="charge-ring">
        <circle cx="60" cy="60" r="55" />
      </svg>
    </div>
    <p className="click-text">Click Me akdu ji</p>
    
    {/* --- ADD THIS NEW NOTE HERE --- */}
    <p className="hold-hint">✨ Psst... Try a long press on the heart first! ✨</p>
  </div>
)}

     {opened && (
  <div className="main-content-fade-in">
    
    <div className="counter-with-memories">
      {/* Background Memory 1 - Top Left */}
      <div className="bg-polaroid p1">
  <div className="ribbon"></div>
  <div className="shimmer"></div> {/* Add this for the gloss effect */}
  <img src={imgLeft} alt="Memory" />
</div>

<div className="bg-polaroid p2">
  <div className="ribbon"></div>
  <div className="shimmer"></div>
  <img src={imgRight} alt="Memory" />
</div>

      {/* THE COUNTER (Stays in the middle) */}
      <Counter 
        days={timeLeft.days} 
        hours={timeLeft.hours} 
        minutes={timeLeft.minutes} 
        seconds={timeLeft.seconds} 
      />
    </div>

    <div className="message">
      <h1>Happy Birthday, Saisha 🎂</h1>
      {showLetter && (
        <div className="letter-card">
          <pre>{displayedText}</pre>
        </div>
      )}
    </div>
  </div>
)}
    </div>
  );
};

export default BirthdayPage;