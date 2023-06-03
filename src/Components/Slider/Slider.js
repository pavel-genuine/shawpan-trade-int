import React, { useState } from 'react';
// import './slider.scss';


export const Slider = ({ size, onItem }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="slider" style={{top: `calc(50% - ${size * 30}px)`}}>
      {
        [...Array(size)].map((_, index) => {
          return (
            <div
              key={index}
              className={`slider__item ${index === active ? 'slider__item-active' : ''}`}
              onClick={() => {
                setActive(index);
                onItem(index);
              }}
            >
            </div>
          )
        })
      }
    </div>
  )
}


export default Slider