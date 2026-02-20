import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const HeartTree = () => {
  const heartLeaves = useMemo(() => {
    const hearts = [];
    const count = 100; // Increase this for a fuller heart!

    for (let i = 0; i < count; i++) {
      // Math to fill the heart shape randomly
      const t = Math.random() * 2 * Math.PI;
      const r = Math.sqrt(Math.random()); // Random radius for filling
      
      // Parametric heart equations
      let x = 16 * Math.pow(Math.sin(t), 3);
      let y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      
      // Apply the random radius to fill the inside
      hearts.push({
        x: x * r * 8, 
        y: y * r * 8,
        size: Math.random() * (20 - 10) + 10, // Random cute sizes
        delay: Math.random() * 1.5 // Staggered blooming
      });
    }
    return hearts;
  }, []);

  return (
    <div className="tree-container">
      {/* Smooth growing trunk */}
      <motion.div 
        className="trunk-illustrative"
        initial={{ height: 0 }}
        animate={{ height: '200px' }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <div className="canopy-filled">
        {heartLeaves.map((heart, i) => (
          <motion.div
            key={i}
            className="leaf-heart"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: 1.2 + heart.delay, // Starts after trunk
              type: "spring", 
              stiffness: 80 
            }}
            style={{
              left: `calc(50% + ${heart.x}px)`,
              top: `calc(20% + ${heart.y}px)`,
              fontSize: `${heart.size}px`,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeartTree;