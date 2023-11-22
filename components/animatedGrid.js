import React from 'react';

function AnimatedGrid() {
  return (
    <div className="animated-grid">
      {[...Array(1000)].map((_, index) => (
        <div key={index} className="grid-item" />
      ))}
    </div>
  );
}

export default AnimatedGrid;
