import React from 'react';

const BackgroundGrid = () => (
  <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
    style={{
      backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
      backgroundSize: '40px 40px'
    }}>
  </div>
);

export default BackgroundGrid;
