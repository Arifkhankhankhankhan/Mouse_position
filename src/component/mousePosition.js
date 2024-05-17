// src/MousePosition.js
import React, { useState } from 'react';


const MousePosition = () => {
  const [xpos, setXpos] = useState(0);
  const [ypos, setYpos] = useState(0);

  const handleMouseMove = (event) => {
    setXpos(event.clientX);
    setYpos(event.clientY);
  };

  return (
    <div className="container" onMouseMove={handleMouseMove}>
      <div className="xpos">
        <h4 className="xpos-header">Mouse X Position:</h4>
        <span id="xpos-value">{xpos}</span>
      </div>
      <div className="ypos">
        <h4 className="ypos-header">Mouse Y Position:</h4>
        <span id="ypos-value">{ypos}</span>
      </div>
    </div>
  );
};

export default MousePosition;
