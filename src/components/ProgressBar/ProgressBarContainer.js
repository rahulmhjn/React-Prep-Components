import React, { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import BackButton from '../../utilityComponents/BackButton/BackButton';

const ProgressBarContainer = () => {
  const [progress, setProgress] = useState([]);

  const add3 = () => {
    setProgress((prevState) => [...prevState, ...Array(3).fill(0)]);
  };

  const subtract3 = () => {
    setProgress((prevState) =>
      prevState.length >= 3 ? prevState.slice(0, -3) : []
    );
  };

  useEffect(() => {
    const time = setInterval(() => {
      // setProgress((prev) => prev + 1);
      setProgress((prevState) =>
        prevState.map((perc) => (perc < 100 ? perc + 1 : perc))
      );
    }, 100);

    return () => {
      clearInterval(time);
    };
  }, [progress]);

  return (
    <React.Fragment>
      <BackButton />
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', gap: '50px' }}>
          <button onClick={add3}>Add</button>
          <button onClick={subtract3}>Remove</button>
        </div>
        {progress.map((val, i) => (
          <div key={i}>
            <ProgressBar progress={val} color={'red'} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default ProgressBarContainer;
