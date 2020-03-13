import React from 'react';
import './image.css';

function Image() {
  return (
    <div className="Image">
        <img src={ require('./imagefcb.png') } />
    </div>
  );
}

export default Image;