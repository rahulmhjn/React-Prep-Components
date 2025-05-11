import React, { useState } from 'react';
import BackButton from '../../utilityComponents/BackButton/BackButton';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const onClick = (num) => {
    setRating(num);
  };

  const onMouseHover = (num) => {
    setHover(num);
  };

  const onMouseLeave = (num) => {
    setHover(rating);
  };

  return (
    <React.Fragment>
      <BackButton />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Star Rating</h1>
        <div>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className="star-button"
              onClick={() => onClick(num)}
              onMouseOver={() => onMouseHover(num)}
              onMouseLeave={() => onMouseLeave(num)}
            >
              <span className={`star ${num <= hover ? 'on' : 'off'}`}>
                &#x2605;
              </span>
            </button>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default StarRating;
